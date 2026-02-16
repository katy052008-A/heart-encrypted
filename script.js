// Password Verification
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const correctPassword = 'password123'; // Example password

submitButton.addEventListener('click', function() {
    if (passwordInput.value === correctPassword) {
        alert('Password verified!');
    } else {
        alert('Incorrect password, please try again.');
    }
});

// Smooth Transitions (CSS class must be defined in CSS file)
// Adding a class to an element for smooth transitions
const elementToTransition = document.getElementById('smooth-element');
elementToTransition.classList.add('smooth-transition');

// Animation Triggers
const animatedElement = document.getElementById('animate-on-click');
animatedElement.addEventListener('click', function() {
    this.classList.add('animate');
});

// Matrix Rain Effect
const matrixEffect = () => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const rain = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        drops.forEach((y, index) => {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, index * fontSize, y * fontSize);
            drops[index] = (y * 1 + 1) % (canvas.height / fontSize);
        });
    };
    setInterval(rain, 35);
};

// Call the function to start the matrix effect
matrixEffect();
