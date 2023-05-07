//První dotaz
db.movies.find({
    "$expr": {
        "$eq": [{ "$year": "$timestamp" }, 2012]
    }
})
//Druhý dotaz
db.movies.find({ Release_Date: { $lt: new Date('2011-12-31'), $gt: new Date('2013-01-01') } }))