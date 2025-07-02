import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css'; // App-specific styles if any, Tailwind is handled globally

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to initialize theme and update <html> class + localStorage
  useEffect(() => {
    // Check localStorage first when component mounts
    const storedTheme = localStorage.getItem('color-theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      // If no theme in localStorage, check system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Effect to apply changes when isDarkMode state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDarkMode]); // Re-run this effect when isDarkMode changes

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    // The body's base colors are set in index.css and via the <head> script for FOUC prevention.
    // App div can remain simple or have its own layout classes.
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main content area - moved from index.html */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-custom-primary dark:text-custom-secondary mb-6 font-custom-serif">
          Welcome to Tailwind CSS Tutorial! (Tailwind CSS টিউটোরিয়ালে স্বাগতম!)
        </h1>

        <p className="mb-4 text-lg leading-relaxed">
          This page demonstrates the concepts covered in the <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded text-sm">tailwind_tutorial.md</code> file, now running in a React app.
          এই পৃষ্ঠাটি <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded text-sm">tailwind_tutorial.md</code> ফাইলে কভার করা ধারণাগুলি প্রদর্শন করে, এখন এটি একটি React অ্যাপে চলছে।
        </p>
        <p className="mb-4">
          Try toggling the dark mode switch in the navbar to see the theme change!
          থিম পরিবর্তন দেখতে নেভিগেশন বারে ডার্ক মোড সুইচ টগল করার চেষ্টা করুন!
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-custom-primary text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 font-custom-serif">Light Mode Card</h2>
            <p className="font-custom-sans">This card uses the 'custom-primary' background. In dark mode, it will remain the same unless overridden with dark: variants.</p>
            <p className="font-custom-sans mt-2">এই কার্ডটি 'custom-primary' ಹಿನ್ನೆಲೆ ব্যবহার করে। ডার্ক মোডে, এটি একই থাকবে যদি না dark: ভেরিয়েন্ট দিয়ে ওভাররাইড করা হয়।</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white font-custom-serif">Adaptive Card</h2>
            <p className="font-custom-sans">This card changes its background and text color in dark mode.</p>
            <p className="font-custom-sans mt-2">এই কার্ডটি ডার্ক মোডে তার ಹಿನ್ನೆಲೆ এবং টেক্সট রঙ পরিবর্তন করে।</p>
          </div>
        </div>

        <div className="p-custom-lg bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl mt-8">
          <h2 className="font-custom-sans text-3xl text-custom-primary dark:text-custom-secondary mb-4">
            Custom Themed Section (কাস্টম থিমযুক্ত বিভাগ)
          </h2>
          <p className="font-custom-serif text-lg text-brand-blue-dark dark:text-brand-blue-light mb-6">
            This paragraph uses our custom serif font and a shade of our custom brand blue color, adapting for dark mode.
            (এই প্যারাগ্রাফটি আমাদের কাস্টম সেরিফ ফন্ট এবং আমাদের কাস্টম ব্র্যান্ড ব্লু রঙের একটি শেড ব্যবহার করে, যা ডার্ক মোডের জন্য অভিযোজিত।)
          </p>
          <button className="bg-custom-secondary hover:bg-yellow-400 text-gray-900 font-custom-sans font-semibold py-3 px-6 rounded-lg shadow-md">
            Custom Secondary Button
          </button>
          <div className="mt-128 bg-brand-blue dark:bg-opacity-50 p-4 text-white rounded">
            This box has a margin-top of 32rem (mt-128) and uses the default brand-blue (with opacity in dark mode).
            (এই বক্সটির উপরে 32rem মার্জিন (mt-128) রয়েছে এবং এটি ডিফল্ট ব্র্যান্ড-ব্লু রঙ ব্যবহার করে (ডার্ক মোডে অপাসিটি সহ)।)
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
