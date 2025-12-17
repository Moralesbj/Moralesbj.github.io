// ========================================
// 🎯 DOM ELEMENTS
// ========================================
const content = document.getElementById('content');
const searchInput = document.getElementById('searchInput');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
const themeToggle = document.getElementById('themeToggle');
const navList = document.getElementById('navList');

// ========================================
// 🎨 THEME MANAGEMENT
// ========================================
let currentTheme = localStorage.getItem('theme') || 'dark';

function initTheme() {
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.querySelector('i').classList.replace('ri-moon-fill', 'ri-sun-fill');
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');

    if (isLight) {
        themeToggle.querySelector('i').classList.replace('ri-moon-fill', 'ri-sun-fill');
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.querySelector('i').classList.replace('ri-sun-fill', 'ri-moon-fill');
        localStorage.setItem('theme', 'dark');
    }

    // Smooth transition effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// ========================================
// 📱 SIDEBAR TOGGLE
// ========================================
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !toggleSidebar.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ========================================
// 🧭 NAVIGATION
// ========================================
const navItems = document.querySelectorAll('.sidebar li');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
        // Load the view
        loadView(item.dataset.view);
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
});

function loadView(view) {
    // Add fade out animation
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        if (view === 'sobreMi') renderSobreMi();
        if (view === 'proyectos') renderProyectos();
        if (view === 'habilidades') renderHabilidades();
        if (view === 'contacto') renderContacto();

        // Fade in animation
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 200);
}

// ========================================
// 👤 SOBRE MÍ SECTION
// ========================================
function renderSobreMi() {
    content.innerHTML = `
        <h1>Sobre mí</h1>
        
        <div class="profile-header">
            <img src='assets/profile.jpg' class='profile-img' alt='Braulio Morales'>
            <div class="profile-info">
                <h2>Braulio Morales</h2>
                <p>Desarrollador Web Full Stack</p>
                <p>Apasionado por crear experiencias digitales modernas, limpias y funcionales que impactan positivamente a los usuarios.</p>
                
                <div class="profile-stats">
                    <div class="stat-item">
                        <div class="stat-value">3+</div>
                        <div class="stat-label">Años</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">20+</div>
                        <div class="stat-label">Proyectos</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">15+</div>
                        <div class="stat-label">Clientes</div>
                    </div>
                </div>
            </div>
        </div>
        
        <h2 class="mt-3">Información de Contacto</h2>
        <div class='grid'>
            <div class='card'>
                <i class="ri-mail-fill" style="font-size: 2rem; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                <h3>Email</h3>
                <p>moraleslariosbj@gmail.com</p>
            </div>
            <div class='card'>
                <i class="ri-github-fill" style="font-size: 2rem; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                <h3>GitHub</h3>
                <p>github.com/Moralesbj</p>
            </div>
            <div class='card'>
                <i class="ri-linkedin-fill" style="font-size: 2rem; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                <h3>LinkedIn</h3>
                <h ref="https://www.linkedin.com/in/braulio-morales-lz/" target="_blank">https://www.linkedin.com/in/braulio-morales-lz/</h>
            </div>
        </div>
        
        <h2 class="mt-3">Experiencia</h2>
        <div class="card">
            <h3>Desarrollador Frontend Senior</h3>
            <p style="color: var(--accent-primary); font-weight: 600;">Tech Company • 2022 - Presente</p>
            <p>Desarrollo de aplicaciones web modernas utilizando React, Vue.js y tecnologías frontend de vanguardia. Liderazgo de equipo y mentoría a desarrolladores junior.</p>
        </div>
        
        <div class="card">
            <h3>Desarrollador Full Stack</h3>
            <p style="color: var(--accent-primary); font-weight: 600;">Startup Digital • 2020 - 2022</p>
            <p>Construcción de aplicaciones web completas desde el diseño hasta el deployment, trabajando con Node.js, Express y bases de datos SQL/NoSQL.</p>
        </div>
    `;
}

