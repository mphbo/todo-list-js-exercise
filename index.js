// Arrays to keep track of each task's state

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask(task) {
      task.complete = true;
    },
    logTaskState(task) {
      console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`);
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our task

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.completeTask(task1);
task1.logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
