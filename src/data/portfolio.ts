export const profile = {
  email: 'axelcueva2601@gmail.com',
  github: 'https://github.com/AXL031',
  linkedin: 'https://www.linkedin.com/in/axelcuevaalcala/',
  whatsapp: 'https://wa.me/51994055173',
}

export const projectPresentation: Record<string, { category: string; caption: string }> = {
  foodsave: { category: 'Automatización', caption: 'Configuración de una jornada de prueba.' },
  'procesamiento-paralelo-g7': { category: 'Sistemas distribuidos', caption: 'Telemetría del clúster durante el entrenamiento.' },
  bankshield: { category: 'Ciencia de datos', caption: 'Panel de analítica financiera de BankShield.' },
  aura: { category: 'Desarrollo web', caption: 'Una presencia digital para conectar.' },
  wankafood: { category: 'Producto + IA', caption: 'De ingredientes a nuevas ideas.' },
  'q-learning': { category: 'Investigación IA', caption: 'Aprender a encontrar el camino.' },
  crm: { category: 'Arquitectura', caption: 'Sistemas pensados para evolucionar.' },
  'cpu-simulator': { category: 'Sistemas', caption: 'La teoría, puesta en movimiento.' },
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  type: string;
  contribution: string;
  role?: string;
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
    id: '6',
    slug: 'foodsave',
    title: 'FoodSave',
    shortDescription: 'Automatización de pronósticos, planes de producción y propuestas de compra para una panadería.',
    type: 'Proyecto académico grupal',
    role: 'Lideré el equipo, repartí los módulos entre sus integrantes y definí la arquitectura que conecta el pronóstico, la planificación, el inventario y la tienda.',
    contribution: 'Desarrollé el motor que programa y recupera tareas, registra los intentos de ejecución y conecta los módulos del flujo. También coordiné el acceso, la configuración y la infraestructura común.',
    technologies: ['Next.js', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'CatBoost', 'Docker Compose'],
    repoUrl: 'https://github.com/AXL031/savefood_automatizacion',
    thumbnail: '/portfolio-assets/foodsave/automatizacion.webp',
    context: 'Prototipo para un comercio y una sucursal. El equipo abordó el desperdicio de alimentos perecibles desde la planificación diaria de una panadería.',
    problem: 'Para decidir cuánto producir y cuánto comprar, hay que combinar ventas históricas, recetas y lotes disponibles. Si una tarea se interrumpe, el equipo necesita saber qué quedó pendiente antes de volver a ejecutarla.',
    solution: 'Una programación dispara el pronóstico y lo convierte en un plan de producción. El sistema cruza el plan con recetas e inventario para calcular faltantes y preparar propuestas de compra para revisión.',
    architecture: [
      'Next.js sirve el panel administrativo. FastAPI expone los módulos de negocio y PostgreSQL conserva programaciones, estados e inventario por lotes.',
      'Celery Beat detecta tareas vencidas y Redis actúa como cola. Los workers registran intentos y recuperan ejecuciones pendientes con controles para evitar efectos duplicados.',
      'CatBoost estima la demanda. La tienda independiente consulta el catálogo y las promociones por HTTP.',
    ],
    results: [
      'En una jornada con datos de prueba, la automatización generó pronósticos para 12 productos y preparó dos pedidos de prueba.',
      'La tienda recibió un catálogo de 139 productos mediante la integración HTTP en la demostración.',
    ],
    images: ['/portfolio-assets/foodsave/automatizacion.webp', '/portfolio-assets/foodsave/planificacion.webp'],
  },
  {
    id: '7',
    slug: 'procesamiento-paralelo-g7',
    title: 'Procesamiento paralelo en Go',
    shortDescription: 'Procesamiento de viajes de taxi de Nueva York en Go, con benchmarks de entrenamiento secuencial y distribuido.',
    type: 'Proyecto académico grupal',
    role: 'Lideré el equipo, repartí el trabajo de carga, entrenamiento, API y validación, y definí la arquitectura para comparar ambos modos de ejecución.',
    contribution: 'Preparé el entorno de benchmarks e integré métricas de rendimiento para comparar la ejecución secuencial y distribuida. Conservé las mediciones y sus huellas para que el equipo pudiera verificarlas.',
    technologies: ['Go', 'Docker Compose', 'MongoDB', 'Redis', 'React', 'TCP', 'WebSocket'],
    repoUrl: 'https://github.com/AXL031/programacion_paralela_proyecto_G7',
    thumbnail: '/portfolio-assets/procesamiento-paralelo-g7/telemetria.webp',
    context: 'Proyecto del Grupo 7 con registros públicos de viajes de taxi de Nueva York de la primera quincena de enero de 2024.',
    problem: 'Medir si repartir el entrenamiento entre varios procesos compensa el coste de sincronización y estimar la latencia de la API bajo distintas condiciones de caché.',
    solution: 'El equipo construyó un cargador concurrente y dos modos de entrenamiento con datos y configuración equivalentes. El banco de pruebas separó las campañas de carga, entrenamiento y API.',
    architecture: [
      'Un cargador en Go valida registros con goroutines y escribe por lotes en MongoDB.',
      'Para el entrenamiento distribuido, un coordinador TCP reparte el cálculo entre workers y agrega sus gradientes. El entrenamiento secuencial usa el mismo conjunto de datos como referencia.',
      'La API REST sirve predicciones con caché Redis. El panel en React recibe telemetría de los procesos mediante WebSocket.',
    ],
    results: [
      '1.348.665 viajes válidos guardados en MongoDB y 63 muestras de benchmark conservadas para revisión.',
      'En un solo equipo con contenedores, el entrenamiento secuencial tardó 32,45 s y el distribuido con cuatro workers 36,79 s de mediana.',
    ],
    images: ['/portfolio-assets/procesamiento-paralelo-g7/telemetria.webp', '/portfolio-assets/procesamiento-paralelo-g7/entrenamiento.webp'],
  },
  {
    id: '8',
    slug: 'bankshield',
    title: 'BankShield Analytics',
    shortDescription: 'Detección de fraude y exploración de redes de transacciones simuladas en una plataforma de analítica financiera.',
    type: 'Proyecto académico grupal',
    role: 'Lideré el equipo, distribuí los módulos de análisis y definí la arquitectura común de datos, modelos, API y panel.',
    contribution: 'Desarrollé el módulo de fraude, entrené y evalué el clasificador con una partición temporal y presenté los resultados mediante FastAPI y Streamlit.',
    technologies: ['Python', 'scikit-learn', 'FastAPI', 'Streamlit', 'pandas', 'Parquet'],
    repoUrl: 'https://github.com/AXL031/mineria_proyecto_G6',
    thumbnail: '/portfolio-assets/bankshield/portada.webp',
    context: 'Proyecto del Grupo 6 que estudia transacciones PaySim, crédito y reclamos como tres fuentes independientes.',
    problem: 'El fraude es poco frecuente en la simulación. Hay que evaluar cuántos casos detecta el modelo y cuántas alertas incorrectas genera, manteniendo el orden temporal de las operaciones.',
    solution: 'El módulo entrena un clasificador de gradient boosting con una partición temporal. El umbral se elige en validación y el conjunto de prueba se reserva para medir sus efectos.',
    architecture: [
      'Los scripts en Python preparan datos, entrenan modelos fuera de la aplicación y guardan artefactos y reportes reproducibles.',
      'FastAPI carga los artefactos preparados y sirve predicciones y métricas. Streamlit los presenta en un panel con módulos de análisis.',
      'La canalización conserva fuentes y particiones por separado para evitar mezclar conjuntos sin una llave común.',
    ],
    results: [
      'La evaluación temporal detectó 3.976 de 4.006 fraudes simulados y generó 1.015 falsos positivos con el umbral elegido en validación.',
      'El perfil de transacciones PaySim procesó 6.362.620 registros simulados.',
    ],
    images: ['/portfolio-assets/bankshield/evaluacion-fraude.webp', '/portfolio-assets/bankshield/red-transacciones.webp'],
  },
  {
    id: '1',
    slug: 'aura',
    title: 'Aura Centro Psicológico',
    shortDescription: 'Landing page para un centro psicológico con SEO y captación de leads.',
    type: 'Proyecto Independiente',
    contribution: 'Desarrollo Full Stack, despliegue y configuración de analíticas.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase Hosting', 'Google Analytics', 'Apps Script'],
    demoUrl: 'https://auracentropsicologico.com/inicio',
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
    repoUrl: 'https://github.com/AXL031/Proyecto_IA_Aprendizaje_Reforzado.git',
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
    repoUrl: 'https://github.com/mrcastilla8/Sistema-de-Archivos-simulados.git',
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
  backend: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Go'],
  databases: ['PostgreSQL', 'Oracle Database', 'MongoDB', 'Redis', 'SQL'],
  ai: ['Gemini API', 'Machine Learning', 'Q-Learning'],
  tools: ['Git', 'Docker', 'Firebase', 'GitHub Actions']
};
