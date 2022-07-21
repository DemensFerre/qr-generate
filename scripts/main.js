const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector(".wrapper__form");
const qrInput = form.querySelector(".wrapper__qr-input");
const qrButton = form.querySelector(".wrapper__qr-button");
const qrImg = wrapper.querySelector(".wrapper__qr-code img");

const viewQR = () => {
  const qrInputValue = qrInput.value;

  if (!qrInputValue) return;

  qrButton.innerText = "Создаем QR-код...";

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    qrButton.innerText = "Создать QR-код";
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  viewQR();
});

qrButton.addEventListener("click", viewQR);
