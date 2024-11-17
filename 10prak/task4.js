function filterByLetterO(array) {
    const Olectures = [];

    array.forEach(lecture => {
        if (lecture[0] === "О")
            Olectures.push(lecture)
    });
    return Olectures
}

const lectures = ["Обзор темы 1", "Практика 2", "Оптимизация", "Тема 3", "Ознакомление"];
const Olectures = filterByLetterO(lectures);

console.log(Olectures);
