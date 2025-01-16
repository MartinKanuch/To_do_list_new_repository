const fs = require('fs');

function saveTaskAndExit(tasks) {
    fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
        if (err) {
            console.log("Chyba pri ukladaní úloh:", err);
        } else {
            console.log("Úlohy boli uložené a aplikácia bola ukončená.");
        }
    });
}

module.exports = saveTaskAndExit;

