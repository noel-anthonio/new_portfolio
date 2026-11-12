const skillCards = [
  {
    index: '01',
    marker: 'DATA',
    title: 'Data Analysis',
    description: 'Je transforme des données brutes en indicateurs fiables, en identifiant les tendances et les points d’amélioration.',
    tools: 'Python · SQL · T-SQL · Excel · Power Query · VBA',
    details: 'Nettoyage, contrôle et transformation de données avec Pandas, NumPy et OpenPyXL.',
    level: 90,
  },
  {
    index: '02',
    marker: 'WEB',
    title: 'Web Development',
    description: 'Je conçois des outils web simples à utiliser pour rendre les données accessibles aux équipes.',
    tools: 'HTML · CSS · JavaScript · PHP · Python · MySQL',
    details: 'Applications et dashboards avec Streamlit, Flask, APIs REST et gestion des erreurs.',
    level: 82,
  },
  {
    index: '03',
    marker: 'KPI',
    title: 'Reporting & KPI',
    description: 'Je construis des reportings clairs pour suivre la qualité, la productivité et l’atteinte des objectifs.',
    tools: 'Excel · Power BI',
    details: 'Création de dashboards, suivi des indicateurs et automatisation des alertes et reportings.',
    level: 88,
  },
  {
    index: '04',
    marker: 'TEST',
    title: 'Tests & Qualité',
    description: 'Je vérifie la fiabilité des traitements et j’identifie les erreurs avant leur mise en production.',
    tools: 'unittest · Git',
    details: 'Validation des résultats, recherche d’erreurs et amélioration continue du code.',
    level: 78,
  },
]

const softSkills = [
  'Autonomie',
  'Esprit d’équipe',
  'Esprit d’amélioration',
  'Orientation résultat',
  'Persévérance',
  'Adaptabilité',
  'Rigueur',
]

const languages = [
  { name: 'Malagasy', level: 'Langue maternelle', progress: 100 },
  { name: 'Français', level: 'Intermédiaire', progress: 70 },
  { name: 'Anglais', level: 'Débutant', progress: 35 },
]

const technicalSkills = [
  {
    title: 'Langages & Data',
    details: 'Python · Pandas · NumPy · Manipulation de données CSV/Excel',
  },
  {
    title: 'Programmation Orientée Objet',
    details: 'Classes & objets · Héritage · Composition · Architecture logicielle',
  },
  {
    title: 'Automatisation',
    details: 'Power Automate · OpenPyXL · Scripts batch · Flux de traitement et automatisation Excel',
  },
  {
    title: 'Développement Web / Dashboards',
    details: 'Streamlit · Flask · Interfaces interactives · Restitution visuelle des données',
  },
  {
    title: 'APIs & Intégrations',
    details: 'Requêtes HTTP · REST API · Gestion des erreurs · Variables d’environnement',
  },
  {
    title: 'Outils & Bonnes pratiques',
    details: 'Git · Tests unitaires (unittest) · PEP8 · Environnements virtuels (venv) · Packaging de projets',
  },
  {
    title: 'Concepts avancés',
    details: 'Décorateurs · Générateurs · Design patterns · Debugging',
  },
]

