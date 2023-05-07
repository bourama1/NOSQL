db.reviews.aggregate([
    {
        $group: {
            _id: "$user",
            count: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user"
        }
    },
    {
        $unwind: "$user"
    },
    {
        $project: {
            _id: 0,
            username: "$user.username",
            count: 1
        }
    },
    {
        $sort: { count: -1 }
    },
    {
        $limit: 10
    }
])

//Explain
var result = db.reviews.aggregate([ { $group: { _id: "$user", count: { $sum: 1 } } }, { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } }, { $unwind: "$user" }, { $project: { _id: 0, username: "$user.username", count: 1 } }, { $sort: { count: -1 } }, { $limit: 10 }]).explain("executionStats");