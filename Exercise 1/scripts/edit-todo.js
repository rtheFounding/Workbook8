const findId = document.getElementById("findId");

const todoId = document.getElementById("todoId");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const userId = document.getElementById("userId");

document.getElementById("edit").addEventListener("click", e => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + findId.value)
        .then(response => response.json())
        .then(json => { //COPY results of finding the todo by id, into the form
            todoId.value = json.id;
            title.value = json.title;
            userId.value = json.userId;
            completed.checked = json.completed;

            const pre = document.createElement("pre");
            pre.innerHTML += `<pre>${JSON.stringify(json, undefined, 4)}</pre>`;
            document.body.appendChild(pre);
        });
}); // END CLICK LISTENER

//UPDATE
document.getElementById("update").addEventListener("click", e => {
    //NOTE WE MUST INCLUDE THE ID IN THE URL/ENDPOINT
    fetch("https://jsonplaceholder.typicode.com/todos/" + todoId.value, {
        method: "PUT", //PUT FOR UPDATE INSTEAD OF POST FOR NEW
        body: JSON.stringify({ //CREATE NEW OBJECT AND CONVERT TO JSON TEXT
            id: todoId.value,
            userID: userId.value,
            title: title.value,
            completed: completed.checked
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(
            response => response.json()
        )
        .then(json => {
            const pre = document.createElement("pre");
            pre.innerHTML += `<pre>${JSON.stringify(json, undefined, 4)}</pre>`;
            document.body.appendChild(pre);
        });
}); // END CLICK LISTENER