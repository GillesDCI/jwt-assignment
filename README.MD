# JWT - Assignment. 

In this project we will sign JWT tokens and use them to access a resource. 

## What you will be doing

This project will allow you to practise using:

> - JWT 


This project assumes you've already had experience with:

> - Routing Express
> - MVC 


## Tasks

## Task 1 - Install dependencies 
  1. Use `npm install` to install all the dependencies we need. 

## Task 2 - Import the userRoutes in the server

  1. Import the userRoutes in `server.js`.
  2. register the routes so we can call them using `/user`.

## Task 3 - Signing a JWT token
   1. Create a new `POST` route `login`. This route will take the following data as JSON body parameter: 
```json
  {
    "id":"4",
    "username":"My User"
    }
   ```
   2. Use the `jsonwebtoken` library to sign a new jwt access_token containing these values. Use a ACCESS_TOKEN_SECRET from the .env file as a secret.
```javascript
const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
   ```

   3. Send this accesstoken value as json to the client with status `200`.


## Task 4 - Create middleware to verify a access token



  
  




# Bonus: 



