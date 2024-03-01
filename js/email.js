const formRef = document.querySelector('.email-form');

formRef.addEventListener('submit', e => {
  e.preventDefault();
  sendEmail(e);
});

function sendEmail(e) {
  const email = e.target.elements.email.value;
  const subject = 'New Email Subscription';
  const body = 'You have a new email subscription from: ' + email;

  const mailtoLink =
    'mailto:armagic.agency@gmail.com' +
    '?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
}
