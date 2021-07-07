# JWT - Assignment, Creating your AuthServer. 

In this project we will build a small authserver which allow you to authenticate routes. 

## What you will be doing

This project will allow you to practise using:

> - jsonwebtokens


This project assumes you've already had experience with:

> - Routing Express


## Tasks

## Task 1 - Creating and Configuring a Data Layer 

  1. Create a new folder `data`, we will use this folder to store all our data layer files.

### 1. customerData
   1. Create a new `customerData.js` file inside the data folder. 
   

### 2. hotelData
  1. Create a new `hotelData.js` file inside the data folder. 
 

### 3. reservationData
  1. Create a new `reservationData.js` file inside the data folder. 
 


## Task 2 - Creating and configuring the Service Layer

  1. Create a new folder `services`, we will use this folder to store all our service layer files.

### 1. customerService
   1. Create a new `customerService.js` file inside the service folder. 


### 2. hotelService
  1. Create a new `hotelService.js` file inside the service folder. 
 

### 3. reservationService
  1. Create a new `reservationService.js` file inside the service folder. 
  


## Task 3 - Transferring Customer logic to the data layer and service layer 

### 1. createCustomer()
  1. Bring the  `Customer.create()` logic (data related logic) to the `customerData.js`, you can create a method there `createCustomer` which will create the new customer. 
 
  2. Open `customerService.js` and import the `customerData` file. 

  3. Create a method `createCustomer` in `customerService.js` which uses the `customerData.createCustomer()` to create a new customer.
 
  3. Adapt the controller method `createCustomer()` so it uses `customerService` to create a new customer. 

  ### 2. getCustomers()
  1. Bring the  `Customer.find()` logic (data related logic) to the `customerData.js` file, you can create a method there `getCustomers` which will return a list of customers. 

  2. Create a method `getCustomers` in `customerService.js` which uses the `customerData.getCustomers()` to get a list of customers.

  3. Adapt the controller method `getCustomers()` so it uses `customerService` to query for a list of customers. 


## Task 4 - Transferring Hotel logic to the data layer and service layer 

### 1. createHotel()
  1. Bring the  `Hotel.create()` logic (data related logic) to the `hotelData.js`, you can create a method there `createHotel` which will create the new hotel. 
 
  2. Open `hotelService.js` and import the `hotelData` file. 

  3. Create a method `createHotel` in `hotelService.js` which uses the `hotelData.createHotel()` to create a new hotel.
 
  3. Adapt the controller method `createHotel()` so it uses `hotelService` to create a new customer. 

  ### 2. getHotels()
  1. Bring the  `Hotel.find()` logic (data related logic) to the `hotelData.js` file, you can create a method there `getHotels` which will return a list of hotels. 

  2. Create a method `getHotels` in `hotelService.js` which uses the `hotelData.getHotels()` to get a list of hotels.

  3. Adapt the controller method `getHotels()` so it uses `hotelService` to query for a list of hotels. 

  ## Task 5 - Transferring Reservation logic to the data layer and service layer 

### 1. createReservation()
  1. Bring the  `Reservation.create()` logic (data related logic) to the `reservationData.js`, you can create a method there `createReservation` which will create the new reservation. 
 
  2. Open `reservationService.js` and import the `reservationData` file. 

  3. Create a method `createReservation` in `reservationService.js` which uses the `reservationData.createReservation()` to create a new hotel.
 
  3. Adapt the controller method `createReservation()` so it uses `reservationService` to create a new reservation. 

  ### 2. getReservations()
  1. Bring the  `Reservation.find()` logic (data related logic) to the `reservationData.js` file, you can create a method there `getReservations` which will return a list of reservations. 

  2. Create a method `getReservations` in `reservationService.js` which uses the `reservationData.getReservations()` to get a list of reservations.

  3. Adapt the controller method `getReservations()` so it uses `reservationService` to query for a list of hotels. 



# Bonus: 
Create a data layer and a service layer for the room logic. 



