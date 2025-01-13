import readline from "readline/promises";
import axios from "axios";
const key = "e738f6cc35361d59bb2303170f864324";
const getWeather = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const jsonData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
    console.log(jsonData);
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const city = await rl.question("Enter your city : ");
getWeather(city);
rl.close;
export function get(arg0) {
    throw new Error("Function not implemented.");
}
