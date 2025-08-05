![Sanction Checker Screenshot](/public/home.png)

# Sanction Checker

A modern web application for global sanctions screening and compliance verification. This tool allows users to search for individuals across multiple sanctions databases to ensure compliance with international regulations.

![Sanction Checker Screenshot](/public/search.png)
## 🌟 Features


- **Global Sanctions Search**: Search across multiple international sanctions databases
- **Real-time API Integration**: Powered by OpenSanctions API for comprehensive data
- **Modern UI/UX**: Beautiful, responsive interface built with React and Tailwind CSS
- **Advanced Search**: Search by name, country, and birth date
- **Detailed Results**: View comprehensive sanction information including:
  - Personal details (name, birth date, nationality)
  - Sanction type and severity
  - Creation and last update dates
  - Associated datasets and topics
  - Risk assessment scores

## 🛠️ Tech Stack
<<<<<<< Updated upstream

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### APIs
- **OpenSanctions API** - Global sanctions data provider

## 📋 Prerequisites

Before running this application, you'll need:

- Node.js (v16 or higher)
- npm or yarn package manager
- OpenSanctions API key (get one at [opensanctions.org](https://opensanctions.org))

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sanction-checker
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Environment Setup
Create a `.env` file in the `backend` directory:
```bash
cd backend
touch .env
```

Add your OpenSanctions API key to the `.env` file:
```
API_KEY=your_opensanctions_api_key_here
```

### 5. Start the Development Servers

#### Start Backend Server
```bash
cd backend
node index.js
```
The backend will run on `http://localhost:3000`

#### Start Frontend Development Server
In a new terminal:
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📖 Usage

1. **Navigate to the Application**: Open your browser and go to `http://localhost:5173`

2. **Search for Individuals**: Use the search form to enter:
   - **Name**: Full name of the person you want to check
   - **Country**: Nationality or country of residence
   - **Birth Date**: Date of birth (optional but recommended for accuracy)

3. **Review Results**: The application will display:
   - Matching individuals from sanctions databases
   - Detailed information about each match
   - Risk indicators and associated datasets
   - Creation and last update timestamps

4. **Analyze Information**: Review the results to determine if the individual appears on any sanctions lists

## 🔧 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `node index.js` - Start the backend server

## 📁 Project Structure

```
sanction-checker/
├── src/
│   ├── components/
│   │   ├── Search.jsx      # Main search functionality
│   │   ├── About.jsx       # About page component
│   │   ├── Landingpage.jsx # Landing page component
│   │   └── Navbar.jsx      # Navigation component
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── assets/             # Static assets
├── backend/
│   ├── index.js            # Express server
│   └── package.json        # Backend dependencies
├── public/                 # Public assets
├── package.json            # Frontend dependencies
└── README.md               # This file
```

## 🔒 Security & Compliance

- **API Key Protection**: API keys are stored in environment variables
- **CORS Configuration**: Properly configured for development and production
- **Data Privacy**: No personal data is stored locally
- **Compliance**: Designed to help organizations meet regulatory requirements

## 👨‍💻 Developer

**Pir Salman Shah** - Junior Web Developer & Creator of Sanction Guard

## 🔗 Links

- [OpenSanctions API Documentation](https://docs.opensanctions.org/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

=======

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### APIs
- **OpenSanctions API** - Global sanctions data provider

## 📋 Prerequisites

Before running this application, you'll need:

- Node.js (v16 or higher)
- npm or yarn package manager
- OpenSanctions API key (get one at [opensanctions.org](https://opensanctions.org))

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sanction-checker
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Environment Setup
Create a `.env` file in the `backend` directory:
```bash
cd backend
touch .env
```

Add your OpenSanctions API key to the `.env` file:
```
API_KEY=your_opensanctions_api_key_here
```

### 5. Start the Development Servers

#### Start Backend Server
```bash
cd backend
node index.js
```
The backend will run on `http://localhost:3000`

#### Start Frontend Development Server
In a new terminal:
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📖 Usage

1. **Navigate to the Application**: Open your browser and go to `http://localhost:5173`

2. **Search for Individuals**: Use the search form to enter:
   - **Name**: Full name of the person you want to check
   - **Country**: Nationality or country of residence
   - **Birth Date**: Date of birth (optional but recommended for accuracy)

3. **Review Results**: The application will display:
   - Matching individuals from sanctions databases
   - Detailed information about each match
   - Risk indicators and associated datasets
   - Creation and last update timestamps

4. **Analyze Information**: Review the results to determine if the individual appears on any sanctions lists

## 🔧 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `node index.js` - Start the backend server

## 📁 Project Structure

```
sanction-checker/
├── src/
│   ├── components/
│   │   ├── Search.jsx      # Main search functionality
│   │   ├── About.jsx       # About page component
│   │   ├── Landingpage.jsx # Landing page component
│   │   └── Navbar.jsx      # Navigation component
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── assets/             # Static assets
├── backend/
│   ├── index.js            # Express server
│   └── package.json        # Backend dependencies
├── public/                 # Public assets
├── package.json            # Frontend dependencies
└── README.md               # This file
```

## 🔒 Security & Compliance

- **API Key Protection**: API keys are stored in environment variables
- **CORS Configuration**: Properly configured for development and production
- **Data Privacy**: No personal data is stored locally
- **Compliance**: Designed to help organizations meet regulatory requirements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 👨‍💻 Developer

**Pir Salman Shah** - Junior Web Developer & Creator of Sanction Guard

## 🔗 Links

- [OpenSanctions API Documentation](https://docs.opensanctions.org/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

>>>>>>> Stashed changes
