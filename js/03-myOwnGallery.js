import { galleryItems } from './gallery-items.js';

const { log } = console;
const closeBtn = document.querySelector('.modal__close')
const modal = document.querySelector('.modal');
const gallery = document.querySelector('.gallery');
const modalImg =  document.querySelector('.modal__img');
const imagesLinksArray = [];
const close = () => {
  {
    modal.classList.add('closing');
    setTimeout(() => {
      modal.classList.add('isHidden');
      modal.classList.remove('closing')
    }
      , 500);
  }
  log('Escape');
}

const markup = galleryItems.map((item) => `
<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} title=${item.description} 
  data-original='${item.original}' />
</a>
`)
.join('')
gallery.insertAdjacentHTML('beforeend', markup);

galleryItems.flatMap(image=>{
  imagesLinksArray.push(image.original)
})

gallery.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  log(evt);
  const modaltest= 
  modalImg.src = evt.target.dataset.original;
  modal.classList.remove('isHidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key == 'Escape') {
    close();
  }
});
closeBtn.addEventListener('click', close);
