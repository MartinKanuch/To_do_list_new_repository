const prompt = require('prompt-sync')();

function deleteTask(tasks) {
    console.log("\n=== Odstrániť úlohu ===");
    const taskId = prompt("Zadaj číslo úlohy, ktorú chceš odstrániť: ");
    const taskIndex = parseInt(taskId) - 1;

    if (taskIndex >= 0 && taskIndex < tasks.length) {
        const deletedTask = tasks.splice(taskIndex, 1);
        console.log(`Úloha '${deletedTask[0].name}' bola odstránená.`);
    } else {
        console.log("Neexistujúca úloha.");
    }
}

module.exports = deleteTask;
