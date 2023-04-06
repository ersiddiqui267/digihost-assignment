"use strict";

const btnShop = document.querySelector(`.btn-shop`);
const sectionFeatured = document.querySelector(`.main--featured`);
const form = document.querySelector(`form`);
const inpEmail = document.querySelector(`input[type="email"]`);
const alertDiv = document.querySelector(`.alert`);

btnShop.addEventListener(`click`, function () {
  sectionFeatured.scrollIntoView({ behavior: "smooth" });
});

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const email = inpEmail.value;
  if (!email) return;
  const markup = `
        <strong><u>${email}</u></strong> is registered successfully
    `;
  alertDiv.innerHTML = ``;
  alertDiv.insertAdjacentHTML(`afterbegin`, markup);
  alertDiv.classList.remove(`d-none`);

  setTimeout(() => alertDiv.classList.add(`d-none`), 3000);
});
