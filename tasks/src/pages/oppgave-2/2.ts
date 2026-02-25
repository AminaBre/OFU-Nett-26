const startBtn = document.getElementById("start-btn") as HTMLButtonElement;

startBtn.addEventListener("click", guessPassword);

function guessPassword() {
  const secretPassword: string = "heipådeg";

  const userPassword: string | null = prompt("Gjett et hemmelig passord!");
  if (userPassword === secretPassword) {
    alert("Riktig passord!!!");
  }
}
