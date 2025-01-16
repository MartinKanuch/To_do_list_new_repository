

const prompt = require('prompt-sync')();

function addTask(tasks) {
    const taskTitle = prompt("Zadajte názov úlohy: ");

    if (taskTitle.trim()) {
        // unikatne Id tasku
        // const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        let newId;

        if (tasks.length > 0) {
            newId = tasks[tasks.length - 1].id + 1;
        } else {
            newId = 1;
        }


        const newTask = {
            id: newId,
            title: taskTitle.trim(),
            completed: false
        };

        // vlozi task do pola
        tasks.push(newTask);
        console.log(`Úloha '${newTask.title}' bola pridaná s ID ${newTask.id}.`);
    } else {
        console.log("Názov úlohy nemôže byť prázdny.");
    }
}

module.exports = addTask;

