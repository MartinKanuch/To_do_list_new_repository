const prompt = require('prompt-sync')();

const readTasks = require('./readTasks');
const displayTask = require('./displayTask');
const addTask = require('./addTask');
const markTaskCompleted = require('./markTaskCompleted');
const deleteTask = require('./deleteTask');
const saveTaskAndExit = require('./saveTaskAndExit');

// nacitanie existujucich taskov
const tasks = readTasks('tasks.json');
console.log(tasks);


// Funkcia na zobrazenie menu
function showMenu() {
    console.log("\n====== MENU ===");
    console.log("[1] Zobraziť úlohy");
    console.log("[2] Pridať úlohu");
    console.log("[3] Označiť úlohu ako dokončenú");
    console.log("[4] Odstrániť úlohu");
    console.log("[5] Ukončiť aplikáciu (uložiť úlohy)");

}

// Funkcia na spracovanie voľby užívateľa
function handleUserChoice() {
    console.log('');
    const choice = prompt("Zadaj číslo menu, v ktorom chceš pokračovať: ");

    const options = {
        '1': () => displayTask(tasks),
        '2': () => addTask(tasks),
        '3': () => markTaskCompleted(tasks),
        '4': () => deleteTask(tasks),
        '5': () => saveTaskAndExit(tasks)
    };


    // osetrenie volby menu
    if (options[choice]) {
        options[choice]();
    } else {
        console.log("Neplatná voľba, skúste znova.");
    }

    // vypytat ynovu volbu menu
    if (choice !== '5') {
        showMenu();
        handleUserChoice();
    }
}

showMenu();
handleUserChoice();

