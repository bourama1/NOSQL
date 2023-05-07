//Actors
//1 - prijmeni neni string
db.actors.insertOne({ firstname: "Adam", surname: 007 });
//2 - chybi povinne atributy
db.actors.insertOne({ lastname: "Chaser" });

//Directors
//1 - prijmeni obsahuje nepovolene znaky
db.directors.insertOne({ firstname: "Steven", surname: "H._.4rrr" });
//2 - jmeno musi mit alespon 1 znak a to velke pocatecni pismeno
db.directors.insertOne({ firstname: "", surname: "Lucas" });

//Movies
//1 - releaseDate neni Date
db.movies.insertOne({ averageRating: 6.5, director: ObjectId('6457c98944a9dbef5c0d3902'), releaseDate: "prvniho ledna 1999", title: "Space Jam" });
//2 - averageRating neni double
db.movies.insertOne({ averageRating: "Hi", director: ObjectId('6457c98944a9dbef5c0d3902'), releaseDate: ISODate("2012-06-06"), title: "Space Potato" });

//Casts
//1 - movie neni ObjectId
db.casts.insertOne({ role: "Superman", actor: ObjectId('6457c98944a9dbef5c0d38f8'), movie: "Justice League" });
//2 - chybi povinny atribut movie
db.casts.insertOne({ role: "Maid", actor: ObjectId('6457c98944a9dbef5c0d38f8') });

//Addresses
//1 - country neni string
db.addresses.insertOne({country: 123, city: "Oclahoma", street: "Adison street", houseNumber: 63  });
//2 - chybi povinny atribut street
db.addresses.insertOne({ country: "USA", city: "Oclahoma", houseNumber: 6 });

//Users
//1 - password nesplnuje podminky slozitosti
db.users.insertOne({email: "johndoe@hello.com", username: "GigaMax", password: "123456", address: ObjectId('6457c98a44a9dbef5c0d390c') });
//2 - chybi povinny atribut address
db.users.insertOne({ email: "potatoefarmer@bye.com", username: "UrDinoMo", password: "50BoiledPotatoes@" });
//3 - email nesplnuje podminky formatu - neni platny email
db.users.insertOne({email: "johndoehello@com", username: "GigaMax", password: "Pass123456?", address: ObjectId('6457c98a44a9dbef5c0d390c') });


//Reviews
//1 - movie neni nazev filmu, ale jeho ObjectId
db.reviews.insertOne({text:"IT sucked.", rating: 0.1, movie: "IT", user: ObjectId('6457c98b44a9dbef5c0d3920') });
//2 - chybi povinny atribut rating
db.reviews.insertOne({text: "Not enough potatoes.", movie: ObjectId('6457c98a44a9dbef5c0d3916'), user: ObjectId('6457c98b44a9dbef5c0d3920') });