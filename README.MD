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
   2. Use the `jsonwebtoken` module to sign a new jwt access_token containing these values. Use an ACCESS_TOKEN_SECRET from the .env file as a secret. 
```javascript
const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
   ```

   3. Make sure the token is only valid for 30 seconds. 

   Example: 
   ```javascript
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'15s'})
   ```
  
   3. Send this accesstoken value as json to the client with status `200`.


## Task 4 - Create middleware to verify JWT token
 1. Create middleware which checks whether the token is valid.
 
 ```javascript
function authenticateToken(req, res, next){
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]

   if(token == null){
       return res.sendStatus(401);
   }

   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
    if(err) return res.sendStatus(403)

    req.user = user;
    next();
   });

}
   ```

   ## Task 5 - Creating product routes
   1. Create a new route `/products`. 
   2. Create a routerfile `productRoutes.js` and a controllerfile `/productController.js` accordingly. (optional)
   3. Inside this route you can return a json object with a list of products. You can use an array to show these products. 


 ```javascript
const Products = [
    {
        name:'Bicycle',
        description:'This is a bicycle',
        price:199,
        userID:'1'
    },
    {
        name:'Cup',
        description:'This is a cup',
        price:2,
        userID:'1'
    },
    {
        name:'Phone',
        description:'This is a phone',
        price:499,
        userID:'1'
    }
]
 ```
 4. protect the route using the middleware, you can only access the route using the token. 

  

# Bonus (Optional):
- You can use database models instead of array values.
- Authenticate the user instead of automatically creating an object. 





