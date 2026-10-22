#!/usr/bin/env python3
import argparse
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter


def flatten_to_page_background(image: Image.Image) -> Image.Image:
    if image.mode in {"RGBA", "LA"}:
        rgba = image.convert("RGBA")
        background = Image.new("RGBA", rgba.size, (9, 10, 9, 255))
        background.alpha_composite(rgba)
        return background.convert("RGB")
    return image.convert("RGB")


def optimize_pdf(source: Path, destination: Path, scale: float, quality: int) -> None:
    reader = PdfReader(source)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)

    replaced = 0
    for page in writer.pages:
        for embedded in list(page.images):
            if embedded.name.lower().endswith((".jpg", ".jpeg")):
                continue

            image = embedded.image.copy()
            target_size = (
                max(1, round(image.width * scale)),
                max(1, round(image.height * scale)),
            )
            if target_size != image.size:
                image = image.resize(target_size, Image.Resampling.LANCZOS)

            embedded.replace(
                flatten_to_page_background(image),
                quality=quality,
                optimize=True,
            )
            replaced += 1

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as output:
        writer.write(output)

    print(f"replaced_images={replaced}")
    print(f"output={destination}")
    print(f"bytes={destination.stat().st_size}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Downsample PNG-style PDF images while preserving vector text and links."
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--scale", type=float, default=0.6)
    parser.add_argument("--quality", type=int, default=84)
    args = parser.parse_args()

    if not 0 < args.scale <= 1:
        parser.error("--scale must be greater than 0 and at most 1")
    if not 1 <= args.quality <= 100:
        parser.error("--quality must be between 1 and 100")

    optimize_pdf(args.source, args.destination, args.scale, args.quality)


if __name__ == "__main__":
    main()
