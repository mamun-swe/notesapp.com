# notesapp.com

The NotesApp Frontend enables standard CRUD operations: Create, Read, Update, and Delete for managing notes. Developed with React.js and styled using TailwindCSS, it offers a responsive and interactive user interface. Written in TypeScript, the application benefits from enhanced type safety and maintainability. It follows a structured, scalable architecture to support future growth. Additionally, the application is Dockerized for streamlined deployment and version control.

## Application directory architecture:

- notesapp.com
  - src (Main source directory for the frontend application.)
  - assets (Contains static files like images, icons.)
  - components (Reusable UI components such as buttons, modals, inputs, etc., used across multiple pages)
  - config (Stores configuration files like API endpoints, environment settings, and constants.)
  - interfaces (TypeScript interfaces and type definitions to ensure type safety across the application)
  - layouts (Defines layout wrappers (e.g., header, sidebar, footer) used to maintain consistent structure across pages.)
  - pages (Holds the main route-based React components representing different views/screens of the app.)
  - routes (Manages application routing logic, maps paths to specific components or views.)
  - services (Handles API calls and business logic for interacting with backend endpoints.)
  - utilities (Helper functions and utility methods used throughout the application for common tasks.)
- Dockerfile (Defines instructions for building the Docker image of the frontend application.)
- docker-compose.yaml (Manages multi-container Docker applications)
- run.sh (Shell script to start the Docker container for the application.)
- down.sh (Shell script to stop and remove Docker containers and related resources.)
- format.sh (Shell script for formatting code using tools like Prettier or ESLint.)

...Rest of the files
Includes configuration files such as .env, .gitignore, tsconfig.json, package.json, and other setup or build tools essential for the project.


## Prerequisites

1. **Node.js** (v20 or higher recommended)
2. **npm** (comes with Node.js)
3. [Optional] **Docker** (if you’d like to run the application inside a container)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mamun-swe/api.notesapp.com
```

```bash
cd api.notesapp.com
```

### Setup Environment Variables

Create a .env file in application root directory and copy APPLICATION_PORT from .env.example and paste it to .env file.

### Install Dependencies

```bash
npm install
```

### Build the Application

```bash
npm run build
```

### Run the Application

```bash
npm start
```

## Running with Docker

This application is set up to run easily inside a Docker container using shell scripts. Before you begin, grant execute permissions to both run.sh and down.sh. Full instructions are provided below.

### Grant Execute Permissions

```bash
chmod +x ./run.sh
chmod +x ./down.sh
```

### Start the Application inside Docker container

From the project's root directory, run:

```bash
./run.sh
```

The application will be accessible at http://localhost:4000/<PORT>.

### Stop the Application inside Docker container

From the project's root directory, run:

```bash
./down.sh
```