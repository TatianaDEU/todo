const IN_PROGRESS = 'In Progress';
const DONE = 'Done';
const TODO = 'To Do';

const list = {
    "create a task": IN_PROGRESS,
    "make a bed": DONE,
    "write a post": TODO,
};

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = 'To do';
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    console.log("Todo: ");
     for (let task in list) {
         if(list[task] === TODO) {
             console.log(task);
         }
     }

     console.log("Done: ");
     for (let task in list) {
         if(list[task] === DONE) {
             console.log(task);
         }
     }

     console.log("In Progress: ");
     for (let task in list) {
         if(list[task] === IN_PROGRESS) {
             console.log(task);
         }
     }

}
showList();



