//Fist problem fixed change de 
const seccionOne = document.querySelector('.backgroud');
const seccionTwo = document.querySelector('.background_final');
const buttonSubmit = document.querySelector('.buttonsubmit');
const buttonOne=document.querySelector(".button1");
const buttonTwo=document.querySelector(".button2");
const buttonThree=document.querySelector(".button3");
const buttonFour=document.querySelector(".button4");
const buttonFive=document.querySelector(".button5");
const interactive = document.querySelector(".interactive_item")


buttonSubmit.addEventListener("click",Test);
buttonOne.addEventListener("click",Paintbutton1);
buttonTwo.addEventListener("click",Paintbutton2);
buttonThree.addEventListener("click",Paintbutton3);
buttonFour.addEventListener("click",Paintbutton4);
buttonFive.addEventListener("click",Paintbutton5);

function Test() {
    seccionOne.classList.add('inactive');
    seccionTwo.classList.toggle('inactive');
}

function Paintbutton1(){
    buttonOne.classList.toggle('paint');
    buttonTwo.classList.remove('paint');
    buttonThree.classList.remove('paint');
    buttonFour.classList.remove('paint');
    buttonFive.classList.remove('paint');
    interactive.innerText="Your selected 1 out of 5";
}
function Paintbutton2(){
    buttonTwo.classList.toggle('paint');
    buttonTwo.classList.remove('subpaint');
    buttonOne.classList.remove('paint');
    buttonThree.classList.remove('paint');
    buttonOne.classList.add('subpaint');
    buttonThree.classList.add('subpaint');
    buttonFour.classList.remove('paint');
    buttonFive.classList.remove('paint');
    interactive.innerText="Your selected 2 out of 5";

}
function Paintbutton3(){

    buttonThree.classList.toggle('paint');
    buttonFour.classList.remove('paint');

    buttonFive.classList.remove('paint');
    buttonTwo.classList.remove('paint');

    buttonOne.classList.remove('paint');
    interactive.innerText="Your selected 3 out of 5";
    

}
function Paintbutton4(){
    buttonFour.classList.toggle('paint');
    buttonThree.classList.remove('paint');
    buttonFive.classList.remove('paint');
    buttonTwo.classList.remove('paint');
    buttonOne.classList.remove('paint');
    interactive.innerText="Your selected 4 out of 5";

}
function Paintbutton5(){
    buttonFive.classList.toggle('paint');
    buttonTwo.classList.remove('paint');
    buttonOne.classList.remove('paint');
    buttonThree.classList.remove('paint');
    buttonFour.classList.remove('paint');
    interactive.innerText="Your selected 5 out of 5";

}


