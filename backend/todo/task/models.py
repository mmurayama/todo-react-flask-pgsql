import datetime
from todo.extensions import db, ma

class Task(db.Model):
    __tablename__ = 'tasks'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    task = db.Column(db.String(200), nullable=False)
    status = db.Column(db.Integer) # 0: in process, 1: completed

    def __init__(self, data):
        self.task = data.get('task').strip()
        self.status = 0

class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'task', 'status')

task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)