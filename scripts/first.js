const popup = document.querySelector(".popup");

const ProfileEditButton = document.querySelector(".profile__edit-button");
const popupProfileCloseButton = document.querySelector(".popup__close-button");
const popupProfileSaveButton = document.querySelector(".popup__button-save");

const formElement = document.querySelector(".popup__profile-edit");

let InputName = document.querySelector(".popup__input-profile-name");
let InputAbout = document.querySelector(".popup__input-profile-about");

let ProfileName = document.querySelector(".profile__name");
let ProfileAbout = document.querySelector(".profile__about");





function openPopupEditProfile() {
  InputName.value = ProfileName.textContent;
  InputAbout.value = ProfileAbout.textContent;
  popup.classList.add("popup_opened");
}


function closePopup() {
    popup.classList.remove("popup_opened");
}


ProfileEditButton.addEventListener("click", openPopupEditProfile);


popupProfileCloseButton.addEventListener("click", closePopup);


function formSubmitHandler(evt){
    evt.preventDefault();
    ProfileName.textContent = InputName.value;
    ProfileAbout.textContent = InputAbout.value;
    closePopup();
}


formElement.addEventListener("submit", formSubmitHandler);

