// Styling using JS
document.addEventListener("DOMContentLoaded", function() {
    // Style the parent div
    const parentDiv = document.querySelector('.Password-Gen');
    parentDiv.style.padding = '30px';
    parentDiv.style.marginLeft = '30%';
    parentDiv.style.marginRight = '30%';
    parentDiv.style.marginTop = '10%';
    parentDiv.style.border = '2px solid #ddd';
    parentDiv.style.borderRadius = '15px';
    parentDiv.style.backgroundColor = '#1E2A37';
    parentDiv.style.boxShadow = '0 5px 10px rgba(0,0,0,0.2)';

    // Style the h1 element
    const h1Element = document.getElementById('gen');
    h1Element.style.color = 'white';
    h1Element.style.fontSize = '3em';
    h1Element.style.marginBottom = '10px';
    h1Element.style.textAlign = "left";

    // Style the h2 element
    const h2Element = document.getElementById('ran');
    h2Element.style.color = '#49E085';
    h2Element.style.fontSize = '3em';
    h2Element.style.marginTop = '5px';
    h2Element.style.textAlign = "left";

    // Style the p element
    const pElement = document.getElementById("never");
    pElement.style.color = "white";
    pElement.style.marginTop = "-30px";
    pElement.style.fontSize = "1.5em";

    // Style the button element
    const buttonElement = document.getElementById("but");
    buttonElement.style.borderRadius = "5px";
    buttonElement.style.padding = "15px";
    buttonElement.style.fontSize = "1.1em";
    buttonElement.style.backgroundColor = "#0FB981";
    buttonElement.style.border = "none";
    buttonElement.style.color = "white";
    buttonElement.style.marginTop = "30px";
    buttonElement.style.marginBottom = "30px";

    // Shelves
    const generatedPassword = document.querySelector(".shelves");
    generatedPassword.style.color = "white";


    // Password generation
    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
        "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
        "{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];

    function generatePassword(length = 15) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    buttonElement.addEventListener("click", function() {
        passOne.innerHTML = ''; 
        passTwo.innerHTML = ''; 

        for (let i = 0; i < 1; i++) {
            const password1 = generatePassword();
            const password2 = generatePassword();

            const p1 = document.createElement('div');
            p1.className = 'password';
            p1.textContent = password1;

            const p2 = document.createElement('div');
            p2.className = 'password';
            p2.textContent = password2;

            passOne.appendChild(p1);
            passTwo.appendChild(p2);
        }
    });
});
