const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const expense = document.querySelector("#expense");
const category = document.querySelector("#category");
const expenseQuantity = document.querySelector("aside header p span");
const expenseList = document.querySelector("ul");
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  value = Number(value) / 100;

  amount.value = formatCurrencyBRL(value);
};

form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    categoryId: category.value,
    categoryName: category.options[category.selectedIndex].text,
    amount: amount.value,
    creatAt: new Date(),
  };
  expenseAdd(newExpense);
};

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return value;
}

function expenseAdd(newExpense) {
  try {
    const expenseItem = document.createElement("li");
    const expenseInco = document.createElement("img");
    const expenseInfo = document.createElement("div");
    const expenseName = document.createElement("strong");
    const expenseCategory = document.createElement("span");
    const expenseAmount = document.createElement("span");
    const removeIcon = document.createElement("img");

    expenseItem.classList.add("expense");
    expenseInfo.classList.add("expense-info");
    expenseAmount.classList.add("expense-amount");
    removeIcon.classList.add("remove-icon");

    expenseName.textContent = newExpense.expense;
    expenseCategory.textContent = newExpense.categoryName;

    expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;

    expenseInco.setAttribute("src", `./img/${newExpense.categoryId}.svg`);
    expenseInco.setAttribute("alt", newExpense.categoryName);
    removeIcon.setAttribute("src", `./img/remove.svg`);
    removeIcon.setAttribute("alt", "remover");

    expenseInfo.append(expenseName, expenseCategory);
    expenseItem.append(expenseInco, expenseInfo, expenseAmount, removeIcon);
    expenseList.append(expenseItem);

    updataTotals();
  } catch (error) {
    alert("Ocorreu um erro ao adicionar a despesa");
    console.log("expenseAdd ➜ error:", error);
  }
}


function updataTotals() {
  try {
    const itens = expenseList.children;

    expenseQuantity.textContent = `${itens.length} ${itens.length>1?"despesas":"despesa"}`;
    
    for (let i = 0; i < itens.length; i++) {
      const item = itens[i].querySelector(".expense-amount");
      
      
    }

  } catch (error) {
    console.log("updataTotals ➜ error:", error);
    alert("Ocorreu um erro ao atualizar o total");
  }
} 
