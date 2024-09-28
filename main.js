// nav and hero Animation is here

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 100
});

sr.reveal('.logo_dragon', { origin: 'left' })
sr.reveal('.nav_links_1', { origin: 'right', distance: '400px' })
sr.reveal('.nav_links_2', { origin: 'right', distance: '400px', delay: 100 })
sr.reveal('.nav_links_3', { origin: 'right', distance: '400px', delay: 300 })
sr.reveal('.nav_links_4', { origin: 'right', distance: '400px', delay: 500 })
sr.reveal('.nav_links_5', { origin: 'right', distance: '400px', delay: 700 })
sr.reveal('#middle', { origin: 'bottom', distance: '400px', delay: 100 })
sr.reveal('#left', { origin: 'left', distance: '400px', delay: 1800 })
sr.reveal('#right', { origin: 'right', distance: '400px', delay: 1600 })
sr.reveal('.description_logo', { origin: 'right', distance: '1000px' })
sr.reveal('.description_text', { origin: 'bottom', delay: 100 })
sr.reveal('.description_btn')
sr.reveal('.ticket_title')

sr.reveal('.event4_region', { origin: 'right', distance: '400px', delay: 400 })
sr.reveal('.event3_region', { origin: 'right', distance: '400px', delay: 100 })
sr.reveal('.event2_region', { origin: 'left', distance: '400px', delay: 100 })
sr.reveal('.event1_region', { origin: 'left', distance: '400px', delay: 400 })


sr.reveal('.title_aboutsection', { origin: 'right', distance: '500px', delay:0 })


sr.reveal('.aboutushead')
sr.reveal('.about_img')
sr.reveal('.abouttext')


// on hover image description is here

const hero_des = document.querySelector('#middle');

hero_des.addEventListener('mouseenter', () => {
  document.querySelector('.drag_btn_hover').classList.toggle('invisible')
  console.log('hddd');
  
});

hero_des.addEventListener('mouseleave', () => {
  document.querySelector('.drag_btn_hover').classList.toggle('invisible')
  console.log("hee");
  
});

// ------------------------------------------------




// on hover image description is here


const drag_but_l = document.querySelector('#left_img')
const drag_but_r = document.querySelector('#right_img');

drag_but_l.addEventListener('click', (e) => {

  const l_dragon = drag_but_l.getAttribute('src')
  const main_drag = document.querySelector('#main_img');
  const main_url = main_drag.getAttribute('src')

  main_drag.setAttribute('src', l_dragon);
  drag_but_l.setAttribute('src', main_url);
  console.log(main_url);

});

drag_but_r.addEventListener('click', (e) => {

  const r_dragon = drag_but_r.getAttribute('src')
  const main_drag = document.querySelector('#main_img');
  const main_url = main_drag.getAttribute('src')

  main_drag.setAttribute('src', r_dragon);
  drag_but_r.setAttribute('src', main_url);
  console.log(main_url);

});







/* ---- particles.js config ---- */


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#F3FDE8"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#FA7070"
      },
      "polygon": {
        "nb_sides": 1
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0,
      "random": false,
      "anim": {
        "enable": true,
        "speed": .5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#F3FDE8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    },

  },

  "retina_detect": true
});

// ----------------------------------------------------------------------


// read more funcationality


const know_more_btn = document.querySelector('.description_btn');
know_more_btn.addEventListener('click', readmore)

function readmore() {
  const moreText = document.querySelector('.more_text');

  if (moreText.classList.contains('hidden')) {

    know_more_btn.innerHTML = `Know less <i class="fa-solid fa-arrow-right " style="color: #000000;"></i>`;
    moreText.classList.remove('hidden');

  } else {

    know_more_btn.innerHTML = `Read more <i class="fa-solid fa-arrow-right " style="color: #000000;"></i>`;
    moreText.classList.add('hidden')
  }
}

// --------------------------------------------------------------------------------





//  more location funcationality


const location_btn = document.querySelector('.location_btn');
location_btn.addEventListener('click', morelocation)

function morelocation() {
  const event_card_hide = document.querySelector('#event_card_hide')

  if (event_card_hide.classList.contains('hidden')) {

    location_btn.innerHTML = `show less <i class="fa-solid fa-arrow-right " style="color: #000000;"></i>`;
    event_card_hide.classList.remove('hidden');
    event_card_hide.classList.add('flex')


  } else {

    location_btn.innerHTML = ` more locations <i class="fa-solid fa-arrow-right " style="color: #000000;"></i>`;
    event_card_hide.classList.remove('flex');
    event_card_hide.classList.add('hidden');

  }
}

// --------------------------------------------------------------------------------