// Envelope opening animation
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelope = document.getElementById('envelope');
const mainContent = document.getElementById('mainContent');
const letter = document.getElementById('letter');

let envelopeOpened = false;

envelopeWrapper.addEventListener('click', () => {
    if (!envelopeOpened) {
        envelope.classList.add('opened');
        envelopeOpened = true;
        
        setTimeout(() => {
            envelopeWrapper.style.display = 'none';
            mainContent.style.display = 'block';
            createFloatingHearts(20);
            createConfetti(50);
        }, 1000);
    }
});

// Create floating hearts
function createFloatingHearts(count) {
    const container = document.getElementById('floatingHearts');
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
}

// Create confetti
function createConfetti(count) {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607', '#ffffff'];
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.width = (Math.random() * 15 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Create heart pattern
function createHeartPattern() {
    const container = document.getElementById('heartContainer');
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎'];
    const positions = [];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        let x, y;
        do {
            x = Math.random() * 90 + 5;
            y = Math.random() * 90 + 5;
        } while (positions.some(pos => Math.abs(pos.x - x) < 10 && Math.abs(pos.y - y) < 10));
        
        positions.push({ x, y });
        heart.style.left = x + '%';
        heart.style.top = y + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 25 + 25) + 'px';
        
        heart.addEventListener('click', () => {
            createParticles(heart.offsetLeft + heart.offsetWidth / 2, heart.offsetTop + heart.offsetHeight / 2, 20);
            createSparkles(heart);
            heart.style.transform = 'scale(2) rotate(360deg)';
            setTimeout(() => {
                heart.style.transform = '';
            }, 500);
        });
        
        container.appendChild(heart);
    }
}

// Message card interactions
const messageCard = document.getElementById('messageCard');
const messageText = document.getElementById('messageText');
let clickCount = 0;

const messages = [
    "Jaan, you make every day brighter! ☀️",
    "Your smile is my favorite thing in the world! 😊",
    "I fall in love with you more every day! 💕",
    "You are my sunshine, my Jaan! 🌟",
    "Every moment with you is magical! ✨",
    "You are perfect just the way you are! 💖",
    "My heart belongs to you, Jaan! 💝",
    "You are my everything! 💗",
    "You are the rainbow in my sky! 🌈",
    "Your love colors my world! 🎨",
    "Every day with you is a celebration! 🎉",
    "You are my dream come true! 💭"
];

messageCard.addEventListener('click', () => {
    clickCount++;
    if (clickCount < messages.length) {
        messageText.textContent = messages[clickCount];
        createSparkles(messageCard);
    } else {
        messageText.innerHTML = '<span class="rainbow-text">I love you more than words can express, Jaan! 💕💖💗</span>';
        createConfetti(30);
    }
});

// Create sparkles
function createSparkles(element) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        element.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Surprise buttons
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

document.getElementById('surprise1').addEventListener('click', () => {
    modalBody.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">💖 Surprise 1 💖</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            Jaan, did you know that every time I see you, my heart skips a beat? 💓<br><br>
            You are the reason I believe in love at first sight, even though I've loved you for what feels like forever! 💕<br><br>
            <span style="font-size: 1.5rem;">You are my favorite person in the entire universe! 🌌</span>
        </p>
    `;
    modal.style.display = 'block';
    createConfetti(40);
});

document.getElementById('surprise2').addEventListener('click', () => {
    modalBody.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">🌹 Surprise 2 🌹</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            My dearest Jaan,<br><br>
            Roses are red, violets are blue,<br>
            But nothing compares to how beautiful you are! 💐<br><br>
            You are more precious than all the roses in the world combined! 🌹💕<br><br>
            <span style="font-size: 1.5rem;">Happy Valentine's Day, my love! 💖</span>
        </p>
    `;
    modal.style.display = 'block';
    createFloatingHearts(15);
});

document.getElementById('surprise3').addEventListener('click', () => {
    modalBody.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">✨ Surprise 3 ✨</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            Jaan, you are like a shooting star! 🌠<br><br>
            You appeared in my life and made everything magical! ✨<br><br>
            Every wish I make is about you, and every dream I have includes you! 💫<br><br>
            <span style="font-size: 1.5rem;">You are my star, my Jaan! ⭐💕</span>
        </p>
    `;
    modal.style.display = 'block';
    createSparkles(modalBody);
});

document.getElementById('surprise4').addEventListener('click', () => {
    modalBody.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">🎁 Surprise 4 🎁</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            My precious Jaan,<br><br>
            The greatest gift I've ever received is you! 🎁💝<br><br>
            You are my treasure, my joy, my everything! 💎<br><br>
            I promise to love you today, tomorrow, and forever! 💕<br><br>
            <span style="font-size: 1.5rem; font-weight: bold;">I LOVE YOU, JAAN! 💖💖💖</span>
        </p>
    `;
    modal.style.display = 'block';
    createConfetti(60);
    createFloatingHearts(25);
});