// ========================================
// 💼 PROYECTOS DATA
// ========================================
const proyectos = [
    {
        titulo: 'Time Store',
        desc: 'Aplicación web moderna para registro de tiempo y control de proyectos con interfaz intuitiva.',
        tech: ['Vue.js', 'JavaScript', 'Vercel'],
        img: 'assets/time-store.png',
        link: 'https://time-store-lyart.vercel.app/#/',
        categoria: 'web'
    },
    {
        titulo: 'Portfolio Personal',
        desc: 'Sitio web personal con diseño elegante y moderno, optimizado para SEO y rendimiento.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        img: 'assets/portfolio.png',
        link: 'https://moralesbj.github.io/',
        categoria: 'web'
    },
    {
        titulo: 'Dashboard Administrativo',
        desc: 'Panel de control administrativo con UI moderna y visualización de datos en tiempo real.',
        tech: ['React', 'Tailwind', 'Chart.js'],
        img: 'assets/dashboard.png',
        link: '#',
        categoria: 'dashboard'
    },
    {
        titulo: 'Landing Page Producto',
        desc: 'Landing page optimizada para conversión con diseño responsive y animaciones atractivas.',
        tech: ['HTML5', 'CSS3', 'GSAP'],
        img: 'assets/landing.png',
        link: '#',
        categoria: 'landing'
    },
    {
        titulo: 'E-Commerce Platform',
        desc: 'Plataforma de comercio electrónico completa con carrito de compras y pasarela de pago.',
        tech: ['Next.js', 'Stripe', 'MongoDB'],
        img: 'assets/ecommerce.png',
        link: '#',
        categoria: 'web'
    },
    {
        titulo: 'Task Manager App',
        desc: 'Aplicación de gestión de tareas con drag & drop, categorías y notificaciones.',
        tech: ['React', 'Firebase', 'Material-UI'],
        img: 'assets/taskmanager.png',
        link: '#',
        categoria: 'app'
    }
];

// ========================================
// 💼 PROYECTOS SECTION
// ========================================
let currentFilter = 'all';

function renderProyectos(filteredProjects = proyectos) {
    const categories = ['all', 'web', 'dashboard', 'landing', 'app'];

    content.innerHTML = `
        <h1>Proyectos</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            Explora mi colección de proyectos que demuestran mis habilidades en desarrollo web y diseño de interfaces.
        </p>
        
        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
            ${categories.map(cat => `
                <button 
                    class="filter-btn ${currentFilter === cat ? 'active' : ''}" 
                    data-filter="${cat}"
                    style="
                        padding: 0.75rem 1.5rem;
                        background: ${currentFilter === cat ? 'var(--accent-gradient)' : 'var(--glass-bg)'};
                        border: 1px solid ${currentFilter === cat ? 'transparent' : 'var(--glass-border)'};
                        border-radius: var(--radius-md);
                        color: var(--text-primary);
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    "
                >
                    ${cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            `).join('')}
        </div>
        
        <div class='project-grid'>
            ${filteredProjects.map((p, index) => `
                <div class='project-card' style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards;">
                    <img src="${p.img}" class="project-img" alt="${p.titulo}" onerror="this.src='https://via.placeholder.com/400x200/7b3cf3/ffffff?text=${encodeURIComponent(p.titulo)}'">
                    <div class="project-card-content">
                        <h3>${p.titulo}</h3>
                        <p>${p.desc}</p>
                        <div class="project-tech">
                            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                        <a href="${p.link}" target="_blank" style="text-decoration: none;">
                            <button class="btn-view">
                                <i class="ri-external-link-line"></i> Ver Proyecto
                            </button>
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            const filtered = currentFilter === 'all'
                ? proyectos
                : proyectos.filter(p => p.categoria === currentFilter);
            renderProyectos(filtered);
        });

        // Hover effects
        btn.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.transform = 'translateY(-2px)';
            }
        });

        btn.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.background = 'var(--glass-bg)';
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// ========================================
// 🔍 SEARCH FUNCTIONALITY
// ========================================
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();

    // Check if we're on the projects page
    if (content.querySelector('.project-card')) {
        const filtered = proyectos.filter(p =>
            p.titulo.toLowerCase().includes(term) ||
            p.desc.toLowerCase().includes(term) ||
            p.tech.some(t => t.toLowerCase().includes(term))
        );
        renderProyectos(filtered);
    }

    // Check if we're on the skills page
    if (content.querySelector('.skill-item')) {
        const skills = document.querySelectorAll('.skill-item');
        skills.forEach(skill => {
            const skillName = skill.querySelector('.skill-name').textContent.toLowerCase();
            if (skillName.includes(term)) {
                skill.style.display = 'block';
            } else {
                skill.style.display = 'none';
            }
        });
    }
});

