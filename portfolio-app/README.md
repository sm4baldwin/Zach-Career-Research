# Zach Avila - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design and extensible architecture for showcasing research, projects, and curated reading materials.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **Extensible Architecture**: Easy to add new pages, content, and features
- **Firebase Integration**: Analytics and hosting ready
- **SEO Optimized**: Proper meta tags and semantic HTML
- **API Routes**: Backend functionality for contact forms and data fetching

## Pages

- **About Me**: Personal introduction and overview
- **Research**: Showcase of current and completed research projects
- **Projects**: Development projects and technical work
- **Reading**: Curated collection of articles, papers, and resources

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── research/          # Research page
│   ├── projects/          # Projects page
│   ├── reading/           # Reading list page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Card.tsx           # Content card component
│   └── FirebaseInit.tsx   # Firebase initialization
└── lib/                   # Utilities and configurations
    └── firebase.ts        # Firebase configuration
```

## Customization

### Adding Content

1. **Research Projects**: Edit the `researchProjects` array in `/src/app/research/page.tsx`
2. **Development Projects**: Edit the `projects` array in `/src/app/projects/page.tsx`
3. **Reading List**: Edit the `readingList` array in `/src/app/reading/page.tsx`
4. **About Me**: Edit the content in `/src/app/page.tsx`

### Styling

The site uses Tailwind CSS for styling. You can:
- Modify colors and themes in `tailwind.config.ts`
- Add custom components in the `/src/components` directory
- Extend global styles in `/src/app/globals.css`

### Adding New Pages

1. Create a new directory in `/src/app/[page-name]`
2. Add a `page.tsx` file with your component
3. Update the navigation in `/src/components/Layout.tsx`

## Firebase Setup

The project is configured for Firebase hosting and analytics:

1. **Analytics**: Already configured with your Firebase config
2. **Hosting**: Use Firebase CLI to deploy
3. **Other Services**: Easy to add Firestore, Auth, etc.

## Deployment

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Build the project:
```bash
npm run build
```

4. Deploy to Firebase:
```bash
firebase deploy
```

### Alternative Deployment

The app can also be deployed to:
- Vercel (recommended for Next.js)
- Netlify  
- AWS Amplify
- Any Node.js hosting provider

## API Routes

The project includes example API routes:

- `/api/contact` - Contact form submission
- `/api/projects` - Fetch projects data

These can be extended for:
- Email notifications
- Database integration
- Authentication
- Content management

## Extensibility Features

- **Component-based architecture** for easy reuse
- **TypeScript** for type safety
- **Modular CSS** with Tailwind
- **API routes** for backend functionality
- **Configuration-driven content** (easily replaceable with CMS)

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## License

This project is open source and available under the [MIT License](LICENSE).
