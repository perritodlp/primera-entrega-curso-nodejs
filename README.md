### Primera entrega del curso de introducción a Node.Js mediante el desarrollo de un proyecto ágil

Se lleva a cabo la implementación de las dos historias de usuario asignadas y se verifica el cumplimiento de los criterios de aceptación.

### :cloud: Instalación


```bash
# Clonar el repositorio
git clone https://github.com/perritodlp/primera-entrega-curso-nodejs.git
# Cambiarse al directorio del repo creado
cd primera-entrega-curso-nodejs
```

```bash
# Instalar dependencias
npm install
```

### :clipboard: Ejecución

Primera historia de usuario

```bash
# Listar los cursos disponibles cada 2 segundos
node principal
```

Segunda historia de usuario

```bash
# Inscribir un estudiante
node principal inscribir -i=1 -c=12345678 -n=Fernando

# Validar la obligatoriedad de ingreso de los argumentos 
node principal inscribir

# Generar alerta al no existir el ID del curso y volver a listar los cursos
node principal inscribir -i=99 -c=12345678 -n=Fernando
```