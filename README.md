This project is my personal website. It's pretty barebones at the moment and has gone through a few iterations.

If you're interested in using it as a template feel free to fork the repo.

## To start the project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Create a .env file
Add the following line to the .env file: `NODE_PATH=./src`

## Where is it hosted
Currently hosted on Heroku, where auto deploys occur whenever the `production` branch of this repo is updated.

## Anything else I should know?
The website is pinged every 15 minutes using a Google Apps Script fetch function to prevent the website from going to sleep.
