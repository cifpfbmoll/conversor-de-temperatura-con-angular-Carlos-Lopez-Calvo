## Conversor de Temperatura con Angular

Un mini proyecto para convertir temperaturas entre varias unidades usando Angular, formularios reactivos y un servicio reutilizable. Sencillo, limpio y con tests.

### ¿Qué hace?

- Convierte entre: **Celsius, Fahrenheit, Kelvin, Rankine, Réaumur y Newton**.
- Redondea a **2 decimales**.
- Valida el formulario y desactiva el botón si falta algo o el número no es válido.
- Soporta comas y puntos como separador decimal.

### ¿Cómo está montado?

- `src/app/core/temperature.service.ts`: el cerebro. Usa Kelvin como unidad base para simplificar las fórmulas (de 6 combinaciones a 2 funciones).
  - `convert(value, from, to)`: orquesta la conversión.
  - `toKelvin(...)` y `fromKelvin(...)`: fórmulas por unidad.
  - `units`: lista de unidades soportadas.

- `src/app/features/converter/converter.component.ts`: el formulario “listo”.
  - Formularios reactivos (con `FormBuilder`, validaciones y `ReactiveFormsModule`).
  - Lee `units` del servicio, así que si añadimos más, aparecen solas en los `<select>`.

- `src/app/app.component.html`: dejamos solo:
  ```html
  <h1>Temperature Converter</h1>
  <app-converter></app-converter>
  ```
  El resto del “starter” de Angular se eliminó para mostrar nuestro conversor.

### ¿Por qué Kelvin?

Porque hace las cuentas más fáciles: siempre llevamos a Kelvin y luego salimos a la unidad destino. Así evitamos mantener fórmulas entre cada par de unidades.

### Instalación y arranque

1. Instala deps:
   ```bash
   npm install
   ```
2. Arranca:
   ```bash
   npm start
   ```
3. Abre `http://localhost:4200`.

### Pruebas

- Tests en `src/app/core/temperature.service.spec.ts`.
- Ejecuta:
  ```bash
  npm test
  ```
- Casos que cubrimos (entre otros):
  - 0 °C = 32 °F
  - 32 °F = 0 °C
  - 273.15 K = 0 °C
  - 100 °C = 212 °F
  - Rankine, Réaumur y Newton (ej. 80 Réaumur = 100 °C)

### Validaciones

- El campo `value` acepta números con `,` o `.`.
- `from` y `to` son obligatorios.
- Botón desactivado si el formulario es inválido.

### Estructura útil

- `src/app/core/temperature.service.ts`
- `src/app/features/converter/converter.component.ts|html|scss`
- `src/app/app.component.ts|html`
- `src/main.ts`

### Problemas típicos

- “Sigo viendo la página de inicio de Angular”: asegúrate de que `src/app/app.component.html` solo tenga:
  ```html
  <h1>Temperature Converter</h1>
  <app-converter></app-converter>
  ```
- Error de tipos al inyectar: en Angular moderno, con componentes standalone, importamos el componente en `imports` del `@Component` del `AppComponent` (ya está hecho).

### Próximos pasos

- Añadir historial de conversiones.
- Guardar preferencias de unidades.
- Modo oscuro y estilos más bonitos.
- Internacionalización (i18n) para nombres de unidades.

¡Listo! Si quieres añadir nuevas unidades, solo toca `units`, `toKelvin` y `fromKelvin` en el servicio, y automáticamente aparecerán en el formulario.

El resto del “starter” de Angular se eliminó para mostrar nuestro conversor.
¿Por qué Kelvin?
Porque hace las cuentas más fáciles: siempre llevamos a Kelvin y luego salimos a la unidad destino. Así evitamos mantener fórmulas entre cada par de unidades.
Instalación y arranque
Instala deps:
Arranca:
start
Abre http://localhost:4200.

Pruebas
Tests en src/app/core/temperature.service.spec.ts.
Ejecuta:
Casos que cubrimos (entre otros):
0 °C = 32 °F
32 °F = 0 °C
273.15 K = 0 °C
100 °C = 212 °F
Rankine, Réaumur y Newton (ej. 80 Réaumur = 100 °C)
Validaciones
El campo value acepta números con , o ..
from y to son obligatorios.
Botón desactivado si el formulario es inválido.
Estructura útil
src/app/core/temperature.service.ts
src/app/features/converter/converter.component.ts|html|scss
src/app/app.component.ts|html
src/main.ts

Problemas típicos
“Sigo viendo la página de inicio de Angular”: asegúrate de que src/app/app.component.html solo tenga:
Error de tipos al inyectar: en Angular moderno, con componentes standalone, importamos el componente en imports del @Component del AppComponent (ya está hecho).
Próximos pasos
Añadir historial de conversiones.
Guardar preferencias de unidades.
Modo oscuro y estilos más bonitos.
Internacionalización (i18n) para nombres de unidades.
¡Listo! Si quieres añadir nuevas unidades, solo toca units, toKelvin y fromKelvin en el servicio, y automáticamente aparecerán en el formulario.
.
