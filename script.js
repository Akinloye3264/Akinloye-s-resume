function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

 const nameForm = document.getElementById('nameForm');
  const nameInput = document.getElementById('nameInput');
  const greetingElem = document.getElementById('greeting');

  function getGreeting(name) {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour < 12) {
      greeting = "Good morning ☀️";
    } else if (hour < 18) {
      greeting = "Good afternoon 🌤";
    } else {
      greeting = "Good evening 🌙";
    }
    return name ? `${greeting} ${name}.` : `${greeting}`;
  }

  const storedName = localStorage.getItem('userName');
  if (greetingElem) {
    greetingElem.textContent = getGreeting(storedName);
  }
 

  if (nameForm) {
    nameForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      localStorage.setItem('userName', name);
      if (greetingElem) {
        greetingElem.textContent = getGreeting(name);
      }
    });
  }






