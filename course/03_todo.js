const fs = require('fs');
const filePath = './todos.json';

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
}

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

const listTasks = () => {
    const tasks = loadTasks();
    console.log('Tasks:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1} - ${task.task}`);
    });
}

const addTasks = (task) => {
    const tasks = loadTasks();
    tasks.push({ task: task });

    saveTasks(tasks);
    console.log('Task added successfully', task);
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const removeTasks = (taskNumber) => {
    const tasks = loadTasks();
    const filteredTasks = tasks.filter((task, index) => {
        return index !== taskNumber - 1;
    });
    saveTasks(filteredTasks);
    console.log('Task removed successfully', taskNumber);
}

const command = process.argv[2];
const argument = process.argv[3];


if (command === 'add') {
    addTasks(argument);
} else if (command === 'list') {
    listTasks();
} else if (command === 'remove') {
    removeTasks(parseInt(argument));
} else {
    console.log('Invalid command');
}