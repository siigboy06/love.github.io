document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro-screen');
  const newspaper = document.getElementById('newspaper-screen');
  const dateScreen = document.getElementById('date-screen');
  const finalScreen = document.getElementById('final-screen');
  const roseContainer = document.getElementById('rose-container');

  function createRose() {
    const rose = document.createElement('div');
    rose.innerText = '🌹';
    rose.style.position = 'absolute';
    rose.style.left = ${Math.random() * 100}vw;
    rose.style.animation = fall ${5 + Math.random() * 5}s linear infinite;
    rose.style.fontSize = ${Math.random() * 16 + 24}px;
    roseContainer.appendChild(rose);
    setTimeout(() => rose.remove(), 10000);
  }

  function startRoses() {
    setInterval(createRose, 300);
  }

  document.querySelectorAll('.choices button').forEach(btn => {
    btn.addEventListener('click', () => {
      intro.classList.add('hidden');
      startRoses();
      setTimeout(() => {
        newspaper.classList.remove('hidden');
      }, 500);
    });
  });

  document.getElementById('next-button').addEventListener('click', () => {
    newspaper.classList.add('hidden');
    setTimeout(() => {
      dateScreen.classList.remove('hidden');
    }, 500);
  });

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('flipped');
      setTimeout(() => {
        finalScreen.classList.remove('hidden');
      }, 1000);
    });
  });
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);