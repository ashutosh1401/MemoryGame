document.addEventListener('DOMContentLoaded', () => {

  const optArray = [
    {
      name: 'apple',
      img: 'apple.png'
    },
    {
      name: 'mango',
      img: 'mango.png'
    },
    {
      name: 'banana',
      img: 'banana.png'
    },
    {
      name: 'orange',
      img: 'orange.png'
    },
    {
      name: 'kiwi',
      img: 'kiwi.png'
    },
    {
      name: 'strawberry',
      img: 'strawberry.png'
    },
    {
      name: 'apple',
      img: 'apple.png'
    },
    {
      name: 'banana',
      img: 'banana.png'
    },
    {
      name: 'mango',
      img: 'mango.png'
    },
    {
      name: 'orange',
      img: 'orange.png'
    },
    {
      name: 'kiwi',
      img: 'kiwi.png'
    },
    {
      name: 'strawberry',
      img: 'strawberry.png'
    }
    /*{
      name:'pineapple',
      img: 'pineapple.png'
    }
    {
      name:'dragonfruit',
      img: 'dragonfruit.png'
    }
    {
      name:'pineapple',
      img: 'pineapple.png'
    }
    {
      name:'dragonfruit',
      img: 'dragonfruit.png'
    }*/
  ]

  optArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var imgSelected = []
  var imgId = []
  const imgWon = []


  function createGame() {
    for (let i = 0; i < optArray.length; i++) {
      var box = document.createElement('img')
      box.setAttribute('src', 'cover.png')
      box.setAttribute('data-id', i)
      box.addEventListener('click', showCard)
      grid.appendChild(box)
    }
  }


  function checkImageMatch() {
    var cards = document.querySelectorAll('img')
    const optoneId = imgId[0]
    const opttwoId = imgId[1]
    if ( imgSelected[0] === imgSelected[1]) {
      alert('You found a match')
      cards[optoneId].setAttribute('src', 'blank.png')
      cards[opttwoId].setAttribute('src', 'blank.png')
      imgWon.push(imgSelected)
    } else {
      cards[optoneId].setAttribute('src', 'cover.png')
      cards[opttwoId].setAttribute('src', 'cover.png')
      alert('Sorry, try again')
    }
    imgSelected = []
    imgId = []
    resultDisplay.textContent = imgWon.length
    if  (imgWon.length === optArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }


  function showCard() {
    var boxId = this.getAttribute('data-id')
    imgSelected.push(optArray[boxId].name)
    imgId.push(boxId)
    this.setAttribute('src', optArray[boxId].img)
    if (imgSelected.length ===2) {
      setTimeout(checkImageMatch, 500)
    }
  }

  createGame()
})
