# Tailwind CSS Live Class Tutorial

## Introduction (সূচনা)

এই টিউটোরিয়ালে, আমরা Tailwind CSS এর মূল বিষয়গুলো শিখব। আমরা রেসপন্সিভ ডিজাইন, টাইপোগ্রাফি, স্পেসিং এবং কাস্টম থিম কনফিগারেশন নিয়ে আলোচনা করব। প্রতিটি ধাপ এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি লাইভ ক্লাসে শিক্ষার্থীদের সহজে বোঝাতে পারেন।

(In this tutorial, we will learn the fundamentals of Tailwind CSS. We will discuss responsive design, typography, spacing, and custom theme configuration. Each step is designed to help you easily explain the concepts to your students in a live class.)

---

## 1. Tailwind Fundamentals (Tailwind এর মৌলিক বিষয়)

Tailwind CSS একটি ইউটিলিটি-ফার্স্ট CSS ফ্রেমওয়ার্ক। এর মানে হল, এটি আপনাকে পূর্বনির্ধারিত ছোট ছোট CSS ক্লাস ব্যবহার করে সরাসরি HTML এ স্টাইল করতে দেয়। যেমন `text-lg`, `bg-blue-500`, `p-4` ইত্যাদি।

(Tailwind CSS is a utility-first CSS framework. This means it provides you with pre-defined small CSS classes that you can use directly in your HTML to style elements. For example, `text-lg`, `bg-blue-500`, `p-4`, etc.)

### Example (উদাহরণ):

আসুন একটি বাটন তৈরি করি এবং সেটিকে Tailwind ক্লাস দিয়ে স্টাইল করি।

