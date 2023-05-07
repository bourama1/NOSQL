//Actors
//1
db.actors.insert{ firstname: "Adam", surname: 007 }
//2
db.actors.insert{ lastname: "Chaser" }
//Directors
//1
db.directors.insert{ firstname: "Steven", surname: "H._.4rrr" }
//2
db.directors.insert{ firstname: , surname: "Lucas" }
//Movies
//1
db.movies.insert{ averageRating: 6.5, director: 4, releaseDate: "prvního ledna 1999", title: "Space Jam" }
//2
db.movies.insert{ averageRating: "Hi", director: 2, releaseDate: "2000-01-01", title: "Space Potato" }
//Casts
//1
db.casts.insert{ role: "Superman", actor: 4, movie: "Justice League" }
//2
db.casts.insert{ role: "Maid", actor: 7 }
//Adresses
//1
db.addresses.insert{county: 123,city: "Oclahoma", street"Adison street", houseNumber: 63  }
//2
db.addresses.insert{ county: "USA", city: "Oclahoma", houseNumber: 6 }
//Users
//1
db.users.insert{email: "john.doe@hello.com", username: "GigaMax", password: 123456, address: 5 }
//2
db.users.insert{ email: "potatoefarmer@bye.com", username: "UrDinoMo", password: "50BoiledPotatoes" }
//Reviews
//1
db.reviews.insert{text:"IT sucked.", rating: 0.1, movie: 5, user: "GigaMax" }
//2
db.reviews.insert{text: "Not enough potatoes.",movie: 7, user: "PotatoFarmer" }