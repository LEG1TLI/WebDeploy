async function loadFeatured() {
  try {
    const res = await fetch('featured.json');
    const data = await res.json();
    const el = document.getElementById('featured-bike');
    const specsEl = document.getElementById('featured-specs'); 
    const titleEl = document.getElementById('featured-title'); 
    const monthEl = document.getElementById('featured-month'); 
    const blurbEl = document.getElementById('featured-blurb'); 

    
    el.innerHTML = ''; 
    specsEl.innerHTML = ''; 

   
    const img = document.createElement('img');
    img.src = data.image; 
    img.alt = data.title; 
    img.className = 'clickable-image';

   
    el.appendChild(img);

   
    titleEl.textContent = data.title; 
    monthEl.textContent = data.month; 
    blurbEl.textContent = data.blurb;

    const specsList = document.createElement('ul');
    data.specs.forEach(spec => {
      const listItem = document.createElement('li');
      listItem.textContent = spec; 
      specsList.appendChild(listItem);
    });
    specsEl.appendChild(specsList); 
  } catch (e) {
    console.error('Error loading featured bike:', e);
  }
}


(function() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;
  const modalImg = modal.querySelector('.modal-image');
  const closeBtn = modal.querySelector('.close');

  // Delegate: open modal when any clickable-image is clicked
  document.addEventListener('click', (e) => {
    const img = e.target.closest('img.clickable-image');
    if (!img) return;
    modalImg.src = img.src;
    modalImg.alt = img.alt || '';
    modal.classList.add('show');          // matches .modal.show in CSS
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    modalImg.src = '';
  }

  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
})();
loadFeatured();
