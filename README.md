# Full-Stack Engineer: Line-Up Coding Exercise


#### This setup was made on linux but the commands should be similar on windows and mac

## Frontend

### Installation
Please make sure you have ```yarn``` installed. Here is the documentation on how to get it setup <a href='https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable'>here</a>.

Once you have yarn setup install all the dependencies by running:

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

Once you have docker installed, build the docker image by running:

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

You can now run the REST API by running:
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
### Testing the client

The project was setup using cypress hence you need to make sure that both the frontend and backend are running as shown in instructions above.

Once you have both frontend and backend running, please run
```bash
yarn cypress run open
```

Then use the user interface to select a web browser you want to use to test, and click on the following cypress tests.