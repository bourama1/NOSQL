//Prvn� dotaz
db.movies.find({ averageRating: { $gt: 6 } })