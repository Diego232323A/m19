# Room Service

This microservice manages hotel rooms.

## Features

- Add a new room
- Get all rooms
- Get room by ID

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd RoomService
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Service

1. Start the service:
    ```sh
    npm start
    ```

### Endpoints

#### Add Room

- **URL**: `/addRoom`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "roomNumber": "101",
    "type": "Single",
    "price": 100,
    "isAvailable": true
  }