const experiences = [
  {
    date: 'Juillet 2026 — aujourd’hui',
    startDate: '2026-07-01',
    role: 'Statisticien',
    company: 'ADM VALUE',
    highlights: [
      'Analyse et traitement des données statistiques afin d’identifier les tendances, évolutions et variations de l’activité.',
      'Analyse des tendances et prévisions d’activité pour anticiper les besoins et accompagner la prise de décision.',
      'Réalisation du dimensionnement des ressources en fonction des volumes d’activité, des besoins opérationnels et des capacités disponibles.',
    ],
  },
  {
    date: 'Juillet 2025 — Juin 2026',
    startDate: '2025-07-01',
    endDate: '2026-07-01',
    role: 'Dataminer',
    company: 'ADM VALUE',
    highlights: [
      'Extraction et préparation des données issues des outils internes (Excel), avec nettoyage, consolidation et automatisation des traitements via VBA.',
      'Analyse et reporting de la performance opérationnelle : suivi de la production, de la qualité et des SLA, avec création de tableaux de bord dynamiques pour le management.',
      'Support à la direction à travers des analyses quantitatives et qualitatives.',
      'Automatisation des tâches répétitives et formatage des données pour fiabiliser et accélérer le pilotage.',
      'Collaboration avec les équipes métiers pour améliorer la performance et la qualité des données.',
    ],
  },
  {
    date: 'Février 2024 — Décembre 2024',
    startDate: '2024-02-01',
    endDate: '2025-01-01',
    role: 'Dataminer',
    company: 'Société Générale Madagascar',
    highlights: [
      'Analyse et traitement des données clients pour nourrir la stratégie.',
      'Création et automatisation de tableaux de bord Excel/VBA.',
      'Suivi des performances commerciales et reporting à la direction.',
    ],
  },
  {
    date: 'Avril 2023 — Janvier 2024',
    startDate: '2023-04-01',
    endDate: '2024-02-01',
    role: 'Chargé Reporting',
    company: 'Odity',
    highlights: [
      'Conception et mise à jour de reportings opérationnels.',
      'Définition et suivi de KPI (taux d’appels, DMT, taux de résolution).',
      'Diffusion des rapports via une application web et traitement T-SQL.',
    ],
  },
  {
    date: 'Décembre 2022 — Janvier 2023',
    startDate: '2022-12-01',
    endDate: '2023-02-01',
    role: 'Stagiaire développeur web',
    company: 'CFA-ASA Andrainarivo',
    highlights: [
      'Développement d’une plateforme web responsive.',
      'Intégration d’une base MySQL et de Chart.js pour statistiques dynamiques.',
      'Support technique et collecte de données.',
    ],
  },
  {
    date: 'Juillet 2021 — Mars 2022',
    startDate: '2021-07-01',
    endDate: '2022-04-01',
    role: 'Opérateur saisie de données',
    company: 'NUMEN Madagascar',
    highlights: [
      'Saisie massive de documents administratifs et financiers.',
      'Contrôle qualité et vérification de cohérence des données saisies.',
      'Respect strict des normes de confidentialité et des délais de production.',
    ],
  },
  {
    date: 'Avril 2018 — Septembre 2018',
    startDate: '2018-04-01',
    endDate: '2018-10-01',
    role: 'Assistant KPI',
    company: 'Area Malaza Ampitatafika',
    highlights: [
      'Collecte et traitement de données opérationnelles pour produire des KPIs fiables.',
      'Suivi des performances des équipes et aide à la prise de décision par des visualisations claires.',
    ],
  },
]

const projects = [
  {
    num: '01',
    title: 'Portfolio Personnel 2',
    description: 'Un portfolio personnel conçu pour présenter mon parcours, mes compétences en data et mes réalisations dans une interface claire et immersive.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    image: '/images/project-portfolio1.jpg',
    links: [
      { label: 'Voir le site', href: '#' },
      { label: 'Voir le code', href: '#' },
    ],
  },
  {
    num: '02',
    title: 'Portfolio Personnel 1',
    description: 'Mon site personnel présentant mes réalisations, avec un design responsive et moderne.',
    tags: ['HTML5/CSS3', 'Bootstrap 5', 'JavaScript'],
    image: '/images/project-portfolio.jpg',
    links: [
      { label: 'Voir le site', href: '#' },
      { label: 'Voir le code', href: 'https://github.com/noel-anthonio/Portfolio_1' },
    ],
  },
  {
    num: '03',
    title: 'Data Cleaner',
    description: 'Nettoyez vos données et prévoyez vos besoins en heures, en un clic, directement dans le navigateur.',
    tags: ['Vanilla JS', 'SheetJS', 'PapaParse'],
    image: '/images/project-data-cleaner.jpg',
    links: [
      { label: 'Voir le site', href: '#' },
      { label: 'Voir le code', href: '#' },
    ],
  },
  {
    num: '04',
    title: 'Application Météo',
    description: 'Recherche météo en temps réel avec carte interactive et historique des recherches, connectée à l’API OpenWeatherMap.',
    tags: ['Python', 'Streamlit', 'Folium'],
    image: '/images/project-meteo.jpg',
    links: [
      { label: 'Voir le code', href: 'https://github.com/noel-anthonio/meteo_app' },
      { label: 'Voir le site', href: '#' },
    ],
  },
  {
    num: '05',
    title: 'e-tokiana',
    description: 'Marketplace malgache de produits et services, avec une interface claire pensée pour la navigation et la conversion.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/images/e-tokiana.png',
    links: [
      { label: 'Voir le site', href: '#' },
      { label: 'Voir le code', href: '#' },
    ],
  },
  {
    num: '06',
    title: 'Dimensionnement',
    description: 'Application web d’analyse des besoins : prévision du volume, hypothèses, jours fériés et besoin en heures à partir de fichiers Excel et CSV.',
    tags: ['Vanilla JS', 'SheetJS', 'PapaParse'],
    image: '/images/dimensionnement.png',
    links: [
      { label: 'Voir le site', href: '#' },
      { label: 'Voir le code', href: '#' },
    ],
  },
  {
    num: '07',
    title: 'Rapprochement CA',
    description: 'Rapprochement du chiffre d’affaires entre les données de rentabilité et le budget : import Excel/CSV, base persistante et export Excel.',
    tags: ['Import Excel/CSV', 'Base de données', 'Export Excel'],
    image: '/images/rapprochement_ca.png',
    links: [
      { label: 'Voir le site', href: '#' },
      { label: 'Voir le code', href: '#' },
    ],
  },
]

