// =========================
// MoodFlow - script.js 
// =========================

document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // FORMULARIO
  // =========================
  const moodForm = document.getElementById('moodForm');

  if (moodForm) {
    moodForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const mood = document.getElementById('mood').value;
      const note = document.getElementById('note').value.trim();
      const date = new Date().toLocaleDateString('es-MX');

      if (mood === '') {
        alert('Por favor selecciona tu estado de ánimo.');
        return;
      }

      const moodEntry = { mood, note, date };

      const storedMoods =
        JSON.parse(localStorage.getItem('moodflowData')) || [];

      storedMoods.push(moodEntry);
      localStorage.setItem(
        'moodflowData',
        JSON.stringify(storedMoods)
      );
      obtenerMensajeDesdeNube(mood);
      alert('Tu estado emocional fue guardado correctamente 💙');
      moodForm.reset();
    });
  }

  // =========================
  // NUBE SIMULADA (JSON)
  // =========================
  function obtenerMensajeDesdeNube(moodSeleccionado) {
    fetch('data/moods.json')
      .then(res => res.json())
      .then(data => {

        const resultado = data.find(item => item.mood === moodSeleccionado);

        if (resultado) {
          alert(resultado.message);
        }

      })
      .catch(error => {
        console.error('Error al cargar nube simulada', error);
      });
  }


  // =========================
  // MODO OSCURO
  // =========================
  const toggleButton = document.getElementById('toggleTheme');

  if (!toggleButton) return; // evita que el script se rompa

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '🌙';
    }
  });

});