import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency';

function getMoney(response) {
  if (response.conversion_rates) {
   
  } else {
    $('.showErrors').text(`There was an error: ${response.error-type}`);
  }
}

async function callEmUp(city) {
  const response = await CurrencyService.getExchange();
  getElements(response);
}

$(document).ready(function() {
  $('#button').click(function() {
    let myVar = 
    callEmUp();
  });
});