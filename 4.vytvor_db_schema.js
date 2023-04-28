use movieDB; 
db.dropDatabase();

use movieDB;
db.createCollection("actors", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "firstname", "surname"],
         properties: {
            firstname: {
               bsonType: "string",
               description: "'firstname' must be a string and is required",
               pattern: "^[A-Z][A-z']*$",
               maxLength: 30
            },
            surname: {
               bsonType: "string",
               description: "'surname' must be a string and is required",
               pattern: "^[A-Z][A-z']*$",
               maxLength: 30
            }
         }
      }
   }
} );


db.createCollection("directors", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "firstname", "surname"],
         properties: {
            firstname: {
               bsonType: "string",
               description: "'firstname' must be a string and is required",
               pattern: "^[A-Z][A-z']*$",
               maxLength: 30
            },
            surname: {
               bsonType: "string",
               description: "'surname' must be a string and is required",
               pattern: "^[A-Z][A-z']*$",
               maxLength: 30
            }
         }
      }
   }
} );


db.createCollection("movies", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "averageRating", "director", "releaseDate", "title"],
         properties: {
            averageRating: {
               bsonType: [ "double" ],
               description: "'averageRating' must be a double and is required",
               minimum: 0,
               maximum: 9.9,
            },
            director: {
               bsonType: "objectId",
               description: "'director' must be a director and is required"
            },
            releaseDate: {
               bsonType: "date",
               description: "'releaseDate' must be a Date and is required"
            },
            title: {
               bsonType: "string",
               description: "'title' must be a string and is required",
               pattern: "^[A-z ,.'-]+$",
               maxLength: 30
            }
         }
      }
   }
} );


db.createCollection("casts", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "actor", "movie"],
         properties: {
            role: {
               bsonType: "string",
               description: "'role' must be a string",
               pattern: "^[A-z 0-9,.'-]+$",
               maxLength: 30
            },
            actor: {
               bsonType: "objectId",
               description: "'actor' must be a actor id and is required"
            },
            movie: {
               bsonType: "objectId",
               description: "'movie' must be a movie id and is required"
            }
         }
      }
   }
} );


db.createCollection("addresses", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "country", "city", "street", "houseNumber"],
         properties: {
            country: {
               bsonType: "string",
               description: "'country' must be a string and is required",
               maxLength: 30
            },
            city: {
               bsonType: "string",
               description: "'city' must be a string and is required",
               maxLength: 30
            },
            street: {
               bsonType: "string",
               description: "'street' must be a string and is required",
               maxLength: 30
            },
            houseNumber: {
               bsonType: "int",
               description: "'houseNumber' must be a integer and is required"
            }
         }
      }
   }
} );


db.createCollection("users", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "email", "username", "password", "address"],
         properties: {
            email: {
               bsonType: "string",
               description: "'email' must be a string and is required",
               pattern: "^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\\.[a-zA-Z]{2,}$",
               maxLength: 30
            },
            username: {
               bsonType: "string",
               description: "'username' must be a string and is required",
               maxLength: 30
            },
            password: {
               bsonType: "string",
               description: "'password' must be a string and is required",
               pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$",
               maxLength: 30
            },
            address: {
               bsonType: "objectId",
               description: "'address' must be a address id and is required"
            }
         }
      }
   }
} );


db.createCollection("reviews", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "movie", "user", "rating"],
         properties: {
            text: {
               bsonType: "string",
               description: "'text' must be a string",
               pattern: "^[&_!@?=.* A-z0-9]+$",
               maxLength: 100
            },
            rating: {
               bsonType: [ "double" ],
               description: "'rating' must be a double and is required",
               minimum: 0,
               maximum: 9.9,
            },
            movie: {
               bsonType: "objectId",
               description: "'movie' must be a movie id and is required"
            },
            user: {
               bsonType: "objectId",
               description: "'user' must be a user id and is required"
            }
         }
      }
   }
} );