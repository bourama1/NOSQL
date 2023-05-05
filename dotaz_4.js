db.movies.aggregate([
    $match: { $gt: new Date('2000-01-01') }
    $sort: {averageRating : 1}
])