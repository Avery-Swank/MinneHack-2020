# MinneHack-2020
My team's submission for the Minnesota's MinneHack 2019 Hackathon

## Hackathon Prompt
Develop a solution that fosters social good.

## How To Execute
Everything on this project is run locally. Because of time constraints we were unable to deploy our application. However, we were able to get everything running locally on one system that has all of the source code. This is how to start the application:
1. Run `node backend.js`
2. Open `FrontEnd.html`

## Summary
When reading this topic we found that an application that fosters social good could apply to just about anything. Whether it was an application that beneifts a single person or a group of people, all of which foster social good. We initially had ideas based around donating to volunteer organizations, charities, and fundraisers with a financial model like Acorns that rounds up change to donate. We also had the idea to be business facing surveying applications where employees trade reliable survey information to their company in exchange the company donates in some fashion.

However, we are all animal lovers and we all realized we had never heard of a website or central database for lost animals. Having a special pet in life go missing is a very sad event that can happen, so we decided to tackle this problem. The goal of this web app is to enable a wider search range for people to find more lost pets. This fosters social good because its goal is to reunite pets with their owners and continue to push positive, loving relationships.

We decided to develop this application as a full-stack web application. There is a multi-page front-end app with a submission form and Google Maps view of other missing animals in your area. All of the pins and public, missing pet information is stored on a MongoDB server in a collection of animal objects. We then use a set of HTTP requests and express to communicate between our front-end and back-end, going full-stack.

## Front-End: Html-5 + CSS
For simplicity, we did not decide to use Angular and write the front-end in pure HTML-5 and CSS. This gave us complete control of the website while maintaining very simple, very clean code. 

There are three main pages on the website:
 - Main page: Contains a title, tabs to other pages, a Google Maps view that uses the Google Maps API and MongoDB data to display accure pin data that is consistent eith our back end
 - Form page: Contains a basic html form for submitting data to our collection of lost animals. We use an HTTP request containing the information as a JSON object that directs to express, then express makes a REST call (GET or POST) to our server
 - Stories page: Contains a bonus front-end page with a set of tables, images, of hard-coded dog information to display as an extra page for what could be added in the future.

## Back-End: NodeJS + MongoDB
Our MongoDB was setup with a free trial account for the weekend and we used NodeJS to create a client admin user that has admin access to create and manipulate databases and collections. We setup a very simple framework to perform basic CRUD operations such as CREATE, READ, and DELETE for the front-end to easily request.

The last of this came down to testing. To get a good understand of the scale of how this application could be used. We created a set of getRandom() functions that create random lost pet instances that vary in types, dates, descriptions and more. We can execute this at scale so we can easily populate our database with reliable information for demonstrations and testing purposes. We used this a lot for testing our backend CRUD operations.

## Software + Technologies Used
HTML, CSS, Javascript, NodeJS, MongoDB, Express, VS Code, Postman 
