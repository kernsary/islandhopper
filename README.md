# islands

This is a web app allowing the user to view 47 Scottish islands on a map, and click on an island to see details of that island.
The user can navigate to charts comparing the sizes and populations of the islands, or to a quiz to decide 'Which island are you?'.

The app is written in JavaScript. The back end uses Express.js to create the server, and the front end uses Vue.js.
Data is persisted in a Mongo database. The map is created using Vue-2-Leaflet, and the charts using Google Charts.

The most up-to-date working version of the app is on the develop branch.

To run the app from the terminal:

cd server

npm i

mongod (leave running and open a new tab)

npm run seeds

npm run server:dev (leave running and open a new tab)

cd ..

cd client

npm i

npm run serve (leave running, and open a new tab if you want to use the terminal for anything else)

Then go to the browser and go to localhost:8080 to use the app.

When you are finished with the app, go to the terminal and use Ctrl C in each of the three 'running' tabs to shut down the running processes.

The app meets the requirements of the brief below.

Project brief:


# Educational App

The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.

## MVP

A user should be able to:

- view some educational content on a particular topic
- be able to interact with the page to move through different sections of content

## Example Extensions

- Use an API to bring in content or a database to store information.
- Use charts or maps to display your information to the page.

## API, Libraries, Resources

- https://www.highcharts.com/ HighCharts is an open-source library for rendering responsive charts.
- https://leafletjs.com/ Leaflet is an open-source library for rendering maps and map functionality.
