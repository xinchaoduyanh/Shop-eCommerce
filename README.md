# Ecommerce System

This is an Ecommerce system built with Express and TypeScript. The system includes features such as role-based access control, Kafka, Redis, Elasticsearch, notifications, messaging, ordering, and OTP sending.

## Features

- **Role-based Access Control**: Manage user permissions and roles.
- **Kafka**: For event streaming and messaging.
- **Redis**: Used for caching and session management.
- **Elasticsearch**: For advanced search capabilities.
- **Notifications**: System for sending notifications to users.
- **Messaging**: Internal messaging system.
- **Ordering**: Complete order management system.
- **Send OTP**: Functionality to send OTPs for authentication.

## Getting Started

### Prerequisites

- Node.js
- TypeScript
- Kafka
- Redis
- Elasticsearch

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/xinchaoduyanh/Shop-eCommerce.git
    cd ecommerce-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the necessary environment variables.

4. Build the project:
    ```sh
    npm run build
    ```

5. Start the server:
    ```sh
    npm start
    ```

### Running Tests

To run tests, use the following command: