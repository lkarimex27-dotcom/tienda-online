# 📌 Proyecto: Aplicación React con Bootstrap – Página de Inicio y Props

## 📖 Descripción

Este proyecto es una aplicación web desarrollada con **React + Vite** utilizando **Bootstrap 5** para el diseño visual.

La aplicación cuenta con:

- Una Página de Inicio
- Una sección que demuestra el uso de Props
- Componentes compartidos (Header y Footer)
- Organización modular por features

---

## 🏠 Página de Inicio (Home)

La página de inicio incluye:

- Header con navegación
- Sección de contenido principal
- Diseño estructurado con Bootstrap
- Interfaz clara y centrada en la experiencia del usuario

Ubicación en el proyecto:

```
src/features/Home/components/content.jsx
```

---

## 🧩 Sección Props

Esta sección demuestra el uso de **Props en React** mediante el componente `Avatar`.

Cada elemento recibe información dinámica desde el componente padre, incluyendo:

- Nombre
- Imagen
- Tamaño

Ubicación en el proyecto:

```
src/features/props/components/Props.jsx
```

Se utiliza una función auxiliar para generar dinámicamente la URL de las imágenes.

---

## 🔁 Componentes Compartidos

Para mantener una arquitectura limpia, se implementaron componentes reutilizables:

```
src/shared/Components/Header.jsx
src/shared/Components/Footer.jsx
```

Esto permite reutilizar estructura común en diferentes secciones del proyecto.

---

## 🏗 Arquitectura del Proyecto

El proyecto sigue una arquitectura modular organizada por features:

REACT-MAIN/
│
├── node_modules/
│
├── public/
│   └── images/
│       ├── auriculares.jpeg
│       ├── react.svg
│       ├── smartwatch.jpeg
│       └── teclado.jpeg
│
├── src/
│   ├── features/
│   │   ├── Home/
│   │   │   └── components/
│   │   │       └── content.jsx
│   │   │
│   │   └── props/
│   │       └── components/
│   │           └── Props.jsx
│   │
│   ├── shared/
│   │   └── Components/
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

Las imágenes se encuentran en:
```
public/images/
```
Esta estructura permite:
- Separación de responsabilidades
- Escalabilidad
- Mejor mantenimiento del código

---

## ✨ Características Principales

- ✅ Uso de Props en React
- ✅ Componentes reutilizables
- ✅ Arquitectura modular por features
- ✅ Diseño responsive con Bootstrap 5
- ✅ Separación entre componentes compartidos y específicos
- ✅ Proyecto configurado con Vite
- ✅ Control de versiones con Git

---

## 🎨 Interfaz Gráfica

La aplicación utiliza Bootstrap 5 para:

- Navbar estructurado
- Sistema de grillas (`container`, `row`, `col`)
- Tarjetas con sombra (`shadow`)
- Bordes redondeados (`rounded`)
- Tipografía jerarquizada (`fw-bold`, `lead`)
- Diseño adaptable a dispositivos móviles

---

## 🛠 Tecnologías Utilizadas

- React
- Vite
- JavaScript (ES6)
- Bootstrap 5
- HTML5
- Git
- GitHub

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:
```
git clone https://github.com/tuusuario/tu-repositorio.git
```

2. Entrar en la carpeta del proyecto:
```
cd nombre-del-proyecto
```

3. Instalar dependencias:
```
npm install
```

4. Ejecutar el proyecto:
```
npm run dev
```

---

## 👩‍💻 Datos del Autor

**Nombre:** Luz Karime  
**Rol:** Desarrolladora Frontend en formación  
**Tecnologías de enfoque:** React + Bootstrap  

---

## 📌 Estado del Proyecto

✔ Página de Inicio funcional  
✔ Sección Props implementada  
✔ Componentes compartidos estructurados  
✔ Diseño responsive  
✔ Arquitectura modular limpia  
✔ Listo para entrega académica
