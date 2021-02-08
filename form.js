document.addEventListener("DOMContentLoaded", () => {
  // initialise contact form
  var contactForm = document.getElementById("contact-form");

  // initialise input elements
  const lastName = document.getElementById("lname");
  const firstName = document.getElementById("fname");
  const phone = document.getElementById("telephone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  contactForm.onsubmit = (event) => {
    // prevent reloading the page
    event.preventDefault();

    // get input values
    const lastNameValue = lastName.value;
    const firstNameValue = firstName.value;
    const phoneValue = phone.value;
    const emailValue = email.value;
    const messageValue = message.value;

    // validate inputs
    const validated = validate(
      lastNameValue,
      firstNameValue,
      phoneValue,
      emailValue
    );

    if (validated[0] && validated[1] && validated[2] && validated[3]) {
      // show pop up message
      console.log("ALL VALID!!!");
      document.getElementById("overlay").style.display = "block";
      document.getElementById("pop-up-message").style.display = "block";

      // clear invalid inputs
      lastName.style.border = "#c5cad0";
      firstName.style.border = "#c5cad0";
      phone.style.border = "#c5cad0";
      email.style.border = "#c5cad0";

      // print out user inputs to the console
      console.log("Last name: " + lastNameValue);
      console.log("First name: " + firstNameValue);
      console.log("Telephone: " + phoneValue);
      console.log("Email: " + emailValue);
      console.log("Message: " + messageValue);
    } else {
      // show error
      if (!validated[0]) {
        lastName.style.border = "2px solid red";
      }
      if (!validated[1]) {
        firstName.style.border = "2px solid red";
      }
      if (!validated[2]) {
        phone.style.border = "2px solid red";
      }
      if (!validated[3]) {
        email.style.border = "2px solid red";
      }
    }
  };

  // close button
  const closeButton = document.getElementById("close-button");
  closeButton.onclick = (event) => {
    document.getElementById("pop-up-message").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    contactForm.reset();
  };
});

function validate(lastNameValue, firstNameValue, phoneValue, emailValue) {
  // validate last name & first name
  var nameRE = /^[a-z ,.'-]+$/i;
  var lnameResult = nameRE.test(lastNameValue);
  var fnameResult = nameRE.test(firstNameValue);

  // validate phone
  var phoneRE = /^[0-9]{10}$/;
  var phoneResult = phoneRE.test(phoneValue);

  // validate email
  var emailRE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  var emailResult = emailRE.test(emailValue);

  return [lnameResult, fnameResult, phoneResult, emailResult];
}
