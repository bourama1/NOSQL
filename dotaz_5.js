db.movies.aggregate([{
    $project : { title: {"title"} ,scoreMin: {$min: "averageRating"}} 
    $sort: { title: 1 }
    $limit: 5 }
])