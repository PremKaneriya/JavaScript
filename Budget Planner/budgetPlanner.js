class Budget {
    constructor() {
        this.budgetInput = document.getElementById("budget-input");
        this.budgetDisplay = document.getElementById("budget");
        this.expenseAmountInner = document.getElementById('expenses');
        this.balanceAmountInner = document.getElementById('balance');
    }

    handleBudgetClick() {
        event.preventDefault();
        // console.log(this.budgetInput.value);

        if (this.budgetInput.value === "") {
            document.getElementById("spanbudget").innerHTML = "Please Enter Budget";
        } else {
            if (isNaN(this.budgetInput.value) || this.budgetInput.value <= 0) {
                document.getElementById("spanbudget").innerHTML =
                    "Please Enter Valid Budget";
            } else {
                document.getElementById("spanbudget").innerHTML = "";

                localStorage.setItem("budget", this.budgetInput.value);

                this.handleBudgetAndExpense();
            }
        }

        this.budgetInput.value = '';
    }

    handleBudgetAndExpense() {
        event.preventDefault();

        let budgetDisp = JSON.parse(localStorage.getItem("budget"));
        let expenseddd = JSON.parse(localStorage.getItem('Expense'))

        if (!(budgetDisp === null)) {
            document.getElementById("budget").innerHTML = "$: " + budgetDisp;
        }

        let expAmount = expenseddd.reduce((acc, val) => acc + parseInt(val.expense_amount), 0)

        if (!(expAmount === null)) {
            document.getElementById('expenses').innerHTML = "$: " + expAmount;
            document.getElementById('balance').innerHTML = "$: " + (budgetDisp - expAmount);

        }

        // this.budgetDisplay.innerHTML = `$: ${budgetDisp}`;
        // this.expenseAmountInner.innerHTML = `$: ${expAmount}`;
        // this.balanceAmountInner.innerHTML = `$: ${budgetDisp - expAmount}`;

    }
}

class Expense extends Budget {
    constructor() {
        super();
        this.expenseTitle = document.getElementById("expense-title");
        this.expenseAmount = document.getElementById("expense-amount");
        this.expenseDisplay = document.getElementById('expenses');
        this.balanceDisplay = document.getElementById('balance');

        this.update = null;
    }

    handleDeleteClick(id) {
        const idDelete = document.getElementById(id);
        idDelete.remove();

        let expenses = JSON.parse(localStorage.getItem('Expense'));
        expenses = expenses.filter(expense => expense.id !== id);
        localStorage.setItem('Expense', JSON.stringify(expenses));

        this.handleBudgetAndExpense();
    }

    handleEditClick(expenseObj) {
        this.expenseTitle.value = expenseObj.expense_title;
        this.expenseAmount.value = expenseObj.expense_amount;

        this.update = expenseObj.id;
    }

    handleDisplayFunc(expenseObj) {
        const dispDiv = document.createElement('div');

        const span1 = document.createElement('span');
        const span2 = document.createElement('span');

        const expenseTit = document.createTextNode(`Title: ${expenseObj.expense_title} , `);
        const expenseAmt = document.createTextNode(`Amount: ${expenseObj.expense_amount}`);

        span1.appendChild(expenseTit);
        span2.appendChild(expenseAmt);

        const editButton = document.createElement('button');
        editButton.setAttribute('id', 'editBtn');
        editButton.textContent = 'E';
        editButton.addEventListener('click', () => {
            this.handleEditClick(expenseObj);
        });

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'deleteBtn');
        deleteButton.textContent = 'D';
        deleteButton.addEventListener('click', () => {
            this.handleDeleteClick(expenseObj.id);
        });

        dispDiv.appendChild(span1);
        dispDiv.appendChild(span2);
        dispDiv.appendChild(editButton);
        dispDiv.appendChild(deleteButton);

        const displayOutput = document.getElementById('displayOutput');
        displayOutput.appendChild(dispDiv);
    }

    handleExpenseClick() {
        event.preventDefault();

        let expenseTitleValidation = true;
        let expenseAmountValidation = true;

        if (this.expenseTitle.value === "") {
            document.getElementById("spantitle").innerHTML = "Please Enter Title";
        } else {
            document.getElementById("spantitle").innerHTML = "";
            expenseTitleValidation = false;
        }

        if (this.expenseAmount.value === "") {
            document.getElementById("spanexpense").innerHTML = "Please Enter Expense";
        } else {
            if (
                isNaN(this.expenseAmount.value) ||
                parseFloat(this.expenseAmount.value) <= 0) {
                document.getElementById("spanexpense").innerHTML =
                    "Please Enter Valid Expense";
            } else {
                document.getElementById("spanexpense").innerHTML = "";
                expenseAmountValidation = false;
            }
        }

        if (!(expenseTitleValidation || expenseAmountValidation)) {
            this.handleBudgetClick();

            let Expense = JSON.parse(localStorage.getItem('Expense'));

            let expenseObj = {
                id: Math.round(Math.random() * 10000),
                expense_title: this.expenseTitle.value,
                expense_amount: parseInt(this.expenseAmount.value)
            }

            if (this.update) {
                let index = Expense.findIndex((v) => v.id === this.update);
                
                Expense[index] = expenseObj;
                
                localStorage.setItem('Expense', JSON.stringify(Expense));

                this.update = null;
            } else {
                if (Expense) {
                    Expense.push(expenseObj)
                    localStorage.setItem('Expense', JSON.stringify(Expense))
    
                } else {
                    localStorage.setItem('Expense', JSON.stringify([expenseObj]))
    
                }
            }


            this.handleBudgetAndExpense();
            this.handleDisplayFunc(expenseObj);
        }


        this.expenseTitle.value = "";
        this.expenseAmount.value = "";

    }

}

const b = new Budget();

const e = new Expense();

const budget_btn = document.getElementById("budget-btn");
budget_btn.addEventListener("click", function () {
    b.handleBudgetClick();
});

const expense_btn = document.getElementById("expense-btn");
expense_btn.addEventListener("click", function () {
    e.handleExpenseClick();
});

window.onload = function () {
    b.handleBudgetAndExpense();

    e.handleDisplayFunc();
};
