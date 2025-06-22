function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

 function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  const nameForm = document.getElementById('nameForm');
  const nameInput = document.getElementById('nameInput');
  const greetingElem = document.getElementById('greeting');

  function getGreeting(name) {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    let hour12 = hour % 12;
    if (hour12 === 0) hour12 = 12;
    let greeting;
    if (hour < 12) {
      greeting = "Good morning ☀️";
    } else if (hour < 18) {
      greeting = "Good afternoon 🌙";
    } else {
      greeting = "Good evening 🌤";
    }
    const timeString = ` The time is ${hour12}:${minute} ${ampm}`;
    return name ? `${timeString}, ${greeting} ${name}.` : `${timeString}, ${greeting}`;
  }

  if (greetingElem) {
    greetingElem.textContent = getGreeting('');
  }

  if (nameForm) {
    nameForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      if (greetingElem) {
        greetingElem.textContent = getGreeting(name);
      }
    });
  }
});





