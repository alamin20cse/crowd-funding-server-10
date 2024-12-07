# CrowdFunding Application - Backend

## Overview
This is the backend service for the CrowdFunding Application. It handles API endpoints for managing campaigns, donations, and user-related operations. The backend is built using Node.js, Express.js, and MongoDB.

## Features
- **Campaign Management**:
  - Create, update, retrieve, and delete campaigns.
- **Donation Management**:
  - Record and retrieve donation details.
- **Database**:
  - MongoDB is used to store campaign and donation data.
- **Middleware**:
  - Cross-Origin Resource Sharing (CORS) support.
  - JSON request body parsing with `express.json()`.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **dotenv**: Environment variable management.
- **cors**: Enable Cross-Origin Resource Sharing.

## API Endpoints
### Campaigns
- **GET /campign**: Retrieve all campaigns.
- **GET /campign/:id**: Retrieve a specific campaign by ID.
- **POST /campign**: Add a new campaign.
- **PUT /campign/:id**: Update an existing campaign.
- **DELETE /campign/:id**: Delete a campaign by ID.

### Donations
- **GET /donatedcollection**: Retrieve all donation records.
- **POST /donatedcollection**: Add a new donation record.

## Environment Variables
Create a `.env` file in the root of your project and include the following variables:


## Live Site
- https://crowd-funding-client-68e23.web.app/

## How to Run the Application Locally
1. Clone the repository of client side:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-alamin20cse
   
2. Clone the repository of server side:
   ```bash
   git clonehttps://github.com/programming-hero-web-course2/b10-a10-server-side-alamin20cse
