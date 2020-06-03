$(document).ready(function() {
  $("button#addContact").click(function(event) {
    event.preventDefault();
    const contactNameInput = $("#contactName").val();
    const emailAddressInput = $("#emailAddress").val();
    const phoneNumberInput = $("#phoneNumber").val();
    const streetAddressInput = $("#streetAddress").val();

    $("ul#contactsList").append("<li><span class='contactNameInput'></span></li>");
    $('.contactNameInput').text(contactNameInput);
  })

})