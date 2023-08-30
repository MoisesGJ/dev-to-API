# Dev-To-API

### Integrantes:

- Emanuel
- Daniel
- Moisés

## API URL: https://dev-to-api-x5st-dev.fl0.io/

## Ejemplos en insomnia (JSON):

- [API URL JSON](https://dev-to-api-x5st-dev.fl0.io/DOCUMENTACION)
- [Archivo JSON](https://github.com/MoisesGJ/dev-to-API/blob/main/INSOMNIA.json)

---

## Documentación:

### Usuarios

#### Obtener lista de usuarios

- **URL:** `/users`
- **Método:** GET
- **Descripción:** Obtiene una lista de todos los usuarios registrados.
- **Respuesta Exitosa (200 OK):**
  ```json
  [
    {
      "id": 64ee17e3acd8b24acb385926 ,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 64ee17e3acd8b24acb385926,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
  ```

#### Crear un usuario nuevo

- **URL:** `/users`
- **Método:** POST
- **Descripción:** Crea un nuevo usuario.
- **Datos de Entrada:**
  ```json
  {
    "name": "Nuevo Usuario",
    "email": "nuevo.usuario@example.com"
  }
  ```
- **Respuesta Exitosa (201 Created):**
  ```json
  {
    "id": 64ee17e3acd8b24acb385926,
    "name": "Nuevo Usuario",
    "email": "nuevo.usuario@example.com"
  }
  ```

#### Obtener información de un usuario

- **URL:** `/users/:id`
- **Método:** GET
- **Descripción:** Obtiene información sobre un usuario específico.
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "id": 64ee17e3acd8b24acb385926,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### Publicaciones

#### Obtener lista de publicaciones

- **URL:** `/posts`
- **Método:** GET
- **Descripción:** Obtiene una lista de todas las publicaciones.
- **Respuesta Exitosa (200 OK):**
  ```json
  [
    {
      "id": 1,
      "title": "Mi primera publicación",
      "body": "Este es el contenido de mi primera publicación.",
      "user": 64ee17e3acd8b24acb385926
    },
    {
      "id": 2,
      "title": "Otra publicación",
      "body": "Contenido de otra publicación interesante.",
      "user": 64ee17e3acd8b24acb385926
    }
  ]
  ```

#### Crear una nueva publicación

- **URL:** `/posts`
- **Método:** POST
- **Descripción:** Crea una nueva publicación.
- **Datos de Entrada:**
  ```json
  {
    "title": "Nueva Publicación",
    "body": "Contenido de la nueva publicación.",
    "user": 64ee17e3acd8b24acb385926
  }
  ```
- **Respuesta Exitosa (201 Created):**
  ```json
  {
    "id": 3,
    "title": "Nueva Publicación",
    "body": "Contenido de la nueva publicación.",
    "user": 64ee17e3acd8b24acb385926
  }
  ```

#### Obtener información de una publicación

- **URL:** `/posts/:id`
- **Método:** GET
- **Descripción:** Obtiene información sobre una publicación específica.
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "id": 1,
    "title": "Mi primera publicación",
    "body": "Este es el contenido de mi primera publicación.",
    "user": 64ee17e3acd8b24acb385926
  }
  ```
