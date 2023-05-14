import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { teamGallery } from './team-gallery.js';
import '../sass/layouts/_gallery-footer.scss';

// import closeModalSvg from '../images/symbol-defs.svg#close';

// const galleryContent = document.querySelector('ul.footer-gallery');

const teamLogoEl = document.querySelector('.js-modal-team');

teamLogoEl.addEventListener('click', onTeamLogoClick);

function onTeamLogoClick(e) {
  e.preventDefault();

  const instance = basicLightbox.create(teamMarkUp(markup(teamGallery)), {
    onShow: () => window.addEventListener('keydown', onEscButton),
    onClose: () => window.removeEventListener('keydown', onEscButton),
  });

instance.show();
const modalCloseBtn = document.querySelector('.js-modal-close');
modalCloseBtn.addEventListener('click', onModalCloseBtnClick);

function onModalCloseBtnClick() {
  instance.close();
}

  function onEscButton(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

function markup(data) {
  return data
    .map(({ original, username, position, git }) => {
      return `<div class="team-box"> <li class="team-member">
      <img class="team-member-img" src="${original}" alt="${username}" />
      <p class="team-member-name">${username}</p>
      <p class="team-member-title">${position}</p>
      <a class="team-member-link" href="${git}">GitHub</a>
    </li></div>`;
    })
    .join('');
}

function teamMarkUp(data) {
  return `<div class="team-wrapper">
    <button class="team-modal-close  js-modal-close" type="button">
    <svg class="close-modal-info" xmlns="http://www.w3.org/2000/svg" width="28" height="28" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 7 7 21M7 7l14 14"/></svg>
    </button>
    <h2 class="team-modal-title">NOVEL DEVS</h2>
    <ul class="team-list">${data}</ul>
  </div>`;
}



// <svg class="close-modal-info" width="24" height="24" alt="button-close-modal-team">
    //     <use class="close-modal-svg"  href="${closeModalSvg}"></use></svg>

// function teamMarkUp(data) {
//   return `<div class="backdrop is-hidden"></div><div class="team-wrapper">
//     <button class="team-modal-close" type="button" js-modal-close>
//       <svg class="close-modal-info" width="24" height="24" alt="button-close-modal-team">
//         <use class="close-modal-svg"  href="./images/symbol-defs.svg#close"></use>
//       </svg>
//     </button>
//     <h2 class="team-modal-title">NOVEL DEVS</h2>
//     <ul class="team-list">${data}</ul>
//   </div></div>`;
// }
