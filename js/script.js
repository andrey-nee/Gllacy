const body = document.querySelector('.page-body')
const buttonSlide_1 = document.querySelector('.promo__button--paginator-1')
const buttonSlide_2 = document.querySelector('.promo__button--paginator-2')
const buttonSlide_3 = document.querySelector('.promo__button--paginator-3')

buttonSlide_1.addEventListener('click', function() {
  if (body.classList.contains('page-body--slider-1')) {
    console.log('Слайд-1 уже выбран')
  } else {
    console.log('Выбран Слайд-1')
    body.classList.remove('page-body--slider-2')
    body.classList.remove('page-body--slider-3')
    body.classList.add('page-body--slider-1')
    buttonSlide_2.classList.remove('promo__button--active')
    buttonSlide_3.classList.remove('promo__button--active')
    buttonSlide_1.classList.add('promo__button--active')
  }
});

buttonSlide_2.addEventListener('click', function() {
  if (body.classList.contains('page-body--slider-2')) {
    console.log('Слайд-2 уже выбран')
  } else {
    console.log('Выбран Слайд-2')
    body.classList.remove('page-body--slider-1')
    body.classList.remove('page-body--slider-3')
    body.classList.add('page-body--slider-2')
    buttonSlide_1.classList.remove('promo__button--active')
    buttonSlide_3.classList.remove('promo__button--active')
    buttonSlide_2.classList.add('promo__button--active')
  }
});

buttonSlide_3.addEventListener('click', function() {
  if (body.classList.contains('page-body--slider-3')) {
    console.log('Слайд-3 уже выбран')
  } else {
    console.log('Выбран Слайд-3')
    body.classList.remove('page-body--slider-1')
    body.classList.remove('page-body--slider-2')
    body.classList.add('page-body--slider-3')
    buttonSlide_1.classList.remove('promo__button--active')
    buttonSlide_2.classList.remove('promo__button--active')
    buttonSlide_3.classList.add('promo__button--active')
  }
});