(Let's create a button and style it using Tailwind classes.)

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

**Explanation (ব্যাখ্যা):**

*   `bg-blue-500`:  বাটনের ಹಿನ್ನೆಲೆ রঙ নীল করে। (Sets the background color of the button to blue.)
*   `hover:bg-blue-700`: মাউস হোভার করলে ಹಿನ್ನೆಲೆ রঙ পরিবর্তন করে গাঢ় নীল করে। (Changes the background color to a darker blue on mouse hover.)
*   `text-white`: টেক্সটের রঙ সাদা করে। (Sets the text color to white.)
*   `font-bold`: টেক্সটকে বোল্ড করে। (Makes the text bold.)
*   `py-2`: উপরে এবং নিচে প্যাডিং যোগ করে (0.5rem)। (Adds padding to the top and bottom - 0.5rem.)
*   `px-4`: ডানে এবং বামে প্যাডিং যোগ করে (1rem)। (Adds padding to the right and left - 1rem.)
*   `rounded`: বাটনের কোণগুলো গোলাকার করে। (Makes the corners of the button rounded.)

**How to use in your project (আপনার প্রজেক্টে কীভাবে ব্যবহার করবেন):**

এই উদাহরণটি সরাসরি আপনার `index.html` ফাইলের `<body>` ট্যাগের মধ্যে অথবা একটি React (`.jsx`) ফাইলের মধ্যে ব্যবহার করতে পারেন।

(You can use this example directly within the `<body>` tag of your `index.html` file or within a React (`.jsx`) file.)

```jsx
// Example in a React component (e.g., src/App.jsx)
function MyButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click Me
    </button>
  );
}
```
---

## 2. Responsive Utilities (রেসপন্সিভ ইউটিলিটি)

Tailwind CSS এ রেসপন্সিভ ডিজাইন করা খুবই সহজ। এটিতে `sm`, `md`, `lg`, `xl`, এবং `2xl` এর মতো ব্রেকপয়েন্ট প্রিফিক্স রয়েছে যা বিভিন্ন স্ক্রিন সাইজে স্টাইল প্রয়োগ করতে সাহায্য করে।

(Responsive design is very easy with Tailwind CSS. It has breakpoint prefixes like `sm`, `md`, `lg`, `xl`, and `2xl` that help apply styles at different screen sizes.)

*   `sm`: 640px এবং এর উপরে (for screens 640px and up)
*   `md`: 768px এবং এর উপরে (for screens 768px and up)
*   `lg`: 1024px এবং এর উপরে (for screens 1024px and up)
*   `xl`: 1280px এবং এর উপরে (for screens 1280px and up)
*   `2xl`: 1536px এবং এর উপরে (for screens 1536px and up)

### Example (উদাহরণ):

```html
<div class="bg-sky-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 p-8 text-white text-center">
  <p class="text-lg font-semibold">
    Resize your browser window to see the background color change.
  </p>
  <p class="mt-2">
    Default: Sky Blue<br>
    sm (640px+): Red<br>
    md (768px+): Green<br>
    lg (1024px+): Yellow<br>
    xl (1280px+): Purple
  </p>
</div>
```
---

## 3. Typography (টাইপোগ্রাফি)

Tailwind CSS টেক্সট স্টাইল করার জন্য অনেকগুলো ইউটিলিটি ক্লাস সরবরাহ করে।

(Tailwind CSS provides many utility classes for styling text.)

### Common Typography Utilities (সাধারণ টাইপোগ্রাফি ইউটিলিটি):
*   **Font Size:** `text-xs`, `text-sm`, `text-base`, `text-lg`, ..., `text-9xl`.
*   **Font Weight:** `font-thin`, ..., `font-normal`, ..., `font-black`.
*   **Text Color:** `text-black`, `text-red-500`, etc. (e.g., `text-blue-100` to `text-blue-900`).
*   **Text Alignment:** `text-left`, `text-center`, `text-right`, `text-justify`.
*   And many more like `leading-`, `tracking-`, `underline`, `italic`.

### Example (উদাহরণ):
```html
<div class="p-6">
  <h1 class="text-4xl font-bold text-purple-700 mb-4">Main Title (প্রধান শিরোনাম)</h1>
  <p class="text-lg text-gray-800 leading-relaxed">
    This is a paragraph. (এটি একটি প্যারাগ্রাফ।)
  </p>
  <a href="#" class="text-red-500 hover:text-red-700 underline">A link</a>
</div>
```
---

## 4. Spacing (Margin and Padding) - স্পেসিং (মার্জিন এবং প্যাডিং)

মার্জিন (`m`) এবং প্যাডিং (`p`) ইউটিলিটি। দিকগুলো: `t`, `b`, `l`, `r`, `x`, `y`. আকার: `0`, `1` (0.25rem), `2` (0.5rem), ..., `px`.

(Margin (`m`) and padding (`p`) utilities. Directions: `t`, `b`, `l`, `r`, `x`, `y`. Sizes: `0`, `1` (0.25rem), `2` (0.5rem), ..., `px`.)

### Example (উদাহরণ):
```html
<div class="p-8 bg-gray-100">
  <div class="bg-blue-500 text-white p-4 mb-4">Padding (p-4), Margin Bottom (mb-4).</div>
  <div class="bg-green-500 text-white px-6 py-3">Horizontal padding (px-6), Vertical padding (py-3).</div>
</div>
```
---

## 5. Configuring Custom Themes (কাস্টম থিম কনফিগারেশন)

`tailwind.config.js` ফাইল ব্যবহার করে ডিফল্ট থিম পরিবর্তন বা প্রসারিত করুন।

(Modify or extend the default theme using the `tailwind.config.js` file.)

### `tailwind.config.js` Example:
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { // Extend the default theme
      colors: {
        'custom-primary': '#A020F0',
        'custom-secondary': '#FFD700',
        'brand-blue': {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
      },
      fontFamily: {
        'custom-sans': ['Roboto', 'sans-serif'],
        'custom-serif': ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        'custom-lg': '40px',
      }
    },
  },
  plugins: [],
}
```
**গুরুত্বপূর্ণ (Important):** কাস্টম ফন্ট ব্যবহার করার জন্য, আপনাকে `index.html` এ Google Fonts লিঙ্ক করতে হবে অথবা `src/index.css` এ ইম্পোর্ট করতে হবে।
(To use custom fonts, you need to link Google Fonts in `index.html` or import them in `src/index.css`.)

```html
<!-- Example of using custom theme values in JSX -->
<div className="p-custom-lg bg-gray-100 dark:bg-gray-700">
  <h1 className="font-custom-sans text-3xl text-custom-primary dark:text-custom-secondary">
    Custom Title
  </h1>
