import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency';

function getMoney(response) {
  let amount = parseFloat($("#amount").val()).toFixed(2);
  let outputAmount = parseFloat($("#amount").val()).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let foreign = $("select option:selected").val();
  let country = $("select option:selected").text();
  if (response.result === "success") {
    if (foreign === "AZN") {
      let converted = `${response.conversion_rates.AZN}`;
      let final = (amount * converted).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.results').text(`Your 💲${outputAmount} US Dollars are worth 💵 💴 ${final} ${country} 💶 💷`);
    } else if (foreign === "CDF") {
      let converted = `${response.conversion_rates.CDF}`;
      let final = (amount * converted).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.results').text(`Your 💲${outputAmount} US Dollars are worth 💵 💴 ${final} ${country} 💶 💷`);
    } else if (foreign === "FJD") {
      let converted = `${response.conversion_rates.FJD}`;
      let final = (amount * converted).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.results').text(`Your 💲${outputAmount} US Dollars are worth 💵 💴 ${final} ${country} 💶 💷`);
    } else if (foreign === "HRK") {
      let converted = `${response.conversion_rates.HRK}`;
      let final = (amount * converted).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.results').text(`Your 💲${outputAmount} US Dollars are worth 💵 💴 ${final} ${country} 💶 💷`);
    } else if (foreign === "MVR") {
      let converted = `${response.conversion_rates.MVR}`;
      let final = (amount * converted).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.results').text(`Your 💲${outputAmount} US Dollars are worth 💵 💴 ${final} ${country} 💶 💷`);
    } else if (foreign === "TRY") {
      let converted = `${response.conversion_rates.TRY}`;
      let final = (amount * converted).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.results').text(`Your 💲${outputAmount} US Dollars are worth 💵 💴 ${final} ${country} 💶 💷`);
    } else {
      $('.results').text(`There was an error processing your request: 🤷🏼‍♂️ Currency Not Found 🤷🏾‍♀️`);
    }
  } else {
    $('.results').text(`There was an error processing your request: ${response["error-type"]}`);
  }
}

async function makeTheCall() {
  const response = await CurrencyService.getExchange();
  getMoney(response);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    if (isNaN(parseFloat($("#amount").val()))) {
      $('.output').text(`🚫 Please Enter a Number 🚫`);
    } else {
      makeTheCall();
    }
    $(".output").fadeIn();
  });
});