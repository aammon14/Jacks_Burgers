### WDI Jackalope Project 3

#Jack's Burgers App

:hamburger: :fries: :beers:

##Jennifer Lora, Cashley Saintilus, Keith Einstein, Andrew Ammon

------------------------------------------------------------------------
###Techonologies used:

Frameworks: HTML, CSS, Javascript, Express, React
NPM Packages: Axios, express, react, morgan, bcrypt, mustache-express, passport, passport-local, body-parser, cors, cookie-parser, env, react, react-router-dom, react-scrollchor, react-bootstrap
<!-- I don't think we used bcrypt, passport, passport-local, env or cookie-parser...or bootstrap? -->
To build Jack's Burgers, a dine-in restaurant ordering app, we used a react framework for the user-facing front-end combined with a back-end built with express.  Additionally our app is supported by numerous npm packages including, but not limited to, axios, cors, react-router-dom and react-scrollchor.  Axios was used on the front-end to make HTTP requests to our local API on the backend in order to create, read, update, and delete from our data base. CORS, or cross-origin resource sharing, is an important piece of middleware that supports the transfer of data between web browsers and servers.  React-scrollchor is a nifty little package that makes scrolling to #hash links smooth which was implemented in our app to scroll to different locations on the menu when a specific category was clicked on. 

------------------------------------------------------------------------
###Approach:

-Built out file structure on Friday
-Zoom chatted all weekend and built out back end
-CRU app by Tuesday
-Split up front end components
-Split up css
-Full CRUD Thursday night
-Presentation prep and deploy Friday

------------------------------------------------------------------------
###Installation instructions for any dependencies:

To initialize our app, cd into the server directory in your terminal, run `npm install`, and `npm run dev` to get the server running.  Then cd into the client directory, run `npm install`, and `npm start` to get the react app running in your browser.

------------------------------------------------------------------------
###Entity Relationship Diagrams:

[Project ERD](/client/src/images/ERD.png)

------------------------------------------------------------------------
###User Stories

Jack's Burgers App, a user story...

As a frequent customer of Jack's Burgers, I would love to spend less time talking to, ordering from, and waiting for a waiter or waitress to serve me and since I'm always on my phone, I might as well just order from it. 
So when I visit Jack's Burgers I would like to log into their app on my phone.
Once on the app, I can view all of the menu items along with their prices and descriptions.
When I see something I like, I can add it to my cart and if I need an item customized, I can add some special instructions that the kitchen will be able to see so that my order comes out perfect.
And because I am a frequent customer and have ordered from Jack's Burgers many times I should be able to see my previous orders.

------------------------------------------------------------------------
###Wireframe

[Project Wireframe](/client/src/images/Artboard.png)

------------------------------------------------------------------------
###Unsoleved Problems and Issues Overcome:

-Branch early, branch often.  With this being our first group project of the course, we had to learn quickly and in some cases the hard way on how to mage our project code on github.  We ran into a bit of trouble when we went for too long of a period without merging our branches into the master.  The longer we waited, the more time we spent fixing merge conflicts and backtracking to get everything working again. 

-One unsolved problem we have is that we did not get a chance to incorporate user authentication/authorization.  This would come in handy especially when a payment system is integrated into the checkout system of the app. 

-We would still like to make it more mobile friendly. Obviuously the app is meant to be used on a mobile device but we wanted to first make sure it worked in the browser.  A little work with formatting the CSS using media queries would solve this issue.

