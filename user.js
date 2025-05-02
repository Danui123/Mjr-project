// Register User
document.addEventListener("DOMContentLoaded", () => {
    const regForm = document.getElementById("registerForm");
    if (regForm) {
      regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration Successful! Please Login.");
        window.location.href = "login.html";
      });
    }
  
    
  });
  