document.getElementById('surprise5').addEventListener('click', () => {
    modalBody.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">🎆 Surprise 5 🎆</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            Jaan, you light up my world like fireworks! 🎆✨<br><br>
            Every moment with you is a celebration! 🎉<br><br>
            Your love is like a beautiful firework display - bright, colorful, and magical! 🌈💫<br><br>
            <span style="font-size: 1.5rem;">You make every day feel like a festival! 🎊💕</span>
        </p>
    `;
    modal.style.display = 'block';
    createFireworks();
    createConfetti(80);
});

document.getElementById('surprise6').addEventListener('click', () => {
    modalBody.innerHTML = `
        <h2 style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">💐 Surprise 6 💐</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            My dearest Jaan,<br><br>
            Like a beautiful bouquet of flowers, you bring color and fragrance to my life! 🌸🌺🌻<br><br>
            Each petal represents a reason why I love you! 🌹💐<br><br>
            You are the most beautiful flower in my garden of dreams! 🌷🌼<br><br>
            <span style="font-size: 1.5rem;">Forever blooming in my heart! 💖🌺</span>
        </p>
    `;
    modal.style.display = 'block';
    createFloatingHearts(30);
    createConfetti(50);
    createFlowerPetals();
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Continuous floating hearts
setInterval(() => {
    if (mainContent.style.display !== 'none') {
        createFloatingHearts(3);
    }
}, 3000);

// Initialize heart pattern when main content is shown
setTimeout(() => {
    if (mainContent.style.display !== 'none') {
        createHeartPattern();
    }
}, 1500);

// Add click effects to document
document.addEventListener('click', (e) => {
    if (e.target !== envelopeWrapper && e.target !== envelope && e.target !== letter) {
        createSparkles(e.target);
    }
});

// Keyboard interactions
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !envelopeOpened) {
        envelopeWrapper.click();
    }
});

// Add romantic quotes that appear randomly
const romanticQuotes = [
    "You are my sunshine, Jaan! ☀️",
    "I love you to the moon and back! 🌙",
    "You complete me, Jaan! 💕",
    "Forever and always, my love! 💖"
];

setInterval(() => {
    if (mainContent.style.display !== 'none' && Math.random() > 0.7) {
        const quote = document.createElement('div');
        quote.style.position = 'fixed';
        quote.style.top = Math.random() * 50 + 25 + '%';
        quote.style.left = Math.random() * 50 + 25 + '%';
        quote.style.color = 'white';
        quote.style.fontSize = '1.5rem';
        quote.style.fontWeight = '600';
        quote.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
        quote.style.pointerEvents = 'none';
        quote.style.zIndex = '1500';
        quote.textContent = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
        quote.style.animation = 'fadeIn 0.5s ease, fadeOut 0.5s ease 2.5s';
        document.body.appendChild(quote);
        
        setTimeout(() => quote.remove(), 3000);
    }
}, 5000);

// Particle System
let particles = [];
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.life = 1;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.01;
        this.vy += 0.05; // gravity
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].life <= 0 || particles[i].y > canvas.height) {
            particles.splice(i, 1);
        }
    }
    
    requestAnimationFrame(animateParticles);
}
animateParticles();

function createParticles(x, y, count) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y));
    }
}

// Fireworks effect
function createFireworks() {
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height * 0.5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            for (let j = 0; j < 30; j++) {
                const angle = (Math.PI * 2 * j) / 30;
                const speed = Math.random() * 5 + 2;
                const particle = new Particle(x, y);
                particle.vx = Math.cos(angle) * speed;
                particle.vy = Math.sin(angle) * speed;
                particle.color = color;
                particle.size = Math.random() * 4 + 2;
                particles.push(particle);
            }
        }, i * 200);
    }
}

// Flower petals effect
function createFlowerPetals() {
    const petals = ['🌸', '🌺', '🌻', '🌹', '🌷', '🌼'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.position = 'fixed';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.top = '-50px';
            petal.style.fontSize = (Math.random() * 20 + 20) + 'px';
            petal.style.pointerEvents = 'none';
            petal.style.zIndex = '1500';
            petal.style.animation = `petalFall ${Math.random() * 3 + 3}s linear forwards`;
            document.body.appendChild(petal);
            
            setTimeout(() => petal.remove(), 6000);
        }, i * 100);
    }
}

// Color changer
let colorIndex = 0;
const colorSchemes = [
    { bg: 'linear-gradient(135deg, #ff006e 0%, #8338ec 15%, #3a86ff 30%, #06ffa5 45%, #ffbe0b 60%, #fb5607 75%, #ff006e 90%, #8338ec 100%)' },
    { bg: 'linear-gradient(135deg, #8338ec 0%, #3a86ff 20%, #06ffa5 40%, #ffbe0b 60%, #fb5607 80%, #ff006e 100%)' },
    { bg: 'linear-gradient(135deg, #3a86ff 0%, #06ffa5 25%, #ffbe0b 50%, #fb5607 75%, #ff006e 100%)' },
    { bg: 'linear-gradient(135deg, #06ffa5 0%, #ffbe0b 33%, #fb5607 66%, #ff006e 100%)' }
];

document.getElementById('colorChanger')?.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colorSchemes.length;
    document.body.style.background = colorSchemes[colorIndex].bg;
    createConfetti(30);
    createParticles(window.innerWidth / 2, window.innerHeight / 2, 50);
});

document.getElementById('fireworksBtn')?.addEventListener('click', () => {
    createFireworks();
    createConfetti(100);
    createFloatingHearts(20);
});

// Add click particles
document.addEventListener('click', (e) => {
    if (mainContent.style.display !== 'none') {
        createParticles(e.clientX, e.clientY, 10);
    }
});

// Add CSS for fadeOut and petal animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes petalFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
