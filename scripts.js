const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const expense = document.querySelector("#expense");
const category = document.querySelector("#category");

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
    
  } catch (error) {
    alert("Ocorreu um erro ao adicionar a despesa");
    console.log(" expenseAdd ➜ error:", error);
  }
}
