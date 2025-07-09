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

// Modal functionality for image gallery

document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('imageGallery');
  if (!gallery) return;

  // Create modal elements
  const modal = document.createElement('div');
  modal.id = 'imgModal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <img class="modal-img" src="" alt="Full Image" />
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.modal-img');
  const backdrop = modal.querySelector('.modal-backdrop');

  // Show modal on image click
  gallery.addEventListener('click', function(e) {
    const img = e.target.closest('img.gallery-img');
    if (!img) return;
    modalImg.src = img.src;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // Hide modal on backdrop click or ESC
  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    document.body.style.overflow = '';
  }
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && e.key === 'Escape') closeModal();
  });
});
