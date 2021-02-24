# Simple ToDo Web App with React and Flask

This is a simple ToDo web application using React as frontend and Flask/PostgreSQL as backend Rest API provider.

![simple-todo](media/todo-app.gif)

## Diagram
![simple-todo-diagram](media/todo-app-diagram.png)

Four Docker containers are used to run this application.

- Nginx (as a reverse proxy)
- React with Nginx
- Gunicorn + Flask
- PostgreSQL

## License
MIT License