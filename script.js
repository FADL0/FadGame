let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 850
/* Textures */
function createImage(ImageSrc) {
  let image = new Image()
  image.src = ImageSrc
  return image
}

let Bush1 = new Image()
Bush1.src = './img/Bush1.png'


/* Character Animations */
let tempAnim = 400
function idle() {

  Frame1 = "./img/Character/idle/I2.png"
  Frame2 = "./img/Character/idle/I3.png"
  Frame3 = "./img/Character/idle/I4.png"
  Frame4 = "./img/Character/idle/I1.png"

}
function RunRight() {
  Frame1 = "./img/Character/Run/R2.png"
  Frame2 = "./img/Character/Run/R3.png"
  Frame3 = "./img/Character/Run/R4.png"
  Frame4 = "./img/Character/Run/R1.png"
}
function RunLeft() {
  Frame1 = "./img/Character/Run/L2.png"
  Frame2 = "./img/Character/Run/L3.png"
  Frame3 = "./img/Character/Run/L4.png"
  Frame4 = "./img/Character/Run/L1.png"
}
/* Idle */
let Player = new Image()
Player.src = './img/Character/idle/I1.png'
let Frame1 = "./img/Character/idle/I2.png"
let Frame2 = "./img/Character/idle/I3.png"
let Frame3 = "./img/Character/idle/I4.png"
let Frame4 = "./img/Character/idle/I1.png"


/* Run Right */

function PlayerAnimation() {
  setTimeout(() => {
    Player.src = Frame1
  }, 100);
  setTimeout(() => {
    Player.src = Frame2
  }, 200);
  setTimeout(() => {
    Player.src = Frame3
  }, 300);
  setTimeout(() => {
    Player.src = Frame4
  }, 400);
}
setInterval(function () { PlayerAnimation() }, tempAnim);
let gravity = 0.5
/* Map Class */
class MotherofSquare {
  static width = 63
  static height = 63

  constructor({ position, image, width, height }) {
    this.position = position
    this.width = width
    this.height = height
    this.image = image

  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

/* Decorations */
class Decorations {
  static width = 63
  static height = 64
  constructor({ position, image }) {
    this.position = position
    this.width = image.width
    this.height = image.height
    this.image = image

  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

/* Background */
class Background {
  static width = 63
  static height = 64
  constructor({ position, image }) {
    this.position = position
    this.width = image.width
    this.height = image.height
    this.image = image

  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}
/* Initialize */
function initialize() {
  Backgrounda = []
  Squares = []
  Decors = []
  playa = new player({
    position: {
      x: MotherofSquare.width * 2,
      y: MotherofSquare.height * 2

    },
    velocity: {
      x: 0,
      y: 0
    },

  })
  /* Loop MapCreation */

  map.forEach((row, i) => {
    row.forEach((tag, j) => {
      switch (tag) {
        case 'G':
          Squares.push(new MotherofSquare({
            position: {
              x: MotherofSquare.width * j,
              y: MotherofSquare.height * i

            },
            image: createImage('./img/Ground_Block.png'),
            width: 63,
            height: 63
          }))
          break;
        case 'H':
          Squares.push(new MotherofSquare({
            position: {
              x: MotherofSquare.width * j,
              y: MotherofSquare.height * i

            },
            image: createImage('./img/block.png'),
            width: 63,
            height: 63
          }))
          break;
        case 'Z':
          Squares.push(new MotherofSquare({
            position: {
              x: MotherofSquare.width * j,
              y: MotherofSquare.height * i
            },
            image: createImage('./img/block.png'),
            width: 63,
            height: 63
          }))
          break;
        case 'J':
          Decors.push(new Decorations({
            position: {
              x: Decorations.width * j,
              y: Decorations.height * i
            },
            image: createImage('./img/Bush1.png'),
          }))
          break;
        case 'R':
          Backgrounda.push(new Background({
            position: {
              x: 2592 * j,
              y: Background.height * i
            },
            image: createImage('./img/Background.png'),
          }))
          break;
        case 'L':
          Backgrounda.push(new Background({
            position: {
              x: 2592 * j,
              y: Background.height * i
            },
            image: createImage('./img/Background2.png'),
          }))
          break;

      }
    })
  })
}


/* Player Class */
class player {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.radius = 45
    this.image = Player
    this.width = 78
    this.height = 106
    this.speed = 10

  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)

  }
  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if (this.position.y + this.height <= canvas.height) {
      playa.velocity.y += gravity
    } else {
      initialize();
    }


  }
}
/* Enemy Class */

class Enemy {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.width = 100
    this.height = 100
  }
  draw() {
    c.drawImage
  }
}
/* Map */
let map = [
  ['R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '-', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '', '', '.', '.', '', '', '', '', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '', '.', '.', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', 'J', '.', '.', '.', '.', '.', '.', 'J', 'J', '.', '.', '.', '.', '.', '.', '.', 'J', 'J', '.', '.', '.', '.', '.', '.', 'J', '.', '.', '.', 'J', '-'],
  ['', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', '.', '.', '.', '.', '.', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', '.'],
  ['', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', '.', '.', '.', '.', '.', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', ''],
  ['', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '', '', '']
]
/* Insides of HTML */
let Backgrounda = []
let Squares = []
let Decors = []
let playa = new player({
  position: {
    x: MotherofSquare.width * 2,
    y: MotherofSquare.height * 2

  },
  velocity: {
    x: 0,
    y: 0
  },

})

initialize()
/* Keys */
const keys = {
  Left: {
    pressed: false
  },
  Right: {
    pressed: false
  }

}
let jumped = false
let ScrollOffSet = 0
/* Animation Call for (Update And Clear Funcs) */
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = "whiteSmoke"
  c.fillRect(0, 0, canvas.width, canvas.height)

