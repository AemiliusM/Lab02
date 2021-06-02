// console.log("hello")
// console.log(
    // "hellooo!")
// const myElement = document.getElementById('top-section');
// console.log(myElement);
const submitButton = document.getElementById('sub-btn');
const inputField = document.getElementById('input-field');
const pronounfield = document.getElementById('pro-nouns')
const colorfield = document.getElementById('color-field')
const namespan =document.getElementById('Name');
const pronounspan = document.getElementById('Pronouns')
const topSection = document.getElementById('top-section');
submitButton.addEventListener('click', ()=>{
    
 topSection.style.backgroundColor = colorfield.value
    namespan.textContent = inputField.value.toUpperCase();
    pronounspan.textContent = pronounfield.value;
    
})