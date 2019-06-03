# services/users/project/__init__.py


import os
from flask import Flask  # <-- nuevo
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension
from flask_cors import CORS

# instanciado la db
db = SQLAlchemy()
toolbar = DebugToolbarExtension()
cors = CORS()

# new


def create_app(script_info=None):

    # instanciando la app
    app = Flask(__name__)

    # estableciendo configuracion
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    # configurando extensiones
    db.init_app(app)
    toolbar.init_app(app)
    cors.init_app(app)

    # registro blueprints
    from project.api.users import users_blueprint
    app.register_blueprint(users_blueprint)

    # contexto de shell for flask cli
    @app.shell_context_processor
    def ctx():
        return {'app': app, 'db': db}

    return app
