from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_restful import Api
from flask_cors import CORS

db = SQLAlchemy()
ma = Marshmallow()
api = Api()
cors = CORS()