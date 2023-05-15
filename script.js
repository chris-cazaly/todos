const textarea = document.querySelector("textarea");
const todolist = document.querySelector("#todolist");

textarea.addEventListener("keydown", (e) => {
  // if key is enter
  if (e.key != "Enter") return;

  e.preventDefault();

  const textvalue = textarea.value;
  e.target.value = "";

  const div = document.createElement("div");
  div.classList.add("tododiv");

  const p = document.createElement("p");
  p.classList.add("todop");
  p.innerText = textvalue;

  const removebutton = document.createElement("button");
  removebutton.onclick = () => {
    todolist.removeChild(div);
  };
  removebutton.innerText = "✖";
  removebutton.classList.add("button");

  const completebutton = document.createElement("button");
  completebutton.onclick = () => {
    p.classList.toggle("complete");
  };
  completebutton.innerText = "✓";
  completebutton.classList.add("button");

  div.appendChild(p);
  div.appendChild(completebutton);
  div.appendChild(removebutton);
  todolist.appendChild(div);

  console.log(div);
});
