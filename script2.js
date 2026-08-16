document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginView = document.getElementById("loginView");
  const dashboardView = document.getElementById("dashboardView");
  const loginTimestamp = document.getElementById("loginTimestamp");
  const greetingText = document.getElementById("greetingText");

  // Handle Form Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput && passwordInput) {
      // Capture login date and time dynamically
      const now = new Date();
      
      // Format: DD/MM/YYYY, H:MM:SS am/pm
      const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const formattedTime = now.toLocaleTimeString('en-US', { hour12: true }).toLowerCase();
      
      loginTimestamp.textContent = `${formattedDate}, ${formattedTime}`;

      // Calculate Greeting according to time of day
      const currentHour = now.getHours();
      let greeting = "Good Night";

      if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good Afternoon";
      } else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Good Evening";
      }

      greetingText.textContent = greeting;

      // Toggle Views (Switch from Login to Dashboard)
      loginView.classList.add("hidden");
      dashboardView.classList.remove("hidden");
    }
  });
});