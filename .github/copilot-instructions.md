# Instrucciones para Agentes AI en Laurrvic Shop

## Arquitectura del Proyecto

Este es un proyecto Angular (v19.1.4) con una arquitectura modular que sigue los siguientes patrones:

### Estructura de Carpetas
- `/src/app/features/` - Componentes principales de páginas
- `/src/app/layouts/` - Layouts reutilizables (auth y default)
- `/src/app/shared/` - Componentes, servicios y utilidades compartidas
- `/src/app/products-module/` - Módulo principal de productos y funcionalidad de tienda
- `/src/styles/` - Estilos globales y variables SCSS

### Patrones Clave

1. **Lazy Loading**: Todos los módulos y componentes principales utilizan lazy loading para optimizar el rendimiento.
   ```typescript
   loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
   ```

2. **Layouts Anidados**: La aplicación usa un sistema de layouts anidados para la estructura de página:
   - `AuthLayoutComponent` - Para páginas de autenticación
   - `DefaultLayoutComponent` - Para páginas principales con navegación

3. **Nomenclatura de Componentes**: 
   - Sufijo descriptivo: `component`, `service`, `directive`
   - Ejemplo: `navbar-component.component.ts`
   - HTML y estilos en archivos separados

4. **Convenciones CSS**:
   - Metodología BEM con prefijo `app-`
   - Variables SCSS en `_variables.scss`
   - Breakpoints en `_media-queries.scss`

## Flujos de Desarrollo

### Comandos Esenciales
```bash
ng serve          # Servidor de desarrollo
ng build          # Build de producción
ng test           # Tests unitarios
ng generate       # Scaffolding de componentes
```

### Testing
- Tests unitarios con Karma
- Archivos `.spec.ts` junto a los componentes
- Enfoque en pruebas de componentes y servicios

## Integración y Dependencias

### Navegación
- Uso de `RouterModule` con lazy loading
- Guard de autenticación para rutas protegidas
- Títulos dinámicos en metadatos de ruta

### Estilos
- Framework CSS personalizado
- Iconos de BoxIcons
- Sistema responsive basado en variables SCSS

## Consideraciones Especiales

1. **Rendimiento**: Priorizar lazy loading y optimización de imágenes
2. **SEO**: Mantener metadatos actualizados en las rutas
3. **Accesibilidad**: Seguir estándares WCAG en nuevos componentes