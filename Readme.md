# Cypress Sample Project

Este repositorio es una muestra de cómo trabajar con **Cypress**, una herramienta moderna y potente para la automatización de pruebas end-to-end en aplicaciones web.

---

## **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

1. **Node.js** (versión 12 o superior):
   - Puedes descargarlo desde [Node.js](https://nodejs.org/).
2. **npm** (incluido con Node.js):
   - Para gestionar las dependencias del proyecto.
3. **Git**:
   - Para clonar el repositorio. Descárgalo desde [Git](https://git-scm.com/).

---

## **Instrucciones de Configuración**

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/VickyNovarese/Proyectos-Realizados.git
```

### 2. Instalar Dependencias

Accede al directorio del proyecto clonado y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm ci
```

> **Nota:** El comando `npm ci` asegura una instalación limpia y utiliza las versiones exactas de las dependencias especificadas en el archivo `package-lock.json`.

### 3. Configurar y Ejecutar Cypress

Para abrir la interfaz de usuario de Cypress y ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test
```

Esto abrirá la aplicación de Cypress, donde podrás seleccionar y ejecutar las pruebas disponibles.

---

## **Estructura del Proyecto**

El repositorio sigue la estructura estándar de Cypress:

```
Proyectos-Realizados/
├── cypress/
│   ├── fixtures/       # Datos de prueba (mock data)
│   ├── e2e/    # Archivos de prueba (test cases)
│   ├── plugins/        # Plugins personalizados
│   └── support/        # Comandos y configuraciones adicionales
├── cypress.json         # Archivo de configuración principal
├── package.json         # Dependencias y scripts del proyecto
└── package-lock.json   # Bloqueo de versiones de dependencias
```

### Descripción de Carpetas

- **fixtures/**: Contiene datos estáticos o simulados que pueden ser utilizados en las pruebas.
- **integration/**: Almacena los archivos de prueba, donde cada archivo representa un conjunto de casos de prueba.
- **plugins/**: Configuraciones avanzadas y extensiones de Cypress.
- **support/**: Contiene comandos personalizados y configuraciones globales para las pruebas.

---

## **Comandos Disponibles**

A continuación, se enumeran los comandos principales que puedes utilizar:

- **Abrir Cypress en modo interactivo:**

  ```bash
  npm test
  ```

- **Ejecutar pruebas en modo headless (sin interfaz gráfica):**

  ```bash
  npx cypress run
  ```

- **Ejecutar un conjunto específico de pruebas:**

  ```bash
  npx cypress run --spec "cypress/integration/nombre-de-prueba.spec.js"
  ```

---

## **Recursos Adicionales**

Si deseas aprender más sobre Cypress y sus capacidades, consulta los siguientes recursos:

- [Documentación oficial de Cypress](https://docs.cypress.io/)
- [Guía de introducción a Cypress](https://www.cypress.io/how-it-works/)

---

## **Contribuir**

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu función o corrección:
   ```bash
   git checkout -b feature/nueva-funcion
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregada nueva función"
   ```
4. Envía un pull request.

---

## **Contacto**

Si tienes alguna duda o sugerencia, no dudes en contactarme:

- **Nombre**: Vicky Novarese
- **Email**: mariavirginianovarese@gmail.com
- **GitHub**: [VickyNovarese](https://github.com/VickyNovarese)

---

¡Gracias por explorar este proyecto de muestra con Cypress!




