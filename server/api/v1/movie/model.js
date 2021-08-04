const Validator = require("jsonschema").Validator;
const v = new Validator();

const createMovieSchema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "object",
  title: "The root schema",
  description: "The root schema comprises the entire JSON document.",
  default: {},
  examples: [
    {
      database: "testing",
      collection: "movies",
      document: [
        {
          owner: {
            name: "Luis",
            email: "garzia.luiz@gmail.com",
          },
          name: "deprueba1",
          releaseDate: "2014-10-26",
          actors: "Matthew McConaughey",
          genre: "Fiction",
          director: "Christopher Nolan",
          screenwriter: "Jonathan Nolan",
          likes: 0,
        },
        {
          owner: {
            name: "Steel Herreta",
            email: "steelh@gmail.com",
          },
          name: "Steel Herreta",
          releaseDate: "2014-10-26",
          actors: "Es",
          genre: "mi",
          director: "Christopher Nolan",
          screenwriter: "Jonathan Nolan",
          likes: 0,
        },
      ],
      indexes: null,
      session: null,
    },
  ],
  required: ["database", "collection", "document", "indexes", "session"],
  properties: {
    database: {
      $id: "#/properties/database",
      type: "string",
      title: "The database schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["testing"],
    },
    collection: {
      $id: "#/properties/collection",
      type: "string",
      title: "The collection schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["movies"],
    },
    document: {
      $id: "#/properties/document",
      type: "array",
      title: "The document schema",
      description: "An explanation about the purpose of this instance.",
      default: [],
      examples: [
        [
          {
            owner: {
              name: "Luis",
              email: "garzia.luiz@gmail.com",
            },
            name: "deprueba1",
            releaseDate: "2014-10-26",
            actors: "Matthew McConaughey",
            genre: "Fiction",
            director: "Christopher Nolan",
            screenwriter: "Jonathan Nolan",
            likes: 0,
          },
          {
            owner: {
              name: "Steel Herreta",
              email: "steelh@gmail.com",
            },
            name: "Steel Herreta",
            releaseDate: "2014-10-26",
            actors: "Es",
            genre: "mi",
            director: "Christopher Nolan",
            screenwriter: "Jonathan Nolan",
            likes: 0,
          },
        ],
      ],
      additionalItems: true,
      items: {
        $id: "#/properties/document/items",
        anyOf: [
          {
            $id: "#/properties/document/items/anyOf/0",
            type: "object",
            title: "The first anyOf schema",
            description: "An explanation about the purpose of this instance.",
            default: {},
            examples: [
              {
                owner: {
                  name: "Luis",
                  email: "garzia.luiz@gmail.com",
                },
                name: "deprueba1",
                releaseDate: "2014-10-26",
                actors: "Matthew McConaughey",
                genre: "Fiction",
                director: "Christopher Nolan",
                screenwriter: "Jonathan Nolan",
                likes: 0,
              },
            ],
            required: [
              "owner",
              "name",
              "releaseDate",
              "actors",
              "genre",
              "director",
              "screenwriter",
              "likes",
            ],
            properties: {
              owner: {
                $id: "#/properties/document/items/anyOf/0/properties/owner",
                type: "object",
                title: "The owner schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: {},
                examples: [
                  {
                    name: "Luis",
                    email: "garzia.luiz@gmail.com",
                  },
                ],
                required: ["name", "email"],
                properties: {
                  name: {
                    $id: "#/properties/document/items/anyOf/0/properties/owner/properties/name",
                    type: "string",
                    title: "The name schema",
                    description:
                      "An explanation about the purpose of this instance.",
                    default: "",
                    examples: ["Luis"],
                  },
                  email: {
                    $id: "#/properties/document/items/anyOf/0/properties/owner/properties/email",
                    type: "string",
                    title: "The email schema",
                    description:
                      "An explanation about the purpose of this instance.",
                    default: "",
                    examples: ["garzia.luiz@gmail.com"],
                  },
                },
                additionalProperties: true,
              },
              name: {
                $id: "#/properties/document/items/anyOf/0/properties/name",
                type: "string",
                title: "The name schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["deprueba1"],
              },
              releaseDate: {
                $id: "#/properties/document/items/anyOf/0/properties/releaseDate",
                type: "string",
                title: "The releaseDate schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["2014-10-26"],
              },
              actors: {
                $id: "#/properties/document/items/anyOf/0/properties/actors",
                type: "string",
                title: "The actors schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Matthew McConaughey"],
              },
              genre: {
                $id: "#/properties/document/items/anyOf/0/properties/genre",
                type: "string",
                title: "The genre schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Fiction"],
              },
              director: {
                $id: "#/properties/document/items/anyOf/0/properties/director",
                type: "string",
                title: "The director schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Christopher Nolan"],
              },
              screenwriter: {
                $id: "#/properties/document/items/anyOf/0/properties/screenwriter",
                type: "string",
                title: "The screenwriter schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Jonathan Nolan"],
              },
              likes: {
                $id: "#/properties/document/items/anyOf/0/properties/likes",
                type: "integer",
                title: "The likes schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: 0,
                examples: [0],
              },
            },
            additionalProperties: true,
          },
        ],
      },
    },
    indexes: {
      $id: "#/properties/indexes",
      type: "null",
      title: "The indexes schema",
      description: "An explanation about the purpose of this instance.",
      default: null,
      examples: [null],
    },
    session: {
      $id: "#/properties/session",
      type: "null",
      title: "The session schema",
      description: "An explanation about the purpose of this instance.",
      default: null,
      examples: [null],
    },
  },
  additionalProperties: true,
};

