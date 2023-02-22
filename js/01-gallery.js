import { galleryItems } from './gallery-items.js';

const {log} = console;
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems
.map((item)=>`<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source=${item.original}
    alt="${item.description}"
  />
</a>
</div>`)
.join('')

const selectPicture=(e)=>{
    e.preventDefault();
    if (e.target.nodeName !== "IMG"){
        return ;
    }
     const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
instance.show()
gallery.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
        instance.close();
          // gallery.removeEventListener('keydown',e) czy to potrzebne?
    }
})

}
gallery.insertAdjacentHTML('beforeend',markup);
gallery.addEventListener('click', selectPicture);