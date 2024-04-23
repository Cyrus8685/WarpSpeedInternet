var email = localStorage.getItem('email');

var fullname = localStorage.getItem('name');

// Display the email on the summary page
if (email) {
    emailoutput2.textContent = `${email}`;
}

if (fullname) {
    fullnameoutput2.textContent = `${fullname}`;
}
