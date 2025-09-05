# Test Working Claude - Counter App

A production-ready Base Mini App featuring an advanced counter with comprehensive functionality, built with Next.js 15 and OnchainKit.

## 🚀 Features

### Core Functionality
- **Advanced Counter**: Increment, decrement, reset, and undo operations
- **Persistent Storage**: State persists across browser sessions using Zustand
- **Action History**: Track all counter operations with timestamps
- **Keyboard Shortcuts**: Full keyboard navigation support
- **Real-time Statistics**: Comprehensive analytics and usage patterns

### Production Features
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions using Framer Motion
- **Toast Notifications**: User feedback for all actions
- **Error Boundaries**: Graceful error handling
- **SEO Optimized**: Complete meta tags and Open Graph support
- **PWA Ready**: Manifest file and service worker support

### Technical Stack
- **Next.js 15**: Latest React framework with App Router
- **OnchainKit**: Coinbase's toolkit for Base network integration
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library
- **TypeScript**: Type-safe development
- **Jest**: Comprehensive testing suite

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vistara-apps/test-working-claude.git
   cd test-working-claude
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Basic Operations
- **Increment**: Click the green "+" button or press `↑` or `+`
- **Decrement**: Click the red "-" button or press `↓` or `-`
- **Reset**: Click "Reset" button or press `Ctrl+R`
- **Undo**: Click "Undo" button or press `Ctrl+Z`

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `↑` or `+` | Increment counter |
| `↓` or `-` | Decrement counter |
| `Ctrl+R` | Reset counter |
| `Ctrl+Z` | Undo last action |
| `?` | Show keyboard shortcuts |

### Features
- **History Panel**: View recent actions and their timestamps
- **Statistics**: Real-time analytics including action ratios
- **Persistent State**: Your data is automatically saved
- **Toast Notifications**: Visual feedback for all actions

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

Run tests with coverage:
```bash
npm run test:coverage
# or
yarn test:coverage
```

Watch mode for development:
```bash
npm run test:watch
# or
yarn test:watch
```

## 🏗️ Building for Production

1. **Build the application**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start production server**
   ```bash
   npm start
   # or
   yarn start
   ```

3. **Analyze bundle size**
   ```bash
   npm run analyze
   # or
   yarn analyze
   ```

## 📁 Project Structure

```
test-working-claude/
├── app/
│   ├── components/          # React components
│   │   ├── Counter.tsx      # Main counter component
│   │   └── Statistics.tsx   # Statistics display
│   ├── hooks/              # Custom React hooks
│   │   ├── useKeyboardShortcuts.ts
│   │   └── useLocalStorage.ts
│   ├── store/              # Zustand store
│   │   └── counterStore.ts
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── helpers.ts
│   ├── api/                # API routes
│   │   └── webhook/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── __tests__/              # Test files
├── public/                 # Static assets
├── docs/                   # Documentation
└── ...config files
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

### Customization
- **Theme**: Modify colors in `tailwind.config.ts`
- **Limits**: Adjust counter limits in `counterStore.ts`
- **Animations**: Customize transitions in component files

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Other Platforms
The app is compatible with any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [OnchainKit](https://onchainkit.xyz/) - Coinbase's Base toolkit
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Zustand](https://github.com/pmndrs/zustand) - State management

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for the Base ecosystem**
