# React Components with Tailwind CSS: Buttons, Cards, Layouts, and Dark Mode

## সূচনা (Introduction)

এই টিউটোরিয়ালে, আমরা React এবং Tailwind CSS ব্যবহার করে কিছু সাধারণ UI কম্পোনেন্ট তৈরি করব। আমাদের মূল ফোকাস থাকবে ইন্টারেক্টিভিটি (যেমন hover/focus অবস্থা) এবং থিমিং (যেমন ডার্ক/লাইট মোড) এর উপর। প্রতিটি কম্পোনেন্টের জন্য আমরা React (`.jsx`) কোড এবং Tailwind CSS ক্লাস দেখব।

(In this tutorial, we will build some common UI components using React and Tailwind CSS. Our main focus will be on interactivity (like hover/focus states) and theming (like dark/light mode). For each component, we will see React (`.jsx`) code and Tailwind CSS classes.)

---

## 1. Buttons (বাটন)

বাটন একটি অপরিহার্য UI এলিমেন্ট। আমরা একটি পুনঃব্যবহারযোগ্য (reusable) `Button` কম্পোনেন্ট তৈরি করব যা বিভিন্ন স্টাইল এবং অবস্থা (states) সমর্থন করবে।

(Buttons are essential UI elements. We will create a reusable `Button` component that supports various styles and states.)

### Basic Button Component (বেসিক বাটন কম্পোনেন্ট)

