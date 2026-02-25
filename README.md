# 🌿 MoodFlow – Aplicación Web de Registro Emocional

MoodFlow es una aplicación web interactiva desarrollada con tecnologías frontend que permite a los usuarios registrar su estado emocional diario, guardar notas personales y recibir mensajes de apoyo personalizados. La aplicación integra almacenamiento local, simulación de servicios en la nube y una interfaz intuitiva y accesible.

---

## 🚀 Funcionalidades principales

- Registro de estado emocional mediante formulario interactivo
- Almacenamiento persistente usando `localStorage`
- Simulación de servicios en la nube mediante consumo de un archivo JSON externo
- Mensajes dinámicos según el estado emocional seleccionado
- Modo claro / modo oscuro con preferencia guardada
- Diseño responsivo y centrado en la usabilidad

---

## 🧱 Tecnologías utilizadas

- **HTML5**  
  Uso de etiquetas semánticas para una estructura clara y accesible.

- **CSS3**  
  Diseño responsivo, paleta de colores coherente y soporte para modo oscuro.

- **JavaScript (ES6)**  
  Manejo del DOM, eventos, almacenamiento local y peticiones asíncronas con `fetch`.

---

## ☁️ Simulación de servicios en la nube

La aplicación simula el uso de servicios en la nube mediante la carga asíncrona de datos desde un archivo JSON externo (`moods.json`), ubicado en una carpeta independiente (`/data`).  
Este archivo funciona como una base de datos simulada y es consumido mediante peticiones HTTP utilizando `fetch`, replicando el comportamiento de una API REST en una arquitectura cliente-servidor.

---

## 📁 Estructura del proyecto

moodflow/
│── index.html
│── style.css
│── script.js
│
└── data/
└── moods.json
