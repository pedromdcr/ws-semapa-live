const employeeSlider = document.getElementById("employee-range");
const employeeValue = document.getElementById("employee-value");
const salarySlider = document.getElementById("salary-range");
const salaryValue = document.getElementById("salary-value");
const savingsAmount = document.getElementById("savings-amount");
const roiFactor = document.getElementById("roi-factor");

function updateResults() {
    const numEmployees = parseInt(employeeSlider.value);
    console.log(numEmployees)
    const avgSalary = parseFloat(salarySlider.value);
    console.log(avgSalary)

    const annualSavings = numEmployees * avgSalary * 0.2; // Your calculation here
    console.log(annualSavings)
    const estimatedROI = (0.016 * avgSalary) / 100;
    console.log(estimatedROI)

    savingsAmount.textContent = annualSavings.toFixed(2);
    roiFactor.textContent = estimatedROI.toFixed(2);
}

employeeSlider.addEventListener("input", () => {
    employeeValue.textContent = employeeSlider.value;
    updateResults();
});

salarySlider.addEventListener("input", () => {
    salaryValue.textContent = "€ " + salarySlider.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    updateResults();
});

// Initial update
updateResults();
