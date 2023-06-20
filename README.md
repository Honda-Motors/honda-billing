# Honda Billing

## Description

Honda Billing is a project consisting of frontend and backend components for billing management.

## Installation

To get started with the Honda Billing project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/honda-billing.git
```

2. Change into the project directory:

```
cd honda-billing
```

3. Install dependencies:

```
yarn install
```

## Usage

### Development Mode

To run the project in development mode using Docker, follow these steps:

1. Build the Docker images:

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
```

2. Start the containers:

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

The frontend development server will be accessible at: `http://localhost:3000`.

The backend server will be accessible at: `http://localhost:5000`.

### Building the Application

To build the application for production using Docker, follow these steps:

1. Build the Docker images:

```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```

2. Start the containers:

```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

### Running without Docker

To run the project without Docker, follow these steps:

1. Run the backend server:

```
yarn server
```

2. Run the frontend development server:

```
yarn client
```

The frontend development server will be accessible at: `http://localhost:3000`.

The backend server will be accessible at: `http://localhost:5000`.

### Building the Application without Docker

To build the frontend application without Docker, use the following command:

```
yarn build-app
```

This command will install dependencies and build the frontend application.

## Project Structure

The project follows a monorepo-style structure using Yarn workspaces. It consists of the following workspaces:

- billing-state-frontend: The frontend package for the Honda Billing project.
- billing-state-backend: The backend package for the Honda Billing project.

## License

This project is licensed under the MIT License.

```

```
