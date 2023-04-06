
let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = 1200
canvas.height = 950

/* Textures */
function createImage(ImageSrc) {
  let image = new Image()
  image.src = ImageSrc
  return image
}


/*  */
let Player = new Image()
Player.src = 'img/Character/Run/GojoSprite2.png'
let FadCoins = new Image()
FadCoins.src = 'img/FadCoins.png'
function MoveLeft() {


}

let gravity = 0.6
/* Map Class */
class CollisionSquares {
  static width = 10
  static height = 58
  static RealMultiplier = 6

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

/* Decorations */
class Decorations {
  static width = 63
  static height = 63
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
  static width = 0
  static height = 0
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
/* Coins */
let CoinRow = 0
let Column = 0
let CoinAugmentation = 1
class Coins {
  static width = 100
  static height = 55


  constructor({ position, image }) {
    this.position = position
    this.width = 50
    this.height = 86
    this.image = image
    this.Column = Column
  }
  draw() {
    c.drawImage(this.image,
      this.width * CoinRow,
      this.height * this.Column,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height)

  }
}
/* Initialize */
let ScrollOffSet = 0
function initialize() {
  ActualScore = 0
  ScrollOffSet = 0
  IntractableCoins = []
  BackgroundImage = []
  Squares = []
  Decors = []
  playa = new player({
    position: {
      x: CollisionSquares.width,
      y: CollisionSquares.height

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
          Squares.push(new CollisionSquares({
            position: {
              x: (CollisionSquares.width + 700) * j,
              y: CollisionSquares.height * i

            },
            image: createImage('./img/Ground_Block.png'),

          }))
          break;

        case 'Z':
          Squares.push(new CollisionSquares({
            position: {
              x: CollisionSquares.width * j,
              y: CollisionSquares.height * i
            },
            image: createImage('./img/block.png'),

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
          BackgroundImage.push(new Background({
            position: {
              x: 2592 * j,
              y: Background.height * i
            },
            image: createImage('./img/Background.png'),
          }))
          break;
        case 'L':
          BackgroundImage.push(new Background({
            position: {
              x: 2592 * j,
              y: Background.height * i
            },
            image: createImage('./img/Background2.png'),
          }))
          break;
        case 'C':
          IntractableCoins.push(new Coins({
            position: {
              x: Coins.width * j,
              y: Coins.height * i
            },
            image: createImage('img/FadCoins.png'),
            Column: 0
          }))
          break;

      }
    })
  })
}


/* Player Class */

let row = 1
let column = 0
let Augmentation = 1
class player {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.radius = 45
    this.image = Player
    this.width = 134.5
    this.height = 231.5
    this.speed = 10

  }
  draw() {
    c.drawImage(this.image,
      this.width * row,
      this.height * column,
      this.width,
      this.height,
      this.position.x,
      this.position.y + 15,
      this.width,
      this.height)

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
/* Animations  */
setInterval(() => {
  if (row === 1) {
    row = 0
  } else {
    row = row + Augmentation
  }
}, 250);
setInterval(() => {
  if (CoinRow === 5 && Column === 0) {
    CoinRow = 0
  } else {
    CoinRow++
  }
}, 150);
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
  ['R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '-', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'C', 'C', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'C', 'C', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'C', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '', '', '.', '.', '', '', '', '', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', 'C', 'C', 'C', '.', '.', '.', '.', '.', '.', '.', '.', 'C', '.', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['', '.', '.', '.', '.', '.', '.', '.', '-', '.', 'C', '.', '.', '.', 'C', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['', '.', '', '.', '.', '.', '.', '.', '', 'C', '.', '.', '.', '.', '.', '.', '', '.', '.', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', 'G', 'G', 'G', 'G', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['', '', 'G', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'J', '-', '.', '.', '.', '.', '.', 'H', 'H', 'H', 'H', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['J', '', '', '.', 'G', 'G', '.', 'G', 'G', '.', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', '.', '.', '.', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['', '', '', '', '.', '.', '.', '.', '', '', '', '.', '.', '.', '.', '.', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'C', 'C', 'H', 'H', '', '.', '.', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['G', '', 'G', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '', '', '', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-']
]
/* Insides of HTML */
let jumped = true
let score = document.querySelector(".Boobs")
let ActualScore = 0
let IntractableCoins = []
let BackgroundImage = []
let Squares = []
let Decors = []
let playa = new player({
  position: {
    x: CollisionSquares.width * 2,
    y: CollisionSquares.height * 2

  },
  velocity: {
    x: 0,
    y: 0
  },
  row: 0

})

initialize()
/* Keys */
const keys = {
  Left: {
    pressed: false
  },
  Right: {
    pressed: false
  },
  Down: {
    pressed: false
  },
  Up: {
    pressed: false
  }

}

/* Animation Call for (Update And Clear Funcs) */
initialize()
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = "whiteSmoke"
  c.fillRect(0, 0, canvas.width, canvas.height)

  BackgroundImage.forEach((Background) => {
    Background.draw()
  })
  IntractableCoins.forEach((Coins) => {
    Coins.draw()
    if (playa.position.x + playa.width + playa.velocity.x >= Coins.position.x &&
      playa.position.x + playa.velocity.x <= Coins.position.x + Coins.width &&
      playa.position.y + playa.height + playa.velocity.y >= Coins.position.y &&
      playa.position.y + playa.velocity.y <= Coins.position.y + Coins.height) {
      score.innerText = ActualScore

      if (Coins.Column === 0) {
        ActualScore = ActualScore + 100
        IntractableCoins.forEach(() => {
          Coins.Column = 1

          setTimeout(() => {
            Coins.Column = 2
          }, 1000);
        })

      }
    }


  })
  Decors.forEach((Decorations) => {
    Decorations.draw()
  })
  Squares.forEach((CollisionSquares) => {
    CollisionSquares.draw()
    if (playa.position.y + playa.height + playa.velocity.y >= CollisionSquares.position.y &&
      playa.position.y + playa.height <= CollisionSquares.position.y &&
      playa.position.x + playa.width >= CollisionSquares.position.x &&
      playa.position.x + playa.velocity.x <= CollisionSquares.position.x + CollisionSquares.width

    ) {

      if (keys.Down.pressed && playa.position.y + playa.velocity.y < 543.6) {
        keys.Down.pressed = false
        playa.velocity.y = 5

      } else {
        playa.velocity.y = 0
        jumped = true
      }


    }
  })

  if (keys.Left.pressed && keys.Right.pressed) {
    column = 2
    playa.velocity.x = 0
  } else if (keys.Up.pressed && keys.Left.pressed && playa.position.x > 100) {
    playa.velocity.x = -playa.speed
    column = 1
    row = 1
    Augmentation = 0
  } else if (keys.Up.pressed && keys.Right.pressed && playa.position.x < 400) {
    playa.velocity.x = +playa.speed
    column = 1
    row = 0
    Augmentation = 0
  }
  else if (keys.Right.pressed && playa.position.x < 400) {
    playa.velocity.x = playa.speed
    column = 3
    Augmentation = 1
  } else if ((keys.Left.pressed && playa.position.x > 100) ||
    (keys.Left.pressed && playa.position.x > 0 && ScrollOffSet === 0)) {
    playa.velocity.x = -playa.speed
    column = 2
    Augmentation = 1
  }
  /* Colliders Movement */
  else {
    playa.velocity.x = 0
    column = 0
    Augmentation = 1


    Squares.forEach((CollisionSquares) => {

      if (keys.Right.pressed) {
        CollisionSquares.position.x -= playa.speed

      } else if (keys.Left.pressed && ScrollOffSet > 0) {
        CollisionSquares.position.x += playa.speed

      }
    })
    IntractableCoins.forEach((Coins) => {

      if (keys.Right.pressed) {
        Coins.position.x -= playa.speed

      } else if (keys.Left.pressed && ScrollOffSet > 0) {
        Coins.position.x += playa.speed

      }
    })
    Decors.forEach((CollisionSquares) => {
      if (keys.Right.pressed) {
        CollisionSquares.position.x -= playa.speed
        ScrollOffSet += playa.speed
      } else if (keys.Left.pressed && ScrollOffSet > 0) {
        CollisionSquares.position.x += playa.speed
        ScrollOffSet -= playa.speed
      }
    })
    BackgroundImage.forEach((CollisionSquares) => {
      if (keys.Up.pressed && keys.Left.pressed && ScrollOffSet > 0) {
        CollisionSquares.position.x += playa.speed * .20
        column = 1
        Augmentation = 0
        row = 1
      } else if (keys.Up.pressed && keys.Right.pressed) {
        CollisionSquares.position.x -= playa.speed * .20
        column = 1
        Augmentation = 0
        row = 0


      } else if (keys.Right.pressed) {
        CollisionSquares.position.x -= playa.speed * .20
        column = 3
      } else if (keys.Left.pressed && ScrollOffSet > 0) {
        CollisionSquares.position.x += playa.speed * .20
        column = 2


      }
    })

  }

  playa.update()
}
animate()

/* Keys EventListener */
let CaseUp = 'KeyW'
let CaseLeft = 'KeyA'
let CaseRight = 'KeyD'
let CaseDown = 'KeyS'
addEventListener('keydown', ({ code }) => {

  switch (code) {
    case CaseUp:

      if (jumped == true) {
        keys.Up.pressed = true
        playa.velocity.y = -15
        jumped = false
      }
      break;
    case CaseRight:
      keys.Right.pressed = true
      break;
    case CaseLeft:
      keys.Left.pressed = true
      break;
    case CaseDown:
      keys.Down.pressed = true
      break;

  }
})

addEventListener('keyup', ({ code }) => {
  switch (code) {
    case CaseUp:
      keys.Up.pressed = false
      break;
    case CaseRight:
      keys.Right.pressed = false
      break;
    case CaseLeft:
      keys.Left.pressed = false
      break;
    case CaseDown:
      keys.Down.pressed = false
      break;

  }
})
/* Change To Arrows */
let Arrows = document.querySelector(".Real")
Arrows.addEventListener('click', function () {
  if (CaseUp === 'KeyW') {
    CaseUp = 'ArrowUp'
    CaseLeft = 'ArrowLeft'
    CaseRight = 'ArrowRight'
    CaseDown = 'ArrowDown'
    Arrows.classList.add('Real2')
    Arrows.classList.remove('Real')

  } else if (CaseUp === 'ArrowUp') {
    CaseUp = 'KeyW'
    CaseLeft = 'KeyA'
    CaseRight = 'KeyD'
    CaseDown = 'KeyS'
    Arrows.classList.add('Real')
    Arrows.classList.remove('Real2')
  }

})
/* Settings Icon */
let Gear = document.querySelector(".LTG")
let Menu = document.querySelector(".SettingsMenu")
Gear.addEventListener('click', function () {
  Menu.classList.toggle('SettingsMenu2')


})


/* Score Tye Shi */


