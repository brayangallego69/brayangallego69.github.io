/* ====== DATOS (edita aquí; ambos formatos se actualizan) ====== */
const DATA = {
  name: "Camila Restrepo",
  title: "Desarrolladora de Software Full Stack",
  email: "camila.restrepo@email.com",
  phone: "+57 300 123 4567",
  location: "Manizales, Colombia",
  linkedin: "linkedin.com/in/camilarestrepo",
  github: "github.com/camilarestrepo",
  summary: "Desarrolladora Full Stack con 5 años de experiencia construyendo aplicaciones web escalables con JavaScript, React y Node.js. Enfocada en código limpio, rendimiento y experiencia de usuario. Experiencia en equipos ágiles, integración continua y despliegue en la nube.",
  skills: {
    "Lenguajes": ["JavaScript", "TypeScript", "Python", "SQL"],
    "Frontend": ["React", "Next.js", "HTML5", "CSS3", "Tailwind"],
    "Backend": ["Node.js", "Express", "NestJS", "REST", "GraphQL"],
    "Datos y Cloud": ["PostgreSQL", "MongoDB", "Docker", "AWS", "GitHub Actions"]
  },
  levels: [["JavaScript / TypeScript", 95], ["React / Next.js", 90], ["Node.js", 85], ["PostgreSQL / MongoDB", 80], ["Docker / AWS", 70]],
  experience: [
    { role: "Desarrolladora Full Stack Senior", company: "TechNova S.A.S.", period: "Ene 2023 – Actualidad", place: "Remoto",
      items: ["Lideré la migración de un monolito a microservicios, reduciendo el tiempo de respuesta en 40%.", "Diseñé una plataforma de pagos en React y Node.js que procesa más de 20.000 transacciones mensuales.", "Implementé pipelines CI/CD con GitHub Actions y Docker, reduciendo despliegues de 2 horas a 15 minutos.", "Mentoría a 4 desarrolladores junior y revisión de código en equipo de 10 personas."] },
    { role: "Desarrolladora Frontend", company: "Digital Andes", period: "Mar 2021 – Dic 2022", place: "Bogotá, Colombia",
      items: ["Construí interfaces responsivas en React usadas por más de 100.000 usuarios.", "Mejoré el puntaje de Lighthouse de 62 a 94 optimizando carga y accesibilidad.", "Desarrollé una librería de componentes reutilizables que redujo el tiempo de desarrollo en 30%."] },
    { role: "Desarrolladora Junior", company: "Soluciones Web Caldas", period: "Jun 2019 – Feb 2021", place: "Manizales, Colombia",
      items: ["Desarrollé sitios y APIs REST para más de 15 clientes de pymes.", "Automaticé reportes con Python, ahorrando 10 horas semanales al equipo."] }
  ],
  projects: [
    { name: "TaskFlow", text: "Gestor de tareas colaborativo en tiempo real con React, Node.js y WebSockets. 2.000+ usuarios activos." },
    { name: "EcoRuta", text: "App de rutas sostenibles con Next.js y PostgreSQL. Ganadora de hackathon regional 2022." }
  ],
  education: [{ degree: "Ingeniería de Sistemas y Computación", school: "Universidad de Caldas", period: "2014 – 2019" }],
  certs: ["AWS Certified Cloud Practitioner (2023)", "Meta Front-End Developer Certificate (2022)", "Scrum Fundamentals Certified (2021)"],
  languages: [["Español", "Nativo"], ["Inglés", "Avanzado (C1)"]]
};

/* ====== RENDER ====== */
const $ = (s) => document.querySelector(s);
const li = (a) => a.map((x) => `<li>${x}</li>`).join("");
const initials = DATA.name.split(" ").map((w) => w[0]).join("");

