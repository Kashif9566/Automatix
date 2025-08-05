# Automatix - Next.js Application

A modern, accessible, and performant Next.js application featuring a beautiful navbar and hero section with smooth animations.

## 🚀 Features

- **Modern Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Accessibility** compliant (WCAG guidelines)
- **Responsive Design** for all devices
- **Performance Optimized** with best practices
- **Custom Hooks** for reusability
- **Constants Management** for maintainability

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with navbar
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   ├── terms/             # Terms & Conditions page
│   └── 404/               # 404 error page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   └── HeroSection.tsx    # Hero section component
├── hooks/                 # Custom React hooks
│   ├── useScrollPosition.ts
│   └── useClickOutside.ts
├── utils/                 # Utility functions
│   └── withEffects.tsx    # HOC for animations
├── constants/             # Application constants
│   └── index.ts
└── types/                 # TypeScript type definitions
    └── index.ts
```

## 🛠️ Best Practices Implemented

### 1. **TypeScript & Type Safety**
- Strict TypeScript configuration
- Proper type definitions in `/types`
- Type-safe component props
- Generic utility functions

### 2. **Performance Optimization**
- Custom hooks for scroll position and click outside detection
- Passive event listeners for better scroll performance
- Lazy loading for images
- Optimized animations with `will-change` and `transform: translateZ(0)`
- Reduced motion support for accessibility

### 3. **Accessibility (A11y)**
- ARIA labels and roles
- Keyboard navigation support (Escape key to close modals)
- Screen reader friendly markup
- Proper focus management
- Semantic HTML structure

### 4. **Code Organization**
- Constants centralized in `/constants`
- Custom hooks for reusable logic
- Utility functions for common operations
- Proper separation of concerns

### 5. **State Management**
- Local state with React hooks
- Proper cleanup in useEffect
- Memoized callbacks with useCallback
- Ref management for DOM interactions

### 6. **CSS & Styling**
- Tailwind CSS for utility-first styling
- Custom CSS animations
- Responsive design patterns
- Dark theme support
- Performance-optimized animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-automatix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation constants in `src/constants/index.ts`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Custom animations: Add to `globals.css`

### Constants
- Navigation links: `src/constants/index.ts`
- Company information: Update `COMPANY_INFO`
- Animation delays: Modify `ANIMATION_DELAYS`

## 🔧 Custom Hooks

### `useScrollPosition`
```typescript
const isScrolled = useScrollPosition({ threshold: 10 });
```

### `useClickOutside`
```typescript
const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, () => setIsOpen(false));
```

## 🎯 Performance Tips

1. **Images**: Use `loading="lazy"` for images below the fold
2. **Animations**: Use `transform` and `opacity` for smooth animations
3. **Event Listeners**: Use passive listeners for scroll events
4. **State Updates**: Batch state updates when possible
5. **Cleanup**: Always cleanup event listeners and timeouts

## ♿ Accessibility Features

- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Reduced motion preferences
- Focus management
- ARIA labels and roles

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint system: `xs`, `sm`, `md`, `lg`, `xl`
- Flexible layouts with CSS Grid and Flexbox
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm run start`
3. Deploy the `.next` folder and `package.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.
