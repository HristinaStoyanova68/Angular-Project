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

**HRISTINA’S CRAFT WORLD ReactJS** aims to bring together people for whom the beauty of small things makes тхеир day beautiful and smiling. It is a place where anyone can view or showcase incredible flowers, bouquets, or decorations made solely from crepe paper.

<!-- ## Project deployment

**HRISTINA’S CRAFT WORLD ReactJS** is deployed on a free hosting service [Firebase](https://firebase.google.com/). You have the opportunity to experience its features firsthand. To access the live version, simply visit [HRISTINA’S CRAFT WORLD ReactJS](https://hristina-s-craft-world-reactjs.firebaseapp.com/). -->

## Features

**1. Carousel Features:**

- **Collections Carousel:**
Our application features three distinct carousels showcasing the names of the following collections: 
    - bouquets 
    - decorations
    - gift boxes

- **Items Carousel:**
These carousel offer a visual representation of each collection, allowing users to preview three elements from each category swiftly.

- **New Releases Carousel:**
Additionally, we provide a carousel displaying the most recent items added to our platform. This carousel showcases the latest additions from all collections, providing users with a quick glance at the most recent items available.

**2. Dropdown Navigation for Collections:**

Our application includes a dropdown menu containing the names of the various collections. This feature enables users to easily and swiftly navigate to their preferred collection, allowing them to explore the items within it effortlessly.

**3. User Authentication:** 

Secure user authentication ensures a personalized experience for each member with their created items.


## How it works

- **Account Creation:**
Users register to create personalized accounts, allowing them to create, modify, or delete items.
- **Creating an Item in a Collection:** 
Once registered, users choose a collection in which they can add their own item.
- **Real-time Updates:** 
All changes made to the collections, including additions and modifications, are updated in real-time, ensuring that information about each item is current.
- **Liking an Item:** 
Any logged-in user who is not the owner of an item can like it, and the count of likes is displayed on the item's screen.
- **Guest Visitors:** 
Unauthenticated visitors can browse all collections and their contents but cannot add, modify, delete, or like items within the collections.

## Project Structure

The project follows a structured organization to enhance maintainability and ease of navigation. Here's a brief overview of the main directories and their purposes:

- `/client:`
 Contains the frontend application built with React.

    - `/public:`
 Static assets and HTML template.

    - `/src:`
 React components, styles, and application logic.

 - `/server:`
 REST service, provided for educational purposes by **SoftUni Practice Server**.

## API Reference

**User Authentication:**

- **Registration:** Allows users to create personalized accounts, enabling them to create, edit, or delete items.
- **Login:** Registered users can log in to access additional functionalities.
- **Guest Access:** Unregistered users can browse the site but cannot perform CRUD operations or like items.

**User Actions:**

- **Create, Edit, Delete Items:** Logged-in users have the ability to create, modify, and delete items.
- **View Created Items:** Users can view all items they've created.
- **Like Items:** Logged-in users (non-creators) can like items but cannot like their own created items.

**Server**

- **Usage**

This is **REST service**, provided for educational purposes by **SoftUni Practice Server**. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

## API Endpoints

**1. Authentication**

**BaseUrl:** `http://localhost:3030/users`

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
        "User Data": "userData"
    }
    ```

- **POST /login**

    - _Description:_ Authenticate and log in a user.

    - _Request:_
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```
    - _Response:_
    ```json
    {
        "User Data": "userData"
    }
    ```

**2. Collections**

**BaseUrl:** `http://localhost:3030/data`

- **GET /bouquets**

- **GET /decorations**

- **GET /gift_boxes**

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

- **POST /:collectionName/itemData**

    - _Description:_ Create item.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "itemData": "itemData"
    }
    ```
    - _Response:_
    ```json
    {
        "itemData": "itemData"
    }
    ```   

**4. For both logged-in and guest users:**

- **GET /:collectionName/:itemId**

    - _Description:_ Get item and it's details.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "itemId": "unique_id_here"
    }
    ```
    - _Response:_
    ```json
    {
        "itemData ": "itemData"
    }
    ```

**5. For logged in users (ownres) - edit and remove item**

**BaseUrl:** `http://localhost:3030/data`

- **PUT /:collectionName/:itemId**

    - _Description:_ Edit item's details.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "itemId": "unique_id_here"
    }
    ```
    - _Response:_
    ```json
    {
        "itemData ": "itemData"
    }
    ```

- **DELETE /:collectionName/:itemId**

    - _Description:_ Get item and remove it.

    - _Request:_
    ```json
    {
        "collectionName": "string",
        "itemId": "unique_id_here"
    }
    ```
    - _Response:_
    ```json
    {
        "success": true,
    }
    ```

**6. For logged in users (not owners) - Likes functionality**

**BaseUrl:** `http://localhost:3030/data/likes`

- **GET ?where=itemId=:itemId**

    - _Description:_ Get all likes

    - _Request:_
    ```json
    {
        "itemId": "unique_id_here"
    }
    ```
    - _Response:_

    The response will be an array of objects, where the key for each object will be its index in the array, and the value will be "itemData".

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
