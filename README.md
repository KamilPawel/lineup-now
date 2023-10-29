# Full-Stack Engineer: Line-Up Coding Exercise

### Tech used: React, React-Query, Cypress, Material UI, Docker, FastAPI, Pytest

#### This setup was made on Linux. For Windows instead of using the 'sudo' command make sure you run the terminal as an admin. The Mac setup should use the same commands.

## Frontend

### Installation
Please make sure you have ```yarn``` installed. Here is the documentation on how to get it setup <a href='https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable'>here</a>.


Once you have yarn setup go to the frontend folder by running:
```bash
cd frontend
```

and install all the dependencies by running:

```bash
yarn install
```


### Run locally

To run the frontend locally:
```bash
yarn start
```

## Backend

### Installation

Please make sure you have docker installed. Here is the documentation on how to get it setup <a href="https://docs.docker.com/engine/install/">here</a>.

Once you have docker installed, go to the backend directory by running:
```bash
cd backend
```
and  build the docker image by running:

```bash
sudo docker build -t lineup .
```
Then run the container by running

```bash
sudo docker run -p 8000:8000 docker.io/library/lineup
```


## Running the app

The client side of the app should be hosted on the port 3000 hence please go to:
```powershell
http://localhost:3000
```



# Running REST API outside the Docker image

This project uses ```pipenv``` for virtual environment and ```pytest``` for testing. The setup for pipenv can be found <a href='https://pipenv.pypa.io/en/latest/installation/'>here</a>.

To setup the virtual environment run:
```bash
pipenv install --dev
```

To run the virtual environment run:
```bash
pipenv shell
```

You can now run the REST API by running inside the pipenv virtual environment :
```bash
pipenv run start
```
# Testing
### Testing the REST API

This project uses ```pipenv``` for virtual environment and ```pytest``` for testing. The setup for pipenv can be found <a href='https://pipenv.pypa.io/en/latest/installation/'>here</a>.

To setup the virtual environment run:
```bash
pipenv install --dev
```

To run the virtual environment run:
```bash
pipenv shell
```

Once in virtual environment run:
```bash
pytest
```
You can also run the pipfile script by running:
```bash
pipenv run test
```
You should see all the tests passing.
### Testing the client

The project was setup using cypress hence you need to make sure that both the frontend and backend are running as shown in instructions above.

To summarise make sure you have 2 terminals running one for the frontend:
```bash
yarn start
```
and the backend either inside the Docker container:
```bash
sudo docker run -p 8000:8000 docker.io/library/lineup
```
or by natively running FastAPI inside the pipenv virtual environment:
```bash
pipenv run start
```

Once you have both frontend and backend running, please run
```bash
yarn cypress run open
```

You should see all the tests passing.

You can also use the Cypress client to inspect the tests by running:

```bash
yarn run cypress open
```
Select the web browser to use and then click the test you want to run.