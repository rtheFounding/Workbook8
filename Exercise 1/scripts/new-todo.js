const add = document.getElementById("add");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const userId = document.getElementById("userId");
const confirmMessage = document.getElementById("confirmationMessage");

add.addEventListener("click", (e) => {
  data = {
    userID: userId.value,
    title: title.value,
    completed: completed.checked,
  };

  const textJSON = JSON.stringify(data);

  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: textJSON,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(
        response => response.json()
    )
    .then(json => {
      const pre = document.createElement("pre");
      pre.innerHTML += `<pre>${JSON.stringify(json, undefined, 4)}</pre>`;
      document.body.appendChild(pre);
    })
    .catch(err => {
      confirmMessage.innerHTML = "Unexpected server error.";
    });
});
