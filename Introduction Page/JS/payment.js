$(document).ready(function () {
const form = document.querySelector('form');
const completePaymentButton = document.getElementById('complete-payment');


$('#complete-payment').click(function (e) {
    e.preventDefault();
  if (form.checkValidity() === false) {
    // Handle invalid form data.
  } else {
    completePaymentButton.value = 'Making payment...';
    completePaymentButton.disabled = 'true';
    // setTimeout(() => {alert('Made payment!');}, 500);
    window.location.href = '../HTML/loading.html';
  }
}); 






});
let amount = sessionStorage.getItem('Price');

function Am(){
    alert('Amount: ' + amount);
    document.getElementById("amount").value = amount;
}