// var swiper = new Swiper(".content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });


// end

// const form=document.querySelector('#create-account-form');
// const emailInput=document.querySelector('#email');

// form.addEventListener('submit', (event)=>{
    
//   validateForm();
//   console.log(isFormValid());
//   if(isFormValid()==true){
//       form.submit();
//    }else {
//        event.preventDefault();
//    }

// });

// function isFormValid(){
//   const inputContainers = form.querySelectorAll('.input-group');
//   let result = true;
//   inputContainers.forEach((container)=>{
//       if(container.classList.contains('error')){
//           result = false;
//       }
//   });
//   return result;
// }

// function validateForm(){
//   //email
//   if(emailInput.value.trim()==''){
//     setError(emailInput, 'Provide email address');
//   }else if(isEmailValid(emailInput.value)){
//     setSuccess(emailInput);
//   }else{
//     setError(emailInput, 'Provide valid email address');
//     }
//   }
//   function setError(element, errorMessage) {
//     const parent = element.parentElement;
//     if(parent.classList.contains('success')){
//         parent.classList.remove('success');
//     }
//     parent.classList.add('error');
//     const paragraph = parent.querySelector('p');
//     paragraph.textContent = errorMessage;
// }

// function setSuccess(element){
//     const parent = element.parentElement;
//     if(parent.classList.contains('error')){
//         parent.classList.remove('error');
//     }
//     parent.classList.add('success');
// }

// function isEmailValid(email){
//     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return reg.test(email);
// }


// slider


// let appendNumber = 600;
// let prependNumber = 1;
// const swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   virtual: {
//     slides: (function () {
//       const slides = [];
//       for (var i = 0; i < 600; i += 1) {
//         slides.push('Slide ' + (i + 1));
//       }
//       return slides;
//     })(),
//   },
// });

// document
//   .querySelector('.slide-1')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideTo(0, 0);
//   });

// document
//   .querySelector('.slide-250')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideTo(249, 0);
//   });

// document
//   .querySelector('.slide-500')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideTo(499, 0);
//   });

// document
//   .querySelector('.prepend-2-slides')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.virtual.prependSlide([
//       'Slide ' + --prependNumber,
//       'Slide ' + --prependNumber,
//     ]);
//   });

// document
//   .querySelector('.append-slide')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.virtual.appendSlide('Slide ' + ++appendNumber);
//   });




// new slider in example.html

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });