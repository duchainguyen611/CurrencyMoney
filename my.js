function convertMoney(){
    let amount = document.getElementById('amount').value;
    let fromCurrent = document.getElementById('from-currency').value;
    let toCurrent = document.getElementById('to-currency').value;

    result = amount * toCurrent / fromCurrent;

    document.getElementById('result').innerHTML = "Result: " + result;

}