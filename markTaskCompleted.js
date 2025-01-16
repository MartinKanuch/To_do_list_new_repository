const prompt = require('prompt-sync')();

function markTaskCompleted(tasks) {
    console.log("\n=== Označiť úlohu ako dokončenú ===");
    const taskId = prompt("Zadaj číslo úlohy, ktorú chceš označiť ako dokončenú: ");
    const taskIndex = parseInt(taskId) - 1;

    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log(`Úloha '${tasks[taskIndex].name}' bola označená ako dokončená.`);
    } else {
        console.log("Neexistujúca úloha.");
    }
}

module.exports = markTaskCompleted;
