# Book Record Managamnet System

# Routes and Endpoints

## /users

GET: Get all list of the users
POST: Create a new user

## /users/{id}

GET: Get a user by their ID
PUT: Update a user by their ID
DELETE: Delete a user by ID (check if he/she still has an issued book && is their any fine to be collected)

## /users/subscription-details/{id}

GET: Get user subscription details >> Date of subscription >> Valid Till >> Fine if any

## /books

GET: Get all list of the books
POST: Create/Add a new book

## /books/{id}

GET: Get a book by id
PUT: Update a book by its ID

## /books/issued

GET: Get all issued Books

## /books/issued/withFine

GET: Get all issued books with the fine

### Subscription Types:

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

### CMDs:

    >> npm init
    >> npm i express
    >> npm i nodemon --save-dev

    >> npm run dev
