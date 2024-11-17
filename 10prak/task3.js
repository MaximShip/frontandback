const lectures = ["Тема 1", "Тема 2", "Тема 3"];
const practices = ["Практика 1", "Практика 2", "Практика 3"];

lectures.push("Тема 4");
practices.unshift("Практика 0");

lectures.forEach((lecture) => {
    console.log(lecture)
});
practices.forEach((practice) => {
    console.log(practice)
}
);

function arrayToString(array) {
    return array.join(", ");
}

console.log(arrayToString(lectures));
console.log(arrayToString(practices));
