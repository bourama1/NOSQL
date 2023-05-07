var act1 = db.actors.insertOne({"firstname": "Matej", "surname": "Boura" }).insertedId;
var act2 = db.actors.insertOne({"firstname": "Testact", "surname": "Testact" }).insertedId;
var act3 = db.actors.insertOne({"firstname": "Eva", "surname": "Novakova" }).insertedId;
var act4 = db.actors.insertOne({"firstname": "Tomas", "surname": "Kucera" }).insertedId;
var act5 = db.actors.insertOne({"firstname": "Lucie", "surname": "Kovacova" }).insertedId;
var act6 = db.actors.insertOne({"firstname": "Jiri", "surname": "Svoboda" }).insertedId;
var act7 = db.actors.insertOne({"firstname": "Jan", "surname": "Krejci" }).insertedId;
var act8 = db.actors.insertOne({"firstname": "Monika", "surname": "Novotna" }).insertedId;
var act9 = db.actors.insertOne({"firstname": "Martin", "surname": "Vesely" }).insertedId;
var act10 = db.actors.insertOne({"firstname": "Petra", "surname": "Dvorakova" }).insertedId;

var dir1 = db.directors.insertOne({"firstname": "Jiri", "surname": "Kansky" }).insertedId;
var dir2 = db.directors.insertOne({"firstname": "Testdir", "surname": "Testdir" }).insertedId;
var dir3 = db.directors.insertOne({"firstname": "Lucie", "surname": "Novakova" }).insertedId;
var dir4 = db.directors.insertOne({"firstname": "Pavel", "surname": "Havel" }).insertedId;
var dir5 = db.directors.insertOne({"firstname": "Anna", "surname": "Svobodova" }).insertedId;
var dir6 = db.directors.insertOne({"firstname": "Michal", "surname": "Kopecky" }).insertedId;
var dir7 = db.directors.insertOne({"firstname": "Tereza", "surname": "Malikova" }).insertedId;
var dir8 = db.directors.insertOne({"firstname": "Jakub", "surname": "Vesely" }).insertedId;
var dir9 = db.directors.insertOne({"firstname": "Marie", "surname": "Linhartova" }).insertedId;
var dir10 = db.directors.insertOne({"firstname": "Marek", "surname": "Jedlicka" }).insertedId;

var adr1 = db.addresses.insertOne({"country": "United States", "city": "New York", "street": "Broadway", "houseNumber": 123}).insertedId;
var adr2 = db.addresses.insertOne({"country": "United Kingdom", "city": "London", "street": "Baker Street", "houseNumber": 221}).insertedId;
var adr3 = db.addresses.insertOne({"country": "France", "city": "Paris", "street": "Champs-Élysées", "houseNumber": 13}).insertedId;
var adr4 = db.addresses.insertOne({"country": "Germany", "city": "Berlin", "street": "Friedrichstraße", "houseNumber": 16}).insertedId;
var adr5 = db.addresses.insertOne({"country": "Japan", "city": "Tokyo", "street": "Shibuya", "houseNumber": 1}).insertedId;
var adr6 = db.addresses.insertOne({"country": "Australia", "city": "Sydney", "street": "George Street", "houseNumber": 56}).insertedId;
var adr7 = db.addresses.insertOne({"country": "Spain", "city": "Barcelona", "street": "La Rambla", "houseNumber": 7}).insertedId;
var adr8 = db.addresses.insertOne({"country": "Canada", "city": "Toronto", "street": "Yonge Street", "houseNumber": 123}).insertedId;
var adr9 = db.addresses.insertOne({"country": "Italy", "city": "Rome", "street": "Via del Corso", "houseNumber": 2}).insertedId;
var adr10 = db.addresses.insertOne({"country": "Brazil", "city": "Rio de Janeiro", "street": "Copacabana Beach", "houseNumber": 1}).insertedId;

