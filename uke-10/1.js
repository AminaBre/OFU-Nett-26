async function getHarryPotterCharacters() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Klarte ikke å hente karakterer", error);
  }
}

async function displayCharacters() {
  const characters = await getHarryPotterCharacters();

  console.log(characters);

  characters.forEach((character) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <img src="${character.image}" style="width: 200px"/>
    <h2>${character.name}</h2>
    <h3>${character.patronus}</h3>
    `;

    document.body.append(div);
  });
}

displayCharacters();
