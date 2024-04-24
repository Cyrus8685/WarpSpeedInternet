let emailout = localStorage.getItem('email');
let fullname = localStorage.getItem('name');
let addressout = localStorage.getItem('address');
let Commander = localStorage.getItem('Commander');
let Ensign = localStorage.getItem('Ensign');
let Lt = localStorage.getItem('Lt');
let planchoice;

emailout1.textContent = `${emailout}`;
fullname1.textContent = `${fullname}`;
address1.textContent = `${address2}`;

if (Commander) {
plan.textContent = `You Have Chose ${Commander} For Your Plan.`;
planchoice = `${Commander}`;
};
if (Ensign) {
plan.textContent = `You Have Chose ${Ensign} For Your Plan.`;
planchoice = `${Ensign}`;
};
if (Lt){
plan.textContent = `You Have Chose ${Lt} For Your Plan.`;
planchoice = `${Lt}`;
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
           window.location.assign("/html/summary.html");
          }, 1.0 * 1000);
};
