var inputAddress = {
    "country": "Japan",
    "street": "Main street",
    "city": "Tokyo",
    "houseNumber": 10
}

var result = db.addresses.insertOne(inputAddress);
var id = result.insertedId;

var inputUser = {
    "email": "example@example.com",
    "password": "examplePass1=",
    "username": "example",
    "address": id
}

db.users.insertOne(inputUser)