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


addPopupToSubmit();
displayEmails();
scrollNav();
checkEmail();
contactUs();
closeContact();

// ------ LISTE DES FUNCTIONS CI DESSOUS //

function scrollNav () {
  const whoAreWe = document.getElementById('who-button')
  if (whoAreWe){
    whoAreWe.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#who-are-we').offset().top;
      jQuery('body, html').animate({scrollTop: scrollTo}, 800);
    });
  };

  const brassage = document.getElementById('what-button')
  if (brassage){
    brassage.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#the-brew').offset().top;
      jQuery('body, html').animate({scrollTop: scrollTo}, 800);
    });
  };

  const degustation = document.getElementById('when-button')
  if (degustation){
    degustation.addEventListener("click", (event) => {
      event.preventDefault();
      var scrollTo = jQuery('#tasting').offset().top;
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
            buttons: ["J'annule", "J'adhère"],
            className: 'sweetalert-confirm',
          });
          const OkButton = document.querySelectorAll(".swal-button")[1]
          OkButton.addEventListener("click", (event) => {
            const form = document.querySelector('form')
            setTimeout(form.submit(), 4000);
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


function contactUs () {
  const contactButton = document.querySelector('.contact-button')
  const contactPopup = document.getElementById('contact-popup')
  if (contactButton) {
    contactButton.addEventListener("click", (event) =>{
      contactPopup.style["opacity"] = 1;
      if (contactPopup.style["opacity"] == 1) {
        contactPopup.style.display = "unset";
        contactPopup.style["z-index"] = '100';
      }
    });
  }
}


function closeContact (){
  const closeContactCross = document.querySelector('.close-btn')
  const contactPopup = document.getElementById('contact-popup')
  if (closeContactCross) {
    closeContactCross.addEventListener("click", (event) => {
      if ($('#contact-popup').css('opacity') == 1){


          $('#contact-popup').animate({opacity:0}, 700);
          setTimeout(function() {
            contactPopup.style.display='none';
            contactPopup.style["z-index"] = '-50';}, 1000);
      }

    })
  }
}







