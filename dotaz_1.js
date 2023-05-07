// Prvni dotaz
db.movies.find({
    $expr: {
        $eq: [{ $year: "$releaseDate" }, 2012]
    }
})

// Druhy dotaz
db.movies.find({
    releaseDate: {
        $gte: ISODate("2012-01-01"),
        $lt: ISODate("2013-01-01")
    }
})

//Explain
var result = db.movies.find({ $expr: { $eq: [{ $year: "$releaseDate" }, 2012] } }).explain("executionStats");
result.executionStats.executionTimeMillis;
result.executionStats.totalDocsExamined;

var result = db.movies.find({ releaseDate: { $gte: ISODate("2012-01-01"), $lt: ISODate("2013-01-01") } }).explain("executionStats");
result.executionStats.executionTimeMillis;
result.executionStats.totalDocsExamined;