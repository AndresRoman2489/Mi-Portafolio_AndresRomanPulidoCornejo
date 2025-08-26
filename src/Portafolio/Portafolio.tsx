

// ✅ Portafolio en un solo componente (React + Tailwind)
// - Full width
// - Contenido personalizado para Andrés Roman Pulido Cornejo

const PROJECTS = [
  {
    title: "QuickDrive – Renta de autos",
    live: "https://quickdrive4.web.app/",   // <-- pon aquí el link en vivo si lo tienes
    code: "#",   // <-- link al repo en GitHub
    description:
      "Proyecto escolar en Angular + Node 14 + Firebase. Renta de carros con autenticación y organización de catálogo.",
    stack: ["Angular", "Node 14", "Firebase Auth", "Firestore", "Hosting"],
    img: "https://github.com/AndresRoman2489/imagenes-Libreria-Nave/blob/main/Captura%20de%20pantalla%202025-08-25%20195145.png?raw=true",
  },
  {
    title: "Librería Nave",
    live: "https://libreria-nave.web.app/",
    code: "#",
    description:
      "E-commerce escolar para venta de libros. Angular + Node 18 + Firebase con autenticación por email, verificación, login con Google y plan de integrar Stripe.",
    stack: ["Angular", "Node 18", "Firebase", "Google Sign-In", "Auth"],
    img: "https://github.com/AndresRoman2489/imagenes-Libreria-Nave/blob/main/Captura%20de%20pantalla%202025-08-25%20195319.png?raw=true",
  },
  {
    title: "Sitio JettyRobot (empresa familiar) – prototipo",
    live: "https://netronik-89bb9.web.app/",
    code: "#",
    description:
      "Web en React + Firebase con Node v20.14.0 para la empresa de mi padre, enfocada a presentar el robot JettyRobot y servicios. En desarrollo; objetivo: dominio propio y correos corporativos.",
    stack: ["React", "TypeScript", "Node 20.14.0", "Firebase Hosting"],
    img: "https://github.com/AndresRoman2489/imagenes-Libreria-Nave/blob/main/Captura%20de%20pantalla%202025-08-25%20190452.png?raw=true",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 w-full">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="w-full px-8 flex items-center justify-between py-3">
          <a href="#home" className="font-extrabold tracking-tight text-lg">
            <span className="text-cyan-400">&lt;/&gt;</span> Andrés Roman Pulido Cornejo
          </a>
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            <li><a className="hover:text-white" href="#projects">Proyectos</a></li>
            <li><a className="hover:text-white" href="#about">Sobre mí</a></li>
            <li>
              <a
                className="rounded-xl bg-cyan-500/10 px-3 py-1.5 text-cyan-300 ring-1 ring-cyan-500/30 hover:bg-cyan-500/20"
                href="#contact"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden w-full px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Construyo experiencias web{" "}
            <span className="text-cyan-400">rápidas</span>,<br /> modernas y{" "}
            <span className="text-cyan-400">seguras</span>.
          </h1>
          <p className="mt-5 text-slate-300 max-w-prose">
            Desarrollador Frontend con experiencia en Angular y React. Me enfoco en
            performance, accesibilidad y buenas prácticas. Trabajo con GitHub y Firebase
            (hosting, base de datos, storage y autenticación).
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-4 py-2 font-medium hover:bg-white/5"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="relative">
  <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10">
    <img
      src="https://github.com/AndresRoman2489/imagenes-Libreria-Nave/blob/main/Captura%20de%20pantalla%202025-08-25%20190452.png?raw=true"
      alt="Captura de mi mejor proyecto"
      className="h-full w-full object-cover"
      loading="lazy"
    />
  </div>
</div>

      </section>

      {/* Proyectos */}
      <section id="projects" className="w-full px-8 py-16">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Todos mis proyectos</h2>
            <p className="text-slate-400">Tres ejemplos representativos de mi trabajo con Angular/React y Firebase.</p>
          </div>
          <a href="#contact" className="text-cyan-300 hover:text-cyan-200 text-sm">¿Colaboramos? →</a>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 hover:ring-cyan-400/40 transition"
            >
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300 line-clamp-3">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                  {p.stack.map((s, j) => (
                    <li key={j} className="rounded-full border border-white/15 px-2 py-0.5">{s}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href={p.live} className="text-cyan-300 hover:text-cyan-200">Ver en vivo</a>
                  <span className="text-slate-500">•</span>
                  <a href={p.code} className="text-slate-300 hover:text-white"></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

           {/* Sobre mí */}
      <section id="about" className="w-full px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Sobre mí</h2>

            <p className="text-slate-300">
              Soy <strong>Andrés Roman Pulido Cornejo</strong>, recién egresado de la
              <strong> Universidad del Noreste (UNE)</strong> donde cursé la carrera de
              <strong> Ingeniería en Sistemas Computacionales y Electrónicos</strong>. 
              Durante mi formación participé en proyectos de <strong>desarrollo web</strong>,
              lo que me permitió crear interfaces claras, rápidas y accesibles, un área que me entusiasma mucho
              y en la que he enfocado gran parte de mi aprendizaje.
            </p>

            <p className="text-slate-300">
              Trabajo con <strong>HTML, CSS, JavaScript y TypeScript</strong>, y tengo experiencia con
              frameworks como <strong>Angular</strong> y <strong>React</strong>. 
              Para infraestructura utilizo <strong>GitHub</strong> como repositorio y 
              <strong> Firebase</strong> para hosting, bases de datos (Firestore/RTDB), storage y autenticación de usuarios.
            </p>

            <p className="text-slate-300">
              También cuento con conocimientos en <strong>C#</strong> y <strong>SQL Server</strong>,
              además de experiencia en el área de <strong>electrónica y automatización</strong>. 
              He trabajado con <strong>PLCs</strong> y <strong>tarjetas Arduino</strong>, aprendiendo lenguajes como 
              <strong> Ladder</strong> y <strong>C/C++ en Arduino IDE</strong> para resolver problemas de control de procesos.
              Aunque disfruto mucho el desarrollo web, no me limito únicamente a esa área:
              me interesa seguir aprendiendo y desarrollándome en distintas tecnologías, 
              combinando software y electrónica.
            </p>

            <p className="text-slate-300">
              Me considero alguien con <strong>aprendizaje constante</strong>, 
              que disfruta enfrentar nuevos retos y aplicar lo aprendido para crear soluciones útiles y bien estructuradas.
            </p>

            <ul className="text-sm text-slate-300 list-disc pl-5">
              <li>Frontend: Angular y React para aplicaciones SPA.</li>
              <li>Infraestructura: Firebase (Hosting, Auth, Firestore, Storage).</li>
              <li>Control de versiones: Git/GitHub con flujo de trabajo colaborativo.</li>
              <li>Electrónica: PLCs, Arduino, automatización de procesos.</li>
              <li>Lenguajes adicionales: C/C++ (Arduino IDE), Ladder (PLC), C#.</li>
            </ul>

            <div className="pt-4">
              <h3 className="font-semibold text-lg">Hobbies y pasiones</h3>
              <p className="text-slate-300 mt-2">
                Fuera del ámbito profesional, me apasionan los <strong>videojuegos</strong>,
                no solo jugarlos, sino también seguir de cerca la evolución de las <strong>tecnologías gráficas,
                procesadores y consolas portátiles</strong>.  
                Disfruto de la <strong>música variada</strong> y he aprendido a tocar instrumentos como el
                <strong> piano</strong> y la <strong>guitarra</strong>.  
                También me motiva aprender constantemente a través de <strong>videos de ciencia, aprendizaje
                y tecnologías de vanguardia</strong>, lo que me mantiene curioso e inspirado.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5">
            <h3 className="font-semibold">Datos rápidos</h3>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li>📍 México</li>
              <li>📱 Cel: 833 127 6077</li>
              <li>📧 Email: andresrpc2@gmail.com</li>
              <li>💼 Rol buscado: Frontend (Angular/React)</li>
              <li>🧰 Stack: TS, Angular, React, Firebase</li>
              <li>✅ Interés: proyectos web, UI y electrónica</li>
            </ul>
          </aside>
        </div>
      </section>


      {/* Contacto */}
      <section id="contact" className="w-full px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-fuchsia-500/10 ring-1 ring-white/10 p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Contacto</h2>
          <p className="mt-2 text-slate-300">¿Tienes una idea o una vacante? Hablemos.</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:andresrpc2@gmail.com"
              className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400"
            >
              Escribir correo
            </a>
            <a href="tel:+528331276077" className="rounded-xl border border-white/20 px-4 py-2 font-medium hover:bg-white/5">
              Llamar
            </a>
            <a href="https://www.linkedin.com/" className="rounded-xl border border-white/20 px-4 py-2 font-medium hover:bg-white/5">
              LinkedIn
            </a>
            <a href="https://github.com/" className="rounded-xl border border-white/20 px-4 py-2 font-medium hover:bg-white/5">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-8 py-10 text-slate-400 text-sm">
        © {new Date().getFullYear()} Andrés Roman Pulido. Hecho con React + Tailwind.
      </footer>
    </main>
  );
}
