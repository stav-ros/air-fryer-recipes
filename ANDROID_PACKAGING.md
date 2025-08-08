# Air Fryer Cookbook - Android App Packaging Guide

This guide will help you convert the Air Fryer Cookbook web application into a native Android app using Capacitor. The web app is built with Next.js and is fully responsive, making it perfect for mobile deployment.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Android Studio
- Java Development Kit (JDK) v11 or higher
- Android SDK and Android Virtual Device (AVD)

## Method 1: Using Capacitor (Recommended)

Capacitor is a modern cross-platform native runtime that makes it easy to build web apps that run natively on iOS, Android, and the web.

### Step 1: Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2: Initialize Capacitor

```bash
npx cap init "Air Fryer Cookbook" "com.airfryer.cookbook"
```

This will create a `capacitor.config.ts` file in your project root.

### Step 3: Configure Capacitor

Update your `capacitor.config.ts` file:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.airfryer.cookbook',
  appName: 'Air Fryer Cookbook',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    // In development, you can connect to your Next.js dev server
    url: 'http://localhost:3000',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
```

### Step 4: Update Next.js Configuration

Add the following to your `next.config.ts`:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

### Step 5: Build the Next.js App

```bash
npm run build
npm run export
```

This will create a static version of your app in the `out` directory.

### Step 6: Add Android Platform

```bash
npx cap add android
```

### Step 7: Copy Web Assets to Native Project

```bash
npx cap sync android
```

### Step 8: Open in Android Studio

```bash
npx cap open android
```

### Step 9: Build and Run the App

1. Android Studio will open with your Android project
2. Connect an Android device or start an emulator
3. Click the "Run" button (green play icon) to build and install the app

## Method 2: Using PWA (Progressive Web App)

For a simpler approach, you can convert the app into a PWA that can be installed on Android devices.

### Step 1: Create PWA Manifest

Create a `public/manifest.json` file:

```json
{
  "name": "Air Fryer Cookbook",
  "short_name": "Air Fryer",
  "description": "1000+ Recipes for Fast & Healthy Air-Fried Meals",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ea580c",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Step 2: Create Service Worker

Create a `public/sw.js` file:

```javascript
const CACHE_NAME = 'air-fryer-cookbook-v1';
const urlsToCache = [
  '/',
  '/ingredients',
  '/static/js/bundle.js',
  '/static/css/main.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
```

### Step 3: Update HTML Head

Add the following to your `app/layout.tsx`:

```typescript
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Air Fryer Cookbook" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
```

### Step 4: Register Service Worker

Add this to your `app/layout.tsx`:

```typescript
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  }
}, []);
```

## Method 3: Using WebView (Simplest)

For the simplest approach, you can create a native Android app that just loads your web app in a WebView.

### Step 1: Create Android Studio Project

1. Open Android Studio
2. Create a new project with "Empty Activity"
3. Configure your project (package name: com.airfryer.cookbook)

### Step 2: Add Internet Permission

Add this to `app/src/main/AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

### Step 3: Create WebView Activity

Replace the content of `MainActivity.kt`:

```kotlin
package com.airfryer.cookbook

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webView = findViewById<WebView>(R.id.webview)
        webView.webViewClient = WebViewClient()
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        
        // Load your web app
        webView.loadUrl("https://your-app-url.com")
    }
}
```

### Step 4: Update Layout

Replace `res/layout/activity_main.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<WebView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/webview"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

## Testing Your App

### On Physical Device

1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect your device to your computer
4. Run the app from Android Studio

### On Emulator

1. Create an AVD in Android Studio
2. Start the emulator
3. Run the app from Android Studio

## Publishing to Google Play Store

### Step 1: Generate Signed APK/AAB

1. In Android Studio, go to Build → Generate Signed Bundle/APK
2. Select "Android App Bundle"
3. Create a new keystore or use existing one
4. Follow the wizard to generate the signed bundle

### Step 2: Create Google Play Developer Account

1. Go to [Google Play Console](https://play.google.com/console)
2. Create a developer account ($25 one-time fee)
3. Create a new application

### Step 3: Upload App Bundle

1. Upload the generated AAB file
2. Complete the store listing
3. Set up pricing and distribution
4. Submit for review

## Additional Features to Consider

### Push Notifications

Using Capacitor, you can add push notifications:

```bash
npm install @capacitor/push-notifications
npx cap sync
```

### Offline Support

Implement service worker caching for offline functionality.

### Native Features

Add native features like:
- Camera for recipe photos
- GPS for location-based features
- Contacts for sharing recipes
- Storage for saving favorite recipes

## Troubleshooting

### Common Issues

1. **White Screen**: Check that your web assets are properly copied
2. **Network Errors**: Ensure internet permission is added
3. **Build Failures**: Check Android SDK and JDK versions
4. **Performance Issues**: Optimize images and implement lazy loading

### Debugging

- Use Chrome DevTools for web debugging
- Use Android Studio Logcat for native debugging
- Test on multiple devices and screen sizes

## Conclusion

You now have three methods to convert your Air Fryer Cookbook web app into an Android app:

1. **Capacitor** - Best for full native integration
2. **PWA** - Best for simple installable web app
3. **WebView** - Best for quick and simple solution

Choose the method that best fits your needs and technical requirements. The Capacitor method is recommended for the best user experience and access to native features.