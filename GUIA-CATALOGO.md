# Guía del catálogo — EMERIUM 1993

Esta guía es para editar la página **sin saber programar**.

---

## La regla de oro

| Quiero cambiar… | Voy a… |
|---|---|
| Productos, textos, WhatsApp, redes | la carpeta **`data/`** |
| Fotografías | la carpeta **`assets/`** |
| Colores y diseño | la carpeta `css/` *(no hace falta para el día a día)* |
| Estructura de la página | `index.html` *(no hace falta para el día a día)* |
| Funcionamiento | la carpeta `js/` *(no hace falta para el día a día)* |

Solo vas a trabajar con **3 archivos** y **1 carpeta de fotos**:

- `data/products.js` → los productos
- `data/categories.js` → las colecciones (Dinero, Amor, Protección, Autoestima…)
- `data/site.js` → WhatsApp, Instagram, TikTok y los textos
- `assets/products/` → las fotos de los productos

---

## Cómo editar un archivo en GitHub (desde el navegador)

1. Entra al repositorio en GitHub.
2. Abre la carpeta (por ejemplo `data`) y haz clic en el archivo (por ejemplo `products.js`).
3. Haz clic en el **lápiz ✏️** (arriba a la derecha) para editar.
4. Haz el cambio.
5. Abajo o arriba, pulsa **"Commit changes…"** y confirma.

¡Listo! Si la página está conectada a Netlify, Vercel o GitHub Pages, se actualiza sola en uno o dos minutos.

### 3 reglas para no romper nada

1. **Cambia solo lo que está entre comillas** `"…"`.
2. **No borres** las comas `,` ni las llaves `{ }` ni los corchetes `[ ]`.
3. Si un texto lleva comillas por dentro, usa comillas simples: `"Pieza 'Luna'"`.

> Si algo deja de verse después de un cambio, casi siempre es una coma o una comilla que falta. Compara con otro producto que funcione.

---

## Así se ve un producto

Cada producto es un bloque entre llaves `{ … },` dentro de `data/products.js`:

```js
  {
    id: "topitos-emerium",
    name: "Topitos Emerium",
    material: "Oro 18K · Esmeralda natural",
    badge: "18K",
    image: "assets/products/topitos-emerium.jpg",
    description: "Topos en oro de 18K con esmeralda natural colombiana.",
    category: "proteccion",
    whatsappMessage: "",
    visible: true,
    featured: false,
  },
```

| Campo | Qué es | Ejemplo |
|---|---|---|
| `id` | Nombre interno, único, en minúsculas y con guiones (sin tildes ni espacios) | `"anillo-esmeralda-oval"` |
| `name` | Nombre que ve el cliente | `"Anillo Esmeralda Oval"` |
| `material` | Línea de material | `"Oro 18K · Esmeralda natural"` |
| `badge` | Etiqueta sobre la foto. `""` = sin etiqueta | `"18K"`, `"Nuevo"` |
| `image` | Ruta de la foto | `"assets/products/anillo-esmeralda-oval.jpg"` |
| `description` | Frase corta que aparece sobre la foto | `"Esmeralda de talla oval…"` |
| `category` | Colección a la que pertenece | `"amor"` |
| `whatsappMessage` | Mensaje propio para WhatsApp. `""` = automático | `"Hola, quiero el anillo oval"` |
| `visible` | `true` se muestra · `false` se oculta | `true` |
| `featured` | `true` = destacada (sale primero) | `false` |

---

## 1. Agregar un producto

1. Sube la foto a `assets/products/` (en GitHub: entra a la carpeta → **Add file → Upload files**).
   Ponle un nombre sencillo, por ejemplo `anillo-esmeralda-oval.jpg`.
2. Abre `data/products.js` y **copia un bloque completo**, desde `{` hasta `},`.
3. Pégalo **debajo del último producto** (antes del `];` final).
4. Cambia los datos:

```js
  {
    id: "anillo-esmeralda-oval",
    name: "Anillo Esmeralda Oval",
    material: "Oro 18K · Esmeralda natural",
    badge: "Nuevo",
    image: "assets/products/anillo-esmeralda-oval.jpg",
    description: "Esmeralda colombiana de talla oval sobre oro amarillo de 18K.",
    category: "amor",
    whatsappMessage: "",
    visible: true,
    featured: false,
  },
```

5. Guarda (**Commit changes**). La tarjeta aparece sola, con su filtro y su botón de WhatsApp.

> 💡 Atajo: si la foto se llama **igual que el `id`** (`anillo-esmeralda-oval.jpg`), puedes dejar `image: ""` y la página la encuentra sola.

Los productos aparecen **en el mismo orden que en el archivo**. Para mover uno, mueve su bloque completo.

---

## 2. Cambiar una fotografía

**Opción A — la más fácil:** sube la foto nueva a `assets/products/` **con exactamente el mismo nombre** que la anterior (por ejemplo `cadena-gucci.jpg`). GitHub te preguntará si quieres reemplazarla: sí.

**Opción B:** sube la foto con otro nombre y cambia la ruta en el producto:

```js
    image: "assets/products/cadena-gucci-nueva.jpg",
```

