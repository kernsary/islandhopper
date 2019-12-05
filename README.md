# islands

This is a web app allowing the user to view 47 Scottish islands on a map, and click on an island to see details of that island.
The user can navigate to charts comparing the sizes and populations of the islands, or to a quiz to decide 'Which island are you?'.

The app is written in JavaScript. The back end uses Express.js to create the server, and the front end uses Vue.js.
Data is persisted in a Mongo database. The map is created using Vue-2-Leaflet, and the charts using Google Charts.

The most up-to-date working version of the app is on the develop branch.

To run the app from the terminal:

cd server

npm i
mongod (leave running and open a new tab
npm run seeds
npm run server:dev (leave running and open a new tab)

cd ..
cd client

npm i
npm run serve (leave running, and open a new tab if you want to use the terminal for anything else)

Then go to the browser and go to localhost:8080 to use the app.
