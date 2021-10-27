const fotoArray = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const items = document.getElementsByClassName('fc-item');
const boxMini = document.getElementsByClassName('box-mini');
let contatore = 0;

console.log(items);
console.log(items[contatore]);

const prev = document.querySelector('.fc-prev');
const next = document.querySelector('.fc-next');

prev.addEventListener('click', function(){
 items[contatore].classList.remove('active');
 boxMini[contatore].classList.remove('active');

 contatore = contatore - 1;
 if(contatore < 0) contatore = items.length - 1;

 items[contatore].classList.add('active');
 boxMini[contatore].classList.add('active');
 console.log(items);
 console.log(boxMini);
 
})

next.addEventListener('click', function(){
  items[contatore].classList.remove('active');
  boxMini[contatore].classList.remove('active');
 
  contatore = contatore + 1;
  if(contatore > (items.length - 1)) contatore = 0;
 
  items[contatore].classList.add('active');
  boxMini[contatore].classList.add('active');
  console.log(items);
  
 })


