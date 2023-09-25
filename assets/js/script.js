/*
 Consegna:
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo :gatto_che_urla:, questa volta usando gli oggetti.
:boolean-hug: Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello? */

/* Define the slides list */
/* const slides = [
    './assets/img/01.webp', //0
    './assets/img/02.webp', //1
    './assets/img/03.webp', //etc
    './assets/img/04.webp',
    './assets/img/05.webp',
] */

let slides = [
  {
    path: './assets/img/01.webp',

  },

  {
    path: './assets/img/02.webp',

  },

  {
    path: './assets/img/03.webp',

  },

  {
    path: './assets/img/04.webp',

  },

  {
    path: './assets/img/05.webp',

  }

]

let activeSlide = 0;
  
  // select the dom elements
  const sliderImagesEl = document.querySelector('.slider .images')
  const prevEl = document.querySelector('.prev')
  const nextEl = document.querySelector('.next')
  const bottoneInversione = document.querySelector('button')
  
  
  //console.log(sliderImagesEl);
  
  /* Print all images into the dom */
  // loop over the slides 


console.log(slides);

    
  



  function loop(stampa) {
    for (let i = 0; i < slides.length; i++) {
        const slidePath = slides[i]; // single slide path
        console.log(slidePath.path);
        
        // for each slide we create the markup
        const slideMarkup = `<img class="${activeSlide === i ? 'active' : '' } src="${slidePath.path}" alt="">`;
        console.log(slideMarkup);
      
        stampa.insertAdjacentHTML('beforeend', slideMarkup);
      
      }
      return stampa
  }

  loop(sliderImagesEl);





  
  
  /* 
  
  if(condition) {
    // code to run
  } else {
    // code to run
  }
  
  // terary operator
  
  condition ? 'code to run' : 'code to run'
  
  */
  
  
  /* 
  
  MILESTONE 3
  Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  
  */
  
  const slidesImages = document.querySelectorAll('.slider .images > img')
  console.log(slidesImages);
  
  
  
  /* 
  BONUS 1:
  Aggiungere il loop infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
  
  */
  
  /* 
  
  BONUS 2:
  Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
  come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
  Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
  
  */
  
  
  const thumbsElement = document.querySelector('.thumbnails')


  loop(thumbsElement)  

  
  // intercept click on the next icon 
  nextEl.addEventListener('click', function(){
    console.log('cliccato su next');
  
   removeActive()
  
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
  
    
    // activeSlide = 4
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 5
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }
  
  
    nextSlide()

  
  
    /* TODO */
  
  
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumbnails > img')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')
  
  
  })  
  // intercept click on the prev icon
  
  
  // activeSlide = 0
  prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');
  
  
   removeActive()


  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
      // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }
    
    
    console.log(activeSlide);
  
  
    nextSlide()
  })


  function nextSlide() {
      // select the next slide
      const nextSlide = slidesImages[activeSlide]
      console.log(nextSlide);
      // add the active class to the next slide
      nextSlide.classList.add('active')
  }


  function removeActive() {
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    return currentSlide.classList.remove('active')
}

function nextSlideAndRemove() {
  
  removeActive()
  
  // select the active thumb
  const currentThumb = document.querySelector('.thumbnails > img.active')
  console.log(currentThumb);
  // remove the active class from the active thumb
  currentThumb.classList.remove('active')

  
  // activeSlide = 4

  if (activeSlide === slidesImages.length - 1) {
    activeSlide = 0
    // activeSlide = 5
  } else {
    // increment the activeSlide of 1
    activeSlide++
  }


  nextSlide()



  /* TODO */


  // select the next thumb
  const nextThumb = document.querySelectorAll('.thumbnails > img')[activeSlide]
  console.log(nextThumb);
  // add to the next thumb the active class
  nextThumb.classList.add('active')


}

 setInterval(nextSlideAndRemove, 3000)


 bottoneInversione.addEventListener('click', function () {



 })