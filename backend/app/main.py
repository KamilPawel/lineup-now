# main entry to the app where we define the routes and run the application

from app.api import user
from app.settings import app


# more main routes can be added here with different prefixes
app.include_router(user.router, prefix="/user")
