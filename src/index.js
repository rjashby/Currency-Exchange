import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency';

function getMoney(response) {
  let amount = parseInt($("#amount").val()).toFixed(2);
  let foreign = $("select option:selected").val();
  let country = $("select option:selected").text();
  if (response.conversion_rates) {
    if (foreign === "AZN") {
      let converted = `${response.conversion_rates.AZN}`;
      let final = (amount * converted).toFixed(2);
      $('.output').text(`Your ${amount} US Dollars are worth ${final} ${country}`);
    } else if (foreign === "CDF") {
      let converted = `${response.conversion_rates.CDF}`;
      let final = (amount * converted).toFixed(2);
      $('.output').text(`Your ${amount} US Dollars are worth ${final} ${country}`);
    } else if (foreign === "FJD") {
      let converted = `${response.conversion_rates.FJD}`;
      let final = (amount * converted).toFixed(2);
      $('.output').text(`Your ${amount} US Dollars are worth ${final} ${country}`);
    } else if (foreign === "HRK") {
      let converted = `${response.conversion_rates.HRK}`;
      let final = (amount * converted).toFixed(2);
      $('.output').text(`Your ${amount} US Dollars are worth ${final} ${country}`);
    } else if (foreign === "MVR") {
      let converted = `${response.conversion_rates.MVR}`;
      let final = (amount * converted).toFixed(2);
      $('.output').text(`Your ${amount} US Dollars are worth ${final} ${country}`);
    } else if (foreign === "TRY") {
      let converted = `${response.conversion_rates.TRY}`;
      let final = (amount * converted).toFixed(2);
      $('.output').text(`Your ${amount} US Dollars are worth ${final} ${country}`);
    }
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.result}`);
  }
}

async function makeTheCall() {
  const response = await CurrencyService.getExchange();
  getMoney(response);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    makeTheCall();
  });
});