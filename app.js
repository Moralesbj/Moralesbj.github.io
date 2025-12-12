const content = document.getElementById('content');
const searchInput = document.getElementById('searchInput');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

toggleSidebar.addEventListener('click',()=>{
    sidebar.classList.toggle('hidden');
});

document.querySelectorAll('.sidebar li').forEach(item=>{
    item.addEventListener('click',()=>{
        loadView(item.dataset.view);
    });
});

function loadView(view){
    if(view==='sobreMi') renderSobreMi();
    if(view==='proyectos') renderProyectos();
    if(view==='habilidades') renderHabilidades();
    if(view==='contacto') renderContacto();
}

function renderSobreMi(){
    content.innerHTML = `
        <h1>Sobre mí</h1>
        <div class='card'>
            <img src='assets/profile.jpg' style='width:120px;border-radius:50%;margin-bottom:15px;'>
            <p>Soy Braulio Morales, desarrollador web apasionado por crear interfaces modernas, limpias y funcionales.</p>
            <br>
            <div class='grid'>
                <div class='card'>Email: ejemplo@mail.com</div>
                <div class='card'>GitHub: github.com/braulio</div>
                <div class='card'>LinkedIn: linkedin.com/braulio</div>
            </div>
        </div>
    `;
}

/////////////////////////////////////////////
//   🔥 AQUI VAN TUS PROYECTOS (EDITABLE)
/////////////////////////////////////////////

const proyectos = [
    {
        titulo:'Time Store',
        desc:'Aplicación web desplegada en Vercel para control de tiempo y gestión básica.',
        tech:'Vue, JS, Vercel',
        link:'https://time-store-lyart.vercel.app/#/',   // 🔥 ENLACE A VERCEL
        github:'https://github.com/BraulioMorales/TimeStore' // opcional
    },
    {
        titulo:'Portfolio',
        desc:'Sitio web personal.',
        tech:'HTML, CSS, JS',
        link:'#'
    },
    {
        titulo:'Dashboard',
        desc:'Panel administrativo moderno.',
        tech:'Tailwind, JS',
        link:'#'
    },
    {
        titulo:'Landing Page',
        desc:'Página de producto.',
        tech:'CSS moderno',
        link:'#'
    }
];

/////////////////////////////////////////////
//   🔥 RENDER DE PROYECTOS
/////////////////////////////////////////////

function renderProyectos(){
    content.innerHTML = `<h1>Proyectos</h1>
    <div class='grid'>
        ${proyectos.map(p=>`
            <div class='card project-card'>
                <h3>${p.titulo}</h3>
                <p>${p.desc}</p>
                <small>${p.tech}</small><br><br>

                ${p.link ? `<a href="${p.link}" target="_blank">
                    <button>Ver Proyecto</button>
                </a>` : ''}

                ${p.github ? `<a href="${p.github}" target="_blank">
                    <button style="margin-left:5px;">GitHub</button>
                </a>` : ''}
            </div>
        `).join('')}
    </div>`;
}

/////////////////////////////////////////////
//   🔍 BUSCADOR
/////////////////////////////////////////////

searchInput.addEventListener('input', ()=>{
    const term = searchInput.value.toLowerCase();
    const filtered = proyectos.filter(p =>
        p.titulo.toLowerCase().includes(term) ||
        p.desc.toLowerCase().includes(term)
    );

    if(content.querySelector('.project-card')){
        content.innerHTML = `<h1>Proyectos</h1>
        <div class='grid'>
            ${filtered.map(p=>`
                <div class='card project-card'>
                    <h3>${p.titulo}</h3>
                    <p>${p.desc}</p>
                    <small>${p.tech}</small><br><br>

                    ${p.link ? `<a href="${p.link}" target="_blank">
                        <button>Ver Proyecto</button>
                    </a>` : ''}

                    ${p.github ? `<a href="${p.github}" target="_blank">
                        <button style="margin-left:5px;">GitHub</button>
                    </a>` : ''}
                </div>
            `).join('')}
        </div>`;
    }
});

/////////////////////////////////////////////
//   🚀 HABILIDADES Y CONTACTO
/////////////////////////////////////////////

function renderHabilidades(){
    content.innerHTML = `
        <h1>Habilidades</h1>
        <div class='card'>
            <h3>Frontend</h3>
            HTML<div class='progress'><div class='progress-bar' style='width:90%'></div></div>
            CSS<div class='progress'><div class='progress-bar' style='width:85%'></div></div>
            JS<div class='progress'><div class='progress-bar' style='width:80%'></div></div>
        </div>
        <div class='card'>
            <h3>Backend</h3>
            Node.js<div class='progress'><div class='progress-bar' style='width:70%'></div></div>
        </div>
    `;
}

function renderContacto(){
    content.innerHTML = `
        <h1>Contacto</h1>
        <form>
            <input type='text' placeholder='Nombre' required>
            <input type='email' placeholder='Email' required>
            <textarea rows='5' placeholder='Mensaje'></textarea>
            <button>Enviar</button>
        </form>
    `;
}

loadView('sobreMi');
