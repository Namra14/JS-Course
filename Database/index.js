import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://js-course-a9f16-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)  
const database = getDatabase(app)
const booksInDB = ref(database, "Books")

const booksEl = document.getElementById("books")

onValue(booksInDB, function(snapshot){
    let booksArray = Object.values(snapshot.val())
    for (let i = 0; i < booksArray.length; i++){
        console.log(booksArra[i])
    }
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}