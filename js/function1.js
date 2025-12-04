(function () {
      const modal = document.getElementById('image-modal');
      const modalImg = modal.querySelector('.modal-image');
      const closeBtn = modal.querySelector('.close');

      function openModal(src, alt) {
        modalImg.src = src;
        modalImg.alt = alt || '';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        modalImg.src = '';
      }

      document.addEventListener('click', (e) => {
        const img = e.target.closest('img.clickable-image');
        if (img) {
          e.preventDefault();
          openModal(img.src, img.alt);
        }
      });

      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); 
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
      });
    })();