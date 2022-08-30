export const swaggerDocument = {
  openapi: "3.0.n",
  info: {
    title: "RICKANDMORTY-API",
    description: "Rick and Morty Backend - Complete CRUD",
    termsOfService: "",
    contact: {
      email: "magno_pacheco@gmail.com.br",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3190",
      description: "Test and development API",
    },
    {
      url: "https://rickandmorty-api-mlpp.herokuapp.com/",
      description: "Production API",
    },
  ],
  paths: {
    "/users/create": {
      post: {
        summary: "Creates new user",
        description: "Route responsable for creating a new user",
        tags: ["User"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              examples: {
                Users: {
                  value: {
                    name: "Example Name",
                    email: "exampleemail@example.com",
                    password: "examplepassword",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SH04NvssGLNcQUCAxeX21GPKOGZYBn-xPg&usqp=CAU",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
    "/users": {
      get: {
        summary: "Show the users",
        description: "Route responsable for showing the users",
        tags: ["User"],
        security: [
          {
            token: [],
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/users/{id}": {
      get: {
        summary: "Show the users by id",
        description: "Route responsable for showing the users by id",
        tags: ["User"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "user id for search",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/users/update/{id}": {
      patch: {
        summary: "Update the user",
        description: "Route responsable for update the user by id",
        tags: ["User"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "user id for search",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              examples: {
                User: {
                  value: {
                    name: "Example 2",
                    email: "example2@example.com",
                    password: "passwordexample2",
                    image: "https://imageexample.com",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/users/delete/{id}": {
      delete: {
        summary: "Delete the user",
        description: "Route responsable for showing the users by id",
        tags: ["User"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "user id for search",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "Login in Rick and Morty API",
        description: "Route responsable for the login",
        tags: ["Auth"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              examples: {
                User: {
                  value: {
                    email: "exampleemail@example.com",
                    password: "examplepassword",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
    "/characters/create-character": {
      post: {
        summary: "Creates a new character",
        description: "Route responsable for creating a new character",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Character",
              },
              examples: {
                Tweet: {
                  value: {
                    name: "Character Example",
                    image:
                      "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                    userId: "123example",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/characters/all-characters": {
      get: {
        summary: "Show the characters",
        description: "Route responsable for showing the characters",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            in: "query",
            name: "limit",
            type: "string",
          },
          {
            in: "query",
            name: "offset",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Character",
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/characters/find-character/{id}": {
      get: {
        summary: "Search a character by id",
        description: "Route responsable for searching a character by id",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Character id for search",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/characters/update-character/{id}": {
      patch: {
        summary: "Edit character by id",
        description: "Route responsable for editing a character by id",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Character id for search",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Character",
              },
              examples: {
                Character: {
                  value: {
                    name: "Nake Terminator",
                    imageUrl:
                      "https://rickandmortyapi.com/api/character/avatar/577.jpeg",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
    "/characters/delete-character/{id}": {
      delete: {
        summary: "Delete a character by id",
        description: "Route responsable for deleting a character by id",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Character id for delete",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/characters/search-character": {
      get: {
        summary: "Search character by name",
        description: "Route responsable for searching a character by name",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            in: "query",
            name: "name",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          image: {
            type: "string",
          },
        },
      },
      Character: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          image: {
            type: "string",
          },
          userId: {
            type: "string",
          },
        },
      },
    },
    securitySchemes: {
      token: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: {
    token: [],
  },
};
