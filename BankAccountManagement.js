let balance = 0;

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0) {
    balance += amount;
    document.getElementById("balance").textContent = "Current Balance: $" + balance;
  } else {
    alert("Please enter a valid amount to deposit.");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.getElementById("balance").textContent = "Current Balance: $" + balance;
  } else {
    alert("Invalid amount or insufficient balance.");
  }
}

function checkBalance() {
  document.getElementById("balance").textContent = "$" + balance;
}

function logout() {
  alert("Logging out...");
  document.getElementById("account-management-container").style.display = "none";
  document.querySelector(".login-container").style.display = "block";
}