প্রথমে, একটি সাধারণ বাটন কম্পোনেন্ট তৈরি করি।
(First, let's create a simple button component.)

```jsx
// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', disabled = false, className = '' }) => {
  // Base styles for all buttons
  const baseStyles = 'font-semibold rounded focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-150';

  // Styles for different variants
  const variantStyles = {
    primary: `bg-custom-primary hover:bg-purple-700 text-white focus:ring-purple-500`,
    secondary: `bg-custom-secondary hover:bg-yellow-500 text-gray-900 focus:ring-yellow-400`,
    outline: `bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-custom-primary dark:text-custom-secondary border border-custom-primary dark:border-custom-secondary focus:ring-custom-primary`,
    danger: `bg-red-600 hover:bg-red-700 text-white focus:ring-red-500`,
  };

  // Styles for different sizes
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // Styles for disabled state
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? disabledStyles : ''}
        ${className} // Allow custom classes to be passed
      `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
```

**Explanation (ব্যাখ্যা):**

*   **Props (প্রপস):**
    *   `children`: বাটনের ভিতরে যা কিছু দেখানো হবে (যেমন টেক্সট, আইকন)। (Content to be displayed inside the button, e.g., text, icon).
    *   `onClick`: বাটনে ক্লিক করলে যে ফাংশন কল হবে। (Function to be called when the button is clicked).
    *   `type`: বাটনের HTML `type` অ্যাট্রিবিউট (`button`, `submit`, `reset`)। (HTML `type` attribute of the button).
    *   `variant`: বাটনের স্টাইল (`primary`, `secondary`, `outline`, `danger`)। (Style of the button).
    *   `size`: বাটনের আকার (`sm`, `md`, `lg`)। (Size of the button).
    *   `disabled`: বাটনটি নিষ্ক্রিয় কিনা। (Whether the button is disabled).
    *   `className`: অতিরিক্ত কাস্টম CSS ক্লাস যোগ করার জন্য। (For adding extra custom CSS classes).
*   **`baseStyles`**: সব বাটনের জন্য প্রযোজ্য মৌলিক Tailwind ক্লাস (ফন্ট, গোলাকার কোণ, ফোকাস স্টাইল)। (Basic Tailwind classes applicable to all buttons - font, rounded corners, focus styles).
*   **`variantStyles`**: বিভিন্ন `variant` এর জন্য নির্দিষ্ট ক্লাস (যেমন `primary` এর জন্য `bg-custom-primary`)। (Specific classes for different `variant`s, e.g., `bg-custom-primary` for `primary`). *Note: `custom-primary` and `custom-secondary` are assumed to be defined in your `tailwind.config.js`.*
*   **`sizeStyles`**: বিভিন্ন `size` এর জন্য প্যাডিং এবং টেক্সটের আকার। (Padding and text size for different `size`s).
*   **`disabledStyles`**: `disabled` অবস্থায় বাটনের স্টাইল (স্বচ্ছতা কমানো, কার্সার পরিবর্তন)। (Styles for the button in `disabled` state - reduced opacity, cursor change).
*   **`className`**: টেমপ্লেট লিটারাল ব্যবহার করে সব ক্লাস একত্রিত করা হয়েছে। (All classes are combined using template literals).

**Hover and Focus States (হোভার এবং ফোকাস অবস্থা):**

Tailwind এ `hover:` এবং `focus:` প্রিফিক্স ব্যবহার করে এই অবস্থাগুলো সহজেই নিয়ন্ত্রণ করা যায়। উপরের উদাহরণে `variantStyles` এর মধ্যে `hover:bg-purple-700` এবং `focus:ring-purple-500` এর মতো ক্লাস ব্যবহার করা হয়েছে।

*   `hover:bg-purple-700`: মাউস হোভার করলে ಹಿನ್ನೆಲೆ রঙ পরিবর্তন করে। (Changes background color on mouse hover).
*   `focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75`: বাটন ফোকাসড হলে একটি রিং আউটলাইন দেখায়। (Shows a ring outline when the button is focused).

**Using the Button Component (বাটন কম্পোনেন্ট ব্যবহার করা):**

```jsx
// In another component, e.g., App.jsx
import React from 'react';
import Button from './components/Button'; // Adjust path as needed

function MyPage() {
  const handlePrimaryClick = () => {
    alert('Primary Button Clicked!');
  };

  return (
    <div className="p-8 space-y-4 flex flex-col items-start">
      <Button onClick={handlePrimaryClick}>Primary Button</Button>
      <Button variant="secondary" size="lg">Secondary Large</Button>
      <Button variant="outline" size="sm">Outline Small</Button>
      <Button variant="danger" disabled>Disabled Danger</Button>
      <Button className="mt-4 bg-teal-500 hover:bg-teal-600">Custom Class Button</Button>
    </div>
  );
}

export default MyPage;
```

এই `Button` কম্পোনেন্টটি এখন আপনার অ্যাপ্লিকেশনের বিভিন্ন জায়গায় পুনঃব্যবহার করা যাবে, যা কোডকে আরও পরিচ্ছন্ন এবং পরিচালনাযোগ্য করে তুলবে।

(This `Button` component can now be reused in various places in your application, making the code cleaner and more manageable.)

---

## 2. Cards (কার্ড)

কার্ড একটি খুবই সাধারণ UI প্যাটার্ন যা কন্টেন্টকে একটি সুসংহত গ্রুপে প্রদর্শন করতে ব্যবহৃত হয়। আমরা একটি নমনীয় (flexible) `Card` কম্পোনেন্ট তৈরি করব।

(Cards are a very common UI pattern used to display content in an organized group. We will create a flexible `Card` component.)

### Basic Card Component (বেসিক কার্ড কম্পোনেন্ট)

```jsx
// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, imageUrl, imageAlt = 'Card image', children, footerContent, className = '', titleClassName = '', contentClassName = '', footerClassName = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden ${className}`}>
      {imageUrl && (
        <img
          className="w-full h-48 object-cover" // Adjust height as needed
          src={imageUrl}
          alt={imageAlt}
        />
      )}
      <div className={`p-6 ${contentClassName}`}>
        {title && (
          <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 font-custom-serif ${titleClassName}`}>
            {title}
          </h3>
        )}
        <div className="text-gray-700 dark:text-gray-300 text-base">
          {children}
        </div>
      </div>
      {footerContent && (
        <div className={`p-6 border-t border-gray-200 dark:border-gray-700 ${footerClassName}`}>
          {footerContent}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node.isRequired, // Main content of the card
  footerContent: PropTypes.node,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  footerClassName: PropTypes.string,
};

export default Card;
```

**Explanation (ব্যাখ্যা):**

*   **Props (প্রপস):**
    *   `title`: কার্ডের শিরোনাম। (Title of the card).
    *   `imageUrl`: কার্ডের উপরে দেখানোর জন্য ছবির URL। (URL of the image to display at the top of the card).
    *   `imageAlt`: ছবির `alt` টেক্সট। (Alt text for the image).
    *   `children`: কার্ডের প্রধান কন্টেন্ট। এটি JSX হতে পারে। (Main content of the card. This can be JSX).
    *   `footerContent`: কার্ডের ফুটারে দেখানোর জন্য কন্টেন্ট। (Content to display in the footer of the card).
    *   `className`, `titleClassName`, `contentClassName`, `footerClassName`: কার্ড এবং এর অংশগুলোর জন্য অতিরিক্ত কাস্টম CSS ক্লাস। (Additional custom CSS classes for the card and its parts).
*   **Structure (কাঠামো):**
    *   একটি প্রধান `div` যা কার্ডের ধারক (container) হিসেবে কাজ করে। এতে `bg-white dark:bg-gray-800`, `shadow-lg`, `rounded-lg`, `overflow-hidden` ক্লাস ব্যবহার করা হয়েছে।
        *   (A main `div` acts as the card's container. It uses classes like `bg-white dark:bg-gray-800`, `shadow-lg`, `rounded-lg`, `overflow-hidden`).
    *   যদি `imageUrl` থাকে, তাহলে একটি `<img>` ট্যাগ দেখানো হয়। `w-full h-48 object-cover` ক্লাসগুলো ছবিকে সম্পূর্ণ প্রস্থে এবং নির্দিষ্ট উচ্চতায় ফিট করে।
        *   (If `imageUrl` is provided, an `<img>` tag is shown. The classes `w-full h-48 object-cover` make the image fit the full width and a specific height).
    *   `p-6` ক্লাস কন্টেন্ট এবং ফুটারের চারপাশে প্যাডিং যোগ করে।
        *   (The `p-6` class adds padding around the content and footer).
    *   শিরোনামের জন্য `font-custom-serif` (যদি `tailwind.config.js` এ ডিফাইন করা থাকে) ব্যবহার করা হয়েছে।
        *   (`font-custom-serif` (if defined in `tailwind.config.js`) is used for the title).
    *   ফুটার কন্টেন্ট থাকলে, একটি বর্ডার (`border-t`) দিয়ে সেটিকে আলাদা করা হয়।
        *   (If footer content exists, it is separated by a border (`border-t`)).

**Using the Card Component (কার্ড কম্পোনেন্ট ব্যবহার করা):**

```jsx
// In another component, e.g., App.jsx
import React from 'react';
import Card from './components/Card'; // Adjust path
import Button from './components/Button'; // Assuming you have Button component

function MyPageWithCards() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Amazing Destination"
          imageUrl="https://via.placeholder.com/400x250/A020F0/FFFFFF?text=Journey" // Placeholder image
          imageAlt="Mountain landscape"
          footerContent={<Button variant="primary" size="sm">Learn More</Button>}
        >
          <p>Discover breathtaking views and unforgettable experiences. Perfect for your next adventure!</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Posted 2 days ago</p>
        </Card>

        <Card title="Project Alpha">
          <p>This project focuses on developing next-generation AI solutions. We are pushing the boundaries of technology.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Research Phase</li>
            <li>Development Cycle</li>
            <li>Testing & Deployment</li>
          </ul>
        </Card>

        <Card
          className="bg-custom-secondary dark:bg-yellow-700" // Custom card background
          titleClassName="text-gray-900 dark:text-white"
          footerContent={
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-200">Status: Active</span>
              <Button variant="outline" size="sm" className="border-gray-700 dark:border-gray-200 text-gray-700 dark:text-gray-200 hover:bg-gray-600 hover:text-white">View Details</Button>
            </div>
          }
        >
          <p className="text-gray-800 dark:text-gray-100">A card with custom background and more complex footer.</p>
        </Card>
      </div>
    </div>
  );
}

export default MyPageWithCards;
```

এই `Card` কম্পোনেন্টটি বিভিন্ন ধরনের কন্টেন্ট প্রদর্শনের জন্য খুবই উপযোগী। আপনি এটিকে প্রয়োজন অনুযায়ী আরও কাস্টমাইজ করতে পারেন।

(This `Card` component is very useful for displaying various types of content. You can customize it further as needed.)

---

## 3. Layout Grids (লেআউট গ্রিড)

Tailwind CSS শক্তিশালী গ্রিড ইউটিলিটি সরবরাহ করে যা জটিল (complex) লেআউট তৈরি করা সহজ করে তোলে। React কম্পোনেন্টের মধ্যে এই ইউটিলিটিগুলো ব্যবহার করে আমরা রেসপন্সিভ গ্রিড তৈরি করতে পারি।

(Tailwind CSS provides powerful grid utilities that make it easy to create complex layouts. We can create responsive grids using these utilities within React components.)

### Key Tailwind Grid Utilities (গুরুত্বপূর্ণ Tailwind গ্রিড ইউটিলিটি):

*   `grid`: একটি এলিমেন্টকে গ্রিড কন্টেইনার হিসেবে সেট করে। (Sets an element as a grid container).
*   `grid-cols-{number}`: গ্রিডে কলামের সংখ্যা নির্ধারণ করে (e.g., `grid-cols-3` তিনটি কলাম তৈরি করে)। (Defines the number of columns in the grid, e.g., `grid-cols-3` creates three columns).
*   `grid-rows-{number}`: গ্রিডে সারির সংখ্যা নির্ধারণ করে। (Defines the number of rows in the grid).
*   `gap-{size}`: গ্রিড আইটেমগুলোর মধ্যে ফাঁক (gap) নির্ধারণ করে (e.g., `gap-4` মানে `1rem` ফাঁক)। (Defines the gap between grid items, e.g., `gap-4` means `1rem` gap).
*   `gap-x-{size}`, `gap-y-{size}`: যথাক্রমে অনুভূমিক (horizontal) এবং উল্লম্ব (vertical) ফাঁক নির্ধারণ করে। (Defines horizontal and vertical gaps respectively).
*   `col-span-{number}`: একটি আইটেম কতগুলো কলাম জুড়ে বিস্তৃত হবে তা নির্ধারণ করে। (Defines how many columns an item will span).
*   `row-span-{number}`: একটি আইটেম কতগুলো সারি জুড়ে বিস্তৃত হবে তা নির্ধারণ করে। (Defines how many rows an item will span).
*   **Responsive Prefixes (রেসপন্সিভ প্রিফিক্স):** `sm:`, `md:`, `lg:`, `xl:`, `2xl:` এই প্রিফিক্সগুলো ব্যবহার করে বিভিন্ন স্ক্রিন সাইজে গ্রিডের আচরণ পরিবর্তন করা যায় (e.g., `md:grid-cols-4` মানে মাঝারি স্ক্রিনে চারটি কলাম)।
    *   (These prefixes can be used to change grid behavior on different screen sizes, e.g., `md:grid-cols-4` means four columns on medium screens).

### Example: Grid of Cards (কার্ডের গ্রিড উদাহরণ)

আমরা আগের ধাপে তৈরি করা `Card` কম্পোনেন্ট ব্যবহার করে একটি রেসপন্সিভ গ্রিড তৈরি করব।

(We will use the `Card` component created in the previous step to build a responsive grid.)

```jsx
// src/components/ItemsGrid.jsx
import React from 'react';
import Card from './Card'; // Assuming Card component is in the same directory or adjust path
import Button from './Button'; // Assuming Button component

const itemsData = [
  {
    id: 1,
    title: 'Nature Retreat',
    imageUrl: 'https://via.placeholder.com/400x250/22C55E/FFFFFF?text=Nature',
    description: 'Experience the tranquility of nature.',
    footer: <Button variant="primary" size="sm">Explore</Button>
  },
  {
    id: 2,
    title: 'City Adventures',
    imageUrl: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=City',
    description: 'Discover vibrant city life and culture.',
    footer: <Button variant="secondary" size="sm">Discover</Button>
  },
  {
    id: 3,
    title: 'Tech Innovations',
    imageUrl: 'https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Tech',
    description: 'Latest advancements in technology.',
    footer: <Button variant="outline" size="sm">Learn More</Button>
  },
  {
    id: 4,
    title: 'Culinary Delights',
    imageUrl: 'https://via.placeholder.com/400x250/F97316/FFFFFF?text=Food',
    description: 'Savor exquisite flavors from around the world.',
    footer: <Button variant="danger" size="sm">Taste Now</Button>
  },
  // Add more items as needed
];

const ItemsGrid = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Our Features (আমাদের বৈশিষ্ট্য)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {itemsData.map(item => (
          <Card
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            footerContent={item.footer}
          >
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
```

**Explanation (ব্যাখ্যা):**

*   **`itemsData`**: এটি একটি ডেমো ডেটা অ্যারে যা কার্ডগুলোতে প্রদর্শিত হবে। (This is a demo data array that will be displayed in the cards).
*   **Outer `div`**: `p-4 md:p-8` - বিভিন্ন স্ক্রিন সাইজে প্যাডিং। `bg-gray-100 dark:bg-gray-900` - থিমের উপর ভিত্তি করে ಹಿನ್ನೆಲೆ রঙ।
    *   (Padding for different screen sizes. Background color based on the theme).
*   **Grid Container `div`**:
    *   `grid`: এটিকে গ্রিড কন্টেইনার হিসেবে সেট করে। (Sets this as a grid container).
    *   `grid-cols-1`: ডিফল্টরূপে (ছোট স্ক্রিনে) একটি কলাম। (One column by default on small screens).
    *   `sm:grid-cols-2`: ছোট স্ক্রিন (`640px`+) থেকে দুটি কলাম। (Two columns from small screens (`640px+`)).
    *   `lg:grid-cols-3`: বড় স্ক্রিন (`1024px`+) থেকে তিনটি কলাম। (Three columns from large screens (`1024px+`)).
    *   `xl:grid-cols-4`: অতিরিক্ত বড় স্ক্রিন (`1280px`+) থেকে চারটি কলাম। (Four columns from extra-large screens (`1280px+`)).
    *   `gap-6 md:gap-8`: গ্রিড আইটেমগুলোর মধ্যে ফাঁক। ছোট স্ক্রিনে `1.5rem` (`gap-6`), মাঝারি স্ক্রিন থেকে `2rem` (`md:gap-8`)।
        *   (Gap between grid items. `1.5rem` on small screens (`gap-6`), `2rem` from medium screens (`md:gap-8`)).
*   **`.map()` function**: `itemsData` অ্যারের প্রতিটি আইটেমের জন্য একটি `Card` কম্পোনেন্ট রেন্ডার করে।
    *   (Renders a `Card` component for each item in the `itemsData` array).

**Using the Grid Component (গ্রিড কম্পোনেন্ট ব্যবহার করা):**

```jsx
// In App.jsx or any other page component
import React from 'react';
import ItemsGrid from './components/ItemsGrid'; // Adjust path

function App() {
  // ... (theme logic from previous examples)
  return (
    // ... (Navbar and other layout)
    <main>
      <ItemsGrid />
    </main>
    // ...
  );
}
```

এই উদাহরণটি দেখায় কিভাবে Tailwind CSS এর গ্রিড সিস্টেম ব্যবহার করে React এ সহজে রেসপন্সিভ এবং ডাইনামিক লেআউট তৈরি করা যায়।

(This example demonstrates how to easily create responsive and dynamic layouts in React using Tailwind CSS's grid system.)

---

## 4. Hover and Focus States (হোভার এবং ফোকাস অবস্থা)

ইন্টারেক্টিভ UI তৈরির জন্য hover এবং focus অবস্থা খুবই গুরুত্বপূর্ণ। Tailwind CSS এ `hover:` এবং `focus:` প্রিফিক্স ব্যবহার করে সহজেই এই অবস্থাগুলোর জন্য স্টাইল ডিফাইন করা যায়। আমরা পূর্ববর্তী বাটন এবং কার্ড কম্পোনেন্টগুলোতে এর কিছু উদাহরণ দেখেছি।

(Hover and focus states are very important for creating interactive UIs. In Tailwind CSS, styles for these states can be easily defined using the `hover:` and `focus:` prefixes. We have already seen some examples in the previous Button and Card components.)

### Recap and Deeper Dive (পুনরালোচনা এবং বিস্তারিত):

*   **`hover:`**: যখন ব্যবহারকারী মাউস পয়েন্টার কোনো এলিমেন্টের উপর নিয়ে যান, তখন এই প্রিফিক্সযুক্ত ক্লাসগুলো সক্রিয় হয়।
    *   (Classes with this prefix become active when the user moves the mouse pointer over an element.)
    *   **Example (উদাহরণ):** `hover:bg-blue-700` (হোভার করলে ಹಿನ್ನೆಲೆ নীল-৭০০ হবে), `hover:shadow-xl` (হোভার করলে শ্যাডো বড় হবে), `hover:scale-105` (হোভার করলে এলিমেন্টটি ১০৫% বড় হবে)।
        *   (On hover, background becomes blue-700; shadow becomes extra large; element scales to 105%).

*   **`focus:`**: যখন কোনো এলিমেন্ট ফোকাসড হয় (যেমন, কীবোর্ড দিয়ে নেভিগেট করে অথবা ক্লিক করে), তখন এই প্রিফিক্সযুক্ত ক্লাসগুলো সক্রিয় হয়। এটি মূলত ইনপুট ফিল্ড, বাটন, এবং লিংকের জন্য গুরুত্বপূর্ণ।
    *   (Classes with this prefix become active when an element is focused, e.g., by keyboard navigation or clicking. This is mainly important for input fields, buttons, and links.)
    *   **Example (উদাহরণ):** `focus:ring-2 focus:ring-blue-500` (ফোকাস করলে একটি নীল রিং দেখাবে), `focus:border-green-500` (ফোকাস করলে বর্ডার সবুজ হবে)।
        *   (On focus, a blue ring will be shown; border becomes green-500).

*   **`active:`**: যখন কোনো এলিমেন্ট সক্রিয় করা হয় (যেমন, বাটনে ক্লিক করে ধরে রাখলে), তখন এই প্রিফিক্সযুক্ত ক্লাসগুলো সক্রিয় হয়।
    *   (Classes with this prefix become active when an element is activated, e.g., clicking and holding a button).
    *   **Example (উদাহরণ):** `active:bg-blue-800` (সক্রিয় অবস্থায় ಹಿನ್ನೆಲೆ নীল-৮০০ হবে), `active:scale-95` (সক্রিয় অবস্থায় এলিমেন্টটি ৯৫% ছোট হবে)।
        *   (On active, background becomes blue-800; element scales to 95%).

### Example in a React Component (React কম্পোনেন্টে উদাহরণ):

আসুন একটি ইনপুট ফিল্ড এবং একটি লিংকের জন্য hover এবং focus স্টাইল দেখি।

(Let's look at hover and focus styles for an input field and a link.)

```jsx
// src/components/InteractiveElements.jsx
import React from 'react';

const InteractiveElements = () => {
  return (
    <div className="p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div>
        <label
          htmlFor="nameInput"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Name (নাম):
        </label>
        <input
          type="text"
          id="nameInput"
          placeholder="Enter your name"
          className="
            w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
            text-gray-900 dark:text-white bg-white dark:bg-gray-700
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-custom-primary dark:focus:ring-custom-secondary
            focus:border-transparent
            hover:border-gray-400 dark:hover:border-gray-500
            transition-all duration-150 ease-in-out
          "
        />
      </div>

      <div>
        <a
          href="#"
          className="
            text-custom-primary dark:text-custom-secondary font-medium
            hover:text-purple-700 dark:hover:text-yellow-400 hover:underline
            focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-300 focus:rounded
            transition-colors duration-150 ease-in-out
          "
        >
          Clickable Link (ক্লিকযোগ্য লিঙ্ক)
        </a>
      </div>

      <button
        className="
          py-2 px-4 font-semibold rounded-lg shadow-md
          text-white bg-green-500
          hover:bg-green-600 hover:shadow-lg
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75
          active:bg-green-700 active:scale-95
          transition-all duration-150 ease-in-out
        "
      >
        Interactive Button (ইন্টারেক্টিভ বাটন)
      </button>
    </div>
  );
};

export default InteractiveElements;
```

**Explanation (ব্যাখ্যা):**

*   **Input Field (ইনপুট ফিল্ড):**
    *   `hover:border-gray-400 dark:hover:border-gray-500`: হোভার করলে বর্ডারের রঙ পরিবর্তিত হয়। (Border color changes on hover).
    *   `focus:ring-2 focus:ring-custom-primary dark:focus:ring-custom-secondary`: ফোকাস করলে একটি কাস্টম রঙের রিং দেখা যায়। (A custom colored ring appears on focus). `custom-primary` এবং `custom-secondary` আপনার `tailwind.config.js` থেকে আসবে।
    *   `focus:border-transparent`: ফোকাস রিং দেখানোর সময় ডিফল্ট বর্ডার স্বচ্ছ (transparent) করে দেওয়া হয়। (Default border is made transparent when focus ring is shown).
    *   `transition-all duration-150 ease-in-out`: স্টাইল পরিবর্তনের সময় একটি মসৃণ ট্রানজিশন যোগ করে। (Adds a smooth transition during style changes).

*   **Link (লিঙ্ক):**
    *   `hover:text-purple-700 dark:hover:text-yellow-400 hover:underline`: হোভার করলে টেক্সটের রঙ এবং আন্ডারলাইন পরিবর্তিত হয়। (Text color and underline change on hover).
    *   `focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-300 focus:rounded`: ফোকাস করলে একটি কাস্টম রঙের রিং এবং গোলাকার কোণ দেখা যায়। (A custom colored ring and rounded corners appear on focus).

*   **Button (বাটন):**
    *   `hover:bg-green-600 hover:shadow-lg`: হোভার করলে ಹಿನ್ನೆಲೆ রঙ এবং শ্যাডো পরিবর্তিত হয়। (Background color and shadow change on hover).
    *   `focus:ring-2 focus:ring-green-400`: ফোকাস রিং। (Focus ring).
    *   `active:bg-green-700 active:scale-95`: বাটন চাপলে (active state) ಹಿನ್ನೆಲೆ রঙ পরিবর্তিত হয় এবং বাটনটি সামান্য ছোট হয়। (When button is pressed (active state), background color changes and button scales down slightly).

এই উদাহরণগুলো দেখায় যে Tailwind CSS ব্যবহার করে React কম্পোনেন্টে বিভিন্ন ইন্টারেক্টিভ অবস্থার জন্য স্টাইল যোগ করা কতটা সহজ এবং শক্তিশালী।

(These examples show how easy and powerful it is to add styles for various interactive states in React components using Tailwind CSS.)

---

## 5. Dark/Light Mode Toggle with React Context (React Context এর সাথে ডার্ক/লাইট মোড টগল)

পূর্ববর্তী টিউটোরিয়ালে আমরা `App.jsx` এ `useState` এবং `useEffect` ব্যবহার করে ডার্ক মোড টগল তৈরি করেছিলাম এবং props এর মাধ্যমে থিম সম্পর্কিত তথ্য পাস করেছিলাম। বড় অ্যাপ্লিকেশনে, props drilling এড়াতে React Context একটি ভালো সমাধান।

(In the previous tutorial, we created a dark mode toggle using `useState` and `useEffect` in `App.jsx` and passed theme-related information via props. In larger applications, React Context is a good solution to avoid props drilling.)

### Steps (ধাপসমূহ):

1.  **`tailwind.config.js` এ ডার্ক মোড সেটআপ (Setup Dark Mode in `tailwind.config.js`):**
    নিশ্চিত করুন আপনার `tailwind.config.js` ফাইলে `darkMode: 'class'` সেট করা আছে।
    (Ensure `darkMode: 'class'` is set in your `tailwind.config.js` file.)
    ```javascript
    // tailwind.config.js
    module.exports = {
      darkMode: 'class', // or 'media'
      // ... other configurations
    };
    ```

2.  **`ThemeContext.jsx` তৈরি করুন (Create `ThemeContext.jsx`):**
    থিম এবং থিম টগল করার ফাংশন রাখার জন্য একটি কনটেক্সট তৈরি করুন।
    (Create a context to hold the theme and the function to toggle the theme.)

    ```jsx
    // src/context/ThemeContext.jsx
    import React, { createContext, useState, useEffect, useContext } from 'react';
    import PropTypes from 'prop-types';

    const ThemeContext = createContext();

    export const useTheme = () => useContext(ThemeContext);

    export const ThemeProvider = ({ children }) => {
      const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('color-theme');
        if (storedTheme) {
          return storedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      });

      useEffect(() => {
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
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    ThemeProvider.propTypes = {
      children: PropTypes.node.isRequired,
    };
    ```
    **Explanation (ব্যাখ্যা):**
    *   `createContext()`: একটি নতুন কনটেক্সট অবজেক্ট তৈরি করে। (Creates a new context object).
    *   `useTheme()`: এটি একটি কাস্টম হুক যা কম্পোনেন্ট থেকে সহজে কনটেক্সট অ্যাক্সেস করতে সাহায্য করবে। (This is a custom hook that will help access the context easily from components).
    *   `ThemeProvider`: এটি একটি কম্পোনেন্ট যা তার `children` কে কনটেক্সট ভ্যালু ( `isDarkMode` এবং `toggleTheme`) সরবরাহ করে। থিম স্টেট এবং `localStorage` ও `<html>` ক্লাস আপডেট করার লজিক এখানে রাখা হয়েছে।
        *   (This is a component that provides the context value (`isDarkMode` and `toggleTheme`) to its `children`. The logic for theme state, updating `localStorage`, and the `<html>` class is kept here).

3.  **`App.jsx` এ `ThemeProvider` ব্যবহার করুন (Use `ThemeProvider` in `App.jsx`):**
    আপনার অ্যাপ্লিকেশনের মূল কম্পোনেন্টকে `ThemeProvider` দিয়ে মুড়ে দিন।
    (Wrap your application's main component with `ThemeProvider`.)

    ```jsx
    // src/App.jsx
    import React from 'react';
    import Navbar from './components/Navbar'; // Assuming Navbar uses ThemeSwitcher
    import ItemsGrid from './components/ItemsGrid'; // Example content
    import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

    function App() {
      return (
        <ThemeProvider> {/* Wrap the entire app or relevant part */}
          {/*
            The Navbar component will internally use ThemeSwitcher,
            which will consume the theme context.
          */}
          <AppContent />
        </ThemeProvider>
      );
    }

    // It's good practice to have a separate component for content that consumes context
    // to avoid re-rendering the ThemeProvider itself unnecessarily.
    function AppContent() {
      // Now Navbar and its children can use useTheme()
      // No need to pass isDarkMode or toggleTheme as props from here
      return (
        <div>
          <Navbar /> {/* Navbar will get theme from context via ThemeSwitcher */}
          <main className="pt-16"> {/* Add padding if navbar is fixed/sticky */}
            <ItemsGrid />
            {/* Other components */}
          </main>
        </div>
      );
    }

    export default App;
    ```

4.  **`ThemeSwitcher.jsx` আপডেট করুন (Update `ThemeSwitcher.jsx`):**
    `ThemeSwitcher` এখন props এর পরিবর্তে `useTheme` হুক ব্যবহার করে কনটেক্সট থেকে থিম স্টেট এবং টগল ফাংশন পাবে।
    (The `ThemeSwitcher` will now get the theme state and toggle function from the context using the `useTheme` hook instead of props.)

    ```jsx
    // src/components/ThemeSwitcher.jsx
    import React from 'react';
    import { useTheme } from '../context/ThemeContext'; // Import useTheme

    const ThemeSwitcher = () => {
      const { isDarkMode, toggleTheme } = useTheme(); // Consume context

      return (
        <button
          type="button"
          title="Toggle theme"
          onClick={toggleTheme}
          className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
        >
          {isDarkMode ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"> {/* Sun icon */}
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"> {/* Moon icon */}
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      );
    };

    export default ThemeSwitcher;
    ```

5.  **`Navbar.jsx` আপডেট করুন (Update `Navbar.jsx`):**
    `Navbar` আর `isDarkMode` বা `toggleTheme` props হিসেবে পাবে না, কারণ `ThemeSwitcher` সরাসরি কনটেক্সট ব্যবহার করবে।
    (The `Navbar` will no longer receive `isDarkMode` or `toggleTheme` as props, because `ThemeSwitcher` will use the context directly.)
    ```jsx
    // src/components/Navbar.jsx
    import React from 'react';
    import ThemeSwitcher from './ThemeSwitcher'; // ThemeSwitcher now handles its own state via context

    const Navbar = () => { // No need for props related to theme here
      return (
        <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800 dark:text-white font-custom-serif">
              MySite (আমার সাইট)
            </div>
            <ThemeSwitcher /> {/* ThemeSwitcher gets theme from context */}
          </div>
        </nav>
      );
    };

    export default Navbar;
    ```

6.  **অন্যান্য কম্পোনেন্টে থিম ব্যবহার (Using Theme in Other Components):**
    যেকোনো কম্পোনেন্ট `useTheme` হুক ব্যবহার করে বর্তমান থিম জানতে পারবে এবং সে অনুযায়ী স্টাইল পরিবর্তন করতে পারবে।
    (Any component can use the `useTheme` hook to know the current theme and change styles accordingly.)

    ```jsx
    // Example: src/components/ThemedCardContent.jsx
    import React from 'react';
    import { useTheme } from '../context/ThemeContext';

    const ThemedCardContent = () => {
      const { isDarkMode } = useTheme();

      return (
        <p className={isDarkMode ? 'text-yellow-300' : 'text-purple-700'}>
          This text changes color based on the theme from context!
          (এই টেক্সট কনটেক্সট থেকে প্রাপ্ত থিমের উপর ভিত্তি করে রঙ পরিবর্তন করে!)
        </p>
      );
    };

    export default ThemedCardContent;
    ```

**Benefits of using Context for Theme (থিমের জন্য Context ব্যবহারের সুবিধা):**
*   **No Prop Drilling (প্রপ ড্রিলিং নেই):** থিম স্টেট এবং টগল ফাংশন প্রতিটি কম্পোনেন্টের মাধ্যমে পাস করার প্রয়োজন নেই। (No need to pass theme state and toggle function through every component).
*   **Centralized Logic (কেন্দ্রীয় লজিক):** থিম সম্পর্কিত সমস্ত লজিক `ThemeProvider` এ থাকে। (All theme-related logic resides in `ThemeProvider`).
*   **Easy to Consume (সহজে ব্যবহারযোগ্য):** যেকোনো নেস্টেড কম্পোনেন্ট `useTheme` হুক ব্যবহার করে থিম অ্যাক্সেস করতে পারে। (Any nested component can access the theme using the `useTheme` hook).

এই পদ্ধতিটি বড় অ্যাপ্লিকেশনের জন্য আরও পরিচ্ছন্ন এবং স্কেলেবল।

(This approach is cleaner and more scalable for larger applications.)

---
