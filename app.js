let totalIncome = 0;
let totalExpense = 0;

function addEntry() {
    const desc = document.getElementById('description').value.trim();
    const amt = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!desc || isNaN(amt) || amt <= 0) {
        alert("Please enter a valid description and positive amount.");
        return;
    }

    const entry = document.createElement('div');
    entry.innerHTML = `<strong>${desc}</strong>: $${amt.toFixed(2)} [${type}]`;
    document.getElementById('transactions').prepend(entry);

    if (type === 'income') {
        totalIncome += amt;
    } else {
        totalExpense += amt;
    }

    updateSummary();
    clearForm();
}

function updateSummary() {
    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
    document.getElementById('balance').textContent = (totalIncome - totalExpense).toFixed(2);
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
