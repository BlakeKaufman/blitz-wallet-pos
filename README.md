# Blitz Wallet POS

Blitz Wallet POS is a Progressive Web Application (PWA) designed to serve as a Point of Sale system for the Blitz Wallet. This application facilitates seamless, self-custodial payments using the Bitcoin Lightning and Liquid networks.

## Features

- **Self-Custodial Payments**: Ensure that you have full control over your funds without any third-party intermediaries.
- **Bitcoin Lightning and Liquid Network Support**: Accept payments quickly and efficiently using the Bitcoin Lightning and Liquid networks.
- **User-Friendly Interface**: Simplified user interface designed to make transactions fast and easy.
- **Progressive Web App**: Installable on any device, offering an app-like experience with offline capabilities.
- **Multi-Device Support**: Use the POS system across multiple devices without any hassle.

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BlakeKaufman/blitz-wallet-pos.git
   cd blitz-wallet-pos
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

or

```bash
yarn build
```

The build will be stored in the `build/` directory, ready for deployment.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.
