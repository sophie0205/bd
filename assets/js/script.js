const cake = document.getElementById('cake');
const prompt = document.getElementById('prompt');
const slice = document.getElementById('slice');
const letter = document.getElementById('letter');

// Simulated 'blow' via click
cake.addEventListener('click', () => {
  prompt.style.display = 'none';
  cake.style.animation = 'flyAway 2s forwards';

  setTimeout(() => {
  document.getElementById('slice-container').style.display = 'block';
  document.getElementById('slice-container').style.opacity = '1';
  slice.style.display = 'block';
  slice.style.animation = 'toCenter 1s forwards';

  setTimeout(() => {
    slice.style.animation = 'toRight 1s forwards';
    showLetter();
  }, 1000);
}, 1500);
 // after cake flies
});



function showLetter() {
  letter.style.display = 'block';
  setTimeout(() => {
    letter.style.left = 'calc(50% - 50px)';
    setTimeout(() => {
      letter.classList.add('shake');
    }, 2000);
  }, 100);
}

// Handle letter click to show PDF overlay
letter.addEventListener('click', () => {
  letter.classList.remove('shake');
  letter.style.display = 'none';

  const overlay = document.getElementById('pdf-overlay');
  const frame = document.getElementById('pdf-frame');

  frame.src = 'your_letter.pdf';
  overlay.classList.add('active');
  overlay.style.display = 'flex';
});

document.getElementById('pdf-close').addEventListener('click', () => {
  const overlay = document.getElementById('pdf-overlay');
  const frame = document.getElementById('pdf-frame');

  overlay.classList.remove('active');
  overlay.style.display = 'none';
  frame.src = '';

  letter.style.display = 'block';
  letter.classList.add('shake');
});



slice.addEventListener('click', (e) => {
  const bite = document.createElement('div');
  bite.className = 'bite';

  const rect = slice.getBoundingClientRect();
  const containerRect = slice.parentElement.getBoundingClientRect();

  // Calculate mouse position relative to the container, not the slice
  const x = e.clientX - containerRect.left;
  const y = e.clientY - containerRect.top;

  bite.style.left = `${x - 20}px`;
  bite.style.top = `${y - 20}px`;

  slice.parentElement.appendChild(bite);
});

