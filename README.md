# VocalClub

VocalClub is a real-time audio room application built with **React, Node.js, TypeScript, and Stream**. It enables seamless voice communication, allowing users to create, join, and manage audio rooms with low-latency streaming, secure authentication, and a responsive UI.

## Features
- **Real-time Audio Communication** – Powered by Stream for low-latency voice interactions.
- **User Authentication** – Secure login and signup process.
- **Room Management** – Create, join, and manage audio rooms dynamically.
- **Responsive UI** – Built with React and TypeScript for smooth performance.
- **Scalable Backend** – Uses Node.js for efficient server-side processing.

## Tech Stack
- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express
- **Real-time Audio:** Stream


## Installation

### Prerequisites
- Node.js & npm installed
- Stream API key (if required)


### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/VocalNest.git
   cd vocalnest
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```sh
   STREAM_API_KEY=your_stream_api_key
   DB_URI=your_database_url
   JWT_SECRET=your_jwt_secret
   ```
4. **Run the application**
   ```sh
   npm start
   ```

## Contributing
Contributions are welcome! Feel free to fork this repo and submit pull requests.

## License
This project is licensed under the MIT License.
