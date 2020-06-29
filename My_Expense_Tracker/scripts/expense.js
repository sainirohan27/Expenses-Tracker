
function deleteExpense(currentNode) {
    
    var nodeRemove = currentNode.parentNode.parentNode;

    nodeRemove.remove();
}


function addExpense(currentNode) {
    var alertName = document.getElementById("expense-form-alert-name");
    var alertAmount = document.getElementById("expense-form-alert-amount");

    var expenseName = document.getElementById("expense-form-name").value;
    var expenseCategory = document.getElementById("expense-form-category").value;
    var expenseAmount = Number(document.getElementById("expense-form-amount").value);
    var expenseDescription = document.getElementById("expense-form-description").value;
    var expenseList = document.getElementById("expense-list");

    alertName.innerHTML = "";
    alertAmount.innerHTML = "";

    if (expenseName == "" && Number.isNaN(expenseAmount)) {
        alertName.innerHTML = "Name is required";
        alertAmount.innerHTML = "Amount is invalid";
        return;
    }
    else if (expenseName == "") {
        alertName.innerHTML = "Name is required";
        return;
    }
    else if (Number.isNaN(expenseAmount)) {
        alertAmount.innerHTML = "Amount is invalid";
        return;
    }

  
    var amount = expenseAmount.toFixed(2);

    
    console.log("Expense Name: " + expenseName);
    console.log("Expense Category: " + expenseCategory);
    console.log("Expense Amount: " + expenseAmount);
    console.log("Expense Description: " + expenseDescription);

    var addElement = `
    <article class="media">
        <div class="media-content">
            <p>
                <strong id="expense-name">${expenseName}</strong> <small id="expense-category">${expenseCategory}</small>
            <br>
            <p id="expense-description">${expenseDescription}</p>
        </p>
        </div>
        <div class="media-right">
            <strong id="expense-amount">₹${amount}</strong>
        </div>
        <div class="media-right">
            <button class="delete" id="button-delete" onclick="deleteExpense(this)"></button>
        </div>
    </article>
    `;

    expenseList.innerHTML += addElement;
}