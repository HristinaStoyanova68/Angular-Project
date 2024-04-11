[![TypeScript](https://img.shields.io/badge/TypeScript-v5.1.3-blue)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Language-blue)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-Styles-orange)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Angular](https://img.shields.io/badge/Angular-v16.2.12-red)](https://angular.io/)
[![Static Badge](https://img.shields.io/badge/Express.js-v4.18.2-1CAC42)](https://expressjs.com/)
[![Static Badge](https://img.shields.io/badge/MongoDB-338649)](https://www.mongodb.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# Delicious to You

## Welcome to Our Blog **Delicious to You** for Healthy and Delicious Food!
Our blog platform offers a unique experience for all food enthusiasts. Inspired by the joy of cooking and sharing, we have created this space to share our love for delicious and healthy food with you.

### The Magic of Recipes
Here you will find a rich selection of recipes for salads, main courses, and desserts - all in one place. Browsing through our collections, you will discover inspiration and new cooking ideas.

### Sharing and Interaction
Every visitor to our blog has the opportunity to immerse themselves in the magical world of delicious food. Here you can browse recipes, like and view latest additions, create and share your own recipes.

### Your Recipe Storage Space
Create your profile and have the opportunity to store, edit, and browse your favorite recipes. This way, you will always have access to your preferred culinary creations.

### Why Food Matters
We believe that good and tasty food is the key to our health and happiness. Come to our blog to share the love for food and enjoy delicious and healthy recipes together.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [How it works](#how-it-works)
4. [Project Structure](#project-structure)
5. [API Reference](#api-reference)
6. [API Endpoints](#api-endpoints)
7. [License](#license)
8. [Credits](#credits)

## Project Overview

**Delicious to You** is a captivating blog platform dedicated to sharing recipes for healthy and delectable cuisine. Dive into our three main collections: Salads, Main Courses, and Desserts, where you can explore a world of culinary delights.

As a visitor, you'll have the opportunity to browse through an array of recipes, engage by liking and viewing the latest additions, and even contribute your own culinary creations. Additionally, you'll have your own space to collect and explore your favorite recipes.

Join us on Delicious to You, where we celebrate the joy of food, because delicious cuisine is the key to our well-being and happiness.

## Features

**1. Dropdown Navigation for Collections from Navbar:**

Our application includes a dropdown menu on navigation bar containing the names of the various collections. This feature enables users to easily and swiftly navigate to their preferred collection, allowing them to explore the recipes within it effortlessly.

**2. Home Page Navigation:**

- **Collections Dropdown Menu:**
Our application features a dropdown menu **Meal Choices** showcasing the names of the following collections: 
    - salads 
    - mains
    - desserts

- **Last Arrivals:**
Additionally, we provide a last arrivals collection displaying the most recent recipes added to our platform. This will showcases the latest additions from all collections, providing users with a quick glance at the most recent recipes available.

**3. User Authentication:** 

Secure user authentication ensures a personalized experience for each member with their created recipes.

## How it works

- **Account Creation:**
Users can craft their unique culinary identity by creating a personalized account, which allows them to create, edit and delete their own recipes.
- **Creating an Recipe in a Collection:** 
Once registered, user can easily go to Add Recipe button and with few steps can add a recipe.
- **Real-time Updates:** 
All changes made to the recipes and collections, including additions and modifications, are updated in real-time, ensuring that information about each recipe is current.
- **Liking an Recipe:** 
Any logged-in user who is not the owner of an recipe can like it, and the count of likes is displayed on the recipe's screen.
- **Guest Visitors:** 
Unauthenticated visitors can browse all collections and their contents but cannot add, modify, delete, or like recipes within the collections.

## Project Structure

The project follows a structured organization to enhance maintainability and ease of navigation. Here's a brief overview of the main directories and their purposes:

- `/client:`
Contains the frontend application built with Angular.

    - `/public:`
Static assets and HTML template.

    - `/src:`
Angular components, styles, and application logic.

- `/server:`
The server-side code for handling backend logic and API requests, using Express.js and MongoDB.

    - `/src:`
Holds the controllers, models, configuration, routes and other server-side code.

Feel free to explore each directory to understand how different components and functionalities are structured within the project.

## API Reference

**User Authentication:**

- **Registration:** Allows users to create personalized accounts, enabling them to create, edit, or delete recipes.
- **Login:** Registered users can log in to access additional functionalities.
- **Guest Access:** Unregistered users can browse the site but cannot perform CRUD operations or like recipes.

**User Actions:**

- **Create, Edit, Delete Recipes:** Logged-in users have the ability to create, modify, and delete recipes.
- **View Created Recipes:** Users can view all recipes they've created.
- **Like Recipes:** Logged-in users (non-creators) can like recipes but cannot like their own created recipes.

## Usage

**1. Clone the Repository**

`git clone https://github.com/HristinaStoyanova68/Delicious-to-You.git`

**2. Start the Server**

Open a new terminal window in the root directory of the project and navigate to the server:

`cd server`

Install server dependencies:

`npm install`

Start the server in development mode:

`npm run dev`

**3. Setup the Client**

Open a new terminal window in the root directory of the project and navigate to the client:

`cd client`

Install client dependencies:

`npm install`

Start the client in development mode:

`ng serve`

Now when the client setup is complete you can open the following link in your web browser: [http://localhost:4200](http://localhost:4200)

Note: These instructions are intended for users operating on the Windows OS.

## API Endpoints

**1. Authentication**

**BaseUrl:** `http://localhost:3500/users`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

- **POST /register**

    - _Description:_ Register a new user and log in.
    - _Request:_
    ```json
    {
        "username": "string",
        "email": "string",
        "password": "string"
    }
    ```
    - _Response:_
    ```json
    {
        "_id": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "accessToken": "string",
        "__v": "number"
    }
    ```

- **POST /login**

    - _Description:_ Authenticate and log in a user.

    - _Request:_
    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```
    - _Response:_
    ```json
    {
        "_id": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "accessToken": "string",
        "__v": "number"
    }
    ```

**2. Collections**

**BaseUrl:** `http://localhost:3500/recipes`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

- **GET /salads**

- **GET /mains**

- **GET /desserts**

    - _Description:_ Get Collection

    - _Response:_
    ```
       [
        {
            "_id": "unique_recipe_id",
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
            "likes": [
                {
                    "user": "unique_user_id"
                },
                ...
            ],
            "ownerId": "unique_owner_id",
            "createdAt": "number",
            "updatedAt": "number",
            "__v": "number"
        }
       ]
    ```

  **For logged-in users:**

- **POST /add-recipe**

    - _Description:_ Create item.

    - _Request:_
    ```
    {
        "recipeData": {
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
        }
    }
    ```
    - _Response:_
    ```
    {
        "recipeData": {
            "_id": "unique_recipe_id",
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
            "likes": [
                {
                    "user": "unique_user_id"
                },
                ...
            ],
            "ownerId": "unique_owner_id",
            "createdAt": "number",
            "updatedAt": "number",
            "__v": "number"
        }
    }
    ```   

  **For both logged-in and guest users:**

- **GET /:collectionName/:id**

    - _Description:_ Get recipe and it's details.

    - _Response:_
    ```
    {
        "recipeData": {
            "_id": "unique_recipe_id",
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
            "likes": [
                {
                    "user": "unique_user_id"
                },
                ...
            ],
            "ownerId": "unique_owner_id",
            "createdAt": "number",
            "updatedAt": "number",
            "__v": "number"
        }
    }
    ```

  **For logged in users (ownres) - edit and remove recipe**

- **PUT /:collectionName/:recipeId/edit**

    - _Description:_ Edit recipe's details.

    - _Request:_
    ```
    {
        "recipeData": {
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
        }
    }
    ```
    - _Response:_
    ```
    {
        "recipeData": {
            "_id": "unique_recipe_id",
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
            "likes": [
                {
                    "user": "unique_user_id"
                },
                ...
            ],
            "ownerId": "unique_owner_id",
            "createdAt": "number",
            "updatedAt": "number",
            "__v": "number"
        }
    }
    ```

- **DELETE /:collectionName/:recipeId/delete**

    - _Description:_ Delete recipe.

    - _Response:_
    ```json
    {
        "success": true,
    }
    ```

  **For logged in users (not owners) - Likes functionality**

- **PUT /:collectionName/:recipeId/like`**

    - _Description:_ Like a recipe

    - _Request:_

    ```json 
    {}
    ```
    - _Response:_

    ```
    {
        "recipeData": {
            "_id": "unique_recipe_id",
            "imageUrl": "string",
            "recipeName": "string",
            "ingredients": [
                "string",
                ...
            ],
            "instructions": [
                "string",
                ...
            ],
            "prepTime": "number",
            "cookTime": "number",
            "servings": "number",
            "difficulty": "string",
            "mealType": "string",
            "likes": [
                {
                    "user": "unique_user_id"
                },
                ...
            ],
            "ownerId": "unique_owner_id",
            "createdAt": "number",
            "updatedAt": "number",
            "__v": "number"
        }
    }
    ```

## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.
