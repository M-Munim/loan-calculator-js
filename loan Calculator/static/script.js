function calculate() {
    loanAmountValue = document.getElementById("loan-amount").value
    interestRateValue = document.getElementById("interest-rate").value
    monthsToPay = document.getElementById("months-to-pay").value

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPay

    monthlyPayment = (loanAmountValue / monthsToPay + interest).toFixed(3)

    document.getElementById("payment").innerHTML = `Monthly Payment ${monthlyPayment}`



}