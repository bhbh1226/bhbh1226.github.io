import '../styles/Background.scss'

const Background = () => {
  const starMaker = (type) => {
    const left = Math.random() * 100 + '%'
    const top = Math.random() * 40 + '%'

    switch (type) {
      case 'light': {
        const size = Math.ceil(Math.random() * 30) + 1 + 'px'

        return (
          <div className="star light" style={{ width: size, height: size, fontSize: size, left, top }} />
        )
      }
      case 'dark': {
        const size = Math.ceil(Math.random() * 14) + 1 + 'px'

        return (
          <div className="star dark" style={{ width: size, height: size, left, top }} />
        )
      }
    }
  }

  const lineMaker = (type) => {
    switch (type) {
      case 'light': {
        const height = Math.random() * (15 - 10) + 10 + 'px'
        const width = Math.random() * (800 - 400) + 400 + 'px'
        const left = Math.random() * 100 + '%'
        const top = Math.random() * 30 + '%'

        return (
          <div className="line light" style={{ width, height, left, top }} />
        )
      }
      case 'dark': {
        const height = Math.random() * (40 - 28) + 10 + 'px'
        const width = Math.random() * (800 - 400) + 400 + 'px'
        const left = Math.random() * 100 + '%'
        const top = Math.random() * (70 - 30) + 30 + '%'

        return (
          <div className="line dark" style={{ width, height, left, top }} />
        )
      }
    }
  }

  const arrayMaker = (length) => {
    return Array.apply(null, Array(length))
  }

  return (
    <div id="background">
      <div className="sky">
        <div className="sun" />
        <div className="stars">
          <div className="star light" />
          {
            arrayMaker(10).map((item) => {
              return starMaker('light')
            })
          }
          {
            arrayMaker(20).map((item) => {
              return starMaker('dark')
            })
          }
        </div>
        <div className="lines">
          {
            arrayMaker(3).map((item) => {
              return lineMaker('light')
            })
          }
          {
            arrayMaker(5).map((item) => {
              return lineMaker('dark')
            })
          }
        </div>
        <div className="clouds">
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud ivory" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud pink" />
          <div className="cloud white" />
        </div>
      </div>
      <div className="ground">
        <div className="seas">
          <div className="sea" />
          <div className="sea" />
          <div className="sea" />
          <div className="sea" />
        </div>
      </div>
    </div>
  )
}

export default Background