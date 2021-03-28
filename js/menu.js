(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');

    const isModalClose = refs.modal.classList.contains("is-open");
    const method = isModalClose ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }
})();
