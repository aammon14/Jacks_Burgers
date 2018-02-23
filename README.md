### WDI Jackalope Project 3

# Jack's Burgers App :hamburger: :fries: :beer:

## Jennifer Lora, Cashley Saintilus, Keith Einstein, Andrew Ammon

------------------------------------------------------------------------
### Techonologies used:

Frameworks: HTML, CSS, Javascript, Express, React

NPM Packages: Axios, express, react, morgan, body-parser, cors, react-router-dom, react-scrollchor

To build Jack's Burgers, a dine-in restaurant ordering app, we used a react framework for the user-facing front-end combined with a back-end built with express.  Additionally our app is supported by numerous npm packages including, but not limited to, axios, cors, react-router-dom and react-scrollchor.  Axios was used on the front-end to make HTTP requests to our local API on the backend in order to create, read, update, and delete from our data base. CORS, or cross-origin resource sharing, is an important piece of middleware that supports the transfer of data between web browsers and servers.  React-scrollchor is a nifty little package that makes scrolling to #hash links smooth which was implemented in our app to scroll to different locations on the menu when a specific category is clicked on. 

------------------------------------------------------------------------
### Approach:

Once we agreed on one project idea to pursue, we began by writing out a proposal for our project. In the proposal we defined our goals and what the app shouldbe able to do. Drawing out wireframes (see link below) ensured that we all understood how the app would work and get a sense for what it should look like.  We also drew up the entity relationship diagram to know exactly what data our database was going store and how the tables related to one another.

We than began building out the basic file structure for the app. We split our app into two main folders, a client and a server folder.  Within the server folder we set up our models, controllers, and db (database).  We have set up models and controllers for the cart, items, orders, and users.  We divided those models and controllers up equally among the four of us and spent the weekend building out the backend.  Working together remotely on Zoom we were able to chat and share each other's screens so we could quickly diagnos and debug any issues that anyone was having. By the end of the weekend we were able to get all of our backend routes working as we were able to confirm so by testing the routes in Postman (with the exception of a delete-route, which at that point we had not firmly decided what in our app we would be deleting). At this point we had a backe-end 'CRU' app.

After the backend was up and running, we began tackling the user-facing front-end of the app.  We started together by setting up the basic structure of our app.js file, and then individually started to work on the different components of our app.  By the middle of the week we had made significant progress building up the front end and could see the app coming together.  We ran into a few problems by spending a significant amount of time on our own branches without merging to the master.  Our app was essentially working in pieces on each of our branches.  Once we merged we ran into a lot of conflicts and ended up having to backtrack a little. 

After fixing our conflicts and getting back on track we added a delete method to our user edit page making our app full CRUD.  At that point all that was left was fixing up the CSS and making it look as nice as possible.  


------------------------------------------------------------------------
### Installation instructions for any dependencies:

To initialize our app, cd into the server directory in your terminal, run `npm install`, and `npm run dev` to get the server running.  Then cd into the client directory, run `npm install`, and `npm start` to get the react app running in your browser.

------------------------------------------------------------------------
### Entity Relationship Diagrams:

[Project ERD](./jacks-app/client/src/Images/ERD.png)

------------------------------------------------------------------------
### User Stories:

Jack's Burgers App, a user story...

As a frequent customer of Jack's Burgers, I would love to spend less time talking to, ordering from, and waiting for a waiter or waitress to serve me and since I'm always on my phone, I might as well just order from it. 
So when I visit Jack's Burgers I would like to log into their app on my phone.
Once on the app, I can view all of the menu items along with their prices and descriptions.
When I see something I like, I can add it to my cart and if I need an item customized, I can add some special instructions that the kitchen will be able to see so that my order comes out perfect.
And because I am a frequent customer and have ordered from Jack's Burgers many times I should be able to see my previous orders.

------------------------------------------------------------------------
### Wireframe:

[Project Wireframe](./jacks-app/client/src/Images/Artboard.png)

------------------------------------------------------------------------
### Unsolved Problems and Issues Overcome:

-Branch early, branch often.  With this being our first group project of the course, we had to learn quickly and in some cases the hard way on how to manage our project code on github.  We ran into a bit of trouble when we went for too long of a period without merging our branches into the master.  The longer we waited, the more time we spent fixing merge conflicts and backtracking to get everything working again. 

-One unsolved problem we have is that we did not get a chance to incorporate user authentication/authorization.  This would come in handy especially when a payment system is integrated into the checkout system of the app. 

-We would still like to make it more mobile friendly. Obviuously the app is meant to be used on a mobile device but we wanted to first make sure it worked in the browser.  A little work with formatting the CSS using media queries would solve this issue.

