export const generateRandomName = () => {
  const name = [
    "Nomi",
    "Sunrider",
    "Thon",
    "Tulak",
    "Hord",
    "Vader",
    "Bane",
    "Desann",
    "Plagueis",
    "Grievous",
    "Zayne",
    "Carrick",
    "Darth Marr",
    "Quinlan",
    "Kanos",
    "Bossk",
    "Ti Kyle",
    "Katarn",
    "Oppo",
    "Rancisis",
    "Yarael",
    "Poof",
    "Darth",
    "Tenebrous",
    "An'ya Kuro",
    "Count Dooku",
    "Ajunta Pall",
    "Sate Pestage",
    "Darth Malak",
    "Thrawn Exar",
    "Kun Pellaeon",
    "Tarkin King",
    "Adas Ulic",
    "Qel Droma",
    "A'Sharad",
    "Hett",
    "Darth Krayt",
    "Darth Sidious",
  ];
  return name[Math.floor(Math.random() * name.length)];
};
const generateRandomString = (length = 16) => {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
};
export default generateRandomString;
