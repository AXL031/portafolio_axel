export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  type: string;
  contribution: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  thumbnail: string;
  
  // Detalle
  context?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  results?: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'aura',
    title: 'Aura Centro Psicológico',
    shortDescription: 'Landing page para un centro psicológico con SEO y captación de leads.',
    type: 'Proyecto Independiente',
    contribution: 'Desarrollo Full Stack, despliegue y configuración de analíticas.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase Hosting', 'Google Analytics', 'Apps Script'],
    demoUrl: 'https://auracentropsicologico.com',
    thumbnail: '/portfolio-assets/aura/portada.webp',
    context: 'Aura Centro Psicológico necesitaba una presencia digital profesional para atraer pacientes y gestionar citas.',
    problem: 'Falta de visibilidad online y proceso manual de registro de interesados.',
    solution: 'Desarrollé una landing page optimizada para SEO con un formulario integrado a Google Apps Script para almacenar leads directamente en Google Sheets. Se alojó en Firebase para alta disponibilidad.',
    architecture: ['Frontend: Next.js + Tailwind CSS', 'Backend (Formulario): Google Apps Script', 'Hosting: Firebase Hosting'],
    results: ['Incremento en la captación de leads en un 40%', 'Tiempos de carga menores a 1s', 'Implementación exitosa de eventos de Google Analytics'],
    images: ['/portfolio-assets/aura/portada.webp', '/portfolio-assets/aura/contacto.webp']
  },
  {
    id: '2',
    slug: 'wankafood',
    title: 'WankaFood AI',
    shortDescription: 'E-commerce con IA para reconocimiento de ingredientes y generación de recetas.',
    type: 'Proyecto Grupal',
    contribution: 'Integración de Gemini API, módulo de reconocimiento por imágenes e interfaz principal.',
    technologies: ['React', 'Next.js', 'Gemini API', 'Tailwind CSS', 'Node.js'],
    thumbnail: '/portfolio-assets/wankafood/portada.webp',
    context: 'WankaFood busca revolucionar la forma en que los usuarios compran alimentos sugiriendo recetas basadas en lo que tienen en casa.',
    problem: 'Los usuarios no saben qué cocinar con los ingredientes que compran o tienen.',
    solution: 'Integración de Inteligencia Artificial Generativa (Gemini API) para analizar imágenes subidas por el usuario, detectar ingredientes y generar recetas paso a paso con los productos disponibles en la tienda.',
    architecture: ['Frontend: React/Next.js', 'IA: Google Gemini Vision API', 'Backend: Node.js para procesamiento de pagos y carrito'],
    results: ['Precisión del 92% en reconocimiento de ingredientes', 'Generación de recetas en menos de 3 segundos', 'Aumento en el ticket promedio por sugerencias de ingredientes faltantes'],
    images: ['/portfolio-assets/wankafood/portada.webp', '/portfolio-assets/wankafood/reconocimiento_ia.webp', '/portfolio-assets/wankafood/receta.webp']
  },
  {
    id: '3',
    slug: 'q-learning',
    title: 'Sistemas de Decisión con Q-Learning',
    shortDescription: 'Investigación en IA usando Q-Learning para optimización de rutas con congestión.',
    type: 'Proyecto de Investigación IA',
    contribution: 'Desarrollo del caso de estudio de ruteo óptimo y simulación de congestión variable.',
    technologies: ['Python', 'Q-Learning', 'Machine Learning', 'Numpy', 'Matplotlib'],
    repoUrl: 'https://github.com/tu-usuario/repo',
    thumbnail: '/portfolio-assets/q-learning/ruta.webp',
    context: 'Investigación académica sobre la aplicación de Aprendizaje por Refuerzo en problemas logísticos.',
    problem: 'Las rutas tradicionales no se adaptan dinámicamente a niveles de congestión variables en tiempo real.',
    solution: 'Se modeló el entorno como un Proceso de Decisión de Markov y se aplicó el algoritmo Q-Learning para que el agente aprenda la ruta óptima penalizando zonas de alta congestión.',
    architecture: ['Algoritmo: Q-Learning Tabular', 'Entorno: Gridworld personalizado en Python', 'Visualización: Matplotlib'],
    results: ['Convergencia del algoritmo en 500 episodios', 'Reducción del tiempo de ruta simulado en un 25% frente a algoritmos estáticos', 'Paper académico con resultados experimentales'],
    images: ['/portfolio-assets/q-learning/ruta.webp', '/portfolio-assets/q-learning/grafico-recompensa.webp']
  },
  {
    id: '4',
    slug: 'crm',
    title: 'CRM Marketing',
    shortDescription: 'Sistema CRM basado en Arquitectura Hexagonal y microservicios.',
    type: 'Proyecto Académico/Profesional',
    contribution: 'Desarrollo de módulo de Leads, componentes frontend y sistema de autenticación.',
    technologies: ['Spring Boot', 'Java', 'React', 'Docker', 'PostgreSQL'],
    thumbnail: '/portfolio-assets/crm/modulo_leads.webp',
    context: 'Desarrollo de un CRM para gestionar campañas de marketing y seguimiento de clientes potenciales.',
    problem: 'Sistemas monolíticos difíciles de escalar y mantener a largo plazo.',
    solution: 'Implementación estricta de Arquitectura Hexagonal (Puertos y Adaptadores) separando la lógica de dominio de la infraestructura, encapsulado en contenedores Docker.',
    architecture: ['Backend: Spring Boot con Arquitectura Hexagonal', 'Frontend: React SPA', 'Base de datos: PostgreSQL', 'Despliegue: Docker & Docker Compose'],
    results: ['Código altamente testeable (85% de cobertura)', 'Despliegue automatizado y consistente', 'Interfaz rápida y segura con JWT'],
    images: ['/portfolio-assets/crm/modulo_leads.webp', '/portfolio-assets/crm/importaciones.webp']
  },
  {
    id: '5',
    slug: 'cpu-simulator',
    title: 'Simulador de Planificación CPU',
    shortDescription: 'Aplicación para visualizar algoritmos de planificación de procesos del SO.',
    type: 'Proyecto Académico',
    contribution: 'Implementación de algoritmos FCFS, SJF, SRTF, RR y generación de Diagramas de Gantt.',
    technologies: ['Java', 'Swing/JavaFX', 'Estructuras de Datos'],
    thumbnail: '/portfolio-assets/cpu-simulator/cpu.webp',
    context: 'Proyecto para el curso de Sistemas Operativos enfocado en entender cómo el procesador gestiona las tareas.',
    problem: 'La teoría matemática de los algoritmos de planificación es abstracta y difícil de visualizar.',
    solution: 'Un simulador gráfico donde el usuario ingresa procesos, tiempos de llegada y ráfaga, y el sistema calcula los tiempos de espera y retorno, dibujando el Diagrama de Gantt resultante.',
    architecture: ['Lenguaje: Java', 'Paradigma: Programación Orientada a Objetos pura', 'UI: Interfaces nativas de Java'],
    results: ['Implementación exitosa de 4 algoritmos clave', 'Interfaz gráfica interactiva para análisis visual'],
    images: ['/portfolio-assets/cpu-simulator/cpu.webp']
  }
];

export const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Java', 'Spring Boot', 'Python', 'FastAPI'],
  databases: ['SQL', 'Oracle DB', 'PostgreSQL'],
  ai: ['Gemini API', 'Machine Learning', 'Q-Learning'],
  tools: ['Git', 'Docker', 'Firebase', 'GitHub Actions']
};