**Recomendaciones de foto:**
- Vertical, proporción 3:4 (por ejemplo 1200 × 1600 px).
- Formato `.jpg` o `.webp`, de menos de 300 KB (puedes comprimirla gratis en squoosh.app).
- Fondo sobrio, buena luz. La página ya le da el acabado oscuro y elegante.
- Nombres de archivo sin espacios ni tildes: `anillo-oval.jpg` ✅ · `Anillo Óval.JPG` ❌.

> Si una foto no existe o el nombre está mal escrito, la tarjeta muestra un marcador elegante con el texto "Fotografía próximamente". La página no se rompe.

> ⚠️ Las fotos actuales de `assets/products/` y `assets/hero/` son **temporales**, tomadas del video de referencia. Reemplázalas por las fotografías reales de Emerium.

---

## 3. Ocultar un producto

Cambia `visible` a `false`:

```js
    visible: false,
```

El producto desaparece de la página, pero sigue guardado. Para volver a mostrarlo, pon `true`.

---

## 4. Cambiar el nombre

```js
    name: "Cadena Gucci Clásica",
```

No cambies el `id` (así la foto se sigue encontrando).

---

## 5. Cambiar el material

```js
    material: "Oro blanco 18K",
```

---

## 6. Cambiar la categoría (colección)

Escribe el `id` de la colección, tal cual aparece en `data/categories.js`:

```js
    category: "autoestima",
```

Colecciones actuales: `"dinero"`, `"amor"`, `"proteccion"` (sin tilde), `"autoestima"`.

---

## 7. Marcar un producto como destacado

```js
    featured: true,
```

La pieza aparece **primero** en el catálogo y lleva la marca dorada **✦ Destacada**.

---

## 8. Cambiar el número de WhatsApp

Abre `data/site.js` y busca:

```js
  whatsappNumber: "REEMPLAZAR_CON_NUMERO_REAL",
```

Escribe el número **con el código del país**, sin `+`, sin espacios y sin guiones.
Por ejemplo, para un celular de Colombia `300 123 4567`:

```js
  whatsappNumber: "573001234567",
```

Todos los botones de WhatsApp de la página (Asesoría privada, Hablar con un asesor, Consultar de cada producto…) usan este número automáticamente.

> Mientras diga `REEMPLAZAR_CON_NUMERO_REAL`, los botones llevan a la sección de contacto de la página en lugar de abrir WhatsApp.

**Cambiar el mensaje general** (en el mismo archivo):

```js
  whatsappMessage: "Hola Emerium, quiero asesoría para elegir una joya.",
```

**Mensaje de un producto:** si el producto tiene `whatsappMessage: ""`, se envía uno automático:
*"Hola Emerium, me interesa la pieza Cadena Gucci (Oro amarillo 18K). ¿Me pueden dar más información?"*.
Para uno propio, escríbelo en el producto:

```js
    whatsappMessage: "Hola Emerium, quiero reservar la Cadena Gucci.",
```

---

## 9. Cambiar Instagram

En `data/site.js`:

```js
  instagram: "https://www.instagram.com/tu_cuenta",
```

Pega el enlace completo (empieza por `https://`). Si lo dejas vacío (`""`), el enlace no aparece.

---

## 10. Cambiar TikTok

En `data/site.js`:

```js
  tiktok: "https://www.tiktok.com/@tu_cuenta",
```

Si lo dejas vacío (`""`), no aparece.

---

## 11. Agregar una nueva colección (categoría)

1. Abre `data/categories.js`.
2. Copia un bloque completo y pégalo al final (antes del `];`):

```js
  {
    id: "exito",
    name: "Éxito",
    description: "Para celebrar lo que ya conquistaste.",
    image: "",
    visible: true,
  },
```

3. Guarda. La colección aparece sola en **"Colecciones con intención"** (con su número 05) y como **filtro** del catálogo.
4. Para poner productos en ella, escribe `category: "exito",` en esos productos.

**Foto de fondo de la colección (opcional):** súbela a `assets/collections/` y escribe su ruta:

```js
    image: "assets/collections/exito.jpg",
```

**Ocultar una colección:** `visible: false`.

> El `id` va en minúsculas, sin tildes ni espacios (`"exito"`); el `name` sí puede llevar tildes (`"Éxito"`).

---

## Otros cambios útiles

| Quiero… | Dónde |
|---|---|
| Cambiar los textos de la portada, el manifiesto, "Nuestra esencia", la franja verde, etc. | `data/site.js` → sección `content` |
| Cambiar la foto grande de la portada | reemplaza `assets/hero/hero.jpg` |
| Cambiar la foto de "Nuestra esencia" | reemplaza `assets/hero/esencia.jpg` |
| Cuántos productos se ven antes de "Ver más piezas" | `data/site.js` → `catalog.pageSize` |
| Hacer un salto de línea en un título | escribe `\n` dentro del texto |

---

## Enlace directo a una colección

Puedes compartir un enlace que abre el catálogo ya filtrado:

```
https://tu-dominio.com/?coleccion=amor#piezas
```

---

## ¿Algo no se ve bien?

1. Revisa que no falte una **coma** al final de cada línea ni al final de cada bloque `},`.
2. Revisa que las **comillas** abran y cierren.
3. Revisa que la `category` del producto exista en `data/categories.js`.
4. Revisa que el nombre de la foto sea **idéntico** (mayúsculas, minúsculas y extensión `.jpg` o `.webp`).

Para usuarios avanzados: la consola del navegador (F12 → Consola) muestra avisos claros que empiezan por `[Emerium]` cuando hay un dato mal escrito.
