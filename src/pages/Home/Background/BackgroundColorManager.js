import { getParallax, screen_count, screen_size } from "..";

const backgroundColors = [{
  sky: [255, 134, 177, 254, 254, 226], // 2 4.2
  ground: [196, 56, 93], // 1
  starLight: [255, 183, 232], // 4
  starDark: [255, 203, 177], // 3
  lineLight: [252, 191, 172, 252, 191, 172], // 3
  lineDark: [255, 123, 160, 255, 123, 160], //1
  cloudWhite: [254, 255, 236, 253, 254, 220], // 5
  cloudPink: [255, 147, 171, 255, 188, 173], // 2 3.8
  cloudIvory: [253, 203, 171, 254, 210, 183] // 3.8
}, {
  sky: [75, 134, 180, 203, 233, 255], // 2 4.2
  ground: [42, 77, 105], // 1
  starLight: [173, 203, 227], // 4
  starDark: [99, 172, 229], // 3
  lineLight: [99, 172, 229, 99, 172, 229], // 3
  lineDark: [42, 77, 105, 42, 77, 105], //1
  cloudWhite: [231, 239, 246, 231, 239, 246], // 5
  cloudPink: [75, 134, 180, 163, 193, 217], // 2 3.8
  cloudIvory: [183, 213, 237, 163, 193, 217] // 3.8
}, {
  sky: [108, 91, 123, 255, 134, 148], // 2 4.2
  ground: [53, 92, 125], // 1
  starLight: [246, 114, 128], // 4
  starDark: [192, 108, 132], // 3
  lineLight: [192, 108, 132, 192, 108, 132], // 3
  lineDark: [53, 92, 125, 53, 92, 125], //1
  cloudWhite: [231, 239, 246, 231, 239, 246], // 5
  cloudPink: [108, 91, 123, 226, 94, 108], // 2 3.8
  cloudIvory: [226, 94, 108, 226, 94, 108] // 3.8
}, {
  sky: [84, 121, 128, 177, 244, 193], // 2 4.2
  ground: [89, 79, 79], // 1
  starLight: [157, 224, 173], // 4
  starDark: [69, 173, 168], // 3
  lineLight: [69, 173, 168, 69, 173, 168], // 3
  lineDark: [89, 79, 79, 89, 79, 79], //1
  cloudWhite: [229, 252, 194, 229, 252, 194], // 5
  cloudPink: [84, 121, 128, 137, 204, 153], // 2 3.8
  cloudIvory: [137, 204, 153, 137, 204, 153] // 3.8
}, {
  sky: [57, 37, 21, 122, 88, 47], // 2 4.2
  ground: [221, 215, 206], // 1
  starLight: [210, 210, 210], // 4
  starDark: [220, 220, 220], // 3
  lineLight: [230, 230, 230, 230, 230, 230], // 3
  lineDark: [214, 165, 91, 214, 165, 91], //1
  cloudWhite: [22, 91, 51, 20, 107, 58], // 5
  cloudPink: [136, 43, 34, 182, 64, 64], // 2 3.8
  cloudIvory: [214, 165, 91, 197, 183, 123], // 3.8
}, {
  sky: [15, 15, 15, 50, 50, 50], // 2 4.2
  ground: [80, 80, 80], // 1
  starLight: [231, 231, 231], // 4
  starDark: [194, 194, 194], // 3
  lineLight: [194, 194, 194, 194, 194, 194], // 3
  lineDark: [120, 120, 120, 120, 120, 120], //1
  cloudWhite: [190, 190, 190, 190, 190, 190], // 5
  cloudPink: [150, 150, 150, 216, 216, 216], // 2 3.8
  cloudIvory: [206, 206, 206, 206, 206, 206] // 3.8
}]

const colorsMaker = (colors) => {
  const result = {}

  result.sky = `linear-gradient(to bottom, rgb(${colors.sky[0]}, ${colors.sky[1]}, ${colors.sky[2]}) 35%, rgb(${colors.sky[3]}, ${colors.sky[4]}, ${colors.sky[5]}) 60%)`
  result.ground = `rgb(${colors.ground[0]}, ${colors.ground[1]}, ${colors.ground[2]})`
  result.starLight = `rgb(${colors.starLight[0]}, ${colors.starLight[1]}, ${colors.starLight[2]})`
  result.starDark = `rgb(${colors.starDark[0]}, ${colors.starDark[1]}, ${colors.starDark[2]})`
  result.lineLight = `linear-gradient(90deg, transparent 0.1%, rgb(${colors.lineLight[0]}, ${colors.lineLight[1]}, ${colors.lineLight[2]}) 3%, rgb(${colors.lineLight[3]}, ${colors.lineLight[4]}, ${colors.lineLight[5]}) 97%, transparent 99.9%)`
  result.lineDark = `linear-gradient(90deg, transparent 0.1%, rgb(${colors.lineDark[0]}, ${colors.lineDark[1]}, ${colors.lineDark[2]}) 3%, rgb(${colors.lineDark[3]}, ${colors.lineDark[4]}, ${colors.lineDark[5]}) 97%, transparent 99.9%)`
  result.cloudWhite = `linear-gradient(rgb(${colors.cloudWhite[0]}, ${colors.cloudWhite[1]}, ${colors.cloudWhite[2]}), rgb(${colors.cloudWhite[3]}, ${colors.cloudWhite[4]}, ${colors.cloudWhite[5]}) 50%)`
  result.cloudPink = `linear-gradient(rgb(${colors.cloudPink[0]}, ${colors.cloudPink[1]}, ${colors.cloudPink[2]}), rgb(${colors.cloudPink[3]}, ${colors.cloudPink[4]}, ${colors.cloudPink[5]}) 50%)`
  result.cloudIvory = `linear-gradient(rgb(${colors.cloudIvory[0]}, ${colors.cloudIvory[1]}, ${colors.cloudIvory[2]}), rgb(${colors.cloudIvory[3]}, ${colors.cloudIvory[4]}, ${colors.cloudIvory[5]}) 50%)`

  return result
}

const transition = (scrollX) => {
  const theme = Math.floor(scrollX / screen_size)
  const progressX = scrollX % screen_size
  const result = {}

  if (progressX === 0) {
    return colorsMaker(backgroundColors[theme])
  }

  if (theme === screen_count - 1) {
    return colorsMaker(backgroundColors[screen_count - 1])
  }

  for (const [key, value] of Object.entries(backgroundColors[theme])) {
    const tmpList = value.map((item, index) => {
      return Math.floor(getParallax(progressX, [0, screen_size], [item, backgroundColors[theme + 1][key][index]]))
    })

    result[key] = tmpList
  }

  return colorsMaker(result)
}

export { backgroundColors, colorsMaker, transition }