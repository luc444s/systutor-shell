# systutor-shell

Frontend core de SYSTUTOR. Componentes UI genericos, consola operativa (Monaco) y clientes de infraestructura HTTP.

**Sin logica de negocio**: todo lo que vive aca es reutilizable por cualquier plugin o aplicacion del ecosistema SYSTUTOR. Reglas de dominio, payload builders y wrappers finos viven en los plugins.

## Estructura

```text
src/
  ui/          componentes genericos (button, dialog, data-table, combobox...)
    map/       componentes de mapa (Leaflet): location-map, location-picker, location-search
    calendar/  resource-calendar: scheduler por recursos con callbacks
    console/   consola operativa: Monaco editor + shell de comandos
  api/         client HTTP y helpers de infraestructura
  confirm.ts   helper de confirmacion de dialogos
  neofetch.ts  fetch de informacion del sistema
```

## Consumo

Via submodule + alias del bundler (patron del repo principal):

```ts
// vite.config.ts
resolve: { alias: { "@systutor/shell": path.resolve(__dirname, "vendor/systutor-shell/src") } }

// tsconfig.json
"paths": { "@systutor/shell/*": ["./vendor/systutor-shell/src/*"] }
```

```ts
import { Button } from "@systutor/shell/ui/button";
import { apiRequest } from "@systutor/shell/api/client";
```

## Requisitos de componentes

1. Generico primero: si un componente sirve solo a un plugin, no va aca.
2. Testeable sin dependencias pesadas (evitar Tooltip crudo si rompe `renderToStaticMarkup`; preferir atributos nativos).
3. Cero logica de negocio: nada de reglas de dominio, permisos ni flujos de un plugin.

## Licencia

MIT
