import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency';

function getMoney(response) {
  if (response.conversion_rates) {
   
  } else {
    $('.showErrors').text(`There was an error: ${response.result}`);
  }
}

async function makeTheCall() {
  const response = await CurrencyService.getExchange();
  getElements(response);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let amount = parseInt($("#amount").val());
    console.log(amount);
    console.log(typeof amount);
    let foreign = $("select option:selected").val();
    console.log(foreign);
  });
});