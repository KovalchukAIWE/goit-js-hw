export const tamplate = item => {
    return `
      <li class="gallery__item">
         <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
         </a>
      </li>
      `;
  };
  
  const modalWindow = document.querySelector('.js-lightbox');
  const modalImage = document.querySelector('.lightbox__image');
  let onTarget;
  
  export function openModal(e) {
    if (e.target.nodeName !== 'IMG') return;
    e.preventDefault();
    onTarget = e.target;
  
    modalImage.setAttribute('src', e.target.dataset.source);
    modalWindow.classList.add('is-open');
    window.addEventListener('keydown', changeImageInModal);
  }
  
  export function closeModal() {
    modalImage.setAttribute('src', '');
    modalWindow.classList.remove('is-open');
    window.removeEventListener('keydown', changeImageInModal);
  }
  
  function changeImageInModal(e) {
    switch (e.key) {
      case 'ArrowRight':
        if (onTarget.parentNode.parentNode.nextElementSibling) {
          let nextImage =
          onTarget.parentNode.parentNode.nextElementSibling.firstElementChild
              .firstElementChild;
  
          modalImage.setAttribute('src', nextImage.dataset.source);
          onTarget = nextImage;
        }
        break;
      case 'ArrowLeft':
        if (onTarget.parentNode.parentNode.previousElementSibling) {
          let prevImage =
          onTarget.parentNode.parentNode.previousElementSibling
              .firstElementChild.firstElementChild;
  
          modalImage.setAttribute('src', prevImage.dataset.source);
          onTarget = prevImage;
        }
        break;
      case 'Escape':
        closeModal();
        break;
    }
  }