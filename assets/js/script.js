/* Consegna:
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

const slides = [
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
let direction = "";
let looper;
let sliderSpeed = 1500;

//seleziono gli Elementi della DOM
const stopCarousel = document.getElementById('stop');
const backwardCarousel = document.getElementById('backward');
const forwardCarousel = document.getElementById('forward');
const sliderImagesEl = document.querySelector('.slider .images');
const thumbsElement = document.querySelector('.thumbnails');
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

/* Print all images into the dom */
//Utilizzo il for per ciclare le parole chiave
for (const key in slides) {
  //Le assegno ad una variabile
  const slidePath = slides[key].path;
  console.log(key, slidePath);
  //Assegno ad una variabile il markup da generare
  const slideMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${slidePath}" alt="">`;
  //console.log(slideMarkup + ' markup image');

  sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);
};


//Seleziono tutti i tag .slider .image
const slidesImages = document.querySelectorAll('.slider .images > img');
//console.log(slidesImages);

//Faccio la stessa cosa fatta con le immagini
for (const key in slides) {
  //Assegno ad una variabile la variale dell'obj
  const thumbPath = slides[key].path;
  console.log('thumbpath = chiave', key, 'valore', thumbPath);

  const thumbMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${thumbPath}" alt="">`;
  //console.log(thumbMarkup);

  //Inserisco in thumbsElement, prima della fine il markup del thump
  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup);
};

//Creo una funzione per controllare la direzione delle slide
function sliderControl(direction) {

  //Assegno una varibile le immagine che verrà visualizza per prima (active)(in questo caso tutte)
  const currentSlide = slidesImages[activeSlide];
  console.log("currentSlide = ", currentSlide);

  //Tolgo la classe active alle immagini
  currentSlide.classList.remove('active');

  //Assegno il thumb della DOM ad una variabile
  const currentThumb = document.querySelector('.thumbnails > img.active');
  console.log("currentThumb = ", currentThumb);

  //Tolgo la classe active al thumb
  currentThumb.classList.remove('active');

  //after we remove the acrive class from the images we increment the activeSlide value by 1    
  if (direction == "next") {

      ////Se activeSlide è identico per dati e valore a slideImage.lentgh meno 1, stai in posizione zero 
      if (activeSlide === slidesImages.length - 1) {
          activeSlide = 0;
      //altrimenti incrementa di 1
      } else {
          activeSlide++;
      }

  } else if (direction == "prev") {

      // increment the activeSlide of 1
      if (activeSlide === slidesImages.length + 1) {

        activeSlide = 0;

      } else {

          activeSlide--;

      }

  }

  console.log("activeSlide =", activeSlide);

  //Assegno le slide image ad una nuova variabile dopo essere diventata active,
  //dopo aver scelto in base alla codizione di if/else
  const nextSlide = slidesImages[activeSlide];
  console.log(nextSlide);

  //Inserisco la classe active
  nextSlide.classList.add('active');

  //Assegno una nuova thumb
  const nextThumb = document.querySelectorAll('.thumbnails img')[activeSlide];
  console.log(nextThumb);

  //Aggiungo la classe active alla varibile creata prima
  nextThumb.classList.add('active');

  console.log(activeSlide);

};

/* //Ivoco la funzione per fermare il carosello
clearInterval(looper);
 */
/* //Al click next
nextEl.addEventListener('click', () => { sliderControl('next') });

//Al click prev
prevEl.addEventListener('click', () => { sliderControl('prev') }); */





/* //Funzione per far partire il carosello e pulire l'evento in avanti
forwardCarousel.addEventListener("click", () => {

  clearInterval(looper);

  const direction = "next";

  looper = setInterval(sliderControl, 1000, direction);
});

//Funzione per ferma il carosello
stopCarousel.addEventListener("click", () => {

  clearInterval(looper);

});

//Funzione per far partire il carosello e pulire l'evento in avanti
backwardCarousel.addEventListener("click", () => {

  clearInterval(looper);

  direction = "prev";

  looper = setInterval(sliderControl, sliderSpeed, direction);

});

 */


//Evento al click di next
nextEl.addEventListener('click', function () {
  console.log('cliccato su next');

  //Assegno ad una varibile la slide selezionata
  const currentSlide = slidesImages[activeSlide]
  console.log(currentSlide);

  //Rimuovo la classe active e fermo l'immagine
  currentSlide.classList.remove('active')

  //Assegno ad una varibile la thumb selezionata
  const currentThumb = document.querySelectorAll('.thumbnails > img.active')
  console.log(currentThumb);

  //Rimuovo la classe active e fermo il thumb
  currentThumb.classList.remove('active')



  //Seleziono la prossima slide
  const nextSlide = slidesImages[activeSlide];
  console.log(nextSlide);
  
  //Inserisco la classe active nel thumb cosi da poter vedere l'immagine selezionata
  nextSlide.classList.add('active');


  //Seleziono la prossima thumb
  const nextThumb = document.querySelectorAll('.thumb')[activeSlide];
  console.log(nextThumb);

  //Inserisco la classe active dopo il click
  nextThumb.classList.add('active')

})

prevEl.addEventListener('click', function () {
  console.log('cliccato su prev');

  //Assegno ad una varibile la slide selezionata
  const currentSlide = slidesImages[activeSlide]
  console.log(currentSlide);

  //Rimuovo la classe active e fermo l'immagine
  currentSlide.classList.add('active')

  //Assegno ad una varibile la thumb selezionata
  const currentThumb = document.querySelectorAll('.thumbnails > img.active')
  console.log(currentThumb);

  //Rimuovo la classe active e fermo il thumb
  currentThumb.classList.add('active')



  //Seleziono la slide precedente
  const prevSlide = slidesImages[activeSlide - 1];
  console.log(prevSlide);
  
  //Inserisco la classe active nel thumb cosi da poter vedere l'immagine selezionata
  prevSlide.classList.add('active');


  //Seleziono la prossima thumb
  const prevThumb = document.querySelectorAll('.thumb')[activeSlide];
  console.log(prevThumb);

  //Inserisco la classe active dopo il click
  prevThumb.classList.add('active')

})





//Slide precedente


//Funzione che ferma il carosello
clearInterval(looper);

//Funzione ad evento click next
nextEl.addEventListener('click', () => { sliderControl("next") });

//Funzione ad evento ferma il carosello
nextEl.addEventListener('click', () => { clearInterval(looper) });

//Funzione ad evento click prev
prevEl.addEventListener('click', () => { sliderControl("prev") });

//Funzione ad evento ferma il carosello
prevEl.addEventListener('click', () => { clearInterval(looper) });







/* forwardCarousel.addEventListener("click", () => {

  clearInterval(looper);

  direction = "next";
  //Assegno a looper il setInterval e ho passato il controllo della direzione e la variabile velocità di esecuzione
  looper = setInterval(sliderControl, sliderSpeed, direction);
});

stopCarousel.addEventListener("click", () => {

  clearInterval(looper);

});

backwardCarousel.addEventListener("click", () => {

  clearInterval(looper);

  direction = "prev";
  //Assegno a looper il setInterval e ho passato il controllo della direzione e la varibile velocità di esecuzione
  looper = setInterval(sliderControl, sliderSpeed, direction);

});
 */
