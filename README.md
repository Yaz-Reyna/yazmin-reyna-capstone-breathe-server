# About Breathe

Breathe is an app that helps you take a quick break with jokes, inspirational quotes, and guided breathing exercises. It's perfect for those moments when you need to relax but don't have much time. With Breathe, you can take a deep breath and let the stress melt away. So checkout Breathe now and start de-stressing in no time!

To run this app on your server, follow these steps:
## Getting Started

## `npm install`
Install the required dependencies by running npm install in your terminal. 

# Dependencies
This project uses knex, dotenv, cors, express, and mysql.

## `npm run migrate`
Run the database migrations to set up the necessary tables and schema by running npm run migrate.

## `npm run seed`
Run the seed files to populate the database with initial data by running npm run seed.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Open your browser and navigate to http://localhost:3000 to access the app.

You should now be able to use the app and begin your meditation journey. Enjoy!

# API Reference

# `Get all quotes`
There is no need for a key

  GET /http://localhost:8080/quotes
This request will return an array of objects, where each object corresponds to a different quote

# `POST a comment`
  POST /http://localhost:8080/comments
This request will add a comment to the comments database.

# `Get a random joke`
  GET /https://api.humorapi.com/jokes/random?api-key={API-KEY}
This request will return an object with a random joke.

