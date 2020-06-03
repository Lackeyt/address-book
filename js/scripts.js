$(document).ready(function() {
  $("button#addContact").click(function(event) {
    event.preventDefault();
    const contactNameInput = $("#contactName").val();
    const emailAddressInput = $("#emailAddress").val();
    const phoneNumberInput = $("#phoneNumber").val();
    const streetAddressInput = $("#streetAddress").val();
    
    if (contactNameInput === "") {
      alert("Contact name cannot be empty");
    } else {
      $("ul#contactsList").append(`<li class="contactHead well"><strong>${contactNameInput}</strong></li>`);
      $("li.contactHead:last-of-type").append(`<p class="contactInfo">Email Address: ${emailAddressInput}<br>Phone Number: ${phoneNumberInput}<br>Street Address: ${streetAddressInput}<br></p>`);
      $("li.contactHead:last-of-type").click(function() {
      $(this).children("p").toggle();
      });
      $("li.contactHead:last-of-type").append(`<p class="delete">Delete Contact?</p>`);
      $("li.contactHead:last-of-type > p.delete").click(function() {
        const deleteConfirm = confirm("Really delete?");
        if (deleteConfirm === true) {
          $(this).parent().remove();
        };
      });
    };
  });
})