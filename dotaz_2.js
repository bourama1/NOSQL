//První dotaz
db.movies.find({ Release_Date: { $lt: new Date('2003-06-01') } })).count()
//Druhý dotaz
db.movies.find({ Release_Date: { $lt: new Date((new Date()) - 1000 * 60 * 60 * 24 * 365 * 20) } }).count()