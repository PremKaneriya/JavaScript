class Budget {
    constructor() {
        this.budgetInput = document.getElementById('budget-input');
    }

    handleBudgetClick() {
        event.preventDefault();
        console.log(this.budgetInput.value);

        if (this.budgetInput.value === '') {
            document.getElementById('spanbudget').innerHTML = 'Please Enter Budget'
        } else {
            if (isNaN(this.budgetInput.value) || this.budgetInput.value <= 0) {
                document.getElementById('spanbudget').innerHTML = 'Please Enter Valid Budget'
            } else {
                document.getElementById('spanbudget').innerHTML = ''
            }
        }


        document.getElementById('budget').innerHTML = "$: " + this.budgetInput.value;
    }


}

class Expense extends Budget {
    constructor() {
        super();
        this.expenseTitle = document.getElementById('expense-title');
        this.expenseAmount = document.getElementById('expense-amount');
    }

    handleExpenseClick() {
        event.preventDefault();
        console.log(this.expenseTitle.value, this.expenseAmount.value);



        if (this.expenseTitle.value === '') {
            document.getElementById('spantitle').innerHTML = 'Please Enter Title';
        } else {
            document.getElementById('spantitle').innerHTML = '';
        }

        if (this.expenseAmount.value === '') {
            document.getElementById('spanexpense').innerHTML = 'Please Enter Expense'
        } else {
            if (isNaN(this.expenseAmount.value) || this.expenseAmount.value <= 0) {
                document.getElementById('spanexpense').innerHTML = 'Please Enter Valid Expense'
            } else {
                document.getElementById('spanexpense').innerHTML = ''
            }
        }

        document.getElementById('expenses').innerHTML = '$: ' + this.expenseAmount.value;

        let total = (this.budgetInput.value - this.expenseAmount.value);

        document.getElementById('balance').innerHTML = "Balance $: " + total;

    }
}


const b = new Budget();

const e = new Expense();

const budget_btn = document.getElementById('budget-btn');
budget_btn.addEventListener('click', function () {
    b.handleBudgetClick();
})

const expense_btn = document.getElementById('expense-btn');
expense_btn.addEventListener('click', function () {
    e.handleExpenseClick();
})