function calculateTip() {
    let totalBill = parseFloat(document.getElementById('totalBill').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (!isNaN(totalBill) && !isNaN(tipPercentage)) {
        let tipAmount = totalBill * (tipPercentage / 100);
        document.getElementById('tipAmount').innerText = 'Propina: $' + tipAmount.toFixed(2);
    } else {
        document.getElementById('tipAmount').innerText = 'Por favor ingrese valores válidos.';
    }
}