const education = [
  {
    year: '2025',
    title: 'Data Science avec Python',
    school: 'Orange Digital Center',
    description: 'Formation intensive en Data Science avec Python.',
  },
  {
    year: '2022 — 2023',
    title: 'M1 Informatique',
    school: 'CNTEMAD',
    description: 'Spécialisation Bases de Données & Génie Logiciel.',
  },
  {
    year: '2018 — 2022',
    title: 'Licence Informatique',
    school: 'CNTEMAD',
    description: 'Fondamentaux de la programmation et des Systèmes d’Information.',
  },
  {
    year: '2016 — 2017',
    title: 'Gestion Informatique',
    school: 'IESTIME Antaninandro',
    description: 'Introduction aux systèmes d’information et bureautique avancée.',
  },
  {
    year: '2015 — 2016',
    title: 'Bac Scientifique',
    school: 'Collège St Joseph Mahamasina',
    description: 'Développement d’un esprit logique et analytique.',
  },
]

const skillsGrid = document.querySelector('#skills-grid')
const softSkillsList = document.querySelector('#soft-skills')
const languagesList = document.querySelector('#languages')
const technicalSkillsList = document.querySelector('#technical-skills')
const experienceList = document.querySelector('#experience-list')
const projectsGrid = document.querySelector('#projects-grid')
const educationList = document.querySelector('#education-list')

skillsGrid.innerHTML = skillCards.map((skill, index) => `
  <article class="reveal reveal-delay-${Math.min(index + 1, 4)} group relative p-8 md:p-7 lg:p-8 text-center border-b md:border-b-0 md:border-r border-line-dark last:border-r-0 ${index % 2 === 0 ? 'bg-surface' : 'bg-surface-alt'} transition-colors duration-500 hover:bg-copper/10">
    <span class="text-[10px] text-muted-on-dark font-mono">${skill.index}</span>
    <div class="my-8 relative"><span class="font-display text-[3.4rem] leading-none text-copper/80 block transition-all duration-500 group-hover:text-copper group-hover:scale-105 origin-center">${skill.marker}</span></div>
    <h3 class="text-xl font-semibold tracking-tight text-cream mb-3">${skill.title}</h3>
    <p class="text-[13px] leading-[1.8] text-muted-on-dark mb-6 min-h-[60px]">${skill.description}</p>
    <div class="mb-4"><div class="h-px bg-line-dark relative overflow-hidden"><div class="skill-bar-fill absolute top-0 left-0 h-full bg-copper" style="width:0%" data-level="${skill.level}"></div></div></div>
    <p class="text-[10px] text-muted-on-dark tracking-wide">${skill.tools}</p>
    <p class="mt-4 text-[11px] leading-[1.7] text-muted-on-dark/80">${skill.details}</p>
  </article>
`).join('')

softSkillsList.innerHTML = softSkills.map((skill) => `
  <span class="border border-line-dark px-4 py-2.5 text-[11px] font-medium text-muted-on-dark hover:border-copper/50 hover:text-copper transition-colors duration-300">${skill}</span>
`).join('')

languagesList.innerHTML = languages.map((language) => `
  <div class="space-y-2">
    <div class="flex items-center justify-between gap-4"><span class="text-[14px] font-medium text-cream">${language.name}</span><span class="text-[11px] text-muted-on-dark">${language.level}</span></div>
    <div class="h-1 w-full bg-line-dark/50 overflow-hidden" role="progressbar" aria-label="Niveau de ${language.name}" aria-valuenow="${language.progress}" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-copper transition-all duration-1000" style="width:${language.progress}%"></div></div>
  </div>
`).join('')

technicalSkillsList.innerHTML = technicalSkills.map((skill) => `
  <article><h3 class="text-[13px] font-semibold text-cream mb-2">${skill.title}</h3><p class="text-[11px] leading-[1.7] text-muted-on-dark">${skill.details}</p></article>
`).join('')

