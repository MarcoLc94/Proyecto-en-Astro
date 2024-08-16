import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, b as createAstro } from './astro/server_B0QDIMYG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<navbar data-astro-cid-5blmo7yk> <nav class="navbar" data-astro-cid-5blmo7yk> <div class="title" data-astro-cid-5blmo7yk> <h1 data-astro-cid-5blmo7yk>Construcciones Gómez</h1> <p data-astro-cid-5blmo7yk>📞 8128595397</p> </div> <div class="menu" data-astro-cid-5blmo7yk> <a href="#home" data-astro-cid-5blmo7yk><span class="bouncing-element" data-astro-cid-5blmo7yk>🏠</span>Inicio</a> <a href="#gallery" data-astro-cid-5blmo7yk><span class="bouncing-element" data-astro-cid-5blmo7yk>🔨</span>Galeria</a> <a href="#contact" data-astro-cid-5blmo7yk><span class="bouncing-element" data-astro-cid-5blmo7yk>📧</span>Contacto</a> </div> <button class="menu-toggle" aria-label="Open menu" data-astro-cid-5blmo7yk> <span class="hamburger" data-astro-cid-5blmo7yk></span> <span class="hamburger" data-astro-cid-5blmo7yk></span> <span class="hamburger" data-astro-cid-5blmo7yk></span> </button> </nav> </navbar>  `;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/Navbar.astro", void 0);

const $$IconsContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="floating-buttons" data-astro-cid-6fp4eg7g> <a href="https://wa.me/8128595397?text=Hola,%20vengo%20de%20tu%20página%20web%20me%20interesa%20un%20presupuesto." class="floating-button" target="_blank" rel="noopener noreferrer" data-astro-cid-6fp4eg7g> <img src="/whatsapp.png" alt="WhatsApp" data-astro-cid-6fp4eg7g> </a> </div>`;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/IconsContact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="text-footer" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte> © 2024 Construcciones Gomez. Todos los derechos reservados.
</p> </div> </div> </footer> `;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Construcciones Gómez Oficial: Página oficial de construcciones gómez, donde construimos tu alberca como tu te la imaginas!"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/casco.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "FloatingButtons", $$IconsContact, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/layouts/Layout.astro", void 0);