  Backgrounda.forEach((Background) => {
    Background.draw()
  })
  Decors.forEach((Decorations) => {
    Decorations.draw()
  })
  Squares.forEach((MotherofSquare) => {
    MotherofSquare.draw()
    if (playa.position.y + playa.height + playa.velocity.y >= MotherofSquare.position.y &&
      playa.position.y + playa.height <= MotherofSquare.position.y &&
      playa.position.x + playa.width >= MotherofSquare.position.x &&
      playa.position.x + playa.velocity.x <= MotherofSquare.position.x + MotherofSquare.width

    ) {
      playa.velocity.y = 0
      jumped = true
    }
  })


  if (keys.Right.pressed && playa.position.x < 800) {
    playa.velocity.x = playa.speed
    RunRight()
  } else if (keys.Left.pressed && playa.position.x > 100) {
    playa.velocity.x = -playa.speed
    RunLeft()
  } else {
    playa.velocity.x = 0
    idle()
    Squares.forEach((MotherofSquare) => {


      if (keys.Right.pressed) {
        MotherofSquare.position.x -= playa.speed
        RunRight()
      } else if (keys.Left.pressed) {
        MotherofSquare.position.x += playa.speed
        RunLeft()

      }
    })
    Decors.forEach((MotherofSquare) => {


      if (keys.Right.pressed) {
        MotherofSquare.position.x -= playa.speed
        RunRight()
      } else if (keys.Left.pressed) {
        MotherofSquare.position.x += playa.speed
        RunLeft()

      }
    })
    Backgrounda.forEach((MotherofSquare) => {


      if (keys.Right.pressed) {
        MotherofSquare.position.x -= playa.speed * .20
        RunRight()
      } else if (keys.Left.pressed) {
        MotherofSquare.position.x += playa.speed * .20
        RunLeft()

      }
    })

  }
  playa.update()
}
animate()

/* Keys EventListener */
addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'z':
      if (jumped == true) {
        playa.velocity.y = -15
        jumped = false
      }

      break;
    case 'd':
      keys.Right.pressed = true


      break;
    case 'q':
      keys.Left.pressed = true

      break;
  }
})

addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'd':
      keys.Right.pressed = false

      break;
    case 'q':
      keys.Left.pressed = false

      break;


  }
})