## Hello 

The Command-Line Task Tracker is a simple yet effective application designed to help users manage their tasks efficiently through a command-line interface (CLI). Built with Node.js, this project enables users to easily add, update, delete, and track tasks using straightforward commands.
Key Features

    Task Management: Users can create new tasks, update existing ones, or delete tasks that are no longer needed.

    Status Tracking: Each task can be marked with one of three statuses: "todo," "in-progress," or "done," allowing users to easily track their progress.

    Task Listing: Users can list all tasks or filter tasks based on their current status, providing a clear overview of what needs to be done, what’s in progress, and what has been completed.

    Persistent Storage: Tasks are stored in a JSON file, ensuring that data is preserved between sessions. The JSON file is created automatically if it doesn't exist, making the setup process seamless.

Commands

The application supports several commands that can be executed from the command line:

    add "Task Title": Adds a new task.
    upd/ate <ID> "New Task Title": Updates the title of an existing task by its ID.
    delete <ID>: Deletes a task by its ID.
    mark-in-progress <ID>: Marks a task as in-progress.
    mark-done <ID>: Marks a task as completed.
    list [status]: Lists all tasks, or filters by a specific status (todo, in-progress, or done).

Technologies Used

    Node.js: The application is built using Node.js, leveraging its built-in modules for file system operations and command-line arguments.
    JSON: Tasks are stored in a JSON format, providing an easy-to-read structure for task management.

Installation
```
    git clone https://github.com/sujith017/Todo_using_cli.git
    cd Todo_using_cli.git
```