function renderVisual() {
  const d = DATA;
  $("#cv-visual").innerHTML = `
  <aside class="v-side">
    <div class="avatar" aria-hidden="true">${initials}</div>
    <h1>${d.name}</h1>
    <p class="v-title">${d.title}</p>
    <section><h2>Contacto</h2>
      <ul class="plain"><li>${d.email}</li><li>${d.phone}</li><li>${d.location}</li><li>${d.linkedin}</li><li>${d.github}</li></ul>
    </section>
    <section><h2>Nivel técnico</h2>
      ${d.levels.map(([n, v]) => `<div class="bar"><span>${n}</span><i style="--v:${v}%"></i></div>`).join("")}
    </section>
    <section><h2>Idiomas</h2><ul class="plain">${d.languages.map(([l, n]) => `<li>${l}: ${n}</li>`).join("")}</ul></section>
  </aside>
  <div class="v-main">
    <section><h2>Perfil</h2><p>${d.summary}</p></section>
    <section><h2>Experiencia</h2>
      <div class="timeline">${d.experience.map((e) => `
        <div class="job"><div class="job-head"><h3>${e.role}</h3><span class="chip">${e.period}</span></div>
        <p class="company">${e.company} · ${e.place}</p><ul>${li(e.items)}</ul></div>`).join("")}</div>
    </section>
    <section><h2>Stack</h2><div class="tags">${Object.values(d.skills).flat().map((s) => `<span>${s}</span>`).join("")}</div></section>
    <section class="cols">
      <div><h2>Proyectos</h2>${d.projects.map((p) => `<p><strong>${p.name}.</strong> ${p.text}</p>`).join("")}</div>
      <div><h2>Educación</h2>${d.education.map((e) => `<p><strong>${e.degree}</strong><br>${e.school} · ${e.period}</p>`).join("")}
      <h2>Certificaciones</h2><ul>${li(d.certs)}</ul></div>
    </section>
  </div>`;
}

function renderATS() {
  const d = DATA;
  $("#cv-ats").innerHTML = `
  <h1>${d.name}</h1>
  <p class="a-title">${d.title}</p>
  <p>${d.location} | ${d.phone} | ${d.email}<br>${d.linkedin} | ${d.github}</p>
  <h2>Resumen profesional</h2><p>${d.summary}</p>
  <h2>Experiencia laboral</h2>
  ${d.experience.map((e) => `<h3>${e.role} – ${e.company}</h3><p class="meta">${e.period} | ${e.place}</p><ul>${li(e.items)}</ul>`).join("")}
  <h2>Habilidades técnicas</h2>
  <ul class="skills">${Object.entries(d.skills).map(([k, v]) => `<li><strong>${k}:</strong> ${v.join(", ")}</li>`).join("")}</ul>
  <h2>Proyectos</h2>
  <ul>${d.projects.map((p) => `<li><strong>${p.name}:</strong> ${p.text}</li>`).join("")}</ul>
  <h2>Educación</h2>
  ${d.education.map((e) => `<p><strong>${e.degree}</strong> – ${e.school}, ${e.period}</p>`).join("")}
  <h2>Certificaciones</h2><ul>${li(d.certs)}</ul>
  <h2>Idiomas</h2><p>${d.languages.map(([l, n]) => `${l} (${n})`).join(", ")}</p>`;
}

/* ====== INTERACCIÓN ====== */
const hints = {
  visual: "Diseño llamativo para portafolio, LinkedIn o envío directo a personas.",
  ats: "Una columna, texto plano y títulos estándar: ideal para sistemas de filtrado ATS."
};

function setView(v) {
  document.body.dataset.view = v;
  $("#cv-visual").hidden = v !== "visual";
  $("#cv-ats").hidden = v !== "ats";
  document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", b.dataset.view === v));
  $("#hint").textContent = hints[v];
}

function downloadPDF() {
  const prev = document.title;
  const tag = document.body.dataset.view === "ats" ? "ATS" : "Visual";
  document.title = `CV_${DATA.name.replace(/\s+/g, "_")}_${tag}`; // nombre sugerido del PDF
  window.print();
  setTimeout(() => (document.title = prev), 500);
}

renderVisual();
renderATS();
setView("visual");
document.querySelectorAll(".tabs button").forEach((b) => b.addEventListener("click", () => setView(b.dataset.view)));
$("#download").addEventListener("click", downloadPDF);
