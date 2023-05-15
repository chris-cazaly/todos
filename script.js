const textarea = document.querySelector("textarea");
const todolist = document.querySelector("#todolist");

textarea.addEventListener("keydown", (e) => {
  // if key is enter
  if (e.key != "Enter") return;
  e.preventDefault();
  const textvalue = textarea.value;
  e.target.value = "";
  console.log(textvalue);

  const li = document.createElement("li");
  li.innerText = textvalue;
  console.log(li);
  todolist.appendChild(li);
});
