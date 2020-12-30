let resultJoke = document.getElementById("result");
let jokeBtn = document.getElementById("joke-btn");

const getJoke = async () => {
  // let form = document.getElementById("category");
  // let formData = new FormData(form);
  // let category = formData.values().next()["value"];
  // console.log(category);

  // let category = "Any";
  let category = document.querySelector(".category:checked").value;
  // if (categoryElement) {
  //   category = categoryElement.value;
  // }
  console.log(category);

  const url = `https://v2.jokeapi.dev/joke/${category}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);

  if (data.type === "single") {
    resultJoke.innerHTML = data.joke;
  } else if (data.type === "twopart") {
    resultJoke.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
  }
};
