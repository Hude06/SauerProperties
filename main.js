let run = document.getElementById('run');
let output = document.getElementById('output');

let baths = document.getElementById('baths');

let address = document.getElementById('address');

let beds = document.getElementById('beds');

let price = document.getElementById('price');

let coppy = document.getElementById('coppy');

function addCommaToNumber(input) {
    // Ensure the input is treated as a valid number
    let number = parseFloat(input); // Use parseFloat to handle both integers and decimals
  
    // Return the number with commas added as thousands separators
    return number.toLocaleString();
}

run.addEventListener('click', function() {
    let bath = baths.value;
    let addr = address.value;
    let bed = beds.value;
    let priceV = price.value;
    let price2 = "$" + addCommaToNumber(Number(priceV))

    if (bed == 0) {
        output.innerHTML =  bath + " Bath" + ", Studio"+ " For the low price of only " + price2 + " Per month. Come check out " + addr + " in our LINK IN BIO. " + "Please be very aware of scammers and only contact us there. " + "#sauerproperties #la #apartmentsinla #apartment";
    } else {
        output.innerHTML = bed + " Bed," + bath + " Bath" + " For the low price of only " + price2 + " Per month. Come check out " + addr + " in our LINK IN BIO. " + "Please be very aware of scammers and only contact us there. " + "#sauerproperties #la #apartmentsinla #apartment";
    }
    navigator.clipboard.writeText(output.innerHTML);

})