function formatDuration(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00Z`)
  const end = endDate
    ? new Date(`${endDate}T00:00:00Z`)
    : new Date(`${new Date().toISOString().slice(0, 10)}T00:00:00Z`)
  let cursor = new Date(start)
  let years = 0
  let months = 0

  while (true) {
    const next = new Date(cursor)
    next.setUTCFullYear(next.getUTCFullYear() + 1)
    if (next > end) break
    cursor = next
    years += 1
  }

  while (true) {
    const next = new Date(cursor)
    next.setUTCMonth(next.getUTCMonth() + 1)
    if (next > end) break
    cursor = next
    months += 1
  }

  const days = Math.floor((end.getTime() - cursor.getTime()) / 86400000)
  const parts = []
  if (years) parts.push(`${years} an${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} mois`)
  if (days) parts.push(`${days} jour${days > 1 ? 's' : ''}`)
  return parts.length > 1 ? `${parts.slice(0, -1).join(' ')} et ${parts.at(-1)}` : parts[0] || '0 jour'
}

experienceList.innerHTML = experiences.map((experience, index) => `
  <article class="reveal reveal-delay-${Math.min(index + 1, 4)} group grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 border-b border-line-dark py-8 transition-colors duration-300 hover:bg-copper/10">
    <div class="text-[11px] text-muted-on-dark pt-1 font-medium"><span class="block">${experience.date}</span><small class="block mt-2 text-copper-glow font-bold">${formatDuration(experience.startDate, experience.endDate)}</small></div>
    <div><h3 class="text-xl font-semibold tracking-tight mb-4 flex items-baseline gap-3 flex-wrap">${experience.role}<small class="text-[11px] text-copper-glow font-bold">${experience.company}</small></h3>
      <ul class="space-y-2">${experience.highlights.map((highlight) => `<li class="text-[13px] leading-[1.7] text-muted-on-dark max-w-[680px] flex gap-3"><span class="text-copper-dim mt-1.5 shrink-0">—</span><span>${highlight}</span></li>`).join('')}</ul>
    </div>
  </article>
`).join('')

projectsGrid.innerHTML = projects.map((project, index) => `
  <article class="project-card reveal reveal-delay-${Math.min(index + 1, 4)} group flex flex-col border border-line-dark/60 ${index % 2 === 0 ? 'bg-surface' : 'bg-obsidian'} overflow-hidden">
    <div class="relative h-[240px] shrink-0 overflow-hidden bg-surface">
      <img src="${project.image}" alt="${project.title}" loading="lazy" class="project-card-img w-full h-full object-cover" />
      <span class="absolute top-5 right-5 bg-copper text-obsidian px-3 py-2 text-[10px] font-bold">${project.num}</span>
      <div class="absolute inset-0 bg-obsidian/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
        <div class="flex items-center gap-3">${project.links.map((link) => `
          <a href="${link.href}" ${link.href === '#' ? '' : 'target="_blank" rel="noreferrer"'} aria-label="${link.label} : ${project.title}" class="grid place-items-center w-12 h-12 bg-cream text-ink hover:bg-copper hover:text-cream transition-colors duration-300 text-[10px] font-bold">${link.label.includes('code') ? 'GH' : '↗'}</a>
        `).join('')}</div>
      </div>
    </div>
    <div class="flex flex-1 flex-col justify-between gap-5 p-6 md:p-7">
      <div><h3 class="text-xl font-semibold text-cream mb-2">${project.title}</h3><p class="text-[12px] leading-[1.6] text-muted-on-dark max-w-[400px] m-0">${project.description}</p></div>
      <div class="flex flex-wrap gap-1.5 justify-start md:justify-end">${project.tags.map((tag) => `<span class="border border-line-dark px-2.5 py-1.5 text-[9px] text-muted-on-dark whitespace-nowrap">${tag}</span>`).join('')}</div>
    </div>
  </article>
`).join('')

educationList.innerHTML = education.map((item) => `
  <article class="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-5 border-b border-line-dark py-6 group hover:bg-copper/10 transition-colors duration-300">
    <span class="text-[11px] text-muted-on-dark font-medium pt-1">${item.year}</span>
    <div><h3 class="text-base font-semibold text-cream m-0">${item.title}</h3><small class="block text-[11px] text-copper/80 font-medium mt-1">${item.school}</small><p class="text-[12px] text-muted-on-dark mt-2 leading-relaxed">${item.description}</p></div>
  </article>
`).join('')

const revealItems = document.querySelectorAll('.reveal, .letter-mask')
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  revealItems.forEach((item) => revealObserver.observe(item))

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target
        bar.style.width = `${bar.dataset.level}%`
        observer.unobserve(bar)
      }
    })
  }, { threshold: 0.3 })
  document.querySelectorAll('.skill-bar-fill[data-level]').forEach((bar) => skillObserver.observe(bar))
} else {
  revealItems.forEach((item) => item.classList.add('visible'))
  document.querySelectorAll('.skill-bar-fill[data-level]').forEach((bar) => {
    bar.style.width = `${bar.dataset.level}%`
  })
}

window.setTimeout(() => {
  document.querySelectorAll('.hero-intro, .hero-portrait').forEach((item) => {
    item.classList.remove('opacity-0', 'translate-y-4', 'translate-x-10')
    item.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
  })
}, 200)

const nav = document.querySelector('.site-nav')
const progressBar = document.querySelector('.scroll-progress')
const updateScrollState = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
  progressBar.style.width = `${progress}%`
  nav.classList.toggle('is-scrolled', window.scrollY > 30)
}
window.addEventListener('scroll', updateScrollState, { passive: true })
window.addEventListener('resize', updateScrollState)
updateScrollState()

const menuToggle = document.querySelector('.mobile-menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')
const menuLines = menuToggle.querySelectorAll('.menu-line')
const setMenuOpen = (isOpen) => {
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu')
  mobileMenu.classList.toggle('max-h-0', !isOpen)
  mobileMenu.classList.toggle('max-h-96', isOpen)
  mobileMenu.classList.toggle('opacity-0', !isOpen)
  mobileMenu.classList.toggle('opacity-100', isOpen)
  mobileMenu.inert = !isOpen
  menuLines[0].classList.toggle('rotate-45', isOpen)
  menuLines[0].classList.toggle('translate-y-2', isOpen)
  menuLines[1].classList.toggle('opacity-0', isOpen)
  menuLines[2].classList.toggle('-rotate-45', isOpen)
  menuLines[2].classList.toggle('-translate-y-2', isOpen)
}
menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
})
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false))
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuToggle.focus()
  }
})
window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false)
})

const careerStart = new Date(2023, 3, 1)
const today = new Date()
const yearsOfExperience = Math.max(
  0,
  today.getFullYear() - careerStart.getFullYear() -
    (today < new Date(today.getFullYear(), careerStart.getMonth(), careerStart.getDate()) ? 1 : 0),
)
document.querySelector('.career-years').textContent = String(yearsOfExperience).padStart(2, '0')

const cursor = document.querySelector('.cursor-dot')
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0
  let expanded = false
  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.15
    cursorY += (mouseY - cursorY) * 0.15
    cursor.style.transform = `translate(${cursorX - (expanded ? 24 : 4)}px, ${cursorY - (expanded ? 24 : 4)}px)`
    window.requestAnimationFrame(updateCursor)
  }
  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
  })
  window.requestAnimationFrame(updateCursor)
  document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      expanded = true
      cursor.classList.add('expanded')
    })
    element.addEventListener('mouseleave', () => {
      expanded = false
      cursor.classList.remove('expanded')
    })
  })
}

const copyButton = document.querySelector('.copy-email')
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status')
  try {
    await navigator.clipboard.writeText('anthonio.andrisolo@gmail.com')
    status.textContent = 'Copié'
    window.setTimeout(() => { status.textContent = '' }, 2000)
  } catch {
    status.textContent = 'Copie indisponible'
  }
})

const contactForm = document.querySelector('#contactForm')
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const button = contactForm.querySelector('.contact-submit')
  const buttonLabel = button.firstChild
  const arrow = button.querySelector('span')
  const status = contactForm.querySelector('.form-status')
  button.disabled = true
  buttonLabel.textContent = 'Envoi en cours… '
  arrow.hidden = true
  status.classList.remove('text-copper')
  status.classList.add('text-[#f39c8d]')

  try {
    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) throw new Error(`Échec de l’envoi (${response.status})`)
    contactForm.reset()
    status.textContent = 'Merci, votre message a bien été envoyé.'
    status.classList.remove('text-[#f39c8d]')
    status.classList.add('text-copper')
  } catch {
    status.textContent = 'Une erreur est survenue. Vous pouvez aussi m’écrire directement par email.'
  } finally {
    button.disabled = false
    buttonLabel.textContent = 'Envoyer le message '
    arrow.hidden = false
  }
})
