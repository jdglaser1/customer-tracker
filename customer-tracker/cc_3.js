//creating the array of customers
let customers = [
{
    name:"Sally",
    email: "Sally@gmail.com",
    purchases: ["Burger", "Fries"]
},

{
    name:"Joe",
    email: "Joe@gmail.com",
    purchases: ["Salad", "Steak"]
},
{
    name:"Amy",
    email: "Amy@gmail.com",
    purchases: ["Milkshake", "Chicken Nuggets"]
}

]
// using push to add a 4th customer
customers.push(
    {
        name: "Ben",
        email: "ben@gmail.com",
        purchases: ["Loaded Fries", "Sweet Tea"]
    }
)

//using shift to remove the first customer
customers.shift()

//updating an existing customer email
customers[1].email= "Amy2@gmail.com"

//adding a new purchase to a customer's purchase
customers[0].purchases.push("Soda")

//using .forEach() to loop though customers

