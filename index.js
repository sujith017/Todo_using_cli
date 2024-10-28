const fs = require("fs");
const path = require("path");

const TASK_FILE = path.join(__dirname,"tasklist.json");

const d = new Date();

const loadtask = () =>{
    if(!fs.existsSync(TASK_FILE))
    {
        return [];
    }

    const data = fs.readFileSync(TASK_FILE);

    return JSON.parse(data);
}

const writetask = (tasks) => {
    fs.writeFileSync(TASK_FILE,JSON.stringify(tasks,null,2));
}

const addtask = (title) =>
{
    const tasks = loadtask();
    const taskid = tasks.length+1;
    tasks.push({id: taskid ,title, status :'todo',createdAt:d.getDate()+":"+d.getMonth()+":"+d.getFullYear()+" At "+d.getHours()+":"+d.getMinutes(),updatedAt:d.getDate()+":"+d.getMonth()+":"+d.getFullYear()+" At "+d.getHours()+":"+d.getMinutes() });
    writetask(tasks);
}

const updatetask = (taskid,newtask) =>
{
    const tasks = loadtask();
    const task = tasks.find(task => task.id == taskid);

    if(task)
    {
        task.title = newtask;
        task.updatedAt = d.getDate()+":"+d.getMonth()+":"+d.getFullYear()+" At "+d.getHours()+":"+d.getMinutes();
        writetask(task);
        console.log("updated successfully");
    }
    else{
        console.log("task not found");
    }
}

const deletetask = (taskid) =>
{
    const tasks = loadtask();
    const filtered = tasks.filter(task => task.id !== taskid);

    if(filtered.length<tasks.length)
    {
        writetask(filtered);

        console.log("written successfully");
    }
    else{
        console.log("not found the task");
    }
}

const markinprogress =(taskid) =>
{
    const tasks = loadtask();

    const task = tasks.find(task => task.id === taskid);

    if(task)
    {
        task.status = "in-progress";
        writetask(task);

        console.log("success");
    }
    else{
        console.log("not found");
    }
}
const markasdone = (taskid) =>{
  const tasks = loadtask();
  const task = tasks.find(task => task.id === taskid);

  if(task)
  {
    task.status = "done";
    writetask(task);
    console.log("sucess");
  }
  else{
    console.log("task not found");
  }
}

const listtask = (status) =>{
    const tasks = loadtask();

    const filtered = status ? tasks.filter(task => task.status === status): tasks;
    if(Array.isArray(filtered))
    {
        filtered.forEach(task => {
            console.log(`[${task.status}] ${task.id}: ${task.title} Created at ${task.createdAt} Last updated at ${task.updatedAt}`);
        });    
    }
    else{
        console.log(`[${tasks.status}] ${tasks.id}: ${tasks.title} Created at ${tasks.createdAt} Last updated at ${tasks.updatedAt}`);
    }

    
}


const main = () =>{
    const [, , command, ...args] = process.argv;

    switch(command){
        case 'add':
            addtask(args.join(''));
            break;
        case 'update':
            updatetask(Number(args[0]),args.slice(1).join(''));
            break;
        case 'delete':
            deletetask(Number(args[0]));
            break;
        case 'mark-in-progress':
            markinprogress(Number(args[0]));
            break;
        case 'mark-done':
            markasdone(Number(args[0]));
            break;
        case 'list':
            listtask(Number(args[0]));
            break;
        default:
            console.log(" Invalid command use add,update,delete,mark-in-progress,mark-done,list");
            break;
    }
}

main();