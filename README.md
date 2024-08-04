Task Management API
This is a simple Task Management API built using Node.js and MySQL. This API allows you to create, read, update, and delete tasks.

Features
Create a new task
Retrieve all tasks
Retrieve a single task by ID
Update a task by ID
Delete a task by ID
Prerequisites
Node.js installed
MySQL installed
Installation
Clone the repository:
bash

git clone https://github.com/your-username/task-management-api.git
cd task-management-api
Install dependencies:
bash

npm install
Set up your MySQL database:
sql

CREATE DATABASE task_app;
USE task_app;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_name VARCHAR(255) NOT NULL,
  is_done BOOLEAN DEFAULT FALSE,
  status ENUM('ACTIVE', 'INACTIVE') DEFAULT 'ACTIVE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
Create a .env file in the root directory and add your database configuration:
makefile

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_app
Running the API
Start the server:

bash

node server.js
The API will be available at http://localhost:3000.

API Endpoints
Create a new task
POST /tasks

Request Body:

json

{
  "task_name": "Task Name",
  "is_done": false
}
Response:

json

{
  "id": 1,
  "task_name": "Task Name",
  "is_done": false,
  "status": "ACTIVE",
  "created_at": "2024-08-04T12:34:56.789Z",
  "updated_at": "2024-08-04T12:34:56.789Z"
}
Retrieve all tasks
GET /tasks

Response:

json

[
  {
    "id": 1,
    "task_name": "Task Name",
    "is_done": false,
    "status": "ACTIVE",
    "created_at": "2024-08-04T12:34:56.789Z",
    "updated_at": "2024-08-04T12:34:56.789Z"
  },
  ...
]
Retrieve a single task by ID
GET /tasks/:id

Response:

json

{
  "id": 1,
  "task_name": "Task Name",
  "is_done": false,
  "status": "ACTIVE",
  "created_at": "2024-08-04T12:34:56.789Z",
  "updated_at": "2024-08-04T12:34:56.789Z"
}
Update a task by ID
PUT /tasks/:id

Request Body:

json

{
  "task_name": "Updated Task Name",
  "is_done": true,
  "status": "INACTIVE"
}
Response:

json

{
  "id": 1,
  "task_name": "Updated Task Name",
  "is_done": true,
  "status": "INACTIVE",
  "created_at": "2024-08-04T12:34:56.789Z",
  "updated_at": "2024-08-04T12:34:56.789Z"
}
Delete a task by ID
DELETE /tasks/:id

Response:

json

{
  "message": "Task deleted successfully"
}
Project Structure
bash

├── server.js
├── db.js
├── routes
│   └── tasks.js
├── controllers
│   └── taskController.js
├── models
│   └── taskModel.js
├── .env
├── package.json
└── README.md
server.js: Entry point of the application.
db.js: Database connection setup.
routes/tasks.js: Defines the API routes.
controllers/taskController.js: Contains the logic for handling requests.
models/taskModel.js: Defines the database model for tasks.
