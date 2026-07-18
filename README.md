# 🇲🇬 Learn Malagasy

A mobile learning app for **Malagasy** — the national language of Madagascar — built as a native Android app wrapping an offline web app. It features flashcards, vocabulary lists, grammar explanations, and quizzes across 20 curated lessons, all available offline with no server dependency.

*Content sourced from Peace Corps language materials and academic linguistics resources.*

---

## ✨ Features

### Learning Content
- **20 curated lessons** across 4 categories: Basics, Conversation, Vocabulary, and Grammar
- **172 flashcards** with tap-to-flip interaction
- **554 vocabulary entries** with translations
- **401 quiz questions** with instant feedback and scoring
- **Grammar lessons** rendered as readable text pages (not flashcards) — covering VOS word order, verb conjugation, pronoun tables, and more
- **Instant search** — search across all vocabulary by Malagasy, English, or German

### Multilingual Support
The app supports **three interface languages** with full content translation:
- 🇬🇧 English
- 🇩🇪 German
- 🇫🇷 French *(data layer complete, UI toggle EN/DE active)*

Every content layer has parallel fields per language:

| Layer | English | German | French |
|-------|---------|--------|--------|
| Flashcards | `front` | `front_de` | `front_fr` |
| Vocabulary | `english` | `german` | `french` |
| Quiz questions | `question` | `question_de` | `question_fr` |
| Quiz options | `options` | `options_de` | `options_fr` |
| UI strings | `STRINGS.en` | `STRINGS.de` | `STRINGS.fr` |

### Native Android Experience
- **Swipe-to-go-back** — edge swipe (Android predictive back gesture) navigates back through the app instead of closing it
- **Offline-first** — all content bundled in the APK, no internet connection needed
- **Fullscreen immersive** mode with status bar hidden
- **Vector flag icon** — Madagascar flag rendered as resolution-independent XML drawable
- **Progress bar** on page load

---

## 🏗️ Architecture

### Hybrid WebView Approach

The app uses a **hybrid architecture**: a native Android shell (`WebView`) wrapping a self-contained web app (HTML/CSS/JS). This gives the best of both worlds — native APK distribution and fullscreen experience, with the rapid development cycle of web technologies.

```
malagasy-kotlin/          ← Native Android shell (Kotlin)
  app/src/main/
    java/com/jonas/malagasy/
      MainActivity.kt    ← WebView setup, back gesture handling
    assets/web/           ← Bundled web app (copied from app/)
      index.html
      app.js
      lessons.js
      quizzes.js
      style.css
    res/drawable/         ← Vector flag icon, progress drawable

app/                      ← Web app source-of-truth
  index.html
  app.js
  lessons.js
  style.css
```

### Source-of-Truth Rule

The `app/` directory is the **canonical source** for all web files. The `malagasy-kotlin/app/src/main/assets/web/` directory is a build copy. Changes are always made in `app/` first, then copied to the build directory:

```bash
cp app/* malagasy-kotlin/app/src/main/assets/web/
```

### Native Back Gesture Handling

A key technical challenge: the web app is a **single-page app** — the WebView URL never changes, so `WebView.canGoBack()` always returns `false`. Without intervention, Android's back gesture (edge swipe on Android 13+) would immediately close the app.

**Solution:** A `BackBridge` is exposed to JavaScript via `@JavascriptInterface`, tracking in-page navigation depth:

- The JS layer maintains a **stack of close handlers** (`backStack`): each overlay (lesson view, search sheet) pushes its closer function when opened and pops it when closed.
- The native `OnBackPressedDispatcher` callback (which intercepts both hardware back AND the predictive back swipe) checks `navDepth > 0`:
  - If yes → calls `window.__appBack()` in JS, which invokes the top close handler
  - If no → honors system back (exits the app)

This makes the edge swipe feel native: swipe back in a lesson → returns to the list; swipe back in search → closes search; swipe back on the home list → exits.

### Touch Event Handling in WebView

Android WebView does **not** fire synthetic `click` events on non-interactive elements (`<div>`, `<span>`). Only `<button>`, `<a>`, and `<input>` get native clicks.

To make tappable flashcards and lesson cards work reliably, the app uses a per-element `addTapHandler()` helper that tracks `touchstart` / `touchmove` / `touchend` with a movement threshold to distinguish taps from scrolls. Native `<button>` elements use standard `click` listeners.

### Data Architecture

Lesson data lives in two files:

- **`lessons.js`** — lesson metadata, flashcards (`cards`), and vocabulary (`vocab`)
- **`quizzes.js`** — all quiz questions in a separate `QUIZZES` dictionary keyed by lesson ID

Quizzes were split into a separate file to avoid bracket-depth parsing issues when programmatically generating questions — the nested `options` arrays made injection into `lessons.js` fragile. The split keeps each concern in its own file and makes future edits trivial.

### Language Switching

The UI language toggle cycles between English and German (French data is in place). Every render function checks `currentLanguage` and selects the appropriate parallel field, falling back to English if a translation is missing.

UI strings (buttons, labels, feedback messages) are stored in a `STRINGS` dictionary and accessed via a `t(key)` helper — keeping content translation and UI string translation as separate concerns.

---

## 📱 Building

### Prerequisites
- Android SDK (compileSdk 35)
- Java 17
- Gradle 8.10+

### Build the APK

```bash
cd malagasy-kotlin
JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64 gradle assembleDebug
```

The debug APK is self-signed with the default Android debug keystore and works on any device with developer options enabled:

```
app/build/outputs/apk/debug/app-debug.apk
```

### SDK Configuration

| Setting | Value |
|---------|-------|
| `compileSdk` | 35 |
| `minSdk` | 24 (Android 7.0) |
| `targetSdk` | 35 (Android 15) |

---

## 🎨 Design

- **Typography:** Nunito (headings) + Noto Sans (body) via Google Fonts
- **Color palette:** warm off-white background (`#FAF9F6`) with category-coded accents
- **Flashcard flip:** CSS 3D transform (`rotateY`) with smooth transition
- **Progress bars:** for both card navigation and quiz progress
- **Responsive:** optimized for phone screens, touch-first layout

---

## 📂 Project Structure

```
learn_malagasy/
├── app/                          # Web app (source of truth)
│   ├── index.html                # App shell & layout
│   ├── app.js                    # All app logic (680 lines)
│   ├── lessons.js                # Lesson data, cards & vocab (1187 lines)
│   └── style.css                 # Full styling (720 lines)
├── malagasy-kotlin/              # Native Android wrapper
│   ├── app/
│   │   ├── build.gradle.kts      # SDK & version config
│   │   └── src/main/
│   │       ├── java/com/jonas/malagasy/
│   │       │   └── MainActivity.kt
│   │       ├── assets/web/        # Build copy of app/
│   │       ├── res/drawable/      # Vector flag icon
│   │       └── AndroidManifest.xml
│   ├── build.gradle.kts
│   └── settings.gradle.kts
└── .gitignore
```

---

## 🔧 Technical Details

| Aspect | Implementation |
|--------|---------------|
| Platform | Android (WebView wrapper) |
| Languages | Kotlin (native shell), HTML/CSS/JS (app) |
| Min Android | 7.0 (API 24) |
| Target Android | 15 (API 35) |
| Offline | ✅ Fully offline — no network calls |
| Dependencies | AndroidX AppCompat, Material, ConstraintLayout |
| App size | ~5.8 MB |

---

## 📜 License

Personal learning project. Content sourced from Peace Corps Malagasy language materials and public academic linguistics resources.

---

*Built for 🇲🇬 — *Tsara be, Mpiara-miasa!* (Great to work with you!)*