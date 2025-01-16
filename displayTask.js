

function displayTask(tasks) {
    console.log("\n==== ÚLOHY ====");
    if (tasks.length === 0) {
        console.log("Žiadne úlohy.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.title} - ${task.completed ? 'Dokončené' : 'Nedokončené'}`);
        });
    }
}

module.exports = displayTask;

