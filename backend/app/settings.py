# main settings file to configure the app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# CORS origins that are allowed to make requests.
# TODO: add the domain used for production
origins = [
    "http://localhost:3000",
]

# methods allowed for CORS policy
methods = [
    "GET", "POST", "PUT", "DELETE", "PATCH"
]

# define the app in settings file so that it can
# be configured before importing it in main.py

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


