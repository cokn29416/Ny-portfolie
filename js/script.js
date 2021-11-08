
//Burger menu//
const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('nav-active');

    // Animation links
    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger Animatione
    burger.classList.toggle('toggle');
  });

}

navSlide();
//Buger menu//

//stepProgressBar
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const content = document.getElementById('content');
const bullets = [...document.querySelectorAll('.bullet')];

const MAX_STEPS = 3;
let currentStep = 1;

nextBtn.addEventListener('click', () =>{
  const currentBullet = bullets[currentStep -1]
  currentBullet.classList.add('completed');
  currentStep++;
  previousBtn.disabled = false;
  if(currentStep == MAX_STEPS){
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
})

previousBtn.addEventListener('click', () =>{
  const previousBullet = bullets[currentStep - 2];
  previousBullet.classList.remove('completed');
  currentStep--;
  nextBtn.disabled = false;
  finishBtn.disabled = true;
  if(currentStep == 1){
    previous.disabled = true;
  }
})

finishBtn.addEventListener('click', () =>{
  location.reload();
})

//stepProgressBar slut//

//Validering start//
const btn = document.getElementById('btn')
function refresh(){
  window.parent.location = window.parent.location.href;
}

btn.addEventListener("click", function(){
  const number = document.getElementById('number');
  const color = document.getElementById('color');
  const shoe = document.getElementById('shoe');
  const plant = document.getElementById('plant');

  if (number.value == "") {
    window.alert("Indtast alder.");
    number.focus();
    return false;
  }

  if (color.value == "") {
    window.alert("Indtast din ynglingsfarve.");
    number.focus();
    return false;
  }

  if (shoe.value == "") {
    window.alert("Indtast et skomærke.");
    number.focus();
    return false;
  }

  if (plant.value == "") {
    window.alert("Indtast navnet på en plante.");
    number.focus();
    return false;
  }
  return false;
});

//Validering Slut//
