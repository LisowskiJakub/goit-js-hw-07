import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const markup = ` <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.original}" data-source="${item.original}" alt="${item.description}"/>
    </a>
    </div>`

    gallery.insertAdjacentHTML('beforeend', markup);

}
)
gallery.addEventListener('click', e => {
    e.preventDefault();
    const selectedImg = e.target.getAttribute('src');


    const instance = basicLightbox.create(`
    <img src='${selectedImg}' width="800" height="600">
`)
    instance.show()
    
    
    gallery.addEventListener('keydown', e => {
        if (e.key == "Escape") {
            instance.close();
        }
    });
})
    








// const galleryItem = document.createElement('div');
// galleryItem.className = 'gallery__item';
// const galleryLink = document.createElement('a');
// galleryLink.className = 'gallery__link';
// galleryLink.href = item.original;
// const galleryImg = document.createElement('img');
// galleryImg.className = 'gallery__img';
// galleryImg.src = 'item.original';
// galleryImg.dataset['data-source'] = 'item.original';
// galleryImg.alt = item.description;