const updateMovieScrema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "object",
  title: "The root schema",
  description: "The root schema comprises the entire JSON document.",
  default: {},
  examples: [
    {
      database: "testing",
      collection: "movies",
      document: {
        movieId: "3c0sb94krxrcp6b",
      },
      newDocument: {
        owner: {
          name: "Steel Herreta",
          email: "steelh@gmail.com",
        },
        name: "Luis G",
        releaseDate: "2014-10-26",
        actors: "Es",
        genre: "mi",
        director: "Christopher Nolan",
        screenwriter: "Jonathan Nolan",
        likes: 7,
      },
    },
  ],
  required: ["database", "collection", "document", "newDocument"],
  properties: {
    database: {
      $id: "#/properties/database",
      type: "string",
      title: "The database schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["testing"],
    },
    collection: {
      $id: "#/properties/collection",
      type: "string",
      title: "The collection schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["movies"],
    },
    document: {
      $id: "#/properties/document",
      type: "object",
      title: "The document schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          movieId: "3c0sb94krxrcp6b",
        },
      ],
      required: ["movieId"],
      properties: {
        movieId: {
          $id: "#/properties/document/properties/movieId",
          type: "string",
          title: "The movieId schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["3c0sb94krxrcp6b"],
        },
      },
      additionalProperties: true,
    },
    newDocument: {
      $id: "#/properties/newDocument",
      type: "object",
      title: "The newDocument schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          owner: {
            name: "Steel Herreta",
            email: "steelh@gmail.com",
          },
          name: "Luis G",
          releaseDate: "2014-10-26",
          actors: "Es",
          genre: "mi",
          director: "Christopher Nolan",
          screenwriter: "Jonathan Nolan",
          likes: 7,
        },
      ],
      required: [],
      properties: {
        owner: {
          $id: "#/properties/newDocument/properties/owner",
          type: "object",
          title: "The owner schema",
          description: "An explanation about the purpose of this instance.",
          default: {},
          examples: [
            {
              name: "Steel Herreta",
              email: "steelh@gmail.com",
            },
          ],
          required: ["name", "email"],
          properties: {
            name: {
              $id: "#/properties/newDocument/properties/owner/properties/name",
              type: "string",
              title: "The name schema",
              description: "An explanation about the purpose of this instance.",
              default: "",
              examples: ["Steel Herreta"],
            },
            email: {
              $id: "#/properties/newDocument/properties/owner/properties/email",
              type: "string",
              title: "The email schema",
              description: "An explanation about the purpose of this instance.",
              default: "",
              examples: ["steelh@gmail.com"],
            },
          },
          additionalProperties: true,
        },
        name: {
          $id: "#/properties/newDocument/properties/name",
          type: "string",
          title: "The name schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Luis G"],
        },
        releaseDate: {
          $id: "#/properties/newDocument/properties/releaseDate",
          type: "string",
          title: "The releaseDate schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["2014-10-26"],
        },
        actors: {
          $id: "#/properties/newDocument/properties/actors",
          type: "string",
          title: "The actors schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Es"],
        },
        genre: {
          $id: "#/properties/newDocument/properties/genre",
          type: "string",
          title: "The genre schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["mi"],
        },
        director: {
          $id: "#/properties/newDocument/properties/director",
          type: "string",
          title: "The director schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Christopher Nolan"],
        },
        screenwriter: {
          $id: "#/properties/newDocument/properties/screenwriter",
          type: "string",
          title: "The screenwriter schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Jonathan Nolan"],
        },
        likes: {
          $id: "#/properties/newDocument/properties/likes",
          type: "integer",
          title: "The likes schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [7],
        },
      },
      additionalProperties: true,
    },
  },
  additionalProperties: true,
};

