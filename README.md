# Game Hub - Video Game Discovery Platform

Game Hub is a modern web application that helps you discover new and interesting video games. Browse games by genre, platform, and more with a clean, responsive interface powered by the RAWG API.

## Features

- **Game Discovery**: Browse and search through thousands of video games
- **Genre & Platform Filtering**: Filter games by genre, platform, and other criteria
- **Modern UI**: Clean, responsive design with dark/light mode support
- **Real-time Search**: Search games with instant results
- **Game Details**: View comprehensive game information and ratings

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **UI Framework**: Chakra UI with emotion
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Chakra UI components with responsive design
- **State Management**: React hooks and context
- **API**: RAWG Video Games Database API
- **Code Quality**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jhaysdevs/game-hub.git
cd game-hub
```

2. Install dependencies:

```bash
pnpm i
```

3. Set up environment variables:

Create a `.env` file in the project root and add your RAWG API key:

```bash
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

You can either:

- Create a new `.env` file and add the above content
- Or rename `.env.example` to `.env` and update the API key value

Get your free API key from [rawg.io](https://rawg.io/apidocs)

4. Start the development server:

```bash
pnpm dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## Development

This project uses:

- **TypeScript** for type safety
- **ESLint** for code quality
- **Vite** for fast development and building
- **Chakra UI** for component library

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.
