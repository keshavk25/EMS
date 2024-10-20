
const employees = [
      {
        "id": 1,
        "name": "Keshav",
        "email": "keshav@me.com",
        "password": "123",
        "tasksCount" : 
          {
            "active" : 2,
            "newTask" : 1,
            "completed" : 2,
            "failed" : 0
          }
        ,
        "tasks": [
          {
            "taskTitle": "Update Project Plan",
            "description": "Revise the project timelines and dependencies.",
            "category": "Planning",
            "taskDate": "2024-10-10",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Update Project Plan",
            "description": "Revise the project timelines and dependencies.",
            "category": "Planning",
            "taskDate": "2024-10-10",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "name": "kundan",
        "email": "k@k.com",
        "password": "456",
        "tasksCount" : 
          {
            "active" : 1,
            "newTask" : 2,
            "completed" : 0,
            "failed" : 1
          }
        ,
        "tasks": [
          {
            "taskTitle": "Client Feedback",
            "description": "Gather feedback from clients for the new feature.",
            "category": "Customer Relations",
            "taskDate": "2024-10-12",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Client Feedback",
            "description": "Gather feedback from clients for the new feature.",
            "category": "Customer Relations",
            "taskDate": "2024-10-12",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
          ,
          {
            "taskTitle": "Client Feedback",
            "description": "Gather feedback from clients for the new feature.",
            "category": "Customer Relations",
            "taskDate": "2024-10-12",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "name": "Charlie Davis",
        "email": "charlie.davis@example.com",
        "password": "charlie789",
        "tasksCount" : 
          {
            "active" : 1,
            "newTask" : 0,
            "completed" : 1,
            "failed" : 0
          }
        ,
        "tasks": [
          {
            "taskTitle": "Bug Fixing",
            "description": "Resolve issues reported by QA.",
            "category": "Development",
            "taskDate": "2024-10-18",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "name": "Dana Lee",
        "email": "dana.lee@example.com",
        "password": "dana987",
        "tasksCount" : 
          {
            "active" : 0,
            "newTask" : 2,
            "completed" : 1,
            "failed" : 0
          }
        ,
        "tasks": [
          {
            "taskTitle": "Design Mockup",
            "description": "Create a mockup for the upcoming feature.",
            "category": "Design",
            "taskDate": "2024-10-16",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "name": "Elliot Clark",
        "email": "elliot.clark@example.com",
        "password": "elliot123",
        "tasksCount" : 
          {
            "active" : 1,
            "newTask" : 1,
            "completed" : 3,
            "failed" : 1
          }
        ,
        "tasks": [
          {
            "taskTitle": "Database Optimization",
            "description": "Analyze and optimize database queries.",
            "category": "Database",
            "taskDate": "2024-10-17",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      }
    ];

    const admin = {
          "id": 100,
          "name": "Admin",
          "email": "admin@me.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "System Backup",
              "description": "Ensure all systems are backed up daily.",
              "category": "Maintenance",
              "taskDate": "2024-10-15",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        }
      
        export const setLocalStorage =()=>{
                localStorage.setItem('employee',JSON.stringify(employees));
                localStorage.setItem('admin',JSON.stringify(admin));

        }
        export const getLocalStorage =()=>{
           const employeesData= JSON.parse(localStorage.getItem('employee'));
           const adminData= JSON.parse(localStorage.getItem('admin'));

          return {employeesData,adminData};
        }
      
