
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const btn = document.querySelector(".show-more-btn");
const moreItems = document.querySelector(".more-items");

btn.addEventListener("click", () => {
  moreItems.classList.add("active");
  btn.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInputs = document.querySelectorAll(".phone-mask");

  phoneInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      let val = input.value.replace(/\D/g, "");
      if (val.startsWith("7")) val = val.substring(1);

      let formatted = "+7 (";
      if (val.length > 0) formatted += val.substring(0, 3);
      if (val.length >= 4) formatted += ") " + val.substring(3, 6);
      if (val.length >= 7) formatted += "-" + val.substring(6, 8);
      if (val.length >= 9) formatted += "-" + val.substring(8, 10);

      input.value = formatted;
    });

    input.addEventListener("focus", function () {
      if (input.value === "") input.value = "+7 (";
    });

    input.addEventListener("blur", function () {
      if (input.value === "+7 (") input.value = "";
    });
  });
});

const dateEl = document.getElementById("today-date");

const monthsRu = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const today = new Date();
const day = today.getDate().toString().padStart(2, "0");
const month = monthsRu[today.getMonth()];
const year = today.getFullYear();

dateEl.textContent = `${day} ${month} ${year}г`;

const words = ["заявок", "рекламы", "промо акций"];
const el = document.getElementById("changing-word");

let i = 0;

function changeWord() {
  el.classList.remove("show");
  setTimeout(() => {
    el.textContent = words[i];
    el.classList.add("show");
    i = (i + 1) % words.length;
  }, 300);
}

el.textContent = words[0];
el.classList.add("show");
i = 1;

setInterval(changeWord, 3000);

window.addEventListener("scroll", function () {
  const sidebar = document.getElementById("sticky-sidebar");
  const container = document.getElementById("sticky-container");

  const sidebarHeight = sidebar.offsetHeight;
  const containerTop = container.offsetTop;
  const containerHeight = container.offsetHeight;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const startSticky = containerTop - 100;
  const stopSticky = containerTop + containerHeight - sidebarHeight - 100;

  if (scrollTop > startSticky && scrollTop < stopSticky) {
    sidebar.classList.add("sticky");
    sidebar.classList.remove("stop");
  } else if (scrollTop >= stopSticky) {
    sidebar.classList.remove("sticky");
    sidebar.classList.add("stop");
  } else {
    sidebar.classList.remove("sticky", "stop");
  }
});

AOS.init();



$(function() {
  $('.menu a, .menu__box li a').mPageScroll2id({
    offset: 100
  });
  $('.good').click(function() {
    $('.cookie').fadeOut(300);
  });

  const body = document.querySelector('body');
  const btn = document.querySelector('.darkmode-btn');
  const icon = document.querySelector('.darkmode-btn__icon');

  //to save the dark mode use the object "local storage".

  //function that stores the value true if the dark mode is activated or false if it's not.
  function store(value){
    localStorage.setItem('darkmode', value);
  }

  //function that indicates if the "darkmode" property exists. It loads the page as we had left it.
  function load(){
    const darkmode = localStorage.getItem('darkmode');

    //if the dark mode was never activated
    if(!darkmode){
      store(false);
      icon.classList.add('darkmode-moon');
    } else if( darkmode == 'true'){ //if the dark mode is activated
      body.classList.add('darkmode');
      icon.classList.add('darkmode-sun');
    } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
      icon.classList.add('darkmode-moon');
    }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('darkmode-moon');
    icon.classList.add('darkmode-sun');
  }else{
    icon.classList.remove('darkmode-sun');
    icon.classList.add('darkmode-moon');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})
});