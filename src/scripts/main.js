'use strict';

import fullpage from '../../node_modules/fullpage.js/dist/fullpage';
import { TimelineMax } from '../../node_modules/gsap/all';

new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  responsiveWidth: 1024,
  afterRender: function () {
    const timeLine = new TimelineMax({ delay: 0.5 });

    const logo = document.querySelector('.header__logo');
    const navs = document.querySelectorAll('.nav__item');
    const promoTitle = document.querySelector('.promo__content-title');
    const promoText = document.querySelector('.promo__content-text');
    const promoAnchor = document.querySelector('.promo__content-anchor');
    const promoImg = document.querySelector('.promo__video-img');
    const promoBtn = document.querySelector('.promo__video-content');

    if (window.innerWidth > 1024) {
      timeLine.fromTo(logo, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(navs[0], { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(navs[1], { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(navs[2], { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(promoTitle, { x: '-50', opacity: 0 }, { x: 0, opacity: 1 }, '1')
        .fromTo(promoText, 0.3, { x: '-50', opacity: 0 }, { x: 0, opacity: 1 }, '1.2')
        .fromTo(promoAnchor, 0.3, { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(promoImg, 0.2, { opacity: 0 }, { opacity: 1 }, '1.5')
        .fromTo(promoBtn, 0.3, { opacity: 0 }, { opacity: 1 }, '1.8');
    } else {
      return;
    }
  },
  onLeave: (origin, destination, direction) => {
    const timeLine = new TimelineMax({ delay: 0.5 });

    //the first section
    const logo = document.querySelector('.header__logo');
    const navs = document.querySelectorAll('.nav__item');
    const promoTitle = document.querySelector('.promo__content-title');
    const promoText = document.querySelector('.promo__content-text');
    const promoAnchor = document.querySelector('.promo__content-anchor');
    const promoImg = document.querySelector('.promo__video-img');
    const promoBtn = document.querySelector('.promo__video-content');

    if (destination.index === 0) {
      if (window.innerWidth > 1024) {
        timeLine.fromTo(logo, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(navs[0], { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(navs[1], { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(navs[2], { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(promoTitle, { x: '-50', opacity: 0 }, { x: 0, opacity: 1 }, '1')
          .fromTo(promoText, 0.3, { x: '-50', opacity: 0 }, { x: 0, opacity: 1 }, '1.2')
          .fromTo(promoAnchor, 0.3, { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(promoImg, 0.2, { opacity: 0 }, { opacity: 1 }, '1.5')
          .fromTo(promoBtn, 0.3, { opacity: 0 }, { opacity: 1 }, '1.8');
      } else {
        return;
      }
    }

    //the second section
    const advantagesImg = document.querySelector('.advantages__img');
    const advantagesRazorText = document.querySelector('.advantages__razor');

    const advantagesDesignSubtitle = document.querySelector('.advantages__design-subtitle');
    const advantagesDesignTitle = document.querySelector('.advantages__design-title');
    const advantagesDesignText = document.querySelector('.advantages__design-text');
    const advantagesDesignItems = document.querySelectorAll('.advantages__design-item');

    const advantagesModelTitle = document.querySelector('.advantages__model-title');
    const advantagesModelText = document.querySelector('.advantages__model-text');
    const advantagesModelPoint = document.querySelector('.advantages__model-point');
    const advantagesModelBtns = document.querySelectorAll('.advantages__model-btn');
    const advantagesModelImg = document.querySelector('.advantages__model-imgs');

    if (destination.index === 1) {
      if (window.innerWidth > 1024) {
        timeLine.fromTo(advantagesImg, { opacity: 0 }, { opacity: 1 })
          .fromTo(advantagesRazorText, { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '0.5')
          .fromTo(advantagesDesignSubtitle, { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '0.5')
          .fromTo(advantagesDesignTitle, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(advantagesDesignText, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(advantagesDesignItems[0], { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(advantagesDesignItems[1], { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(advantagesDesignItems[2], { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(advantagesModelTitle, { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '1.5')
          .fromTo(advantagesModelText, { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '2')
          .fromTo(advantagesModelPoint, { opacity: 0 }, { opacity: 1 }, '4')
          .fromTo(advantagesModelBtns[0], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '2')
          .fromTo(advantagesModelBtns[1], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '2.4')
          .fromTo(advantagesModelBtns[2], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '2.8')
          .fromTo(advantagesModelBtns[3], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '3.2')
          .fromTo(advantagesModelBtns[4], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '3.6')
          .fromTo(advantagesModelImg, { x: '200%' }, { x: '0' }, '4');
      } else {
        return;
      }

    }

    //the third section
    const featuresTitle = document.querySelector('.features__content-title');
    const featuresText = document.querySelector('.features__content-text');
    const featuresItems = document.querySelectorAll('.features__content-item');
    const featuresModes = document.querySelectorAll('.features__mode');
    const featuresImg = document.querySelector('.features__video-img');
    const featuresVideoTitle = document.querySelector('.features__video-content');

    if (destination.index === 2) {
      if (window.innerWidth > 1024) {
        timeLine.fromTo(featuresTitle, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(featuresText, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(featuresItems[0], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '1')
          .fromTo(featuresItems[1], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '1.2')
          .fromTo(featuresModes[0], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '1.5')
          .fromTo(featuresModes[1], { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, '1.8')
          .fromTo(featuresImg, { opacity: 0 }, { opacity: 1 }, '1')
          .fromTo(featuresVideoTitle, { opacity: 0 }, { opacity: 1 }, '1.5');
      } else {
        return;
      }
    }

    //the fourth section
    const forWhomTitle = document.querySelector('.forWhom__content-title');
    const forWhomText = document.querySelector('.forWhom__content-text');
    const forWhomBtn = document.querySelector('.forWhom__content-btn');
    const forWhomImg = document.querySelector('.forWhom__img');

    if (destination.index === 3) {
      if (window.innerWidth > 1024) {
        timeLine.fromTo(forWhomTitle, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(forWhomText, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(forWhomBtn, { opacity: 0 }, { opacity: 1 }, '1')
          .fromTo(forWhomImg, { opacity: 0 }, { opacity: 1 }, '0.5');
      } else {
        return;
      }
    }
  },
});

function modal() {
  const modalBtns = document.querySelectorAll('.modal--btn');
  const modal = document.querySelector('.modal');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('open');
    });
  });

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      modal.classList.remove('open');
    }
  });
}

modal();

function tabs() {
  const imgs = document.querySelectorAll('.advantages__model-img');
  const btns = document.querySelectorAll('.advantages__model-btn');
  const containerBtn = document.querySelector('.advantages__model-container');

  containerBtn.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    if (id) {
      btns.forEach(btn => {
        btn.classList.remove('active');
        event.target.classList.add('active');
      });

      imgs.forEach(img => {
        img.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

tabs();

function flyingLetters() {
  let flyingTextBr = document.querySelectorAll('.flying--textBr');
  let flyingText = document.querySelectorAll('.flying--text');

  flyingTextBr.forEach(item => {
    item.innerHTML = item.innerHTML.trim().split('').map(item => item === ' ' ? '<br>' : `<span>${item}</span>`).join('');
  });

  flyingText.forEach(item => {
    item.innerHTML = item.innerHTML.trim().split('').map(item => item === ' ' ? ' ' : `<span>${item}</span>`).join('');
  });
}

flyingLetters();

function mobileMenu() {
  const menuBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.nav-Mobile');
  const menuItems = document.querySelectorAll('.nav-Mobile__link');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__burger-active');
    menu.classList.toggle('nav-Mobile--active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('nav-Mobile--active');
      menuBtn.classList.remove('header__burger-active');
    });
  });
}

mobileMenu()
