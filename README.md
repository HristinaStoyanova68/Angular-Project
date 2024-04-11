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

**Collections Dropdown Menu:**
Our application features a dropdown menu **Meal Chises** showcasing the names of the following collections: 
    - salads 
    - mains
    - desserts

- **Last Arrivals:**
Additionally, we provide a last arrivals collection displaying the most recent recipes added to our platform. This will showcases the latest additions from all collections, providing users with a quick glance at the most recent recipes available.

**2. Dropdown Navigation for Collections:**

Our application includes a dropdown menu on navigation bar containing the names of the various collections. This feature enables users to easily and swiftly navigate to their preferred collection, allowing them to explore the recipes within it effortlessly.

**3. User Authentication:** 

Secure user authentication ensures a personalized experience for each member with their created recipes.


## How it works

- **Account Creation:**
Users register to create personalized accounts, allowing them to create, modify, or delete recipe.
- **Creating an Recipe in a Collection:** 
Once registered, user can easily  go to add-recipe button and with few steps can add a recipe.
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
 REST service, provided for educational purposes by **Server**.

## API Reference

**User Authentication:**

- **Registration:** Allows users to create personalized accounts, enabling them to create, edit, or delete recipes.
- **Login:** Registered users can log in to access additional functionalities.
- **Guest Access:** Unregistered users can browse the site but cannot perform CRUD operations or like recipes.

**User Actions:**

- **Create, Edit, Delete Recipes:** Logged-in users have the ability to create, modify, and delete recipes.
- **View Created Recipes:** Users can view all recipes they've created.
- **Like Recipes:** Logged-in users (non-creators) can like recipes but cannot like their own created recipes.

**Server**

- **Usage**

This is **REST service**, provided by **Server**. To execute it, open a command prompt and run `npm run dev`.

```
> cd server
> npm i
> npm run dev
```

## API Endpoints

**1. Authentication**

**BaseUrl:** `http://localhost:3500/users`

- **POST /register**

    - _Description:_ Register and log in a new user.
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
        "User": "user"
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
        "user": "user"
    }
    ```

**2. Collections**

**BaseUrl:** `http://localhost:3500/recipes`

- **GET /salads**

- **GET /mains**

- **GET /desserts**

    - _Description:_ Get Collections

    - _Request:_
    ```json
    {
        "collectionName": "string",
    }
    ```
    - _Response:_
    ```json
    {
        "collectionName ": "collectionName"
    }
    ```

**3. For logged-in users:**

- **POST /add-recipe**

    - _Description:_ Create item.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "recipeData": "recipeData"
    }
    ```
    - _Response:_
    ```json
    {
        "recipeData": "recipeData"
    }
    ```   

**4. For both logged-in and guest users:**

- **GET /:collectionName/:id**

    - _Description:_ Get recipe and it's details.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "id": "unique_id_here"
    }
    ```
    - _Response:_
    ```json
    {
        "itemData ": "itemData"
    }
    ```

**5. For logged in users (ownres) - edit and remove recipe**

**BaseUrl:** `http://localhost:3500/recipes`

- **PUT /:collectionName/:recipeId/edit**

    - _Description:_ Edit recipe's details.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "id": "unique_id_here"
    }
    ```
    - _Response:_
    ```json
    {
        "recipeData ": "recipeData"
    }
    ```

- **DELETE /:collectionName/:recipeId/delete**

    - _Description:_ Get recipe and remove it.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "id": "unique_id_here"
    }
    ```
    - _Response:_
    ```json
    {
        "success": true,
    }
    ```

**6. For logged in users (not owners) - Likes functionality**

**BaseUrl:** `http://localhost:3500/recipes`

- **GET /:collectionName/:recipeId/like`**

    - _Description:_ Get all likes

    - _Request:_
    ```json
    {
        "recipeId": "unique_id_here"
    }
    ```
    - _Response:_

    The response will be an array of objects, where the key for each object will be its index in the array, and the value will be "recipeData".

    Example structure:

    ```json
    [
        {
            "0": "likeData"
        },
        {
            "1": "likeData"
        },
        {
            "2": "likeData"
        }
    ]
    ```

## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.
