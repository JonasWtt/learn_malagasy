# Malagasy Learning App — Kotlin WebView Wrapper

A lightweight Android WebView wrapper for the Malagasy learning web app. Built with pure Kotlin + Gradle, not Flutter.

## What's Inside

- **15 Peace Corps lessons** with flashcards, vocabulary lists, and quizzes
- **150+ flashcards** with tap-to-flip animation
- **50+ quiz questions** with scoring and progress tracking
- **Global vocabulary search** (Ctrl+K / tap 🔍)
- **Category filtering** (Basics / Conversation / Vocabulary / Grammar)
- **Mobile-first responsive design** with Madagascar sunset orange + tropical green theme
- **Easy extensible lesson system** in `lessons.js`

## File Structure

```
malagasy-android/
├── build.gradle.kts              # Root build config
├── settings.gradle.kts           # Project settings
├── gradle.properties             # Gradle properties
└── app/
    ├── build.gradle.kts          # App module config
    └── src/main/
        ├── AndroidManifest.xml   # App manifest
        ├── assets/www/           # Web app files (index.html, style.css, app.js, lessons.js)
        ├── java/com/nous/malagasy/MainActivity.kt  # WebView wrapper
        └── res/
            ├── mipmap-*/ic_launcher.png  # App icon
            └── values/
                ├── colors.xml      # Color definitions
                ├── themes.xml      # App theme
                └── strings.xml     # App strings
```

## Key Features

- **Pure Kotlin** — No Flutter, no extra dependencies
- **WebViewAssetLoader** — Secure local file serving via HTTPS
- **Progress bar** — Shows loading progress
- **Back button support** — Handles WebView back navigation
- **Material Design 3** — Light theme with custom colors

## How to Build

```bash
cd malagasy-android
./gradlew assembleRelease --no-daemon
```

## How to Install

The APK is at `app/build/outputs/apk/release/LearnMalagasy.apk`.

Install via ADB:
```bash
adb install app/build/outputs/apk/release/LearnMalagasy.apk
```

Or transfer the APK to your phone and install directly.

## How to Add More Lessons

Edit `app/src/main/assets/www/lessons.js` and append a new object to the `LESSONS` array. The app auto-discovers it on reload.

## License

Content sourced from Peace Corps & academic linguistics resources. Built for 🇲🇬.
