const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalAmountDisplay = document.getElementById('totalAmount');
const clearButton = document.getElementById('clearButton');
let totalAmount = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (description && category && !isNaN(amount)) {
        // Add new row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td> 
                            <td>${category}</td>  
                            <td>${amount}</td>`;
        expenseList.appendChild(newRow);

        // Update total amount
        totalAmount += amount;
        totalAmountDisplay.textContent = '₹' + totalAmount.toFixed(2);
        
        // Clear form fields
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert("Please fill out all fields with valid data");
    }
});

// Clear button functionality
clearButton.addEventListener('click', function() {
    // Clear all expenses
    expenseList.innerHTML = '';
    
    // Reset total amount
    totalAmount = 0;
    totalAmountDisplay.textContent = '₹' + totalAmount.toFixed(2);
});
