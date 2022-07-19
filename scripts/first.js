const popup = document.querySelector(".popup");

const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfileCloseButton = document.querySelector(".popup__close-button");
const popupProfileSaveButton = document.querySelector(".popup__button-save");

const formElement = document.querySelector(".popup__profile-edit");

let inputName = document.querySelector(".popup__input-profile-name");
let inputAbout = document.querySelector(".popup__input-profile-about");

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");





function openPopupEditProfile() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
}


function closePopup() {
    popup.classList.remove("popup_opened");
}


profileEditButton.addEventListener("click", openPopupEditProfile);


popupProfileCloseButton.addEventListener("click", closePopup);


function formSubmitHandler(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}


formElement.addEventListener("submit", formSubmitHandler);

