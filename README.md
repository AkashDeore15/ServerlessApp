# ServerlessApp

This project is an application developed using **Angular** for the frontend, with a backend powered by **Seneca** microservices and an **Express Gateway** server. The architecture leverages a serverless approach to efficiently handle API requests and business logic.

## Introduction

The ServerlessApp demonstrates a modular and scalable application structure by combining Angular for dynamic user interfaces, Seneca for microservices-based business logic, and Express Gateway for API management. This setup facilitates efficient request handling and streamlined service integration.

## Architecture

The application is structured into three main components:

1. **Frontend**: Developed with Angular, providing a responsive and dynamic user interface.
2. **Backend Microservices**: Implemented using Seneca, managing business logic and processing.
3. **API Gateway**: Utilizing Express Gateway to route requests between the frontend and backend services.

This architecture ensures a clear separation of concerns, enhancing maintainability and scalability.

## Features

- **Modular Design**: Separation of frontend, backend, and gateway components.
- **Scalability**: Easily extendable microservices architecture.
- **Efficient API Management**: Centralized routing and handling of API requests.
- **Responsive UI**: Dynamic and user-friendly interface built with Angular.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Seneca (Microservices Framework)
- **API Gateway**: Express Gateway
- **Programming Languages**: TypeScript, JavaScript
- **Version Control**: Git

## Setup and Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AkashDeore15/ServerlessApp.git
   ```
2. **Navigate to Project Directory**:
   ```bash
   cd ServerlessApp
   ```
3. **Install Dependencies**:
   - For the Angular frontend:
     ```bash
     cd myapp1
     npm install
     ```
   - For the Seneca server:
     ```bash
     cd ../SenecaServer
     npm install
     ```
   - For the Express Gateway server:
     ```bash
     cd ../ExpressGatewayServer
     npm install
     ```
4. **Run the Servers**:
   - **Seneca Server**:
     ```bash
     cd ../SenecaServer
     npm start
     ```
   - **Express Gateway**:
     ```bash
     cd ../ExpressGatewayServer
     npm start
     ```
   - **Angular Frontend**:
     ```bash
     cd ../myapp1
     ng serve
     ```
5. **Access the Application**:
   Open your browser and navigate to `http://localhost:4200` to view the Angular application.

## Usage

Once the application is running:

- **Frontend**: Interact with the Angular-based user interface.
- **Backend**: Seneca microservices handle API requests and business logic.
- **API Gateway**: Express Gateway routes requests between the frontend and backend services.

This setup allows for efficient development and testing of the application's features.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
