let email = localStorage.getItem('email');
let fullname = localStorage.getItem('name');
let address = localStorage.getItem('address');
let Commander = localStorage.getItem('Commander');
let Ensign = localStorage.getItem('Ensign');
let Lt = localStorage.getItem('Lt');

function changePage() {
    window.location.replace("planspage.html")};

    function changePage2() {
        var Cart = "Cart";
        localStorage.setItem('Cart', Cart.value);
        window.location.replace("summary.html")};

emailout1.textContent = `${email}`;
fullname1.textContent = `${fullname}`;
address1.textContent = `${address}`;

if (Commander) {
plan.textContent = `You Have Chose ${Commander} For Your Plan.`;
}
if (Ensign) {
plan.textContent = `You Have Chose ${Ensign} For Your Plan.`;
}
if (Lt){
plan.textContent = `You Have Chose ${Lt} For Your Plan.`;
}

function sendMail () {

var templateParams = {
    name: `${fullname}`,
    email: `${email}`,
  };
  
  emailjs.send('service_x6enbnf', 'template_ksnbgzk', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}