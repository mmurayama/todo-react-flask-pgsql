import os
from flask import Flask
from flask_migrate import Migrate

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_pyfile('settings.py')

    from .extensions import db, ma, api, cors
    db.init_app(app)
    ma.init_app(app)
    api.init_app(app)
    cors.init_app(app)
    migrate = Migrate(app, db)

    from todo.task.views import task_bp

    app.register_blueprint(task_bp, url_prefix='/api')

    return app
