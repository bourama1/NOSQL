// Prvni dotaz
db.movies.aggregate([
    {
    $match: {}
    },
    {
    $project: {
        _id: 0,
        title: 1,
        averageRating: 1
    }
    },
    {
    $sort: {
        averageRating: 1,
        title: 1
    }
    },
    {
    $limit: 5
    }
]);

//Druhy dotaz
db.movies.find({}, {_id: 0, title: 1, averageRating: 1}).sort({averageRating: 1, title: 1}).limit(5);

//Explain
var result = db.movies.aggregate([{$match: {}},{$project: {_id: 0,title: 1,averageRating: 1}},{$sort: {averageRating: 1,title: 1}},{$limit: 5}]).explain("executionStats");

var result = db.movies.find({}, {_id: 0, title: 1, averageRating: 1}).sort({averageRating: 1, title: 1}).limit(5).explain("executionStats");
result.executionStats.executionTimeMillis;
result.executionStats.totalDocsExamined;