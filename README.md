# Angular CRUD Operations with JSON-Server

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Angular and JSON-Server as a mock backend. It's a simple example to get you started with building a frontend application that interacts with a RESTful API.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Angular CLI](https://cli.angular.io/) (v12 or higher)
- [JSON-Server](https://github.com/typicode/json-server)

## Getting Started

1. Clone this repository to your local machine:
   git clone https://github.com/your-username/angular-crud-json-server.git

2. Change to the project directory:
cd angular-crud-json-server

3. Install project dependencies:
npm install

4. Start the JSON-Server to mock the backend:
json-server --watch db.json

5. Start the Angular development server:
ng serve
Open your web browser and navigate to http://localhost:4200/ to access the Angular application.

## Features
Create: Add new items to the database.
Read: Retrieve and display a list of items from the database.
Update: Modify existing items in the database.
Delete: Remove items from the database.

## Project Structure
src/app: Contains Angular components, services, and modules.
src/assets: Contains static assets like CSS files and images.
db.json: JSON-Server mock database file.

## How It Works
The Angular application sends HTTP requests to JSON-Server to perform CRUD operations.

JSON-Server uses the db.json file as a mock database to store and retrieve data.

Angular components interact with JSON-Server using Angular's HttpClient.

## Usage
You can use this project as a starting point for building more complex Angular applications with CRUD functionality. Customize it to suit your specific requirements and expand upon it as needed.

## License
This project is licensed under the MIT License. Feel free to use and modify it according to your needs.

## Acknowledgments
Angular
JSON-Server

## Happy coding!