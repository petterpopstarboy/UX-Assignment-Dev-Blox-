// --- For account button in the header ---

//check local stroage if username is saved in "loggedInUser"
//get the account button and "account" label using "id" for Javascript interaction
(function updateAccountButton() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const accountLabel = document.getElementById("accountLabel");
  const accountBtn = document.getElementById("accountBtn");
 
  //stop running javascript if username is not found in local storage
  if (!accountLabel || !accountBtn) return;
 
  //if local stroage find the username, changes "Sign in" text to logged in username
  //if username not found, leaves the text as "Sign in" and directs to login page if pressed
  if (loggedInUser) {
    accountLabel.textContent = loggedInUser;
  } else {
    accountBtn.href = "Log in and Log out.html";
  }
})();