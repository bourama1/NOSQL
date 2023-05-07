var inputReview = {
    "movie": mov1,
    "user": usr1,
    "rating": 9.7,
    "text": "Awesome rating!"
}

db.reviews.insertOne(inputReview).insertedId;

var avgRating = db.reviews.aggregate([
    { $match: { movie: mov1 } },
    { $group: { _id: "$movie", avg_rating: { $avg: "$rating" } } }
]).toArray()[0].avg_rating;

db.movies.updateOne({_id: mov1}, {$set: { averageRating: avgRating}});