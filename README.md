# EMERIUM 1993 — Landing oficial

Landing de alta joyería: oro de 18K y esmeraldas colombianas. Medellín, Colombia.

HTML + CSS + JavaScript puro. **Sin frameworks, sin dependencias y sin paso de compilación.**

> 📘 Para editar productos, fotos, WhatsApp o redes: **[GUIA-CATALOGO.md](GUIA-CATALOGO.md)**.

---

## Cómo visualizar

La página usa módulos de JavaScript, así que **no funciona abriendo `index.html` con doble clic**: hay que servirla. Cualquiera de estas opciones sirve:

- **VS Code:** instala la extensión *Live Server* → clic derecho en `index.html` → *Open with Live Server*.
- **Python** (ya viene en Mac/Linux): en la carpeta del proyecto, ejecuta `python3 -m http.server 8080` y abre <http://localhost:8080>.
- **Node:** `npx serve .`

## Cómo publicar

Es un sitio estático: se sube tal cual.

- **Netlify / Vercel:** "Import from GitHub" → sin comando de build → directorio de publicación: la raíz (`/`).
- **GitHub Pages:** Settings → Pages → Deploy from branch → la rama principal, carpeta `/ (root)`.

Cada commit en GitHub vuelve a publicar la página automáticamente.

---

## Arquitectura

```
CONTENIDO     → data/      (productos, colecciones, textos, WhatsApp, redes)
FOTOS         → assets/
DISEÑO        → css/
ESTRUCTURA    → index.html
FUNCIONALIDAD → js/
```

```
emerium-1993/
├── index.html                 Esqueleto de secciones; sin textos ni tarjetas escritos a mano
├── GUIA-CATALOGO.md           Guía para no programadores
├── data/
│   ├── site.js                WhatsApp, redes, marca y TODOS los textos de la landing
│   ├── categories.js          Colecciones (Dinero, Amor, Protección, Autoestima…)
│   └── products.js            Catálogo
├── assets/
│   ├── products/              Fotos de productos (<id>.jpg)
│   ├── collections/           Fondos opcionales de las colecciones
│   ├── hero/                  Foto de portada y de "Nuestra esencia"
│   └── brand/                 Favicon, logotipo provisional, imagen para redes (og-image)
├── css/
│   ├── tokens.css             Paleta oficial, tipografías, medidas (único lugar con colores)
│   ├── base.css               Reset y tipografía global
│   ├── layout.css             Contenedor y cabeceras de sección
│   ├── components.css         Botones, tarjetas, filtros, marquee, botón flotante…
│   └── sections.css           Header, hero, manifiesto, colecciones, catálogo, esencia, CTA, footer
└── js/
    ├── main.js                Arranque: lee data/ y construye la página
    ├── lib/
    │   ├── catalog.js         Valida, completa, ordena y filtra productos/colecciones
    │   ├── whatsapp.js        Enlaces wa.me desde site.js (nunca enlaces rotos)
    │   ├── dom.js             Helper h() para crear elementos de forma segura
    │   └── icons.js           Iconos SVG de línea
    ├── components/
    │   ├── productCard.js     Plantilla única de tarjeta de producto
    │   ├── categoryCard.js    Plantilla de colección
    │   ├── categoryFilter.js  Filtros por colección
    │   ├── catalog.js         Filtros + tarjetas + "Ver más" + ?coleccion= en la URL
    │   └── lists.js           Franja, cifras, garantías, redes…
    └── effects/
        ├── reveal.js          Aparición al hacer scroll y revelado por palabras
        ├── header.js          Header al hacer scroll + menú móvil
        └── parallax.js        Parallax sutil del arco del hero
```

### Cómo fluye

1. `main.js` importa `data/site.js`, `data/categories.js` y `data/products.js`.
2. `lib/catalog.js` los valida: avisa en consola (`[Emerium] …`) si hay ids repetidos, colecciones inexistentes o campos vacíos, oculta lo que tiene `visible: false`, pone `assets/products/<id>.jpg` si `image` está vacío y ordena los destacados primero.
3. Todo elemento con `data-content="ruta.en.site"` recibe su texto desde `site.js`.
4. Colecciones, filtros y tarjetas se generan desde los datos; `[data-whatsapp]` recibe su enlace de `lib/whatsapp.js`.

### Identidad

| Token | Color | Uso |
|---|---|---|
| `--color-bg` | `#06100D` | Fondo principal |
| `--color-bg-2` | `#0B1713` | Fondo secundario |
| `--color-emerald` | `#0CA56C` | Verde esmeralda de marca |
| `--color-emerald-light` | `#B8EFCF` | Verde luminoso |
| `--color-ivory` | `#F4F0E7` | Marfil |
| `--color-gold` | `#CFB16F` | Dorado |
| `--color-muted` | `#A9B2AD` | Texto secundario |

Tipografías: **Italiana** (titulares) y **DM Sans** (interfaz), desde Google Fonts.

### Pendientes

- [ ] Número real de WhatsApp → `data/site.js` → `whatsappNumber`
- [ ] Enlaces de Instagram y TikTok → `data/site.js`
- [ ] Fotografías reales → `assets/products/`, `assets/hero/` (las actuales son temporales, extraídas del video de referencia)
- [ ] Logotipo oficial → `assets/brand/`
