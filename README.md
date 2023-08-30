# Dev-To-API

## Integrantes:

- Emanuel | **@MANOLOOG**
- Daniel | **@HollowZll**
- Moisés | **@MoisesGJ**

## API URL:

- https://dev-to-api-x5st-dev.fl0.io/

## Ejemplos para importar en insomnia (JSON):

- [En nuestra API (/documentacion)](https://dev-to-api-x5st-dev.fl0.io/DOCUMENTACION)
- [Desde un archivo (./INSOMNIA.json)](https://github.com/MoisesGJ/dev-to-API/blob/main/INSOMNIA.json)

---

## Documentación:

### Usuarios

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
    "email": "nuevo.usuario@example.com",
    ...
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
    "email": "john.doe@example.com",
    ...
  }
  ```

### Autorización

#### Obtener autorización

- **URL:** `/auth/login`
- **Método:** POST
- **Descripción:** Obtiene un token de autorización.
- **Datos de Entrada:**
  ```json
  {
    "email": "nuevo.usuario@example.com",
    "password": "gr3at@3wdsG"
  }
  ```
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    ...,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
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
      "user": 64ee17e3acd8b24acb385926,
      ...
    },
    {
      "id": 2,
      "title": "Otra publicación",
      "body": "Contenido de otra publicación interesante.",
      "user": 64ee17e3acd8b24acb385926,
      ...
    }
  ]
  ```

#### Crear una nueva publicación

- **URL:** `/posts`
- **Método:** POST
- ⚠️ **Requiere autorización**
- **Descripción:** Crea una nueva publicación.
- **Datos de Entrada:**
  ```json
  {
    "title": "Nueva Publicación",
    "body": "Contenido de la nueva publicación.",
    "user": 64ee17e3acd8b24acb385926,
    ...
  }
  ```
- **Respuesta Exitosa (201 Created):**
  ```json
  {
    "id": 3,
    "title": "Nueva Publicación",
    "body": "Contenido de la nueva publicación.",
    "user": 64ee17e3acd8b24acb385926,
    ...
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
    "user": 64ee17e3acd8b24acb385926,
    ...
  }
  ```

  #### Editar información de una publicación

- **URL:** `/posts/:id`
- **Método:** PATCH
- ⚠️ **Requiere autorización**
- **Descripción:** Para permitir actualizar un post
- **Respuesta Exitosa (200 OK):**

  ```json
  {
    "title": "Mi publicación editada",
    ...
  }
  ```

  #### Eliminar información de una publicación

- **URL:** `/posts/:id`
- **Método:** DELETE
- ⚠️ **Requiere autorización**
- **Descripción:** Para permitir borrar un post
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "title": "Nueva Publicación",
    "body": "Contenido de la nueva publicación.",
    "user": 64ee17e3acd8b24acb385926,
    ...
  }
  ```
