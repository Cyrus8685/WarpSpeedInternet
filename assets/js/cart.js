let emailout = localStorage.getItem('email');
let fullname = localStorage.getItem('name');
let addressout = localStorage.getItem('address');
let Commander = localStorage.getItem('Commander');
let Ensign = localStorage.getItem('Ensign');
let Lt = localStorage.getItem('Lt');
let planchoice = localStorage.getItem('Planchoice');

emailout1.textContent = `${emailout}`;
fullname1.textContent = `${fullname}`;
address1.textContent = `${addressout}`;

if (Commander) {
plan.textContent = `You Have Chose ${Commander} For Your Plan.`;
};
if (Ensign) {
plan.textContent = `You Have Chose ${Ensign} For Your Plan.`;
};
if (Lt){
plan.textContent = `You Have Chose ${Lt} For Your Plan.`;
};

async function sendMail () {

  var templateParams = {
    name: `${fullname}`,
    email: `${emailout}`,
    address: `${addressout}`,
    plans: `${planchoice}`,
  };
  
  emailjs.send('service_x6enbnf', 'template_ksnbgzk', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

  setTimeout(() => {
           window.location.assign("/WarpSpeedInternet/assets/html/summary.html");
          }, 1.0 * 1000);
};
