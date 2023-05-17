function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
    const ToDoApp = {
    tasks: [],
    
    addTask(description, dueDate, priority) {
      const newTask = new Task(description, dueDate, priority);
      this.tasks.push(newTask);
      console.log('Task added successfully!');
    },
    
    listAllTasks() {
      console.log('All tasks:');
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}) ${task.description}`);
      });
    },
    
    listCompletedTasks() {
      console.log('Completed tasks:');
      const completedTasks = this.tasks.filter(task => task.completed);
      completedTasks.forEach((task, index) => {
        console.log(`${index + 1}) ${task.description}`);
      });
    },
    
    markTaskAsDone(taskIndex) {
      if (taskIndex < 1 || taskIndex > this.tasks.length) {
        console.log('Invalid task index!');
        return;
      }
      
      const task = this.tasks[taskIndex - 1];
      task.completed = true;
      console.log('Task marked as completed!');
    },
    
    deleteTask(taskIndex) {
      if (taskIndex < 1 || taskIndex > this.tasks.length) {
        console.log('Invalid task index!');
        return;
      }
      
      this.tasks.splice(taskIndex - 1, 1);
      console.log('Task deleted successfully!');
    },
    
    sortByDueDate() {
      this.tasks.sort((a, b) => a.dueDate - b.dueDate);
      console.log('Tasks sorted by due date!');
    },
    
    sortByPriority() {
      this.tasks.sort((a, b) => a.priority - b.priority);
      console.log('Tasks sorted by priority!');
    },
    
    clearAllTasks() {
      this.tasks = [];
      console.log('All tasks cleared!');
    },
  };
    function handleUserInput(input) {
    switch (input) {
      case '1':
        const description = getInputFromUser('Enter task description:');
        const dueDate = new Date(getInputFromUser('Enter task due date (YYYY-MM-DD):'));
        const priority = parseInt(getInputFromUser('Enter task priority (1-5):'));
        ToDoApp.addTask(description, dueDate, priority);
        break;
      case '2':
        ToDoApp.listAllTasks();
        break;
      case '3':
        ToDoApp.listCompletedTasks();
        break;
      case '4':
        const taskIndexToMark = parseInt(getInputFromUser('Enter task index to mark as completed:'));
        ToDoApp.markTaskAsDone(taskIndexToMark);
        break;
      case '5':
        const taskIndexToDelete = parseInt(getInputFromUser('Enter task index to delete:'));
        ToDoApp.deleteTask(taskIndexToDelete);
        break;
      case '6':
        ToDoApp.sortByDueDate();
        break;
      case '7':
        ToDoApp.sortByPriority();
        break;
      case '8':
        ToDoApp.clearAllTasks();
        break;
      default:
        console.log('Invalid choice!');
    }
  }
  
  function getInputFromUser(prompt) {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    return new Promise((resolve) => {
      readline.question(prompt, (input) => {
        readline.close();
        resolve(input);
      });
    });
  }
    async function main() {
    console.log('***************************');
    console.log('Welcome to JS TODO-APP');
    console.log('***************************');
    
    let choice = '';
    
    while (choice !== 'q') {
      console.log('Select an action:');
      console.log('1) Add a new task');
      console.log('2) List all tasks');
      console.log('3) List completed tasks');
      console.log('4) Mark a task as completed');
      console.log('5) Delete a task');
      console.log('6) Sort tasks by due date');
      console.log('7) Sort tasks by priority');
      console.log('8) Clear all tasks');
      console.log('q) Quit');
      
      choice = await getInputFromUser('What\'s your choice?');
      console.log('***************************');
      
      handleUserInput(choice);
      
      console.log('***************************');
    }
    
    console.log('Goodbye!');
    process.exit(0);
  }
  
  main();