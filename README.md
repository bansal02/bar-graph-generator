# Bar Graph Generator

An interactive React application for generating and visualizing dynamic bar graphs. Built with React, Material UI, and Vite.

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-5-007FFF)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF)](https://vitejs.dev/)

## ✨ Features

- 🎨 **Interactive Visualization** - Dynamic bar charts with customizable bar counts (1-20)
- 🖱️ **Real-time Selection** - Click bars or buttons to highlight and view details
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎯 **Modern UI** - Gradient themes, smooth animations, and hover effects
- 🔄 **Regenerate** - Randomly generate new bar heights instantly
- 🧭 **React Router** - Smooth navigation between pages

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/bansal02/bar-graph-generator.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the app.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Material UI** | Component library & styling |
| **React Router** | Navigation |
| **Vite** | Build tool & dev server |
| **Emotion** | CSS-in-JS (MUI dependency) |

## 📁 Project Structure

```
src/
├── pages/
│   ├── InputPage.jsx    # Home page - enter bar count
│   └── GraphPage.jsx    # Visualization page
├── App.jsx              # Main app with routing & theming
├── App.css              # Global styles
└── index.css            # CSS reset
```

## 🎯 Usage

1. **Enter Number**: Input a number between 1-20 on the home page
2. **View Graph**: Click "View Graph" to see the visualization
3. **Interact**: 
   - Click bars directly to select them
   - Use buttons below to select specific bars
   - View selected bar height in the info chip
4. **Regenerate**: Click "Regenerate" for new random heights
5. **Navigate**: Click "Home" to return

## 📱 Responsive Design

- **Mobile** (xs): < 600px - Touch-optimized
- **Tablet** (sm): ≥ 600px - Optimized layout
- **Desktop** (md/lg): ≥ 900px - Full features

## 🔨 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Key Design Features

- **Gradient Theme**: Purple-blue primary (`#667eea` → `#764ba2`)
- **Selection Color**: Pink gradient (`#f093fb` → `#f5576c`)
- **Adaptive Bars**: Always occupy 70% of page width
- **Smooth Animations**: 300ms transitions throughout
- **Accessibility**: ARIA labels, keyboard navigation, touch-friendly

## 📦 Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory. Deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 🌐 Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - latest versions.

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Author

Akshay Agarwal