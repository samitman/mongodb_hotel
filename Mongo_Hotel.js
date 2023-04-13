db = db.getSiblingDB("hotel")

//3 collections: guests, rooms, reservations
//need a validator on guests to make sure they have full name, contact info, and address
db.createCollection("guests", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["First Name", "Last Name", "Phone", "Email", "Address"],
            properties: {
                "First Name": {
                    bsonType: "string",
                },
                "Last Name": {
                    bsonType: "string",
                },
                Phone: {
                    bsonType: "string",
                },
                Email: {
                    bsonType: "string",
                },
                Address: {
                    bsonType: "object",
                    required: ["Street", "City", "State", "Zip"],
                    properties: {
                        Street: {
                            bsonType: "string",
                        },
                        City: {
                            bsonType: "string",
                        },
                        State: {
                            bsonType: "string",
                        },
                        Zip: {
                            bsonType: "string",
                        }
                    }
                }
            }
        }
    }
})
db.createCollection("rooms")
db.createCollection("reservations")

//Some sample data
db.guests.insertMany([
    {
        "First Name": "Sam",
        "Last Name": "Itman",
        Phone: "1111111111",
        Email: "si237@njit.edu",
        Address: {
            Street: "3570 Las Vegas Blvd. South",
            City: "Las Vegas",
            State: "NV",
            Zip: "89109"
        }
    },
    {
        "First Name": "Tyrell",
        "Last Name": "Mitchuki",
        Phone: "1111111112",
        Email: "tyrell@njit.edu",
        Address: {
            Street: "1132 Riverside Drive",
            City: "Reno",
            State: "NV",
            Zip: "89512"
        }
    },
    {
        "First Name": "Dominik",
        "Last Name": "Zamuda",
        Phone: "1111111113",
        Email: "dom@njit.edu",
        Address: {
            Street: "301 Dr. Perky Drive",
            City: "New York",
            State: "NY",
            Zip: "10101"
        }
    }
])

db.rooms.insertMany([
    {
        "Room Number": 1,
        Type: "Single",
        Rate: 100
    },
    {
        "Room Number": 2,
        Type: "Single",
        Rate: 100
    },
    {
        "Room Number": 3,
        Type: "Single",
        Rate: 100
    },
    {
        "Room Number": 4,
        Type: "Double",
        Rate: 175
    },
    {
        "Room Number": 5,
        Type: "Double",
        Rate: 175
    },
])

db.reservations.insertMany([
    {
        "Guest ID": 1,
        "Room Number": 1,
        Duration: 7
    },
    {
        "Guest ID": 2,
        "Room Number": 4,
        Duration: 5
    }
])