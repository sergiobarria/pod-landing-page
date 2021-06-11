// Get hold of tags
const desktopForm = document.getElementById('desktop-form');
const mobileForm = document.getElementById('mobile-form');
const desktopInput = document.getElementById('desktop-input');
const mobileInput = document.getElementById('mobile-input');
const errorTag = document.getElementById('error-tag');
const errorTagMobile = document.getElementById('error-tag-mobile');

const formValidate = (form, inputTag, tag) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!inputTag.value) {
      tag.classList.remove('hidden');
    } else {
      tag.classList.add('hidden');
    }
  });
};

formValidate(desktopForm, desktopInput, errorTag);
formValidate(mobileForm, mobileInput, errorTagMobile);
