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

function addPopupToSubmit () {
  const boutonSubmit = document.getElementById("inscription")
  if (boutonSubmit) {
    boutonSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      swal("On t'enverra un mail de confirmation, ça te va?", {
        buttons: ["J'annule", "J'adhère"],
      });
      const OkButton = document.querySelectorAll(".swal-button")[1]
      OkButton.addEventListener("click", (event) => {
        const form = document.querySelector('form')
        form.submit()
      });

    });
  };
};


addPopupToSubmit();

