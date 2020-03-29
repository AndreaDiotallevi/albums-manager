# Albums Manager

[Description](#description) | [Live Website](#live-website) | [Technologies Used](#technologies-used) | [Challenges and Goals](#challenges-and-goals) | [Features](#features) | [User Stories](#user-stories) | [Getting Started](#getting-started) | [How to Setup the Local Database](#how-to-setup-the-local-database) | [How to Run the Tests](#how-to-run-the-tests) | [How to Run the App](#how-to-run-the-app) | [Design Approach](#design-approach) | [Continuous Integration](#continuous-integration)

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
* Fully test the express API endpoints with Jest and Supertest.
* Fully test the React components with Jest and Enzyme.
* Use the Last.fm API to fetch album info.

## Features

* A user can view all his albums.
* A user can add a new album.
* A user can see any album's artist, title, poster and tracks.
* A user can loan an album to a friend and save the friend's name and date to the album.
* A user can mark a loaned album as returned.
* A user can filter the albums that have been loaned to a specific friend.

## User Stories

```
As a user,
So that I can keep track of all my albums,
I'd like to see a list with all my albums.

As a user,
So that I can keep my album list up to date,
I'd like to be able to add a new album to the list.

As a user,
So that I can check an album info,
I'd like to be able to click on an album and see all the info.

As a user,
So that I can remember when I have loaned an album to a friend,
I'd like to be able to mark an album as loaned with the friend's name and date.

As a user,
So that I can remember when a loaned album has been returned,
I'd like to be able to mark an album as returned.

As a user,
So that I can see the albums that have been loaned to a specific friend,
I'd like to be able to filter the albums my loaned name.
```

## Getting Started

* Clone this repository and change into it
* Make sure you have [Node.js](https://nodejs.org/en/download/) installed
* Install all the dependencies with ```npm install```

## How to Setup the Local Database

* Install MongoDB locally with ```brew tap mongodb/brew``` && ```brew install mongodb-community```
* Start MongoDB with ```brew services run mongodb-community```
* Start the Mongo shell with ```mongo```

## How to Run the Tests

* To run all the express API endpoints tests type ```npm test```
* To run all the React components tests type ```npm run client-test```

## How to Run the App

* To start the Express server type ```npm server```
* To start the React server type ```npm run client```
* To start both servers concurrently type ```npm run dev```

## Design Approach

[...]

## Continuous Integration

[CircleCI](https://circleci.com/): tool for automating the development process quickly, safely, and at scale.
