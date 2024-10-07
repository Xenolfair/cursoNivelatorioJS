// // let button = document.getElementById('main_button');
// // button.addEventListener('click', function(){
// //     alert("hello!");
// // });

// // let main_div = document.querySelector('.main_div');

// console.log("Hello world!");

// let person = {
//     height: 175,
//     weight: 70,
//     age: 30,
//     name: "John"
// }

// console.log(person);
// console.log(`integer $(10)`);
// console.log(`boolean $(true)`);
// console.log(`object ${JSON.stringify(person)}`);
// console.log(`array ${[1, 2, 3]}`);
// console.log(`null ${null}`);
// console.log(`undefined ${undefined}`);

// const fruits = ["apple", "banana", "cherry"];
// const randomArr = [1, "apple", true, null, undefined, {name: "John Doe"}];

// Practica de propiedades para métodos:

let phrase = "Hoy nos encontramos estudiando js"
let phrase_replace = phrase.replace("js", "Python");
let phrase_charArt = phrase.charAt(-10);

console.log(phrase_charArt);
console.log(phrase.toLocaleLowerCase());
console.log(phrase.toLocaleUpperCase());
console.log(phrase.length);
console.log(phrase.trim());

// Pantalla de carga 

window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none'; 
      document.getElementById('mainContent').classList.add('active'); 
    }, 3000); 
  });

// titulo

let title = document.getElementById("main_title");
let button = document.getElementById('main_button');

button.addEventListener("click", function (){
    let currentTitle = title.textContent;

    if (currentTitle === currentTitle.toLocaleLowerCase()) {
        title.textContent = currentTitle.toLocaleUpperCase();
    } else {
        title.textContent = currentTitle.toLocaleLowerCase();
    }
});
