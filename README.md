# Mainou's Recipe Lab

Mobile Web Application. (PWA)

Uses React + Redux for the frontend.
Also has a backend create on PHP, hit via an API.

![App Video](https://image.ibb.co/gfBKm8/GIF_Project.gif)

## Technologies Used:<br>

This Mobile web app is mainly designed for mobile devices.
Frontend:<br>
1) React<br>
2) Redux<br>
3) JSX<br>

Backend:<br>
1) PHP<br>
2) MYSQL<br>

## Features:<br>
1) Live Search<br>
2) Add Recipe<br>
3) See Ingredients and qyantity on the card itself<br>
4) Add Image using camera or gallery <br>
5) Web Caching and PWA (Progressive Web application): Works without internet as well.<br>

## Images<br>
1) Homescreen 2)Capture for food image 3)Live Search 4)Add new Recipe<br>
<img src="https://image.ibb.co/nqLC68/d1a03359_aa0e_4c8f_9983_48ac14a363cf.jpg" width="180" style = "display:inline-block"/>
<img src="https://image.ibb.co/bTe5R8/d070d11b_bae9_4a71_94bb_508d12d4aa20.jpg" width="180" style = "display:inline-block"/>
<img src="https://image.ibb.co/jZX3Do/efc01ecd_ab58_410f_b118_9015531cd439.jpg" width="180" style = "display:inline-block">
<img src="https://image.ibb.co/hzfC68/aa02401b_5bb6_4a2e_8d9b_365af16e5daf.jpg" width="180" style = "display:inline-block"/>

## How to Run this React Web App
#### To run the most optimized build of the app.<br>

Run the following command from command prompt from the base folder:<br>
<pre>serve -s build</pre> <br>
This will run the server at 
http://localhost:5000


To run the development server of react Run:
<pre>npm start</pre>
This will run the server at 
http://localhost:3000

## Backend Server
The backend server is build using PHP, ArrestDB and MySQl. <br>
The server is uploaded on a different branch. Branch Name: Backend. <br>

The database can be created using the .sql file uploaded along with the server.

Running the server is simple. Simply put the files in your WAMP or XAMPP or LAMP directory and run Apache and MYSQL. <br>

Once done. Kindly change the api fetch address in the reactApp, in the page.js file. (\src\redux\actions\page.js) <br>

line number 30: 
<pre> return fetch(`http://49eaab7b.ngrok.io/ReactApp_API/ArrestDB/allrecipes` </pre>

This currently has my localhost's tunnel using ngrok, kindly replace this localhost api link in your system. <br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

