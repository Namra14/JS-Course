// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseUrl: "https://comment-solo-project-default-rtdb.asia-southeast1.firebasedatabase.app/"

}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const commentsDb = ref(database, "Comments")

const inputEl = document.getElementById("input-field")
const publishBtn = document.getElementById("publish")
const commentsListDb = document.getElementById("comments")

publishBtn.addEventListener("click", function(){
    let inputValue = inputEl.value

    push(commentsDb, inputValue)
    console.log(`${inputValue} added to database`)
})

