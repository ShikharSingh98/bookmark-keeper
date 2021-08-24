const modal = document.getElementById('modal');
const showModal = document.getElementById('add-bookmark-button');
const closeModal = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteName = document.getElementById('website-name');
const websiteUrl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

showModal.addEventListener('click', function () {
  modal.classList.add('show-modal');
  websiteName.focus();
});

closeModal.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});

window.addEventListener('click', function (event) {
  event.target === modal ? modal.classList.remove('show-modal') : false;
});
