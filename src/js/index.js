"strict mode";

const navControl = () => {
  const openIcon = document.querySelector(".header__icon-open");
  const closeIcon = document.querySelector(".header__icon-close");
  const parentCont = document.querySelector(".header");

  const openHandler = () => {
    parentCont.classList.toggle("open");
  };
  const closeHandler = () => {
    parentCont.classList.toggle("open");
  };
  openIcon.addEventListener("click", openHandler);
  closeIcon.addEventListener("click", closeHandler);
};

navControl();
