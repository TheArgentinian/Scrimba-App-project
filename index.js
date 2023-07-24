import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
        databaseURL: "https://realtime-database-e8ea5-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const commentsInDB = ref(database, "commentsList")

const inputFieldEl = document.getElementById("comentario")
const addButtonEl = document.getElementById("btn")
const commentEl = document.getElementById("comment")

addButtonEl.addEventListener("click", function(){
        let inputValue = inputFieldEl.value
        
        push(commentsInDB, inputValue) 

        inputFieldEl.value = ""

        commentEl.innerHTML += `${inputValue}`
})

/* testing returnDB code 

onValue(commentsInDB, function(snapshot) {
        let commentsArray = Object.values(snapshot.val())
        
        clearCommentsListEl()
        
        for (let i = 0; i < commentsArray.length; i++) {
            let currentComment = commentsArray[i]
            
            appendCommentToCommentsListEl(currentComment)
        }
    })

    function clearCommentsListEl() {
        booksEl.innerHTML = ""
    }
    
    function appendCommentToCommentsListEl(commentValue) {
        commentEl.innerHTML += `<li>${commentValue}</li>`
    }

    */

