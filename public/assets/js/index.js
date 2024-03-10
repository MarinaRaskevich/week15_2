const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];

const temperatures = [];

const list = document.createElement("ul");
document.body.appendChild(list);

for (const city of cities) {
  const temperature = parseFloat(
    prompt(`Введите температуру в городе ${city}:`)
  );
  temperatures.push(temperature);
}

for (let index = 0; index < cities.length; index++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Температура в ${cities[index]}: ${temperatures[index]}°C`;
  list.appendChild(listItem);
}

let maxTemperature = Math.max(...temperatures);
let minTemperature = Math.min(...temperatures);

const paragraphOne = document.createElement("p");
const paragraphTwo = document.createElement("p");
paragraphOne.textContent = `Максимальная температура: ${maxTemperature}°C`;
document.body.appendChild(paragraphOne);
paragraphTwo.textContent = `Минимальная температура: ${minTemperature}°C`;
document.body.appendChild(paragraphTwo);
