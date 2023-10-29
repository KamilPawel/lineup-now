# Use an official Python runtime as the parent image
FROM python:3.9-slim

# Set environment variables
# Prevents Python from writing pyc files to disc (equivalent to python -B option)
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr (equivalent to python -u option)
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container to /app
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the Pipfile and Pipfile.lock files into the container at /app
COPY Pipfile Pipfile.lock /app/

# Install python dependencies
RUN pip install --upgrade pip \
    && pip install pipenv \
    && pipenv install --deploy --ignore-pipfile

# Copy the current directory contents into the container at /app/
COPY . /app/

# Specify the command to run on container start
CMD ["pipenv", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0",  "--port",  "8000",  "--reload"]
