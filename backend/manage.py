from todo.app import create_app
from todo.extensions import db
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

migrate = Migrate(create_app, db)

manager = Manager(create_app)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()