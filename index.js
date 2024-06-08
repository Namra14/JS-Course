// Object

/*let person = {
    name: 'james angeles',
    age: 20,
    address: 'lamot 2'
};
console.log(person);*/

//Array
/*let name = ['james', 'sam'];
name[2] = 'dearick';
console.log(name[2]);*/

//Functions
/*function loveletter(name, lastName){
    console.log('Hi baby' + ' '  + name +  lastName + ' '  + 'i wish your safe');
}
loveletter('Hannah', 'reyes');*/

/*function loveletter2(name, lastName){
    return name + lastName;
}
console.log(loveletter2('james ', 'angeles'));

document.getElementById("demo").style.color = "green";
document.getElementById("demo").style.textAlign = "center";
document.getElementById("demo").style.fontSize = "50px";
document.getElementById("demo").style.backgroundColor = "grey";

function paragraph(){
    document.getElementById("demo").innerHTML = "Changed";
    document.getElementById("demo").style.color = "yellow";
    document.getElementById("demo").style.backgroundColor = "black";
}
*/
/*let person = {
    firstName: "James",
    lastName: "Angeles",
    age: 22,
    fullName: function() {
        return this.firstName + " " + this.lastName + " - " + this.age;
      },
    };

    person.fullName = function () {
        return (this.firstName + " " + this.lastName + " - " + this.age).toUpperCase();
      };

document.getElementById("demo").innerHTML = JSON.stringify(person.firstName + " " + person.lastName + " " + person.age);
/*JS CSS 
document.getElementById("demo").style.textAlign = "center";
document.getElementById("demo").style.fontSize = "50px";
document.getElementById("demo").style.color = "Grey"
document.getElementById("demo").style.backgroundColor = "black";
document.getElementById("demo").style.marginLeft = "30%";
document.getElementById("demo").style.marginRight = "30%";
document.getElementById("demo").style.paddingTop = "30px";
document.getElementById("demo").style.paddingLeft = "30px";
document.getElementById("demo").style.paddingRight = "30px";
document.getElementById("demo").style.paddingBottom = "30px";

"DISPLAY THE P HAVE CALSS NAME intro"
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 'My name is James ' + x[0].innerHTML + " " + "and "+ x[1].innerHTML;
document.getElementById("demo").style.color = "green";
document.getElementById("demo").style.textAlign = "center";
document.getElementById("demo").style.borderBottom = "1px solid black";

"CHANGE THE VALUE OF THE DEMO ID"
const element = document.getElementById("demo");
element.innerHTML = "ROLAND";*/

/*CHANGE SRC ATTRIBUTE VALUE OF THE ID NAH
document.getElementById("nah").src = "valo logo.jpg";

"CHANGES THE VALUE OF DEMO ID IN HTML ELEMENT USING MOUSE MOVES"
var x = document.getElementById("demo");
x.addEventListener("mouseover", mDown);
x.addEventListener("mouseout", mUp);

function mDown(){
    this.style.backgroundColor = "pink";
    this.style.color = "white";
    this.style.fontWeight = "bolder";
    this.style.fontSize = "25px";
    this.innerHTML = "Sakura"
};

function mUp(){
    this.style.backgroundColor = "red";
    this.innerHTML = "Sporty"
};
var x = document.getElementById("demo");
x.window("resize", mDown);

function mDown(){
    this.style.backgroundColor = "pink";
    this.style.color = "white";
    this.style.fontWeight = "bolder";
    this.style.fontSize = "25px";
    this.innerHTML = "Sakura"
};
const para = document.createElement("p");
const node = document.createTextNode("Aspiring Front end dev.");
para.appendChild(node);

const element = document.getElementById("demo");
element.appendChild(para);

"IF ELSE"  
let hour = 13;

if (hour >= 6 && hour < 12){
    console.log("Good morning!!");
}
else if (hour >= 12 && hour < 18){
    console.log("Good afternoon!!");
}
else{
    console.log("Good Evening");
}*/

// template strings/literals

const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const email = `
    Hey ${recipient}! 
    How is it going? 
    Cheers ${sender}
`

console.log(email)