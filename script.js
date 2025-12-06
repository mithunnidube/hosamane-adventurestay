document.addEventListener("DOMContentLoaded", () => {

  // drag slider code -----------------
  const track = document.querySelector('.smooth-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  const items = document.querySelectorAll('.item');
  const itemWidth = items[0].offsetWidth + 15; // width + gap
  const maxIndex = items.length - 1;

  // BUTTON CONTROLS
  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) currentIndex++;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    updateSlider();
  });

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // DRAG / SWIPE
  let startX = 0;
  let scrollLeft = 0;
  let isDragging = false;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollLeft = currentIndex * itemWidth;
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const walk = (startX - e.pageX);
    track.style.transform = `translateX(-${scrollLeft + walk}px)`;
  });

  track.addEventListener('mouseup', (e) => {
    isDragging = false;
    let moved = startX - e.pageX;

    if (moved > 50 && currentIndex < maxIndex) currentIndex++;
    if (moved < -50 && currentIndex > 0) currentIndex--;

    updateSlider();
  });

  // TOUCH SUPPORT
  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    scrollLeft = currentIndex * itemWidth;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const walk = (startX - e.touches[0].clientX);
    track.style.transform = `translateX(-${scrollLeft + walk}px)`;
  });

  track.addEventListener('touchend', (e) => {
    isDragging = false;
    const moved = startX - e.changedTouches[0].clientX;

    if (moved > 50 && currentIndex < maxIndex) currentIndex++;
    if (moved < -50 && currentIndex > 0) currentIndex--;

    updateSlider();
  });

});



// const menuToggle = document.getElementById('menuToggle');
// const navLinks = document.getElementById('navLinks');

// menuToggle.addEventListener('click', function () {
//   menuToggle.classList.toggle('active');
//   navLinks.classList.toggle('active');
// });

// // Close menu when clicking a link
// document.querySelectorAll('.nav-link').forEach(link => {
//   link.addEventListener('click', function () {
//     navLinks.classList.remove('active');
//     menuToggle.classList.remove('active');
//   });
// });


// review----------- 
document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------------------------
       SLIDER
    ------------------------------------------------ */
    const track = document.querySelector(".review-track");
    const cards = document.querySelectorAll(".review-card");
    const prevBtn = document.querySelector(".r-prev");
    const nextBtn = document.querySelector(".r-next");

    let currentIndex = 0;
    const step = 280;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * step}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < cards.length - 1) currentIndex++;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) currentIndex--;
        updateSlider();
    });

    /* ------------------------------------------------
       READ MORE FUNCTION
    ------------------------------------------------ */
    document.querySelectorAll(".read-more").forEach(btn => {
        btn.addEventListener("click", () => {
            let text = btn.previousElementSibling;

            text.classList.toggle("expanded");

            if (text.classList.contains("expanded")) {
                btn.textContent = "Read less";
            } else {
                btn.textContent = "Read more";
            }
        });
    });

    /* ------------------------------------------------
       DRAG / SWIPE
    ------------------------------------------------ */
    let startX = 0;
    let isDown = false;
    let movedX = 0;

    track.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        movedX = startX - e.touches[0].clientX;
        track.style.transform = `translateX(-${currentIndex * step + movedX}px)`;
    });

    track.addEventListener("touchend", () => {
        isDown = false;
        if (movedX > 50 && currentIndex < cards.length - 1) currentIndex++;
        if (movedX < -50 && currentIndex > 0) currentIndex--;
        updateSlider();
    });
});

// review---------close 

// visitor ---------- 


  const visitorsCarousel = document.getElementById('visitorsCarousel');
  const visitorsPrevBtn = document.getElementById('visitorsPrevBtn');
  const visitorsNextBtn = document.getElementById('visitorsNextBtn');

  // How much to scroll on each button click
  const scrollAmount = 300;

  visitorsPrevBtn.addEventListener('click', () => {
    visitorsCarousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  visitorsNextBtn.addEventListener('click', () => {
    visitorsCarousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Smooth drag with mouse (desktop)
  let isDown = false;
  let startX;
  let scrollLeftStart;

  visitorsCarousel.addEventListener('mousedown', (e) => {
    isDown = true;
    visitorsCarousel.classList.add('is-dragging');
    startX = e.pageX - visitorsCarousel.offsetLeft;
    scrollLeftStart = visitorsCarousel.scrollLeft;
  });

  visitorsCarousel.addEventListener('mouseleave', () => {
    isDown = false;
    visitorsCarousel.classList.remove('is-dragging');
  });

  visitorsCarousel.addEventListener('mouseup', () => {
    isDown = false;
    visitorsCarousel.classList.remove('is-dragging');
  });

  visitorsCarousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - visitorsCarousel.offsetLeft;
    const walk = (x - startX) * 1.4; // drag speed
    visitorsCarousel.scrollLeft = scrollLeftStart - walk;
  });

  // Optional: make cursor change while dragging
  visitorsCarousel.addEventListener('mousedown', () => {
    visitorsCarousel.style.cursor = 'grabbing';
  });
  visitorsCarousel.addEventListener('mouseup', () => {
    visitorsCarousel.style.cursor = 'grab';
  });
  visitorsCarousel.addEventListener('mouseleave', () => {
    visitorsCarousel.style.cursor = 'grab';
  });

  // Touch devices already support scroll/drag by default,
  // so we don’t need extra touch events here.


// visitor close------------- 


// Navbar scroll effect
// Navbar

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// open / close sidebar
menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
};

// Close menu when clicking any link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
