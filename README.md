# CV REV

link to the app Render url: [Render URL](https://cvrev.onrender.com)

CV Rev is a RESTful API service for a CV Review app

# Documentation
A detailed documentation of the api can be found here: [API DOCUMENTATION](https://documenter.getpostman.com/view/21130368/2s8YzQVNt7)

**Run Project Locally**

    • Clone the project

    • cd into the project's folder and run npm install to install dependencies

    • Create a .env file, check the config/index.js file for the keys variables

    • Run npm run seed to seed data into the database

    • Run npm run dev to start the server

# HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods:

    • POST Create a resource
    • GET Get a resource or list of resources
    • PATCH updates a resource or list of resources
    • DELETE deletes a resource or list of resources
    • For POST, the body of your request must be a JSON payload.
# HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

    • 200 OK Successful request
    • 400 Bad Request There was a problem with the request
    • 500 Server Error Server error
