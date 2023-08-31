document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateTip);
});

function isValidServiceQuality(serviceQuality) {
    const validQualities = ['great', 'ok', 'poor'];
    return validQualities.includes(serviceQuality.toLowerCase());
}

function isValidServiceAmount(serviceAmount) {
    return serviceAmount >= 5 && serviceAmount <= 500;
}

function calculateTipAmount(serviceAmount, serviceQuality) {
    let tipPercentage;

    switch(serviceQuality.toLowerCase()) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
        default:
            return null;
    }

    return serviceAmount * tipPercentage;
}

function calculateTip() {
    const serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));

    if (!isValidServiceAmount(serviceAmount)) {
        alert("Please enter a valid service amount between $5.00 and $500.00");
        return;
    }

    const serviceQuality = prompt("Was the service quality 'great', 'ok', or 'poor'?");

    if (!isValidServiceQuality(serviceQuality)) {
        alert("Please enter a valid service quality: 'great', 'ok', or 'poor'");
        return;
    }

    const tipAmount = calculateTipAmount(serviceAmount, serviceQuality);

    alert(`For a service amount of $${serviceAmount.toFixed(2)}, a ${serviceQuality} service quality suggests a tip of $${tipAmount.toFixed(2)}.`);
}
