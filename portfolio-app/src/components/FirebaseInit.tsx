'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';

export default function FirebaseInit() {
  useEffect(() => {
    // Firebase analytics will be initialized automatically when the module loads
    // on the client side. This component ensures it happens during the app startup.
    if (analytics) {
      console.log('Firebase Analytics initialized');
    }
  }, []);

  return null; // This component doesn't render anything
}