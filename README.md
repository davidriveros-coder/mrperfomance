# MRPERFORMANCE

Sitio estático "en construcción", con la misma estructura que **tienda oasis**:

- `index.html` — carga `config.js` y renderiza el sitio (nada de contenido hardcodeado, todo sale de config).
- `config.js` — único archivo que necesitas tocar para cambiar textos, colores, WhatsApp, redes, SEO.
- `netlify.toml` — le dice a Netlify cómo publicar el sitio y aplica cabeceras de seguridad. No hay build (`publish = "."`), es HTML/JS puro.

## 1. Subir esto a GitHub (proyecto `mrperformance`)

Si el repo **ya existe** en GitHub (vacío o no):

```bash
git init
git add .
git commit -m "Sitio en construcción: MRPERFORMANCE"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/mrperformance.git
git push -u origin main
```

Si el repo **todavía no existe**, créalo primero en https://github.com/new (nombre `mrperformance`, sin README/licencia para no chocar con estos archivos) y luego corre lo mismo de arriba.

> Nota: yo no tengo `gh` (GitHub CLI) instalado ni tus credenciales en este entorno, así que el `git push` lo debes ejecutar tú (o pídeme que lo intente y lo corremos juntos).

## 2. Conectar Netlify a GitHub (esto lo haces tú en netlify.com — yo no toco Netlify)

1. Entra a https://app.netlify.com → **Add new site → Import an existing project**.
2. Elige **GitHub**, autoriza, selecciona el repo `mrperformance`.
3. Build settings:
   - Build command: *(vacío, no hay build)*
   - Publish directory: `.`
4. Deploy site. Netlify te da una URL tipo `random-name-123.netlify.app` funcionando al toque.

Desde ese momento, **cada `git push` a `main` dispara un deploy automático** en Netlify. Así controlas la página: editas `config.js` (o el HTML cuando armemos el sitio real), commiteas, haces push, y Netlify publica solo. No necesitas volver a tocar la UI de Netlify para actualizar contenido.

## 3. Dominio `.cl`

1. Compra el dominio en un registrador que opere `.cl` (ej. NIC Chile directo en https://nic.cl, o revendedores como https://www.dattatec.com, https://www.ecomsur.com, etc.).
2. En Netlify: **Site settings → Domain management → Add a domain** → escribe `mrperformance.cl`.
3. Netlify te da los registros DNS a configurar (o te ofrece usar Netlify DNS delegando los NS del dominio). Los agregas en el panel de tu registrador `.cl`.
4. Netlify emite el certificado SSL automáticamente una vez que el DNS propaga (puede tardar minutos a un par de horas).

## Respuesta corta: ¿puedes controlar la página?

Sí, 100%. El flujo completo es GitHub → Netlify (deploy automático). Tú controlas todo editando archivos en este repo (empezando por `config.js`) y hacendo push — no dependes de tocar nada dentro de Netlify salvo la configuración inicial de dominio.
