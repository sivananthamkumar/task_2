console.log("welcome...!");
let details = {
    movies:["avatar","inception","interstellar"],
    prices:250,
    tax:0.18,
    seats:[30,31,32,33,34,35,36,37,38,39,40],

}

let finalbill=details.prices+(details.prices*details.tax);

let ticket_count=prompt("Enter the number of tickets you want to book: ");

let purchase=confirm(`your final bill is RS.${finalbill*ticket_count}...! confirm your purchase?`);

let message = purchase == true ? "your purchase is confirmed...!" : "your purchase is cancelled...!";

alert(message);

console.log(`your final bill is ${finalbill*ticket_count}...!`);
let display = (purchase == true && ticket_count > 1) ? (`movie : ${details.movies[0]} & your booking is confirmed for seat from ${details.seats[0]} to ${details.seats[ticket_count - 1]}`) : ((ticket_count == 1) ? (`movie : ${details.movies[0]} and your booking is confirmed for seat ${details.seats[0]}`) : "your purchase is cancelled...!");
console.log(display);
console.log("thank you for visiting...!");






    








