console.log(`У списку ${document.querySelectorAll("#categories .item").length} категорії.`);
document.querySelectorAll("#categories .item").forEach(item => {
  console.log(`Категорія: ${item.dataset.title}`);
  console.log(`Кількість елементів: ${item.dataset.count}`);
});

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const list = document.querySelector("#ingredients");
const items = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
list.append(...items);

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
document.querySelector(".gallery").innerHTML = images
  .map(image => `<li><img src="${image.url}" alt="${image.alt}" width="200"></li>`)
  .reduce((acc, curr) => acc + curr, "");

let value = 0;
const element = document.querySelector("#value");
document.querySelector().addEventListener("click", () => {
  element.textContent = -value;
});
document.querySelector().addEventListener("click", () => {
  element.textContent = +value;
});