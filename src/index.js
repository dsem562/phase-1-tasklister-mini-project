document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    createTask(e.target["new-task-description"].value);  
  });
});

  function createTask (task) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener("click", handleDelete)
    p.textContent = `${task} `;
    btn.textContent = "x";
    p.appendChild(btn);
    document.querySelector("#tasks").appendChild(p);
  }

  function handleDelete (e) {
    e.target.parentNode.remove();
  }