// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const form = document.querySelector('form');
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from being submitted

  const thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = 'Thank you for your message';
  thankYouMessage.style.fontSize = '24px';

  contactPage.innerHTML = ''; // clear the contents of the contact page
  contactPage.appendChild(thankYouMessage);
});
