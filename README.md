# About PawGo

PawGo is a platform designed to provide pet owners with a space to review and share their experiences with vet clinics. The goal is to assist other pet owners in making informed decisions when choosing a vet clinic for their furry friends. PawGo is built using the PERN (PostgreSQL, Express, React, Node.js) stack.

## Database

The project includes two main tables in the database:

### Clinics

- Attributes: name, address, city, state, open hours, phone number, email, established date
- Primary key: clinic id

### Reviews

- Attributes: clinic id (foreign key), rating, name of reviewer, review
- Additional Display: Average rating and count of reviews

## Functionality

PawGo supports CRUD operations for clinics, allowing users to:

- **Create Clinics:** Add new vet clinics with relevant information.
- **Read Clinics:** View details of existing vet clinics.
- **Update Clinics:** Modify information about vet clinics.
- **Delete Clinics:** Remove vet clinics from the platform.

## Future Work

Future enhancements for PawGo include:

- **Search and Sorting Features:** Implement the ability to search for clinics and sort them by location.
- **Additional Tables:** Introduce new tables for vet details and services provided.

## Installation

To get started with PawGo, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/pawgo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd pawgo
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

## Database Setup

Before running the application, make sure to set up the database:

1. Create a PostgreSQL database.

2. Update the connection details in the server configuration.

## Running the Application

Once the database is set up, you can run the PawGo application:

```bash
npm start
