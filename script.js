//task 1
console.log(`//////////////////////////task 1 //////////////////////////`);


const Name="sivanantham";
const ID="STK-26-2987";
const Department="Developer";
let Salary=50000;
const Permanent=true;

console.log(`Name : ${Name}`);
console.log(`ID : ${ID}`);
console.log(`Department : ${Department}`);
console.log(`Salary : ${Salary}`);
console.log(`Permanent : ${Permanent}`);


//task 2

console.log(`//////////////////////////task 2 //////////////////////////`);


let skills=["HTML","CSS","JavaSript","React","Git","Node.js"];
console.log(`First skill : ${skills[0]}`);
console.log(`Third skill : ${skills[3]}`);
console.log(`Last skill : ${skills[skills.length-1]}`);
console.log(`Total skill : ${skills}`);

//task 3

console.log(`//////////////////////////task 3//////////////////////////`);


let company={
    companyName:"Stackly",
    location:"salem",
    employees:100,
    technologies:["HTML","CSS","JavaScript","React","Git","Node.js"]
}
console.log(`Company Name : ${company.companyName}`);
console.log(`Location : ${company.location}`);
console.log(`Second Technology : ${company.technologies[1]}`);
console.log(`Total Technologies : ${company.technologies}`);  


//task 4

console.log(`//////////////////////////task 4//////////////////////////`);

let basicSalary=30000;
let bonus=5000;
totalSalary=basicSalary+bonus;


console.log(`Total Salary : ${totalSalary}`);
console.log(`Tax (10%): ${totalSalary*0.1}`);
console.log(`Final Salary : ${totalSalary - (totalSalary*0.1)}`);


//task 5

console.log(`//////////////////////////task 5//////////////////////////`);  

let attendence=92;

console.log(attendence>=90 ? "Eligible for Exam" : "Not Eligible");


//task 6

console.log(`//////////////////////////task 6//////////////////////////`);

let username="admin";
let password="12345";
console.log(username==="admin" && password==="12345" ? "Login Successful" : "Invalid Credentials");

//task 7

console.log(`//////////////////////////task 7//////////////////////////`);  

let productname="Laptop";
let productprice=45000;
let quantity=2;
let TotalBill=productprice*quantity;

console.log(`Product : ${productname}`);
console.log(`Price : ${productprice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total : ${TotalBill}`);

//task 8

console.log(`//////////////////////////task 8//////////////////////////`);  

let visitors=100;
console.log(`Pre Increment : ${++visitors}`);  
//1+100 = 101 the value is incremented before printing

console.log(`Post Increment : ${visitors++}`); 
//101++= 101 now printed only current value but when we print again it will be 102

console.log(`Pre decrement : ${--visitors}`);
//1-102 = 101 the value is decremented before printing

console.log(`Post decrement : ${visitors--}`);
 //101-- = 100 the value is decremented after printing so it will print 101 but the value is 100 now


 //task 9

console.log(`//////////////////////////task 9//////////////////////////`);      

console.log(10 == "10"); //true because == checks for value only
console.log(10 === "10"); //false because === checks for both value and type
console.log(20 != "20"); //false because != checks for value only
console.log(20 !== "20"); //ture because !== checks for both value and type
console.log(5 < "10"); //true because < check for value only
console.log(15 >= 20); //false because 15 is not equal or creater than 20
console.log(100 <= 100); //true because 100 is equal to 100


//task 10       

console.log(`//////////////////////////task 10//////////////////////////`);

let a1=prompt("Enter your name");
let a2=prompt("enter your age");   
let a3=confirm("Do you want to join our company?");

let result = (a3 == true )? `Welcome ${a1}` : "Thank you";
console.log(result);


// final challenge

console.log(`////////////////////////////////////////////////////`);
console.log(`//////////////////////////final challenge//////////////////////////`);
console.log(`////////////////////////////////////////////////////`);

let employee={
    name:"sivanantham",
    id:"STK-26-2987",
    department:"Developer", 
    experience:"3 years",


}

let skills_set=["HTML","CSS","JavaScript","React","Git","Node.js"];

let salary=50000;
let bonus_1=5000;
let finalsalary=salary+bonus;

let attendence_1=92;
let examstatus=attendence>=75 ? "Eligible" : "Not Eligible";

let user="admin";
let pass=12345;
let loginstatus=(user==="admin" && pass===12345) ? "success" : "failure";

let companyname="Stackly";
let location_1="coimbatore";


console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID : ${employee.id}`);
console.log(`Department : ${employee.department}`);
console.log(`Experience : ${employee.experience}`);
console.log(`Salary : ${salary}`);
console.log(`Bonus : ${bonus_1}`);
console.log(`Final Salary : ${finalsalary}`);
console.log(`Skills : ${skills_set}`);
console.log(`Attendence : ${attendence_1}%`);
console.log(`Exam Status : ${examstatus}`);
console.log(`Login Status : ${loginstatus}`);
console.log(`Company : ${companyname}`);
console.log(`Location : ${location_1}`);









