document.addEventListener("DOMContentLoaded", function () {

// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    const isDark = body.classList.contains('dark');
    icon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
    lucide.createIcons();
});

// Typing Effect
const typingText = document.getElementById('typing-text');
const professions = ['IT Graduate', 'Software Developer', 'AI Enthusiast', 'Tech Blogger','Lifelong Learner'];
let profIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = professions[profIndex];
    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        profIndex = (profIndex + 1) % professions.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}
type();

// Particles.js
if (typeof particlesJS !== "undefined") {
    particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#3b82f6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#3b82f6', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true

});
}

// Scroll Reveal
ScrollReveal().reveal('.card, .section-title, .hero-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
});

// Sample Data
const posts = [
    { id: 1, title: 'Incident Management System (Java)', content: 'This is a console-based Incident Management System developed using Core Java. It allows users to create, update, and manage incidents with features like auto-incrementing IDs, priority calculation based on severity, and status tracking.', date: 'Dec 2025' },
    { id: 2, title: 'Classification of Malware Families Under Extreme Class Imbalance Using NTD (python,ml)', content: 'Developed a machine learning-based system for malware family classification using tensor decomposition .Applied SMOTE, PCA and PARAFAC to extract latent features and trained a KNN classifier for accurate malware detection.', date: 'Nov 2024' },
    { id: 3, title: 'Created Dashboard for Global Store using powerBi', content: 'Designed and Developed an interactive Power BI dashboard to analyze and visualize Global Store sales performance and business insights.', date: 'jul 2024'    },
    { id: 4, title: 'Real Time -Website for KKP Transport (html,css,js)', content: ' Designed and developed a professional static frontend website for KKP Transports (Musiri) to showcase their transport services and company information. The website focuses on responsive design, clean UI, and user-friendly navigation to enhance their online presence.', date: 'jul 2025'    }
];

const gallery = {
    certs: [
        { title: 'NPTEL - Cloud Computing', desc: '61% (Elite) Certification' },
        { title: 'NPTEL - Introduction to soft computing', desc: '65% (Elite) Certification' },
        { title: 'NPTEL - Enhancing soft skills and personality', desc: '61% (Elite) Certification' },
        { title: 'HackerRank Problem Solving', desc: 'Certification in Problem Solving Basics' },
         { title: 'TCS ion Career Edge-15 days', desc: 'Young professional course' },
        { title: 'Full Stack Internship-15 days', desc: 'Litz Technologies' },
        { title: 'Software Developer Intern with stipend-5 Months', desc: 'Greator Software<br>During my five-month internship, I gained hands-on experience in coding, AI, cloud technologies, and the Software Development Life Cycle (SDLC). I worked on two projects that helped me develop strong technical, professional, and time-management skills, including meeting deadlines and working effectively in a professional environment.' },
        { title: 'Publication Title: 2025 4th International Conference on Applied Artificial Intelligence and Computing (ICAAIC)', desc: 'Article Title: Classification of Malware Families under Extreme Class Imbalance using Non-Negative Tensor Decomposition <br> Paper Id: ICAAIC-102'    }
    ],
    extra: [
        { title: 'Basketball Player & Team Leader for 3 Years🏀', desc: 'Participated Zonals in various colleges in coimbatore and secured 4th place in SNS Zonals .<br>I enjoy playing sports, particularly table tennis, basketball, and badminton.' },
        { title: 'Won First Prize in  Handloom Fashion Show Held by DreamZone💃🏻', desc: ' I was nominated for the Next Level competition and advanced to the finals. Even though I didn’t win, the experience of presenting on a large stage for the first time helped me build confidence and overcome stage fear while giving my best effort. ' },
        { title: 'Drawing👩‍🎨', desc: 'I love drawing. Whenever I feel low or need to disconnect from everything verbally, drawing helps me feel calmer and more at peace.' }
    ]
};

// Render Posts
const postsContainer = document.getElementById('posts-container');
posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'card';
    postEl.innerHTML = `
        <span class="date">${post.date}</span>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    postsContainer.appendChild(postEl);
});

// Render Gallery
const galleryContent = document.getElementById('gallery-content');
const tabBtns = document.querySelectorAll('.tab-btn');

function renderGallery(type) {
    galleryContent.innerHTML = '';
    gallery[type].forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'card';
        itemEl.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        galleryContent.appendChild(itemEl);
    });
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.tab);
    });
});

renderGallery('certs');

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_s6timec', 'template_8borabc', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log(error);
        });

    this.reset();
});
// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
}

});


