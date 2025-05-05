// Load users or initialize
let users = JSON.parse(localStorage.getItem("users")) || {};
let loggedInUser = null;

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username].password === password) {
    loggedInUser = username;
    showAccountPage();
  } else {
    alert("Invalid username or password.");
  }
}

function register() {
  const newUsername = prompt("Enter new username:");
  const newPassword = prompt("Enter new password:");

  if (!newUsername || !newPassword) {
    alert("Username and password cannot be empty.");
    return;
  }

  if (users[newUsername]) {
    alert("Username already exists.");
  } else {
    users[newUsername] = {
      password: newPassword,
      balance: 0
    };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
  }
}

function showAccountPage() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("accountPage").style.display = "block";
  document.getElementById("accountHolder").textContent = loggedInUser;
  document.getElementById("balance").textContent = users[loggedInUser].balance.toFixed(2);
}

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0) {
    users[loggedInUser].balance += amount;
    updateBalance();
    alert("Deposited ₹" + amount);
  } else {
    alert("Enter a valid amount.");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0 && amount <= users[loggedInUser].balance) {
    users[loggedInUser].balance -= amount;
    updateBalance();
    alert("Withdrawn ₹" + amount);
  } else {
    alert("Invalid or insufficient funds.");
  }
}

function resetAmount() {
  document.getElementById("amount").value = '';
}

function logout() {
  loggedInUser = null;
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("accountPage").style.display = "none";
  document.getElementById("username").value = '';
  document.getElementById("password").value = '';
  document.getElementById("amount").value = '';
}

function updateBalance() {
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("balance").textContent = users[loggedInUser].balance.toFixed(2);
}
