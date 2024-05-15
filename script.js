const moneyHtml = document.querySelector('.money')
const gameBox = document.querySelector('.game-box')
const boxOne = document.querySelector('.box-one')
const boxTwo = document.querySelector('.box-two')
const boxThree = document.querySelector('.box-three')
const items = document.querySelectorAll('.item')
const middleItems = document.querySelectorAll('.middle')
const bidHtml = document.querySelector('.bid')
const playBtn = document.querySelector('button')

let originalArr = ['🥨', '🍋', '🍉', '🥐', '🍕']
let money = 1000
let bid = 0


function updateMoneyHtml(money) {
    moneyHtml.innerHTML = 'Money: ' + money
}
updateMoneyHtml(money)

function shuffleArray(arr) {
    let array = [...originalArr]
    array.sort((a, b) => 0.5 - Math.random());
    return array
}

function appendBox() {
    boxOne.innerHTML = ''
    boxTwo.innerHTML = ''
    boxThree.innerHTML = ''

    const arr1 = shuffleArray(originalArr)
    const arr2 = shuffleArray(originalArr)
    const arr3 = shuffleArray(originalArr)

    for (let i = 0; i < arr1.length; i++) {
        let className = i === 2 ? "item other middle" : "item other";
        boxOne.innerHTML += `<div class="${className}">${arr1[i]}</div>`;
    }

    for (let i = 0; i < arr2.length; i++) {
        let className = i === 2 ? "item other middle" : "item other";
        boxTwo.innerHTML += `<div class="${className}">${arr2[i]}</div>`;
    }
    for (let i = 0; i < arr3.length; i++) {
        let className = i === 2 ? "item other middle" : "item other";
        boxThree.innerHTML += `<div class="${className}">${arr3[i]}</div>`;
    }

    if (arr1[2] === arr2[2] && arr2[2] === arr3[2]) {
        console.log('vienodi');
        console.log(arr1[2]);
        console.log(arr2[2]);
        console.log(arr3[2]);
    } else {
        console.log('nevienodi');
        console.log(arr1[2]);
        console.log(arr2[2]);
        console.log(arr3[2]);
    }
}
appendBox()

playBtn.onclick = () => {
    if (money <= bid) {
        console.log('neuztenka pinigu');
        return
    }
    appendBox()

    money -= bid
    updateMoneyHtml(money)
}