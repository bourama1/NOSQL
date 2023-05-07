db.actors.insertMany([
  {
    "_id": ObjectId(1),
    "firstname": "Matej",
    "surname": "Boura"
  },
  {
    "_id": ObjectId(2),
    "firstname": "Testact",
    "surname": "Testact"
  }
]);

db.directors.insertMany([
  {
    "_id": ObjectId(1),
    "firstname": "Jiri",
    "surname": "Kansky"
  },
  {
    "_id": ObjectId(2),
    "firstname": "Testdir",
    "surname": "Testdir"
  }
]);

db.addresses.insertMany([
  {
    "_id": ObjectId(1),
    "country": "United States",
    "city": "New York",
    "street": "Broadway",
    "houseNumber": 123
  },
  {
    "_id": ObjectId(2),
    "country": "United Kingdom",
    "city": "London",
    "street": "Baker Street",
    "houseNumber": 221
  },
  {
    "_id": ObjectId(3),
    "country": "France",
    "city": "Paris",
    "street": "Champs-Élysées",
    "houseNumber": 10
  }
]);

  db.movies.insertMany([
    {
      "_id": ObjectId(1),
      "averageRating": 6.6,
      "director": ObjectId(1),
      "releaseDate": new Date(2009-06-01),
      "title": "adipiscing"
    },
    {
      "_id": ObjectId(2),
      "averageRating": 6.7,
      "director": ObjectId(1),
      "releaseDate": new Date(2013-07-16),
      "title": "aliquam adipiscing lacus."
    },
    {
      "_id": ObjectId(3),
      "averageRating": 5.4,
      "director": ObjectId(1),
      "releaseDate": new Date(1980-06-14),
      "title": "Proin"
    },
    {
      "_id": ObjectId(4),
      "averageRating": 6.1,
      "director": ObjectId(1),
      "releaseDate": new Date(2000-03-08),
      "title": "blandit at,"
    },
    {
      "_id": ObjectId(5),
      "averageRating": 3.3,
      "director": ObjectId(2),
      "releaseDate": new Date(1975-09-06),
      "title": "sed pede."
    }
  ]);

  db.casts.insertMany([
    {
      "actor": ObjectId(1),
      "movie": ObjectId(1),
      "role": "Main Star"
    },
    {
      "actor": ObjectId(2),
      "movie": ObjectId(1)
    },
    {
      "actor": ObjectId(2),
      "movie": ObjectId(1),
      "role": "Main Star"
    },
    {
      "actor": ObjectId(3),
      "movie": ObjectId(1),
      "role": "Main Star"
    }
  ]);

  db.users.insertMany([
    {
      "_id": ObjectId(1),
      "email": "admin@test.com",
      "username": "admin",
      "password": "Admin1234?",
      "address": ObjectId(1)
    },
    {
      "_id": ObjectId(2),
      "email": "test00@test00.cz",
      "username": "test",
      "password": "Test1234*",
      "address": ObjectId(2)
    }
  ]);

  db.reviews.insertMany([
    {
      "movie": ObjectId(1),
      "user": ObjectId(1),
      "rating": 9.9,
      "text": "Perfection!"
    },
    {
      "movie": ObjectId(1),
      "user": ObjectId(2),
      "rating": 2.9,
      "text": "Disaster..."
    },
    {
      "movie": ObjectId(2),
      "user": ObjectId(2),
      "rating": 2.9
    }
  ]);