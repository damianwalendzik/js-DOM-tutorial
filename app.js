// DOM manipulation

// GetElementById()
const title = document.getElementById('main-heading');

console.log(title);
//GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');

console.log(listItem)

//getElementByTagName()
//selects the first item
//querySelector()
var container = document.querySelector('div');

console.log(container)
// querySelectorAll()

var containers = document.querySelectorAll('div');

console.log(containers)


// const listItems = document.querySelector('.list-items');
// for( i=0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem';
// }
// title.style.color = 'red';

// adding element
const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li)
li.innerText = 'X-men';
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');
console.log();

const firstListItem = document.querySelector('.list-items')
console.log(firstListItem.innerHTML);
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);

let unorderedList = document.querySelector('ul');

console.log(unorderedList);
console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement);

//Event Listeners

//element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);

//mouseover

const example3 = document.querySelector('.box-3');

function changeBgColor() {
    example3.style.backgroundColor = 'blue';
}

example3.addEventListener("mouseover", changeBgColor);

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {

    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);