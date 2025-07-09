window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function () {
    const gallery = document.getElementById('imageGallery');
    const scrollTop = window.scrollY;
  
    if (scrollTop > 100) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });

  
  const images = document.querySelectorAll('.gallery-img');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    document.body.classList.add('scrolled');

    images.forEach((img, i) => {
      img.style.animationDelay = `${i * 0.1}s`;
    });
  } else {
    document.body.classList.remove('scrolled');
    images.forEach(img => img.style.animationDelay = '0s');
  }
});
