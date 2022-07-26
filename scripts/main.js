const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector(".wrapper__form");
const qrInput = form.querySelector(".wrapper__qr-input");
const qrButton = form.querySelector(".wrapper__qr-button");
const qrImg = wrapper.querySelector(".wrapper__qr-code img");
const radioButtons = form.querySelectorAll(".radio__input");

const viewQR = () => {
  const qrInputValue = qrInput.value;

  let radioValue;

  if (!qrInputValue) return;

  qrButton.innerText = "Создаем QR-код...";

  for (let item of radioButtons) {
    if (item.checked) {
      radioValue = item.value;
    }
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${radioValue}x${radioValue}&data=${qrInputValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    qrButton.innerText = "Создать QR-код";
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  viewQR();
});

qrInput.addEventListener("input", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