</div>
```
---

## 6. Navbar with Dark Mode Switcher (React Version) - ডার্ক মোড সুইচার সহ নেভিগেশন বার (React ভার্সন)

এখন আমরা React কম্পোনেন্ট ব্যবহার করে একটি নেভিগেশন বার এবং ডার্ক মোড সুইচার তৈরি করব।

(Now we will create a navigation bar and a dark mode switcher using React components.)

### a. `tailwind.config.js` এ ডার্ক মোড:
নিশ্চিত করুন `darkMode: 'class'` সেট করা আছে (উপরের উদাহরণ দেখুন)।
(Ensure `darkMode: 'class'` is set (see example above).)

### b. `src/components/ThemeSwitcher.jsx` তৈরি করুন:
এই কম্পোনেন্টটি থিম টগল করার বাটনটি দেখাবে।
(This component will display the theme toggle button.)

```jsx
// src/components/ThemeSwitcher.jsx
import React from 'react';

// eslint-disable-next-line react/prop-types
function ThemeSwitcher({ isDarkMode, toggleTheme }) {
  return (
    <button
      type="button"
      title="Toggle theme"
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
    >
      {isDarkMode ? (
        // Sun Icon: Indicates current mode is Dark, click to switch to Light
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      ) : (
        // Moon Icon: Indicates current mode is Light, click to switch to Dark
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeSwitcher;
```

### c. `src/components/Navbar.jsx` তৈরি করুন:
এই কম্পোনেন্টটি নেভিগেশন বার তৈরি করবে এবং `ThemeSwitcher` ব্যবহার করবে।
(This component will create the navigation bar and use `ThemeSwitcher`.)

```jsx
// src/components/Navbar.jsx
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

// eslint-disable-next-line react/prop-types
function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white font-custom-serif">
          MySite (আমার সাইট)
        </div>
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

export default Navbar;
```

### d. `src/App.jsx` আপডেট করুন:
`App` কম্পোনেন্ট থিম স্টেট পরিচালনা করবে এবং `Navbar` রেন্ডার করবে।
(The `App` component will manage the theme state and render the `Navbar`.)

```jsx
// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
// import './App.css'; // If you have App-specific non-Tailwind styles

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage or system preference
    const storedTheme = localStorage.getItem('color-theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to <html> tag and update localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-custom-primary dark:text-custom-secondary mb-6 font-custom-serif">
          React Dark Mode Demo! (React ডার্ক মোড ডেমো!)
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          This page now uses React components for the navbar and theme switching.
          (এই পৃষ্ঠাটি এখন নেভিগেশন বার এবং থিম পরিবর্তনের জন্য React কম্পোনেন্ট ব্যবহার করে।)
        </p>
        {/* Add more content here to see the theme effects */}
      </div>
    </div>
  );
}

export default App;
```

### e. `index.html` এ প্রাথমিক থিম সেটআপ:
FOUC (Flash Of Unstyled Content) এড়াতে `<head>` এ একটি ছোট স্ক্রিপ্ট রাখুন।
(Place a small script in `<head>` to avoid FOUC.)
```html
<!-- index.html -->
<head>
  <!-- ... other head elements ... -->
  <script>
    if (localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>
<body class="font-custom-sans"> <!-- Base font, bg/text colors handled by CSS/JS -->
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

### f. `src/index.css` এ ট্রানজিশন:
মসৃণ থিম পরিবর্তনের জন্য ট্রানজিশন যোগ করুন।
(Add transitions for smooth theme changes.)
```css
/* src/index.css */
/* ... (font imports if any) ... */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@layer base {
  body {
    @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100;
    @apply transition-colors duration-300 ease-in-out;
    /* Apply a base font family if desired, e.g., @apply font-custom-sans; */
  }
}
```

**How to use (কিভাবে ব্যবহার করবেন):**
1.  উপরে দেখানো ফাইলগুলো তৈরি এবং আপডেট করুন। (Create and update the files as shown above.)
2.  প্রয়োজনে আপনার `src/main.jsx` ফাইলটি `App` কম্পোনেন্ট রেন্ডার করছে কিনা নিশ্চিত করুন। (Ensure your `src/main.jsx` renders the `App` component if needed.)
3.  আপনার ডেভেলপমেন্ট সার্ভার (`npm run dev`) চালান। (Run your development server: `npm run dev`.)

---

This completes the tutorial for implementing a dark mode switcher in a React application using Tailwind CSS.
(Tailwind CSS ব্যবহার করে একটি React অ্যাপ্লিকেশনে ডার্ক মোড সুইচার বাস্তবায়নের টিউটোরিয়াল এখানেই শেষ হলো।)
