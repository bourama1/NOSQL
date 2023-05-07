// Prvni dotaz
db.movies.find({ releaseDate: { $lt: new Date(Date.now() - 20 * 365 * 24 * 60 * 60 * 1000) } }).count()

// Druhy dotaz
db.movies.aggregate([
    {
        $match: {
            releaseDate: { $lt: new Date(Date.now() - 20 * 365 * 24 * 60 * 60 * 1000) }
        }
    },
    {
        $count: "total"
    }
])

//Explain
var result = db.movies.find({ releaseDate: { $lt: new Date(Date.now() - 20 * 365 * 24 * 60 * 60 * 1000) } }).explain("executionStats");
result.executionStats.executionTimeMillis;
result.executionStats.totalDocsExamined;

var result = db.movies.aggregate([ { $match: { releaseDate: { $lt: new Date(Date.now() - 20 * 365 * 24 * 60 * 60 * 1000) } } }, { $count: "total" }]).explain("executionStats");