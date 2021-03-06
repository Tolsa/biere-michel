/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')
import 'bootstrap';
import swal from 'sweetalert';

// entryHomeBanner();
addPopupToSubmit();
displayEmails();
scrollNav();
checkEmail();
fillingHiddenForm();
fillHiddenSignUp();

// ------ LISTE DES FUNCTIONS CI DESSOUS //

// function entryHomeBanner () {
//   const homeBanner = document.querySelector('.home-banner')
//   if (homeBanner) {
//     $('.home-banner h1').addClass('animated slideInLeft');
//     $('.home-banner h2').addClass('animated slideInRight');
//     $('.navbar-container').addClass('animated fadeInDown');
//   }
// };

function scrollNav () {
  const whoAreWe = document.getElementById('who-button')
  if (whoAreWe){
    whoAreWe.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#who-are-we').offset().top;
      jQuery('body, html').animate({scrollTop: scrollTo}, 800);
    });
  };

  const beverage = document.getElementById('buy-button')
  if (beverage){
    beverage.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#drink-life').offset().top;
      jQuery('body, html').animate({scrollTop: scrollTo}, 800);
    });
  };

  const brassage = document.getElementById('what-button')
  if (brassage){
    brassage.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#the-lab').offset().top;
      jQuery('body, html').animate({scrollTop: scrollTo}, 800);
    });
  };

  const contact = document.getElementById('contact-button')
  if (contact){
    contact.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#contact').offset().top;
      jQuery('body, html').animate({scrollTop: scrollTo}, 800);
    });
  };
};

function addPopupToSubmit () {
  const boutonSubmit = document.getElementById("inscription")
  const guestFirstname = document.getElementById("guest_firstname")
  const guestLastname = document.getElementById("guest_lastname")
  if (boutonSubmit) {
    boutonSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      if (guestFirstname.value != "" && guestLastname.value != "") {
        const emailField = document.getElementById("guest_email")
        if (emailField.value == "") {
          swal("Oups, pas de mail, essaye encore!", {
          buttons: false,
          className: 'sweetalert-mailcheck',
          timer: 3000,
          });
        }
        else {
          swal("On t'enverra un mail de confirmation, ça te va?", {
            buttons: ["Je ne m'inscris pas", "Ok!"],
            className: 'sweetalert-confirm',
          });
          const OkButton = document.querySelectorAll(".swal-button")[1]
          OkButton.addEventListener("click", (event) => {
            const form = document.querySelector('form')
            setTimeout(form.submit(), 3000);
            const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            const emailField = document.getElementById('guest_email').value
            if (emailField.match(regex)) {
              swal("Ton inscription a bien été prise en compte", {
                buttons: false,
                className: 'sweetalert-confirm-2',
                timer: 2000,
              });
            }
            else {
              swal("Désolé, tu n'as pas bien renseigné tous les champs", {
                buttons: false,
                className: 'sweetalert-confirm-2',
                timer: 2000,
              });
            }
          });
        }
      }
      else {
        swal("Remplis bien tous les champs!", {
            buttons: false,
            className: 'sweetalert-mailcheck',
            timer: 3000,
        });
      }

    });
  };
};

function displayEmails () {
  const mailList = document.querySelector(".export-to-clipboard")
  if (mailList) {
    mailList.addEventListener("click", (event) => {
      event.preventDefault();
      const arrayEmails = [];
      const cellsContent = document.querySelectorAll(".tableau-guests .col-xs-6");
      cellsContent.forEach((cell) => {
        if (cell.innerText.includes("@")) {
          arrayEmails.push(cell.innerText)
        }
      });
      console.log(arrayEmails.join(', '))
      const stringEmails = arrayEmails.join(', ')
      swal(stringEmails, {
        buttons: {
          text: "Clique sur les mails pour tous les sélectionner",
          closeModal: false,
        },
        title: "Liste d'emails pour envoi groupé",
      });
      const selectMails = document.querySelector(".swal-text")
      selectMails.addEventListener("click", (event) => {

        function SelectText(element) {
          let doc = document
          let text = doc.querySelector(element)
          let range
          let selection
          ;
          if (doc.body.createTextRange) {
              range = document.body.createTextRange();
              range.moveToElementText(text);
              range.select();
          } else if (window.getSelection) {
              selection = window.getSelection();
              range = document.createRange();
              range.selectNodeContents(text);
              selection.removeAllRanges();
              selection.addRange(range);
          }
        }
        SelectText('.swal-text')

      });
    });
  };
};

function checkEmail () {
  const emailTarget = document.getElementById('guest_email')
  if (emailTarget) {
    emailTarget.addEventListener("focusout", (event) => {
      const str = emailTarget.value
      const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      if (str.match(regex)) {
        return;
      }
      else {
        swal("Oups, ton mail n'a pas l'air correct! Essaye encore...", {
          buttons: false,
          className: 'sweetalert-mailcheck',
          timer: 2000,
        });
      }
    });
  };
};

function fillingHiddenForm () {
  const popupField1 = document.getElementById('popup-field1')
  const popupField2 = document.getElementById('popup-field2')
  const popupField3 = document.getElementById('popup-field3')
  const contactName = document.getElementById('contact_name')
  const contactEmail = document.getElementById('contact_email')
  const contactMessage = document.getElementById('contact_message')
  const sendPopup = document.getElementById('close-popup')
  if (sendPopup) {
    sendPopup.addEventListener("click", (event) => {
      event.preventDefault();
      console.log('coucou');
      if (popupField3.value != "" && popupField2.value != ""){
        contactMessage.value = popupField3.value
        contactEmail.value = popupField2.value
        contactName.value = popupField1.value
        const form2 = document.getElementById('new_contact')
        swal("Message envoyé!", {
          buttons: false,
          className: 'sweetalert-confirm-2',
        });
        form2.submit();
      }
      else {
        swal("Oups, tu n'as pas rempli tous les champs", {
          buttons: false,
          className: 'sweetalert-mailsent',
          showCancelButton: true,
          showConfirmButton: false,
        });
      }
    });
  }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function fillHiddenSignUp () {
  const email = document.getElementById('js-email-field')
  const saveEmail = document.getElementById('js-save-email')
  const contactEmail = document.getElementById('contact_email')
  if (saveEmail) {
    saveEmail.addEventListener("click", (event) => {
      event.preventDefault();
      console.log('Merci');
      if (email.value != "" && validateEmail(email.value)){
        contactEmail.value = email.value
        const formEmail = document.getElementById('new_contact')
        swal({
          title: "Merci pour ton inscription !",
          text: "Nous revenons vers toi avec des nouvelles fraîches et vivantes !",
          buttons: false,
          className: 'sweetalert-mailadded',
        });
        formEmail.submit();
        email.value = '';
      }
      else {
        swal({
          text: "Oups, tu n'as pas bien rempli ton email",
          buttons: false,
          icon: "error",
          className: 'sweetalert-mailerror',
        });
      }
    });
  }
}