// ========================================
// 🎯 HABILIDADES SECTION
// ========================================
const habilidades = {
    frontend: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / SASS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'Vue.js', level: 82 },
        { name: 'Tailwind CSS', level: 87 }
    ],
    backend: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 72 },
        { name: 'REST APIs', level: 85 }
    ],
    tools: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'Vercel / Netlify', level: 88 }
    ]
};

function renderHabilidades() {
    content.innerHTML = `
        <h1>Habilidades</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            Tecnologías y herramientas que domino para crear soluciones web completas y eficientes.
        </p>
        
        <div class="card">
            <h2><i class="ri-code-s-slash-line" style="color: var(--accent-primary);"></i> Frontend Development</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                Especializado en crear interfaces de usuario modernas, responsive y accesibles.
            </p>
            ${renderSkillCategory(habilidades.frontend)}
        </div>
        
        <div class="card">
            <h2><i class="ri-server-line" style="color: var(--accent-secondary);"></i> Backend Development</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                Desarrollo de APIs robustas y gestión de bases de datos eficientes.
            </p>
            ${renderSkillCategory(habilidades.backend)}
        </div>
        
        <div class="card">
            <h2><i class="ri-tools-line" style="color: var(--accent-tertiary);"></i> Herramientas & DevOps</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                Control de versiones, diseño y deployment de aplicaciones.
            </p>
            ${renderSkillCategory(habilidades.tools)}
        </div>
    `;

    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = width + '%';
        });
    }, 100);
}

function renderSkillCategory(skills) {
    return skills.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="progress">
                <div class="progress-bar" data-width="${skill.level}" style="width: 0%;"></div>
            </div>
        </div>
    `).join('');
}

// ========================================
// 📧 CONTACTO SECTION
// ========================================
function renderContacto() {
    content.innerHTML = `
        <h1>Contacto</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div>
                <h2>Envíame un mensaje</h2>
                <form id="contactForm">
                    <input type='text' id="nameInput" placeholder='Nombre completo' required>
                    <input type='email' id="emailInput" placeholder='Email' required>
                    <input type='text' id="subjectInput" placeholder='Asunto' required>
                    <textarea id="messageInput" rows='6' placeholder='Tu mensaje' required></textarea>
                    <button type="submit">
                        <i class="ri-send-plane-fill"></i> Enviar Mensaje
                    </button>
                </form>
            </div>
            
            <div>
                <h2>Información de Contacto</h2>
                <div class="card">
                    <i class="ri-map-pin-line" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                    <h3 style="margin-top: 1rem;">Ubicación</h3>
                    <p>Ciudad, País</p>
                </div>
                
                <div class="card">
                    <i class="ri-mail-line" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                    <h3 style="margin-top: 1rem;">Email</h3>
                    <p>ejemplo@mail.com</p>
                </div>
                
                <div class="card">
                    <i class="ri-phone-line" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
                    <h3 style="margin-top: 1rem;">Teléfono</h3>
                    <p>+1 (123) 456-7890</p>
                </div>
            </div>
        </div>
    `;

    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const subject = document.getElementById('subjectInput').value;
        const message = document.getElementById('messageInput').value;

        // Show success message (you can integrate with EmailJS or similar service)
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`);

        // Reset form
        e.target.reset();

        // In production, you would send this to a backend or service like EmailJS
        console.log({ name, email, subject, message });
    });
}

// ========================================
// 🚀 INITIALIZATION
// ========================================
function init() {
    initTheme();
    loadView('sobreMi');

    // Add smooth transitions to content
    content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

// Run on page load
init();

// ========================================
// 🎨 ADDITIONAL ANIMATIONS
// ========================================
// Add parallax effect to gradient orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
