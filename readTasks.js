const fs = require('fs');

function readTasks(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    try {
        const tasks = JSON.parse(fileContent);
        return tasks;
    } catch (err) {
        console.error('Chyba pri čítaní alebo parsovaní dát:', err);
        return [];
    }
}

module.exports = readTasks;
