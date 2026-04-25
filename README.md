# 🚀 Antonio Romero Portfolio

Portfolio profesional web de Antonio Romero.

---

## 📌 Objetivo

Crear una web moderna, visual, diferente y profesional, orientada a conseguir trabajo como desarrollador web junior.

La web debe ser:

- Visualmente impactante (estilo moderno/futurista azul)
- Responsive (mobile-first)
- Accesible y usable
- Rápida y optimizada
- Preparada para producción (VPS)

---

## 🧱 Stack tecnológico

- Frontend: Next.js (App Router)
- Lenguaje: TypeScript
- Estilos: Tailwind CSS
- Animaciones: Sistema propio con IntersectionObserver (scroll animations)
- Infraestructura: Docker
- Control de versiones: Git (rama única `main`)
- Entorno de desarrollo: Docker Compose
- Despliegue final: VPS (con Caddy como proxy)

---

## ⚙️ Configuración actual

### 🐳 Docker

El proyecto se ejecuta completamente dentro de Docker:

docker compose up --build -d

Puerto:

WEB_PORT=3000

Acceso:

http://localhost:3000

---

### 🔥 Modo desarrollo

Actualmente se usa:

"dev": "next dev --webpack --hostname 0.0.0.0"

Motivo:

- Turbopack daba problemas con Docker en Windows
- Webpack garantiza hot reload correcto
- Permite acceso desde host (localhost)

---

## 📁 Estructura del proyecto

antonio-romero-portfolio/
├── docker/
│   └── caddy/
├── web/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       └── ScrollAnimations.tsx
│   ├── package.json
│   └── ...
├── .env
├── docker-compose.yml
├── .gitignore
└── README.md

---

## 🧠 Forma de trabajo

Se trabaja como en entorno profesional:

- Desarrollo local dockerizado desde el inicio
- Separación de responsabilidades (componentes)
- Código limpio y estructurado
- Enfoque mobile-first
- Preparado desde el inicio para producción
- UI/UX cuidado desde la base

---

## 🎨 Diseño y experiencia de usuario

El diseño está enfocado a transmitir:

- Profesionalidad
- Modernidad
- Claridad visual
- Buena experiencia en móvil (uso con dedo)

### Características implementadas:

- Diseño oscuro moderno con tonos azules
- Glassmorphism (efecto cristal)
- Layout centrado y limpio
- Componentes reutilizables
- Botones optimizados para táctil
- Feedback visual (active, hover, focus)
- Scroll suave (scroll-smooth)
- Accesibilidad básica (aria, focus-visible, skip-link)

---

## ✨ Animaciones

Sistema propio de animaciones por scroll:

- Basado en IntersectionObserver
- Uso de atributos tipo AOS (data-aos="fade-up", etc.)
- Activación mediante clase .visible
- Compatible con navegación de Next.js
- Sin dependencias externas

---

## 🧭 Navegación

Navbar profesional con:

- Sticky header con blur
- Menú responsive (desktop + móvil)
- Menú hamburguesa en móvil
- Cierre automático en navegación
- Detección de scroll
- Sección activa resaltada dinámicamente

---

## 📱 Mobile-first (muy importante)

El proyecto está optimizado para móvil:

- Diseño centrado en pantallas pequeñas
- Botones grandes (mínimo 48px)
- Espaciado cómodo
- Eliminación de dependencias de hover
- Uso de active para feedback táctil
- Componentes adaptados a dedo

---

## ✅ Estado actual del proyecto

### ✔ Infraestructura
- Docker configurado correctamente
- Contenedor funcionando
- Hot reload operativo
- Variables de entorno configuradas

### ✔ Frontend base
- Next.js funcionando correctamente
- Tailwind configurado
- Layout global implementado

### ✔ Secciones completas
- Hero (con animaciones por scroll)
- About
- Projects
- Skills
- Contact
- Footer

### ✔ UX/UI
- Diseño moderno y consistente
- Componentes centrados correctamente
- Interacción táctil optimizada
- Navbar con sección activa

---

## 🚧 Próximos pasos

- Añadir proyectos reales (con links reales)
- Conectar GitHub y LinkedIn reales
- Añadir imágenes / previews de proyectos
- Optimización SEO avanzada
- Mejorar performance (Lighthouse)
- Añadir favicon y meta images (OpenGraph)
- Preparar despliegue en VPS
- Configurar dominio real

---

## 🎯 Objetivo final

Construir una web portfolio profesional lista para:

- Mostrar proyectos reales
- Conseguir empleo como desarrollador web
- Transmitir nivel profesional real (aunque sea junior)
- Servir como base para futuros proyectos más grandes

---

## 🧑‍💻 Autor

Antonio Romero  
Desarrollador Web Junior  