var mov1 = db.movies.insertOne({"averageRating": 6.6, "director": dir1, "releaseDate": ISODate("2009-06-01"), "title": "adipiscing"}).insertedId;
var mov2 = db.movies.insertOne({"averageRating": 6.7, "director": dir1, "releaseDate": ISODate("2013-07-16"), "title": "aliquam adipiscing"}).insertedId;
var mov3 = db.movies.insertOne({"averageRating": 5.4, "director": dir6, "releaseDate": ISODate("1980-06-14"), "title": "Proin"}).insertedId;
var mov4 = db.movies.insertOne({"averageRating": 6.1, "director": dir1, "releaseDate": ISODate("2000-03-08"), "title": "blandit at,"}).insertedId;
var mov5 = db.movies.insertOne({"averageRating": 3.3, "director": dir2, "releaseDate": ISODate("1975-09-06"), "title": "sed pede."}).insertedId;
var mov6 = db.movies.insertOne({"averageRating": 8.6, "director": dir1, "releaseDate": ISODate("2012-09-06"), "title": "Dotaz 2012"}).insertedId;
var mov7 = db.movies.insertOne({"averageRating": 4.5, "director": dir2, "releaseDate": ISODate("2012-06-06"), "title": "Taky"}).insertedId;
var mov8 = db.movies.insertOne({"averageRating": 6.3, "director": dir9, "releaseDate": ISODate("1998-09-06"), "title": "Random"}).insertedId;
var mov9 = db.movies.insertOne({"averageRating": 8.6, "director": dir6, "releaseDate": ISODate("2001-09-06"), "title": "Drak"}).insertedId;
var mov10 = db.movies.insertOne({"averageRating": 2.5, "director": dir4, "releaseDate": ISODate("2017-06-06"), "title": "Avatar"}).insertedId;

var usr1 = db.users.insertOne({"email": "admin@test.com", "username": "admin", "password": "Admin1234?", "address": adr1}).insertedId;
var usr2 = db.users.insertOne({"email": "test00@test00.cz", "username": "test", "password": "Test1234*", "address": adr2}).insertedId;
var usr3 = db.users.insertOne({"email": "user01@test.com", "username": "user01", "password": "Password123!", "address": adr3}).insertedId;
var usr4 = db.users.insertOne({"email": "user02@test.com", "username": "user02", "password": "P@ssword123", "address": adr4}).insertedId;
var usr5 = db.users.insertOne({"email": "user03@test.com", "username": "user03", "password": "Qwerty123$", "address": adr5}).insertedId;
var usr6 = db.users.insertOne({"email": "user04@test.com", "username": "user04", "password": "Abcdef123*", "address": adr6}).insertedId;
var usr7 = db.users.insertOne({"email": "user05@test.com", "username": "user05", "password": "Password123#", "address": adr7}).insertedId;
var usr8 = db.users.insertOne({"email": "user06@test.com", "username": "user06", "password": "Password123$", "address": adr8}).insertedId;
var usr9 = db.users.insertOne({"email": "user07@test.com", "username": "user07", "password": "Password123^", "address": adr9}).insertedId;
var usr10 = db.users.insertOne({"email": "user08@test.com", "username": "user08", "password": "Password123&", "address": adr10}).insertedId;

db.reviews.insertMany([{"movie": mov1, "user": usr1, "rating": 9.9, "text": "Perfection!"}, {"movie": mov1, "user": usr2, "rating": 2.9, "text": "Disaster..."}, {"movie": mov2, "user": usr2, "rating": 2.9}, {"movie": mov3, "user": usr3, "rating": 6.7, "text": "Decent movie."},  {"movie": mov2, "user": usr4, "rating": 8.2, "text": "Really enjoyed this one!"},  {"movie": mov5, "user": usr5, "rating": 1.5, "text": "Terrible movie, wouldn't recommend."},  {"movie": mov4, "user": usr6, "rating": 7.1, "text": "Solid film with great performances."},  {"movie": mov6, "user": usr7, "rating": 9.5, "text": "One of the best movies I've seen in years."},  {"movie": mov7, "user": usr8, "rating": 5.6, "text": "Mediocre at best."},  {"movie": mov10, "user": usr9, "rating": 8.9, "text": "Really enjoyed this movie, great story!"},  {"movie": mov9, "user": usr10, "rating": 4.3, "text": "Found this film to be quite boring."},  {"movie": mov8, "user": usr1, "rating": 7.5, "text": "Good movie with some flaws, but worth watching."},  {"movie": mov7, "user": usr2, "rating": 6.2, "text": "Decent film, but nothing special."}]);

db.casts.insertMany([{"actor": act1, "movie": mov1, "role": "Main Star"},{"actor": act2, "movie": mov1},{"actor": act2, "movie": mov2, "role": "Main Star"},    {"actor": act1, "movie": mov3, "role": "Main Star"},    {"actor": act3, "movie": mov1, "role": "Supporting Actor"},    {"actor": act3, "movie": mov3},    {"actor": act4, "movie": mov2, "role": "Supporting Actor"},    {"actor": act4, "movie": mov4, "role": "Main Star"},    {"actor": act5, "movie": mov2, "role": "Main Star"},    {"actor": act6, "movie": mov1},    {"actor": act7, "movie": mov3},    {"actor": act8, "movie": mov4, "role": "Main Star"},    {"actor": act9, "movie": mov4},    {"actor": act10, "movie": mov2, "role": "Supporting Actor"}]);