const deleteMovieSchema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "object",
  title: "The root schema",
  description: "The root schema comprises the entire JSON document.",
  default: {},
  examples: [
    {
      database: "testing",
      collection: "movies",
      document: {
        movieId: "bzg8gokrv5unq1",
      },
    },
  ],
  required: ["database", "collection", "document"],
  properties: {
    database: {
      $id: "#/properties/database",
      type: "string",
      title: "The database schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["testing"],
    },
    collection: {
      $id: "#/properties/collection",
      type: "string",
      title: "The collection schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["movies"],
    },
    document: {
      $id: "#/properties/document",
      type: "object",
      title: "The document schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          movieId: "bzg8gokrv5unq1",
        },
      ],
      required: ["movieId"],
      properties: {
        movieId: {
          $id: "#/properties/document/properties/movieId",
          type: "string",
          title: "The movieId schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["bzg8gokrv5unq1"],
        },
      },
      additionalProperties: true,
    },
  },
  additionalProperties: true,
};

const likeMovieSchema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "object",
  title: "The root schema",
  description: "The root schema comprises the entire JSON document.",
  default: {},
  examples: [
    {
      database: "testing",
      collection: "movies",
      document: {
        reviewer: "Luis García",
        movieId: "3c0sb94krxrcp6b",
      },
    },
  ],
  required: ["database", "collection", "document"],
  properties: {
    database: {
      $id: "#/properties/database",
      type: "string",
      title: "The database schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["testing"],
    },
    collection: {
      $id: "#/properties/collection",
      type: "string",
      title: "The collection schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["movies"],
    },
    document: {
      $id: "#/properties/document",
      type: "object",
      title: "The document schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          reviewer: "Luis García",
          movieId: "3c0sb94krxrcp6b",
        },
      ],
      required: ["reviewer", "movieId"],
      properties: {
        reviewer: {
          $id: "#/properties/document/properties/reviewer",
          type: "string",
          title: "The reviewer schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Luis García"],
        },
        movieId: {
          $id: "#/properties/document/properties/movieId",
          type: "string",
          title: "The movieId schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["3c0sb94krxrcp6b"],
        },
      },
      additionalProperties: true,
    },
  },
  additionalProperties: true,
};

const isAValidModel = async (document, schema) => {
  return v.validate(document, schema).valid;
};

module.exports = {
  createMovieSchema: createMovieSchema,
  updateMovieSchema: updateMovieScrema,
  deleteMovieSchema: deleteMovieSchema,
  likeMovieSchema: likeMovieSchema,
  isAValidModel: isAValidModel,
};

/*
MONGOOSE 

const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  actors: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  screenwriter: { type: String, required: true },
};

const movies = new Schema(fields, { timestamps: true });

module.exports = {
  Model: mongoose.model("movies", movies),
  fields,
};
*/
