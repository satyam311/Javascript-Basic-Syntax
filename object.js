//objects are the group of keyvalue pair
//similiar to dictionaries in python
// Important Point
// key  : value (ho to isko property kehte hai)
// key : function (ho to isko method kehte hai )

let obj = {
        name: "Tony",
        lastNama: "stark",
        Address: {
            House: "Point Dume",
            City: "Malibu Point",

        },
        age: 35,
        isAvenger: "No",
        Movie: ["Iron Man I", "Iron Man 2 ", "Avengers"],
        sayHi: function() {
            console.log("hi Tony Stark, You are the Best");
        }



    }
    // Some get 
    // console.log(obj.age);
    // console.log(obj.Movie[1]);
    // console.log(obj.isAvenger);
    // console.log(obj.name);
    // obj.sayHi();
    // console.log(obj.Address.City);
    // Some Set/

// // set
// obj.age = 40;
// obj.isAvenger = true;
// obj.friend = ["Steve", " Bruce"];

//  get 

// console.log(obj.age);

// for (let key in obj) {
//     console.log("obj Values", obj[key]);

// }

let find = "age";
console.log(obj[find]);
console.log(obj.age);
console.log(obj["age"]);