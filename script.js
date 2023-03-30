let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight
/* Textures */
let Ground = new Image()
Ground.src = 'block.png'
let Mystery = new Image()
Mystery.src = 'Surprise2.png'

let PipeHeadLeft = new Image()
PipeHeadLeft.src = 'HeadPipe_Left.png'

let PipeHeadCenter = new Image()
PipeHeadCenter.src = 'HeadPipe_Middle.png'

let PipeHeadRight = new Image()
PipeHeadRight.src = 'HeadPipe_Right.png'

let PipeBodyLeft = new Image()
PipeBodyLeft.src = 'BodyPipe_Left.png'

let PipeBodyRight = new Image()
PipeBodyRight.src = 'BodyPipe_Right.png'

function MysteryBox() {

  setTimeout(() => {
    Mystery.src = 'Surprise3.png'
  }, 400);
  setTimeout(() => {
    Mystery.src = 'Surprise.png'
  }, 550);
  setTimeout(() => {
    Mystery.src = 'Surprise3.png'
  }, 700);
  setTimeout(() => {
    Mystery.src = 'Surprise2.png'
  }, 850);

}

setInterval(function () { MysteryBox() }, 1200);
let gravity = 0.5
/* Map Class */
class MotherofSquare {
  static width = 62
  static height = 63

  constructor({ position, image, width, height }) {
    this.position = position
    this.width = width
    this.height = height
    this.image = image

  }

  draw() {
    /* c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  */
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}
/* Player Class */
class player {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.radius = 45

  }
  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = 'whitesmoke'
    c.fill()
    c.closePath()

  }
  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y


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
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '-', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '', 'Z', '.', '.', 'G', 'Z', 'G', 'Z', 'G', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '-', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '<', '>', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '-', '.', '.', '.', '.', '.', '.', '.', '.', '<|', '|>', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '', '<|', '|>', '', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['-', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '<|', '|>', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '-'],
  ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
  ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
  ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G']
]
/* Insides of HTML */

let Squares = []
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
          image: Ground,
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
          image: Mystery,
          width: 63,
          height: 63
        }))
        break;
      case '<':
        Squares.push(new MotherofSquare({
          position: {
            x: MotherofSquare.width * j - 17,
            y: MotherofSquare.height * i
          },
          image: PipeHeadLeft,
          width: 80,
          height: 63
        }))
        break;
      case '_':
        Squares.push(new MotherofSquare({
          position: {
            x: MotherofSquare.width * j,
            y: MotherofSquare.height * i
          },
          image: PipeHeadCenter,
          width: 63,
          height: 63
        }))
        break;
      case '>':
        Squares.push(new MotherofSquare({
          position: {
            x: MotherofSquare.width * j,
            y: MotherofSquare.height * i
          },
          image: PipeHeadRight,
          width: 80,
          height: 63
        }))
        break;
      case '|>':
        Squares.push(new MotherofSquare({
          position: {
            x: MotherofSquare.width * j,
            y: MotherofSquare.height * i
          },
          image: PipeBodyRight,
          width: 63,
          height: 63,
          width: 63,
          height: 63
        }))
        break;
      case '<|':
        Squares.push(new MotherofSquare({
          position: {
            x: MotherofSquare.width * j,
            y: MotherofSquare.height * i
          },
          image: PipeBodyLeft,
          width: 63,
          height: 63
        }))
        break;

    }
  })
})
/* Keys */
const keys = {
  z: {
    pressed: false
  },
  q: {
    pressed: false
  },
  d: {
    pressed: false
  },
  s: {
    pressed: false
  }

}
let lastkey = ''
/* Animation Call for (Update And Clear Funcs) */
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  Squares.forEach((MotherofSquare) => {
    MotherofSquare.draw()
    if (
      playa.position.y - playa.radius + playa.velocity.y + 4 <= MotherofSquare.position.y + MotherofSquare.height &&
      playa.position.y + playa.radius + playa.velocity.y - 4 >= MotherofSquare.position.y &&
      playa.position.x + playa.radius + playa.velocity.x - 4 >= MotherofSquare.position.x &&
      playa.position.x - playa.radius + playa.velocity.x + 4 <= MotherofSquare.position.x + MotherofSquare.width
    ) {

      playa.velocity.y = 0
      playa.velocity.x = 0

    }
  })


  playa.update()


  playa.velocity.y += gravity
  playa.velocity.x = 0
  if (keys.d.pressed && lastkey === 'd') {
    playa.velocity.x = 5
  } else if (keys.q.pressed && lastkey === 'q') {
    playa.velocity.x = -5
  } else if (keys.z.pressed && lastkey === 'z') {
    playa.velocity.y = -5
  }

}
animate()

/* Keys EventListener */
addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'z':
      keys.z.pressed = true
      lastkey = 'z'
      break;
    case 'd':
      keys.d.pressed = true
      lastkey = 'd'
      break;
    case 's':
      keys.s.pressed = true
      lastkey = 's'
      break;
    case 'q':
      keys.q.pressed = true
      lastkey = 'q'
      break;


  }
})

addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'z':
      keys.z.pressed = false

      break;
    case 'd':
      keys.d.pressed = false

      break;
    case 's':
      keys.s.pressed = false

      break;
    case 'q':
      keys.q.pressed = false

      break;


  }
})
