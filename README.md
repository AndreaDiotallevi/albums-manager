# Albums Manager

[Description](#description) | [Live Website](#live-website) | [Technologies Used](#technologies-used) | [Challenges and Goals](#challenges-and-goals) | [Getting Started](#getting-started) | [How to Run the App](#how-to-run-the-app) | [How to Setup the Local Database](#how-to-setup-the-local-database) | [How to Run the Tests](#how-to-run-the-tests) | [Continuous Integration](#continuous-integration) | [Design Approach](#design-approach)

## Description

This is a full-stack application built with the MERN stack that lets a user manage his personal albums collection. The user can add albums to the collection, view all the albums, click on each album to see all the info, loan albums to friends, note the loan date and name on the album and mark the loaned album as returned. The user can also filter the albums that have been loaned to a specific friend.

## Live Website

The application is not yet deployed.

## Technologies Used

- Main technologies:
  * [MongoDB](https://www.mongodb.com/): a general purpose, document-based, distributed database I used to fetch, save and update the albums information.
  * [Express](https://expressjs.com/): a fast, unopinionated, minimalist web framework for Node.js I used to get, post and patch the albums information from / to the MongoDB database and the React single page app.
  * [Node](https://nodejs.org/en/): a JavaScript runtime built on Chrome's V8 JavaScript engine I used to write JavaScript code on the server side.
  * [React](https://reactjs.org/): a JavaScript library I used to build the user interface and gather data from the Express and external APIs.
  * [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox): a flexible box layout module I used to design flexible responsive layout structure without using float or positioning.
  
- External APIs:
  * [LastFm](https://developers.google.com/maps/documentation): a free external API service I used to fetch albums information.
  
- Testing frameworks:
  * [Jest](https://jestjs.io/): a JavaScript Testing Framework with a focus on simplicity.
  * [Enzyme](https://www.npmjs.com/package/enzyme): a JavaScript Testing utility for React that makes it easier to test the React Components' output.
  * [Supertest](https://www.npmjs.com/package/supertest): a npm package that gives you get the ability to send GET, POST, PUT, PATCH and DELETE requests.

## Challenges and Goals

* Build a full-stack web app with the MERN stack (MongoDB, Express, React and Node).
* Connect the React single page app with the Express backend via proxy.
* Use the axios npm package to send asynchronous api calls in React.
* Use the queryString npm package to access the search parameters in React.
* Fully test the express API endpoints with Jest and Supertest.
* Fully test the React components with Jest and Enzyme.
* Use the Last.fm API to fetch album info.

## Getting Started

* Clone this repository and change into it
* Make sure you have [Node.js](https://nodejs.org/en/download/) installed
* Install all the back-end dependencies with ```npm install```
* Install all the front-end dependencies with ```npm run client-install```

## How to Run the App

* To start the Express server type ```npm run server```
* To start the React server type ```npm run client```
* To start both servers concurrently type ```npm run dev```

## How to Setup the Local Database

* Install MongoDB locally with ```brew tap mongodb/brew``` && ```brew install mongodb-community```
* Start MongoDB with ```brew services run mongodb-community```
* Start the Mongo shell with ```mongo```
* If not working, refer to the following guides for installing MongoDB:
  - [MAC](https://zellwk.com/blog/install-mongodb/)
  - [WINDOWS](https://treehouse.github.io/installation-guides/windows/mongo-windows.html)

## How to Run the Tests

* To run all the express API endpoints tests type ```npm test```
* To run all the React components tests type ```npm run client-test```

## Continuous Integration

[CircleCI](https://circleci.com/): tool for automating the development process quickly, safely, and at scale.

## Design Approach

#### Overview

This application is built with the MERN stack: MongoDB, Express, React and Node. The client is a React single page application that communicates with the Express server via a RESTful API, handling data from / to the MongoDB database. I have then used the Last.Fm API to validate user input and gather album information.

#### MongoDB Database Schema

The only model is ```Album```, with the following fields:
  - ```artist``` (String)
  - ```title``` (String)
  - ```posterURL``` (String)
  - ```tracks``` (Array)
  - ```loanedTo``` (String)
  - ```loanedDate``` (Date)
  
#### Express RESTful API

The Express API provides three RESTful endpoints:
  - GET ```/api/albums``` to fetch all the albums
  - POST ```/api/albums``` to add a new album
  - PATCH ```/api/albums/:id``` to update an existing album, when it is loaned and when it is returned
  
  
#### React Client

The React single page application is composed by 6 components, each one handling one responsibility:

  - ```App```: this is the main component that is rendered in the ```root``` HTML tag. It is responsible for fetching the album list at ```ComponentDidMount()``` and passing the props down to the ```AlbumList``` and ```Album``` components.
  
    - ```AlbumList```: it renders the list of albums on the ```/albums``` page. It also contains the two children components ```AlbumInput``` and ```LoanFilter```.
    
      - ```AlbumInput```: it handles the user album input and sends a post request to the server upon album validation.
      
      - ```LoanFilter```: it handles the user loan name search and changes the URL by adding the query parameter to ```albums/?loanedTo=name```
      
    - ```Album```: it renders the selected album information on the ```albums/:id``` page. It also contains the two children components ```LoanInput``` and ```ReturnInput```.
    
      - ```LoanInput```: it handles the user loan name input and sends a patch request to the server.
      
      - ```ReturnInput```: it handles the user return input and sends a patch request to the server.
      
#### Features

* The user can view all his albums at ```/albums```
* The user can add a new album by filling the input field and clicking ```ADD ALBUM```
* The user is notified if he / she enters a non-existent album with the message ```Album Not Found```
* The user can filter the albums that have been loaned to a specific friend by filling the input field and clicking ```FILTER LOANS```
* The user can click on any album's title or poster and view all the album information at ```/albums/:id```
* The user can loan an album and add name and date to the album by filling the input field and clicking ```LOAN IT TO A FRIEND```
* The user can mark the loaned album as returned by clicking ```MARK AS RETURNED```

#### User Stories

```
As a user,
So that I can keep track of all my albums,
I'd like to see a list with all my albums.
```
```
As a user,
So that I can keep my album list up to date,
I'd like to be able to add a new album to the list.
```
```
As a user,
So that I know if I am looking for the wrong album,
I'd like to see a useful message when entering a non-existent album.
```
```
As a user,
So that I can see the albums that have been loaned to a specific friend,
I'd like to be able to filter the albums my loaned name.
```
```
As a user,
So that I can check an album info,
I'd like to be able to click on an album and see all the info.
```
```
As a user,
So that I can remember when I have loaned an album to a friend,
I'd like to be able to mark an album as loaned with the friend's name and date.
```
```
As a user,
So that I can remember when a loaned album has been returned,
I'd like to be able to mark an album as returned.
```

#### Unit Testing

Both the backend and frontend are fully [tested](https://circleci.com/gh/AndreaDiotallevi/albums-manager), with supertest, jest and enzyme. All asynchronous calls have been mocked.

#### Bonus Features to Implement Next

* Authentication: add a user model and users collection and extend the application to multiple users
* Additional links on the album page: add tracks links with the Youtube API