const BackgroundChanger = () => {
  const [index, setIndex] = useState(1);
  const handleScroll = () => {
    console.log("hola");
    const access = document.getElementById("contact");
    access.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex < 7 ? prevIndex + 1 : 1;
        console.log(newIndex);
        document.querySelector(".background-image-example").style.backgroundImage = `url(/alberca${newIndex}.jpg)`;
        return newIndex;
      });
    }, 2e3);
    return () => clearTimeout(timeoutId);
  }, [index]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "background-image-example",
      style: { backgroundImage: `url(/alberca${index}.jpg)` },
      id: "home",
      children: [
        /* @__PURE__ */ jsx("h1", { children: "Construimos  albercas de todas formas y dimensiones." }),
        /* @__PURE__ */ jsx("div", { className: "container-button", children: /* @__PURE__ */ jsx("button", { "client:load": "true", onClick: handleScroll, children: "Contacto" }) })
      ]
    }
  );
};

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-ivdev4kk> ${renderComponent($$result, "BackgroundChanger", BackgroundChanger, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/BgChanger.jsx", "client:component-export": "default", "data-astro-cid-ivdev4kk": true })} <div class="valores-container" data-astro-cid-ivdev4kk> <div class="valor-container" data-astro-cid-ivdev4kk> <div class="valor-title-container" data-astro-cid-ivdev4kk> <img src="/medalla.png" alt="" data-astro-cid-ivdev4kk> <h3 data-astro-cid-ivdev4kk>Calidad</h3> </div> <p data-astro-cid-ivdev4kk>Nos enorgullece ofrecer materiales y acabados de la más alta calidad, garantizando la durabilidad y resistencia de cada una de nuestras albercas.</p> </div> <div class="valor-container" data-astro-cid-ivdev4kk> <div class="valor-title-container" data-astro-cid-ivdev4kk> <img src="/trabajador.png" alt="" data-astro-cid-ivdev4kk> <h3 data-astro-cid-ivdev4kk>Profesionalismo</h3> </div> <p data-astro-cid-ivdev4kk>Contamos con un equipo altamente capacitado y comprometido con la excelencia en cada proyecto, desde el diseño hasta la entrega final.</p> </div> <div class="valor-container" data-astro-cid-ivdev4kk> <div class="valor-title-container" data-astro-cid-ivdev4kk> <img src="/satisfaccion.png" alt="" data-astro-cid-ivdev4kk> <h3 data-astro-cid-ivdev4kk>Satisfaccion</h3> </div> <p data-astro-cid-ivdev4kk>Nos aseguramos de que cada detalle cumpla con los requirimientos de nuestros clientes, proporcionando resultados que superan sus expectativas.</p> </div> <div class="valor-container" data-astro-cid-ivdev4kk> <div class="valor-title-container" data-astro-cid-ivdev4kk> <img src="/tiempo-rapido.png" alt="" data-astro-cid-ivdev4kk> <h3 data-astro-cid-ivdev4kk>Agilidad</h3> </div> <p id="gallery" data-astro-cid-ivdev4kk>Entregamos proyectos dentro del plazo acordado sin comprometer la calidad, para que disfrutes de tu alberca en el menor tiempo posible.</p> </div> </div> </main> `;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/Main.astro", void 0);

const $$MyJob = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<myJob data-astro-cid-3n4pj7hz> <div class="myJob-container" data-astro-cid-3n4pj7hz> <h1 data-astro-cid-3n4pj7hz>Galeria</h1> <div class="card-container clickable-image" data-astro-cid-3n4pj7hz> <img src="/alberca15.jpg" alt="" data-astro-cid-3n4pj7hz> <img src="/alberca10.jpg" alt="" data-astro-cid-3n4pj7hz> <img src="/alberca2.jpg" alt="" data-astro-cid-3n4pj7hz> <img src="/alberca1.jpg" alt="" data-astro-cid-3n4pj7hz> <img src="/alberca6.jpg" alt="" data-astro-cid-3n4pj7hz> <img src="/alberca4.jpg" alt="" data-astro-cid-3n4pj7hz> <div id="imageModal" class="modal" data-astro-cid-3n4pj7hz> <span class="close" data-astro-cid-3n4pj7hz>&times;</span> <img class="modal-content" id="modalImage" data-astro-cid-3n4pj7hz> <div id="caption" data-astro-cid-3n4pj7hz></div> </div> </div> </div> </myJob>  `;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/MyJob.astro", void 0);

const $$ContactMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact-section" id="contact" data-astro-cid-uesty5gv> <h1 data-astro-cid-uesty5gv>Contacto</h1> <form class="contact-form" action="https://formspree.io/f/xyzgpjby" method="POST" enctype="multipart/form-data" data-astro-cid-uesty5gv> <label for="name" data-astro-cid-uesty5gv>Nombre:</label> <input type="text" id="name" name="name" required data-astro-cid-uesty5gv> <label for="phone" data-astro-cid-uesty5gv>Telefono:</label> <input type="tel" id="phone" name="phone" required data-astro-cid-uesty5gv> <label for="message" data-astro-cid-uesty5gv>Mensaje:</label> <textarea id="message" name="message" rows="5" required data-astro-cid-uesty5gv></textarea> <input type="hidden" name="_next" value="/thanks" data-astro-cid-uesty5gv> <button type="submit" data-astro-cid-uesty5gv>Enviar</button> </form> </section> `;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/ContactMe.astro", void 0);

const $$Need = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<need data-astro-cid-up5rda3s> <div class="explain-container" data-astro-cid-up5rda3s> <div class="explain-title" data-astro-cid-up5rda3s> <h1 data-astro-cid-up5rda3s>Construimos todo tipo de albercas</h1> </div> <div class="need-title" data-astro-cid-up5rda3s> <div class="explain-card" data-astro-cid-up5rda3s> <img src="/2067016.png" alt="" data-astro-cid-up5rda3s> <h1 data-astro-cid-up5rda3s>Rectangular</h1> <p data-astro-cid-up5rda3s>Nuestras albercas rectangulares ofrecen un diseño clásico y elegante, ideal para aprovechar al máximo el espacio disponible en tu jardín. Son perfectas tanto para nadar como para disfrutar de momentos de relajación en el agua.</p> </div> <div class="explain-card" data-astro-cid-up5rda3s> <img src="/4489889.png" alt="" data-astro-cid-up5rda3s> <h1 data-astro-cid-up5rda3s>A tu diseño</h1> <p data-astro-cid-up5rda3s>Creamos albercas personalizadas según tus ideas y necesidades. Ya sea que imagines formas únicas o características especiales, nuestro equipo transformará tu visión en una alberca espectacular que se adapta perfectamente a tu espacio y estilo de vida.</p> </div> <div class="explain-card" data-astro-cid-up5rda3s> <img src="/hidro.png" alt="" data-astro-cid-up5rda3s> <h1 data-astro-cid-up5rda3s>Hidromasaje</h1> <p data-astro-cid-up5rda3s>Disfruta del máximo lujo con nuestras albercas de hidromasaje. Perfectas para relajarte después de un largo día, estas albercas combinan diseño sofisticado con tecnología avanzada para brindarte una experiencia de bienestar inigualable.</p> </div> </div> </div> </need> `;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/components/Need.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Construcciones G\xF3mez" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Main", $$Main, { "id": "home" })} ${renderComponent($$result2, "MyJob", $$MyJob, { "id": "gallery" })} ${renderComponent($$result2, "Need", $$Need, {})} ${renderComponent($$result2, "ContactMe", $$ContactMe, { "id": "contact" })} </main> ` })}`;
}, "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/OneDrive/Documentos/GitHub/ConstruccionesGomez/shining-star/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
