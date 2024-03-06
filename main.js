let leftBtn = document.querySelector('#btn-left');
let rightBtn = document.querySelector('#btn-right');
let container = document.querySelector('.container-image')

let url = 'www.thecocktaildb.com/api/json/v1/1/random.php'

let imgDatabase = [];
let counter=0;

fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        container.src = data.drinks[0]['strDrinkThumb']
        console.log(data.drinks[0]);
        imgDatabase.push(data)
        counter++;
    })
    .catch(err => {
        console.log(`error ${err}`);
    })


rightBtn.addEventListener('click', getNextDrink);
leftBtn.addEventListener('click', getPrevDrink)

function getNextDrink(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        container.src = data.drinks[0]['strDrinkThumb']
        console.log(data.drinks[0]);
        imgDatabase.push(data)
        counter++;
    })
    .catch(err => {
        console.log(`error ${err}`);
    })


}

function getPrevDrink(){
    if(imgDatabase.length > 0){
        container.src = imgDatabase[counter-2].drinks[0]['strDrinkThumb']
        counter--;
        console.log('GO BACK!!');

    }
}