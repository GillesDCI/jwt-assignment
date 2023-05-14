# JWT Authenticator

In this project we will sign JWT tokens and use them to access a resource

## What you will be doing

The main focus will be in the `/login` route. This route will be responsible for signing and sending a JWT token to the client. The client can later use this token to access resources which require authorization.

> Note: We will not be using a database for this assignment

## Tasks

### Task 1 - Install dependencies 

Use `npm install` to install all the dependencies we need

### Task 2 - Import the userRoutes in the server

1. Create an express `Router` in the file `routes/userRoutes`
2. Import this file into `server.js`
3. Register the route, so we can call it using the path `/user`

### Task 3 - Signing a JWT token

In `userRoutes`;

1. Create a new **POST** route with the path `/login`. This route will expect the following data as **JSON** in the **body** of the **request**: 
    ```json
    {
        "id":"4",
        "username":"My User"
    }
    ```
   
   > Note: We are not expecting a password; for this assignment we will skip password authentication

2. Use the `jsonwebtoken` module to sign a new jwt access_token containing these values. Use an `ACCESS_TOKEN_SECRET` from the `.env` file as a secret.
    ```javascript
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    ```

3. Make sure the token is only valid for 30 seconds

   Example: 
   ```javascript
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s"
   });
   ```

4. Send the signed token as **JSON** to the client with status `200`

### Task 4 - Create middleware to verify JWT token

Create middleware which checks whether the token is valid
 
```javascript
function authenticateToken(req, res, next){
   const authHeader = req.headers["authorization"]
   const token = authHeader && authHeader.split(" ")[1]

   if(token === null){
       return res.sendStatus(401);
   }

   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
       if(err) return res.sendStatus(403)
      
       req.user = user;
       next();
   });
}
```

### Task 5 - Creating product routes

1. Create a new route `/products`. 
2. Create a router file `productRoutes.js` and a controller file `/productController.js`
3. Inside this route create a **GET** endpoint with the path `/`. This endpoint should return a **JSON** object with a list of products. You can use the following array.

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

4. Protect the route using the `authenticateToken` middleware, so that clients can only access the route using a JWT token

###### Example

```javascript
app.get('/teas', authenticateToken, controller.list)
```

### Task 6 - Test everything

Use a client like postman or insomnia to test your API

1. Make a request to the `/login` route, and make a note of the JWT token you received from the server
2. Create a separate request to get the list of products, passing in the JWT token in the header

# Bonus (Optional):
- You can use database models instead of array values
- Authenticate the user instead of automatically creating an object
