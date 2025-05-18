# Birthday Wisher - Automatic Birthday Wishes Application

## Project Overview
This React application helps users manage and automatically send birthday wishes via WhatsApp. It features a modern UI built with React, TypeScript, and Tailwind CSS.

## Key Features
- User authentication system
- Contact management with birthday tracking
- Customizable message templates
- WhatsApp integration for sending wishes
- Dashboard with upcoming birthdays
- Responsive design for all devices

## Technical Stack
- React 18.3.1
- TypeScript
- Tailwind CSS
- Vite (Build tool)
- React Router for navigation
- date-fns for date handling
- Lucide React for icons

## Project Structure
```
src/
├── components/         # Reusable UI components
├── context/           # React context for state management
├── data/             # Mock data and interfaces
└── pages/            # Main application pages
```

## Setup Instructions

1. **Prerequisites**
   - Node.js (v18 or higher)
   - npm (included with Node.js)
   - VS Code or any preferred IDE

2. **Installation**
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd birthday-wisher

   # Install dependencies
   npm install
   ```

3. **Running the Development Server**
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:5173`

4. **Building for Production**
   ```bash
   npm run build
   ```
   The built files will be in the `dist` directory.

## Code Examples

### Authentication Context
```typescript
// src/context/AuthContext.tsx
import { createContext, useState, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### Contact Management
```typescript
// Example of adding a new contact
const handleAddContact = (contact: Contact) => {
  const newContact = {
    id: Date.now().toString(),
    ...contact
  };
  setContacts([...contacts, newContact]);
};
```

### Message Templates
```typescript
// Example of a message template
const template = {
  name: 'Birthday Wish - Casual',
  content: 'Hey {{name}}! 🎉 Happy Birthday! Have an amazing day! 🎂',
};
```

## Key Components

### Dashboard
- Displays upcoming birthdays
- Shows statistics and recent activity
- Quick access to send wishes

### Contacts Page
- CRUD operations for contacts
- Birthday tracking
- Group management

### Templates Page
- Customizable message templates
- Preview functionality
- Template management

## Testing
```bash
# Run tests
npm run test
```

## Deployment
The application can be deployed to any static hosting service:

```bash
# Build the application
npm run build

# Deploy to hosting service
# Example using Netlify
netlify deploy
```

## Common Issues and Solutions

1. **WhatsApp Connection Issues**
   ```javascript
   // Check connection status
   if (!whatsAppConnected) {
     console.error('WhatsApp not connected');
     // Prompt user to reconnect
   }
   ```

2. **Authentication Errors**
   ```javascript
   // Handle auth errors
   try {
     await login(email, password);
   } catch (error) {
     console.error('Authentication failed:', error);
   }
   ```

## Best Practices
1. Always use TypeScript interfaces for type safety
2. Follow React hooks rules
3. Implement proper error handling
4. Use environment variables for sensitive data
5. Keep components small and focused

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License
MIT License