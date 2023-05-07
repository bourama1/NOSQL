var act1 = db.actors.insertOne({"firstname": "Matej", "surname": "Boura" }).insertedId;
var act2 = db.actors.insertOne({"firstname": "Testact", "surname": "Testact" }).insertedId;

var dir1 = db.directors.insertOne({"firstname": "Jiri", "surname": "Kansky" }).insertedId;
var dir2 = db.directors.insertOne({"firstname": "Testdir", "surname": "Testdir" }).insertedId;

var adr1 = db.addresses.insertOne({"country": "United States", "city": "New York", "street": "Broadway", "houseNumber": 123}).insertedId;
var adr2 = db.addresses.insertOne({"country": "United Kingdom", "city": "London", "street": "Baker Street", "houseNumber": 221}).insertedId;
var adr3 = db.addresses.insertOne({"country": "France", "city": "Paris", "street": "Champs-Élysées", "houseNumber": 13}).insertedId;

var mov1 = db.movies.insertOne({"averageRating": 6.6, "director": dir1, "releaseDate": ISODate("2009-06-01"), "title": "adipiscing"}).insertedId;
var mov2 = db.movies.insertOne({"averageRating": 6.7, "director": dir1, "releaseDate": ISODate("2013-07-16"), "title": "aliquam adipiscing"}).insertedId;
var mov3 = db.movies.insertOne({"averageRating": 5.4, "director": dir1, "releaseDate": ISODate("1980-06-14"), "title": "Proin"}).insertedId;
var mov4 = db.movies.insertOne({"averageRating": 6.1, "director": dir1, "releaseDate": ISODate("2000-03-08"), "title": "blandit at,"}).insertedId;
var mov5 = db.movies.insertOne({"averageRating": 3.3, "director": dir2, "releaseDate": ISODate("1975-09-06"), "title": "sed pede."}).insertedId;
var mov6 = db.movies.insertOne({"averageRating": 8.6, "director": dir1, "releaseDate": ISODate("2012-09-06"), "title": "Dotaz 2012"}).insertedId;
var mov7 = db.movies.insertOne({"averageRating": 4.5, "director": dir2, "releaseDate": ISODate("2012-06-06"), "title": "Taky"}).insertedId;

var usr1 = db.users.insertOne({"email": "admin@test.com", "username": "admin", "password": "Admin1234?", "address": adr1}).insertedId;
var usr2 = db.users.insertOne({"email": "test00@test00.cz", "username": "test", "password": "Test1234*", "address": adr2}).insertedId;

db.reviews.insertMany([{"movie": mov1, "user": usr1, "rating": 9.9, "text": "Perfection!"}, {"movie": mov1, "user": usr2, "rating": 2.9, "text": "Disaster..."}, {"movie": mov2, "user": usr2, "rating": 2.9}]);

db.casts.insertMany([{ "actor": act1, "movie": mov1, "role": "Main Star"}, {"actor": act2, "movie": mov1}, {"actor": act2, "movie": mov2, "role": "Main Star"}, {"actor": act1, "movie": mov3, "role": "Main Star"}]);