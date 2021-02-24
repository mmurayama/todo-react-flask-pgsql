from flask import Blueprint, Response, request, jsonify, abort
from flask_restful import Resource, Api

from .models import Task, task_schema, tasks_schema
from todo.extensions import db

task_bp = Blueprint('task_bp', __name__)
api = Api(task_bp)

class TaskListResource(Resource):
    def get(self):
        tasks = Task.query.order_by(Task.id.asc()).all()
        task_list = tasks_schema.dump(tasks)
        return jsonify(task_list)

    def post(self):
        data = request.get_json()

        if not data or data.get('task').strip() == '':
            abort(404)
        task = Task(data)
        db.session.add(task)
        db.session.commit()
        return task_schema.jsonify(task)

class TaskResource(Resource):
    def get(self, id):
        task = Task.query.get(id)
        return task_schema.jsonify(task)

    def put(self, id):
        task = Task.query.get(id)
        if not task:
            abort(404)
        task.status = 1
        db.session.commit()
        return task_schema.jsonify(task)

    def delete(self, id):
        task = Task.query.get(id)
        if not task:
            abort(404)
        db.session.delete(task)
        db.session.commit()
        return jsonify({"msg":"Deleted the task."})

api.add_resource(TaskListResource, '/tasks')
api.add_resource(TaskResource, '/tasks/<int:id>')