// Prvni dotaz
db.movies.aggregate([
    {
        $lookup:
        {
            from: "reviews",
            localField: "_id",
            foreignField: "movie",
            as: "reviews"
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            numReviews: { $size: "$reviews" }
        }
    },
    {
        $sort: { title: 1 }
    }
])

// Druhy dotaz - nebudou zahrnuty filmy bez recenzi
db.reviews.aggregate([
    {
        $group: {
            _id: "$movie",
            count: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "movies",
            localField: "_id",
            foreignField: "_id",
            as: "movie"
        }
    },
    {
        $project: {
            title: "$movie.title",
            count: 1
        }
    },
    {
        $sort: { title: 1 }
    }
])

//Explain
var result = db.movies.aggregate([ { $lookup: { from: "reviews", localField: "_id", foreignField: "movie", as: "reviews" } }, { $project: { _id:0, title: 1, numReviews: { $size: "$reviews" } } }, { $sort: { title: 1 } }]).explain("executionStats");

var result = db.reviews.aggregate([ { $group: { _id: "$movie", count: { $sum: 1 } } }, { $lookup: { from: "movies", localField: "_id", foreignField: "_id", as: "movie" } }, { $project: { title: "$movie.title", count: 1 } }, { $sort: { title: 1 } }]).explain("executionStats");