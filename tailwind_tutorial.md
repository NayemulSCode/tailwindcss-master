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

1.  আপনার `index.html` ফাইলটি খুলুন। (Open your `index.html` file.)
2.  `<body>` ট্যাগের ভিতরে উপরের HTML কোডটি পেস্ট করুন। (Paste the above HTML code inside the `<body>` tag.)
3.  আপনার ব্রাউজারে `index.html` ফাইলটি দেখুন। (View the `index.html` file in your browser.)

আপনি যদি `src/App.jsx` ব্যবহার করেন, তাহলে JSX এর মধ্যে এই কোডটি এভাবে লিখবেন:
(If you are using `src/App.jsx`, you would write this code within JSX like this:)

```jsx
function App() {
  return (
    <div className="p-8"> {/* Added a container with some padding */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  );
}

export default App;
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

ডিফল্টরূপে, ইউটিলিটি ক্লাসগুলো (যেমন `bg-sky-500`) সব স্ক্রিন সাইজে প্রযোজ্য হয়। আপনি যদি কোনো নির্দিষ্ট ব্রেকপয়েন্টে স্টাইল পরিবর্তন করতে চান, তাহলে সেই ক্লাসের আগে ব্রেকপয়েন্ট প্রিফিক্স যোগ করুন (যেমন `md:bg-green-500`)।

(By default, utility classes (like `bg-sky-500`) apply to all screen sizes. If you want to change a style at a specific breakpoint, add the breakpoint prefix before the class (e.g., `md:bg-green-500`).)

### Example (উদাহরণ):

একটি বক্স তৈরি করি যা ছোট স্ক্রিনে একরকম এবং বড় স্ক্রিনে অন্যরকম দেখাবে।

(Let's create a box that looks different on small screens compared to larger screens.)

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

**Explanation (ব্যাখ্যা):**

*   `bg-sky-500`: ডিফল্টরূপে (সবচেয়ে ছোট স্ক্রিনে) ಹಿನ್ನೆಲೆ রঙ আকাশী নীল। (By default (on the smallest screens), the background color is sky blue.)
*   `sm:bg-red-500`: `640px` বা তার চেয়ে বড় স্ক্রিনে ಹಿನ್ನೆಲೆ রঙ লাল হবে। (On screens `640px` or wider, the background color will be red.)
*   `md:bg-green-500`: `768px` বা তার চেয়ে বড় স্ক্রিনে ಹಿನ್ನೆಲೆ রঙ সবুজ হবে। (On screens `768px` or wider, the background color will be green.)
*   `lg:bg-yellow-500`: `1024px` বা তার চেয়ে বড় স্ক্রিনে ಹಿನ್ನೆಲೆ রঙ হলুদ হবে। (On screens `1024px` or wider, the background color will be yellow.)
*   `xl:bg-purple-500`: `1280px` বা তার চেয়ে বড় স্ক্রিনে ಹಿನ್ನೆಲೆ রঙ বেগুনি হবে। (On screens `1280px` or wider, the background color will be purple.)
*   `p-8`, `text-white`, `text-center`, `text-lg`, `font-semibold`, `mt-2`: এই ক্লাসগুলো সব স্ক্রিন সাইজেই প্রযোজ্য থাকবে কারণ এদের কোনো প্রিফিক্স নেই। (These classes will apply to all screen sizes as they don't have any prefixes.)

**How to use in your project (আপনার প্রজেক্টে কীভাবে ব্যবহার করবেন):**

পূর্বের উদাহরণের মতো, এই HTML কোডটি আপনার `index.html` এর `<body>` ট্যাগের ভিতরে অথবা আপনার React কম্পোনেন্টের JSX এর মধ্যে যোগ করুন। তারপর ব্রাউজারের উইন্ডো রিসাইজ করে দেখুন।

(Like the previous example, add this HTML code inside the `<body>` tag of your `index.html` or within the JSX of your React component. Then try resizing your browser window.)

---

## 3. Typography (টাইপোগ্রাফি)

Tailwind CSS টেক্সট স্টাইল করার জন্য অনেকগুলো ইউটিলিটি ক্লাস সরবরাহ করে। এর মাধ্যমে আপনি ফন্টের আকার, ওজন, রঙ, লাইন-হাইট, টেক্সট অ্যালাইনমেন্ট ইত্যাদি সহজেই নিয়ন্ত্রণ করতে পারেন।

(Tailwind CSS provides many utility classes for styling text. With these, you can easily control font size, weight, color, line-height, text alignment, etc.)

### Common Typography Utilities (সাধারণ টাইপোগ্রাফি ইউটিলিটি):

*   **Font Size (ফন্টের আকার):** `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` থেকে `text-9xl` পর্যন্ত।
    *   (From `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` up to `text-9xl`.)
*   **Font Weight (ফন্টের ওজন):** `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`.
*   **Text Color (টেক্সটের রঙ):** `text-black`, `text-white`, `text-gray-500`, `text-red-500`, `text-blue-500` ইত্যাদি। (অনেক রঙের শেড পাওয়া যায়, যেমন `text-blue-100` থেকে `text-blue-900`)
    *   (Many shades of colors are available, e.g., from `text-blue-100` to `text-blue-900`.)
*   **Text Alignment (টেক্সট অ্যালাইনমেন্ট):** `text-left`, `text-center`, `text-right`, `text-justify`.
*   **Line Height (লাইন-হাইট):** `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`.
*   **Letter Spacing (অক্ষরের মধ্যে ফাঁকা):** `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`.
*   **Text Decoration (টেক্সট ডেকোরেশন):** `underline`, `line-through`, `no-underline`.
*   **Font Style (ফন্ট স্টাইল):** `italic`, `not-italic`.

### Example (উদাহরণ):

আসুন বিভিন্ন টাইপোগ্রাফি ইউটিলিটি ব্যবহার করে কিছু টেক্সট স্টাইল করি।

(Let's style some text using various typography utilities.)

```html
<div class="p-6">
  <h1 class="text-4xl font-bold text-purple-700 mb-4">Main Title (প্রধান শিরোনাম)</h1>

  <p class="text-lg text-gray-800 leading-relaxed mb-2">
    This is a paragraph with a larger font size and relaxed line height.
    (এটি একটি প্যারাগ্রাফ যেখানে ফন্টের আকার বড় এবং লাইন-হাইট স্বচ্ছন্দ।)
  </p>

  <p class="text-sm text-blue-600 font-semibold italic mb-2">
    A small, blue, bold, and italic text.
    (একটি ছোট, নীল, বোল্ড এবং ইটালিক টেক্সট।)
  </p>

  <p class="text-base text-gray-600 tracking-wider text-center line-through">
    Centered text with wider letter spacing and a line-through.
    (মাঝখানে সাজানো টেক্সট, অক্ষরের মধ্যে বেশি ফাঁকা এবং একটি লাইন-থ্রু সহ।)
  </p>

  <a href="#" class="text-red-500 hover:text-red-700 underline font-medium">
    This is a link (এটি একটি লিঙ্ক)
  </a>
</div>
```

**Explanation (ব্যাখ্যা):**

*   `text-4xl font-bold text-purple-700 mb-4`: শিরোনামের জন্য ফন্টের আকার, ওজন, রঙ এবং নিচের মার্জিন নির্ধারণ করে।
    *   (Defines font size, weight, color, and bottom margin for the heading.)
*   `text-lg text-gray-800 leading-relaxed mb-2`: প্রথম প্যারাগ্রাফের জন্য ফন্টের আকার, রঙ, লাইন-হাইট এবং নিচের মার্জিন।
    *   (Font size, color, line-height, and bottom margin for the first paragraph.)
*   `text-sm text-blue-600 font-semibold italic mb-2`: দ্বিতীয় প্যারাগ্রাফের জন্য ফন্টের আকার, রঙ, ওজন, স্টাইল এবং নিচের মার্জিন।
    *   (Font size, color, weight, style, and bottom margin for the second paragraph.)
*   `text-base text-gray-600 tracking-wider text-center line-through`: তৃতীয় প্যারাগ্রাফের জন্য ফন্টের আকার, রঙ, লেটার-স্পেসিং, অ্যালাইনমেন্ট এবং ডেকোরেশন।
    *   (Font size, color, letter-spacing, alignment, and decoration for the third paragraph.)
*   `text-red-500 hover:text-red-700 underline font-medium`: লিঙ্কের জন্য রঙ, হোভার ইফেক্ট, আন্ডারলাইন এবং ফন্ট ওজন।
    *   (Color, hover effect, underline, and font weight for the link.)

**How to use in your project (আপনার প্রজেক্টে কীভাবে ব্যবহার করবেন):**

এই HTML কোডটি আপনার `index.html` এর `<body>` ট্যাগের ভিতরে অথবা আপনার React কম্পোনেন্টের JSX এর মধ্যে যোগ করুন।

(Add this HTML code inside the `<body>` tag of your `index.html` or within the JSX of your React component.)

---

## 4. Spacing (Margin and Padding) - স্পেসিং (মার্জিন এবং প্যাডিং)

Tailwind CSS এ এলিমেন্টের চারপাশে ফাঁকা স্থান (spacing) নিয়ন্ত্রণ করার জন্য মার্জিন (`m`) এবং প্যাডিং (`p`) ইউটিলিটি রয়েছে। এই ইউটিলিটিগুলো খুবই শক্তিশালী এবং কাস্টমাইজ করা সহজ।

(Tailwind CSS has margin (`m`) and padding (`p`) utilities to control the space around elements. These utilities are very powerful and easy to customize.)

### Notation (সংকেত পদ্ধতি):

*   `m`: মার্জিন (margin)
*   `p`: প্যাডিং (padding)

এরপরে দিকের জন্য অক্ষর যুক্ত করা হয়:
(Then, letters are added for direction:)

*   `t`: টপ (top) - e.g., `mt-4` (margin-top), `pt-4` (padding-top)
*   `b`: বটম (bottom) - e.g., `mb-4` (margin-bottom), `pb-4` (padding-bottom)
*   `l`: লেফট (left) - e.g., `ml-4` (margin-left), `pl-4` (padding-left)
*   `r`: রাইট (right) - e.g., `mr-4` (margin-right), `pr-4` (padding-right)
*   `x`: হরাইজন্টাল (x-axis, left and right) - e.g., `mx-4` (margin-left & margin-right), `px-4` (padding-left & padding-right)
*   `y`: ভার্টিকাল (y-axis, top and bottom) - e.g., `my-4` (margin-top & margin-bottom), `py-4` (padding-top & padding-bottom)
*   যদি কোনো দিক নির্দিষ্ট না করা হয় (e.g., `m-4`, `p-4`), তাহলে এটি সব দিকে (top, right, bottom, left) প্রযোজ্য হবে।
    *   (If no direction is specified (e.g., `m-4`, `p-4`), it applies to all sides (top, right, bottom, left).)

### Size Scale (আকারের স্কেল):

Tailwind একটি ডিফল্ট স্পেসিং স্কেল ব্যবহার করে, যেখানে `0` মানে `0px`, `1` মানে `0.25rem` (4px), `2` মানে `0.5rem` (8px), `4` মানে `1rem` (16px) ইত্যাদি। পুরো স্কেলটি Tailwind এর ডকুমেন্টেশনে পাওয়া যাবে। আপনি `px` (পিক্সেল) এর মতো নির্দিষ্ট মানও ব্যবহার করতে পারেন, যেমন `p-px`, `m-px`।

(Tailwind uses a default spacing scale, where `0` means `0px`, `1` means `0.25rem` (4px), `2` means `0.5rem` (8px), `4` means `1rem` (16px), etc. The full scale can be found in the Tailwind documentation. You can also use specific values like `px` (pixel), e.g., `p-px`, `m-px`.)

### Example (উদাহরণ):

আসুন মার্জিন এবং প্যাডিং ব্যবহার করে কিছু এলিমেন্ট সাজাই।

(Let's arrange some elements using margin and padding.)

```html
<div class="p-8 bg-gray-100">
  <!-- Example 1: Padding on all sides -->
  <div class="bg-blue-500 text-white p-4 mb-4">
    All sides padding (p-4). Bottom margin (mb-4).
    (সবদিকে প্যাডিং (p-4)। নিচে মার্জিন (mb-4)।)
  </div>

  <!-- Example 2: Different padding for x and y axes -->
  <div class="bg-green-500 text-white px-6 py-3 mb-4">
    Horizontal padding (px-6), Vertical padding (py-3). Bottom margin (mb-4).
    (অনুভূমিক প্যাডিং (px-6), উল্লম্ব প্যাডিং (py-3)। নিচে মার্জিন (mb-4)।)
  </div>

  <!-- Example 3: Specific side padding and margin -->
  <div class="bg-red-500 text-white pt-2 pb-4 pl-6 pr-8 ml-2 mr-4 mt-1 mb-3">
    Padding: Top(pt-2), Bottom(pb-4), Left(pl-6), Right(pr-8). <br>
    Margin: Left(ml-2), Right(mr-4), Top(mt-1), Bottom(mb-3).
    (প্যাডিং: উপরে(pt-2), নিচে(pb-4), বামে(pl-6), ডানে(pr-8)। <br>
    মার্জিন: বামে(ml-2), ডানে(mr-4), উপরে(mt-1), নিচে(mb-3)।)
  </div>

  <!-- Example 4: Using negative margin -->
  <div class="bg-yellow-300 p-4 relative">
    <div class="bg-yellow-500 text-black p-4 -mt-8 ml-4 shadow-lg">
      This box has a negative top margin (-mt-8) and a left margin (ml-4).
      (এই বক্সটির উপরে নেতিবাচক মার্জিন (-mt-8) এবং বামে মার্জিন (ml-4) রয়েছে।)
    </div>
  </div>
</div>
```

**Explanation (ব্যাখ্যা):**

*   **প্রথম বক্স (`bg-blue-500`):**
    *   `p-4`: সব দিকে `1rem` (16px) প্যাডিং।
    *   `mb-4`: নিচে `1rem` (16px) মার্জিন।
*   **দ্বিতীয় বক্স (`bg-green-500`):**
    *   `px-6`: ডানে ও বামে `1.5rem` (24px) প্যাডিং।
    *   `py-3`: উপরে ও নিচে `0.75rem` (12px) প্যাডিং।
    *   `mb-4`: নিচে `1rem` (16px) মার্জিন।
*   **তৃতীয় বক্স (`bg-red-500`):**
    *   `pt-2`, `pb-4`, `pl-6`, `pr-8`: যথাক্রমে উপরে, নিচে, বামে, ডানে নির্দিষ্ট প্যাডিং।
    *   `ml-2`, `mr-4`, `mt-1`, `mb-3`: যথাক্রমে বামে, ডানে, উপরে, নিচে নির্দিষ্ট মার্জিন।
*   **চতুর্থ বক্স (`bg-yellow-300` এর ভিতরের বক্স `bg-yellow-500`):**
    *   `-mt-8`: উপরের দিকে `2rem` (32px) নেতিবাচক মার্জিন, যা এটিকে তার স্বাভাবিক অবস্থানের উপরে নিয়ে যায়।
    *   `ml-4`: বাম দিকে `1rem` (16px) মার্জিন।
    *   `shadow-lg`: একটি বড় শ্যাডো ইফেক্ট যোগ করে।

**How to use in your project (আপনার প্রজেক্টে কীভাবে ব্যবহার করবেন):**

এই HTML কোডটি আপনার `index.html` এর `<body>` ট্যাগের ভিতরে অথবা আপনার React কম্পোনেন্টের JSX এর মধ্যে যোগ করুন।

(Add this HTML code inside the `<body>` tag of your `index.html` or within the JSX of your React component.)

---

## 5. Configuring Custom Themes (কাস্টম থিম কনফিগারেশন)

Tailwind CSS আপনাকে এর ডিফল্ট থিম পরিবর্তন বা প্রসারিত করার সুবিধা দেয়। এর জন্য `tailwind.config.js` ফাইলটি ব্যবহার করা হয়। এই ফাইলের মাধ্যমে আপনি নতুন রঙ, ফন্ট, স্পেসিং, ব্রেকপয়েন্ট ইত্যাদি যোগ করতে পারেন।

(Tailwind CSS allows you to modify or extend its default theme. The `tailwind.config.js` file is used for this purpose. Through this file, you can add new colors, fonts, spacing, breakpoints, etc.)

### Steps to Configure (কনফিগার করার ধাপ):

1.  **Create `tailwind.config.js` (যদি না থাকে):**
    আপনার প্রজেক্টের রুট ডিরেক্টরিতে `tailwind.config.js` নামে একটি ফাইল তৈরি করুন।
    (Create a file named `tailwind.config.js` in your project's root directory, if it doesn't already exist.)

    সাধারণত, আপনি Tailwind CSS ইনস্টল করার পর এই কমান্ডটি চালাতে পারেন:
    (Usually, after installing Tailwind CSS, you can run this command:)
    ```bash
    npx tailwindcss init
    ```
    এই কমান্ডটি একটি বেসিক `tailwind.config.js` ফাইল তৈরি করবে।
    (This command will create a basic `tailwind.config.js` file.)

    **Note:** আমাদের এই টিউটোরিয়ালের জন্য, আমি (`Jules` a.k.a. the AI assistant) এই ফাইলটি পূর্বেই তৈরি করে দিয়েছি এবং এতে কিছু উদাহরণ কনফিগারেশন যোগ করেছি।
    (For this tutorial, I (`Jules` a.k.a. the AI assistant) have already created this file and added some example configurations.)

2.  **Update `content` array in `tailwind.config.js`:**
    `tailwind.config.js` ফাইলের `content` অ্যারেতে আপনার প্রজেক্টের যে যে ফাইলে Tailwind ক্লাস ব্যবহার করা হবে, সেগুলোর পাথ উল্লেখ করুন। এটি Tailwind কে জানাবে কোন ফাইলগুলো স্ক্যান করে প্রয়োজনীয় CSS তৈরি করতে হবে।
    (In the `tailwind.config.js` file, specify the paths to all files in your project where Tailwind classes will be used in the `content` array. This tells Tailwind which files to scan to generate the necessary CSS.)

    ```javascript
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // For React/Vue/Svelte projects
      ],
      theme: {
        extend: {
          // Your customizations go here
        },
      },
      plugins: [],
    }
    ```

3.  **Extend the Theme (থিম প্রসারিত করুন):**
    `theme.extend` অবজেক্টের ভিতরে আপনি আপনার কাস্টমাইজেশনগুলো যোগ করতে পারেন। `extend` ব্যবহার করলে ডিফল্ট থিমের সাথে আপনার কাস্টম মানগুলো যুক্ত হবে। যদি আপনি ডিফল্ট মানগুলো পুরোপুরি প্রতিস্থাপন করতে চান, তাহলে `theme` অবজেক্টের সরাসরি প্রপার্টি হিসেবে যোগ করুন (তবে `extend` ব্যবহার করাই বেশি নিরাপদ এবং প্রস্তাবিত)।

    (Inside the `theme.extend` object, you can add your customizations. Using `extend` will merge your custom values with the default theme. If you want to completely replace the default values, add them as direct properties of the `theme` object (however, using `extend` is generally safer and recommended).)

### Example: Adding Custom Colors, Fonts, and Spacing (উদাহরণ: কাস্টম রঙ, ফন্ট এবং স্পেসিং যোগ করা)

আমাদের `tailwind.config.js` ফাইলটিতে নিচের কাস্টমাইজেশনগুলো যোগ করা হয়েছে:
(The following customizations have been added to our `tailwind.config.js` file:)

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enabled dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#A020F0', // Example: Purple
        'custom-secondary': '#FFD700', // Example: Gold
        'brand-blue': { // A custom color with shades
          light: '#85d7ff',
          DEFAULT: '#1fb6ff', // Used when you write text-brand-blue or bg-brand-blue
          dark: '#009eeb',
        },
      },
      fontFamily: {
        // Ensure these fonts are imported in your project (e.g., via Google Fonts in index.html)
        'custom-sans': ['Roboto', 'sans-serif'],
        'custom-serif': ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem', // Adds utilities like p-128, m-128, w-128, h-128
        'custom-lg': '40px', // Adds utilities like p-custom-lg, m-custom-lg
      }
    },
  },
  plugins: [],
}
```

**Explanation of `tailwind.config.js` (ব্যাখ্যা):**
*   `darkMode: 'class'`: এটি ডার্ক মোড সক্রিয় করে এবং `class` স্ট্র্যাটেজি ব্যবহার করার নির্দেশ দেয়। এর মানে হল, যখন `<html>` ট্যাগে `class="dark"` যুক্ত করা হবে, তখন ডার্ক মোডের স্টাইলগুলো প্রযোজ্য হবে।
    *   (This enables dark mode and instructs to use the `class` strategy. This means when `class="dark"` is added to the `<html>` tag, the dark mode styles will apply.)
*   `colors`: এখানে আমরা `custom-primary` (বেগুনি) এবং `custom-secondary` (সোনালী) নামে দুটি নতুন রঙ যোগ করেছি। এছাড়াও `brand-blue` নামে একটি রঙ যোগ করেছি যার বিভিন্ন শেড (light, DEFAULT, dark) রয়েছে। `DEFAULT` শেডটি ব্যবহৃত হয় যখন আপনি শুধুমাত্র `text-brand-blue` বা `bg-brand-blue` লেখেন।
    *   (Here we've added two new colors named `custom-primary` (Purple) and `custom-secondary` (Gold). We've also added a color named `brand-blue` which has different shades (light, DEFAULT, dark). The `DEFAULT` shade is used when you just write `text-brand-blue` or `bg-brand-blue`.)
*   `fontFamily`: `custom-sans` (Roboto) এবং `custom-serif` (Merriweather) নামে দুটি নতুন ফন্ট ফ্যামিলি যোগ করেছি। **গুরুত্বপূর্ণ:** এই ফন্টগুলো ব্যবহার করার জন্য আপনাকে প্রজেক্টে ফন্ট ফাইলগুলো (যেমন Google Fonts থেকে `index.html` এ) ইম্পোর্ট বা লিঙ্ক করতে হবে।
    *   (We've added two new font families named `custom-sans` (Roboto) and `custom-serif` (Merriweather). **Important:** To use these fonts, you need to import or link the font files (e.g., from Google Fonts into `index.html`) in your project.)
*   `spacing`: `128` (`32rem`) এবং `custom-lg` (`40px`) নামে দুটি নতুন স্পেসিং মান যোগ করেছি। এখন আপনি `p-128`, `m-custom-lg`, `w-128`, `h-128` এর মতো ক্লাস ব্যবহার করতে পারবেন।
    *   (We've added two new spacing values named `128` (`32rem`) and `custom-lg` (`40px`). Now you can use classes like `p-128`, `m-custom-lg`, `w-128`, `h-128`.)

### Using Custom Theme Values in HTML (HTML এ কাস্টম থিম মান ব্যবহার করা):

এখন আপনি এই কাস্টম মানগুলো আপনার HTML বা JSX এ ব্যবহার করতে পারবেন:
(Now you can use these custom values in your HTML or JSX:)

```html
<div class="p-custom-lg bg-gray-100"> <!-- Using custom padding -->
  <h1 class="font-custom-sans text-3xl text-custom-primary mb-4"> <!-- Custom font and color -->
    Custom Themed Title (কাস্টম থিমযুক্ত শিরোনাম)
  </h1>

  <p class="font-custom-serif text-lg text-brand-blue-dark mb-6"> <!-- Custom font and custom color shade -->
    This paragraph uses our custom serif font and a dark shade of our custom brand blue color.
    (এই প্যারাগ্রাফটি আমাদের কাস্টম সেরিফ ফন্ট এবং আমাদের কাস্টম ব্র্যান্ড ব্লু রঙের একটি ডার্ক শেড ব্যবহার করে।)
  </p>

  <button class="bg-custom-secondary hover:bg-yellow-400 text-gray-900 font-custom-sans font-semibold py-3 px-6 rounded-lg shadow-md">
    Custom Secondary Button <!-- Custom background and font -->
  </button>

  <div class="mt-128 bg-brand-blue p-4 text-white"> <!-- Custom margin and default shade of custom color -->
    This box has a margin-top of 32rem (mt-128) and uses the default brand-blue.
    (এই বক্সটির উপরে 32rem মার্জিন (mt-128) রয়েছে এবং এটি ডিফল্ট ব্র্যান্ড-ব্লু রঙ ব্যবহার করে।)
  </div>
</div>
```

**How to use in your project (আপনার প্রজেক্টে কীভাবে ব্যবহার করবেন):**

1.  নিশ্চিত করুন `tailwind.config.js` ফাইলটি আপনার প্রজেক্টের রুটে আছে এবং উপরের মতো কনফিগার করা আছে।
    (Ensure the `tailwind.config.js` file is in your project root and configured as above.)
2.  যদি আপনি কাস্টম ফন্ট (`font-custom-sans`, `font-custom-serif`) ব্যবহার করেন, তাহলে `index.html` ফাইলের `<head>` ট্যাগের মধ্যে Google Fonts থেকে ফন্টগুলো লিঙ্ক করুন। উদাহরণস্বরূপ:
    (If you are using custom fonts (`font-custom-sans`, `font-custom-serif`), link the fonts from Google Fonts within the `<head>` tag of your `index.html` file. For example:)
    ```html
    <!-- index.html -->
    <head>
      <!-- ... other head elements ... -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
      <title>Vite + React</title> <!-- Your existing title -->
    </head>
    ```
    **Note for Vite/React users:** আপনি `src/index.css` ফাইলেও ফন্ট ইম্পোর্ট করতে পারেন:
    (**Note for Vite/React users:** You can also import fonts in your `src/index.css` file:)
    ```css
    /* src/index.css */
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;500;700&display=swap');
    @import "tailwindcss"; /* Ensure this is present */
    ```

3.  আপনার ডেভেলপমেন্ট সার্ভার রিস্টার্ট করুন (সাধারণত `npm run dev` বা `yarn dev`)। Tailwind কনফিগারেশনে কোনো পরিবর্তন করলে সার্ভার রিস্টার্ট করা জরুরি যাতে নতুন CSS তৈরি হয়।
    (Restart your development server (usually `npm run dev` or `yarn dev`). It's important to restart the server after making changes to the Tailwind configuration so that new CSS is generated.)
4.  উপরের HTML কোডটি আপনার `index.html` এর `<body>` ট্যাগের ভিতরে অথবা আপনার React কম্পোনেন্টের (`src/App.jsx`) JSX এর মধ্যে যোগ করে দেখুন।
    (Add the HTML code above inside the `<body>` tag of your `index.html` or within the JSX of your React component (`src/App.jsx`) to see the changes.)

---

## 6. Navbar with Dark Mode Switcher (ডার্ক মোড সুইচার সহ নেভিগেশন বার)

Tailwind CSS এ ডার্ক মোড (`dark:`) ভেরিয়েন্ট ব্যবহার করে সহজেই লাইট এবং ডার্ক থিম তৈরি করা যায়। আমরা `tailwind.config.js` ফাইলে `darkMode: 'class'` সেট করেছি, যার মানে `<html>` এলিমেন্টে `dark` ক্লাস যুক্ত হলে ডার্ক মোডের স্টাইলগুলো সক্রিয় হবে।

(It's easy to create light and dark themes in Tailwind CSS using the `dark:` variant. We've set `darkMode: 'class'` in our `tailwind.config.js` file, which means dark mode styles will be activated when the `dark` class is added to the `<html>` element.)

### Navbar HTML Structure (নেভিগেশন বারের HTML কাঠামো):

এখানে একটি সাধারণ নেভিগেশন বারের উদাহরণ দেওয়া হলো, যেখানে একটি লোগো/সাইটের নাম এবং একটি ডার্ক মোড টগল বাটন থাকবে।

(Here's an example of a simple navigation bar with a logo/site name and a dark mode toggle button.)

```html
<nav class="bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-xl font-bold text-gray-800 dark:text-white">
      MySite (আমার সাইট)
    </div>
    <button id="theme-toggle" class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400">
      <!-- Moon Icon for Light Mode -> Toggle to Dark -->
      <svg id="theme-toggle-dark-icon" class="hidden h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <!-- Sun Icon for Dark Mode -> Toggle to Light -->
      <svg id="theme-toggle-light-icon" class="hidden h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66h-1m-16 0h-1m14.66-7.34l-.707-.707M6.34 17.66l-.707-.707m12.02 0l-.707.707M6.34 6.34l-.707.707" />
      </svg>
    </button>
  </div>
</nav>
```

**Explanation (ব্যাখ্যা):**

*   `bg-gray-200 dark:bg-gray-800`: নেভিগেশন বারের ಹಿನ್ನೆಲೆ রঙ। লাইট মোডে হালকা ধূসর, ডার্ক মোডে গাঢ় ধূসর।
    *   (Background color of the navbar. Light gray in light mode, dark gray in dark mode.)
*   `text-gray-800 dark:text-white`: সাইটের নামের টেক্সট রঙ।
    *   (Text color for the site name.)
*   `theme-toggle` বাটন: এটি থিম পরিবর্তন করার জন্য ব্যবহৃত হবে। এর ভিতরে দুটি SVG আইকন আছে (চাঁদ এবং সূর্য), যা বর্তমান থিমের উপর ভিত্তি করে দেখানো বা লুকানো হবে।
    *   (The `theme-toggle` button: This will be used to change the theme. It contains two SVG icons (moon and sun), which will be shown or hidden based on the current theme.)
*   `hidden` ক্লাস: প্রাথমিকভাবে আইকনগুলো লুকানো থাকবে। জাভাস্ক্রিপ্ট নির্ধারণ করবে কোনটি দেখানো হবে।
    *   (`hidden` class: Initially, the icons will be hidden. JavaScript will determine which one to show.)

### JavaScript for Theme Toggling (থিম টগলিং এর জন্য জাভাস্ক্রিপ্ট):

এই জাভাস্ক্রিপ্ট কোডটি থিম টগল করার, `localStorage` এ পছন্দ সংরক্ষণ করার এবং পৃষ্ঠা লোড হওয়ার সময় সঠিক থিম সেট করার কাজ করবে।

(This JavaScript code will handle toggling the theme, saving the preference in `localStorage`, and setting the correct theme when the page loads.)

```javascript
// Theme variables
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleButton = document.getElementById('theme-toggle');

// Function to set theme
function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
    localStorage.setItem('color-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    localStorage.setItem('color-theme', 'light');
  }
}

// Initial theme setup
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// Check localStorage first
if (localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme(true);
} else {
  setTheme(false);
}

// Listener for toggle button
themeToggleButton.addEventListener('click', function() {
  // toggle icons and theme
  setTheme(!document.documentElement.classList.contains('dark'));
});
```

**Explanation (ব্যাখ্যা):**

1.  **`setTheme(isDark)` ফাংশন:**
    *   `isDark` প্যারামিটারের উপর ভিত্তি করে `<html>` এলিমেন্টে `dark` ক্লাস যোগ বা অপসারণ করে।
    *   সঠিক আইকন (সূর্য/চাঁদ) দেখায় বা লুকায়।
    *   `localStorage` এ `color-theme` কী-তে বর্তমান থিম (`dark` বা `light`) সংরক্ষণ করে।
2.  **Initial Theme Setup (প্রাথমিক থিম সেটআপ):**
    *   পৃষ্ঠা লোড হওয়ার সময়, এটি প্রথমে `localStorage` এ সংরক্ষিত থিম চেক করে।
    *   যদি `localStorage` এ কিছু না থাকে, তাহলে এটি ব্যবহারকারীর সিস্টেমের পছন্দ (`prefers-color-scheme`) চেক করে।
    *   এর উপর ভিত্তি করে `setTheme` ফাংশন কল করে। **গুরুত্বপূর্ণ:** "Flash of Unstyled Content" (FOUC) এড়ানোর জন্য, এই প্রাথমিক থিম সেটআপের স্ক্রিপ্টটি `<head>` ট্যাগের মধ্যে ইনলাইন হিসেবে রাখা ভালো। আমরা এটিকে আপাতত `<body>` এর শেষে রাখব ডেমোনস্ট্রেশনের জন্য।
3.  **Event Listener (ইভেন্ট লিসেনার):**
    *   টগল বাটনে ক্লিক করলে, এটি `setTheme` ফাংশনকে বর্তমান থিমের বিপরীত মান দিয়ে কল করে (যদি ডার্ক হয়, লাইট করবে; যদি লাইট হয়, ডার্ক করবে)।

### Applying to the Page Body (পেজ বডিতে প্রয়োগ):

ডার্ক মোডে পুরো পেজের ಹಿನ್ನೆಲೆ পরিবর্তন করতে, আপনি `<body>` ট্যাগেও ডার্ক মোড ক্লাস যুক্ত করতে পারেন।

(To change the background of the entire page in dark mode, you can also add dark mode classes to the `<body>` tag.)

```html
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <!-- Navbar and other content will go here -->
</body>
```

**How to use in your project (আপনার প্রজেক্টে কীভাবে ব্যবহার করবেন):**

1.  `tailwind.config.js` এ `darkMode: 'class'` সেট করা আছে কিনা নিশ্চিত করুন (আমরা এটি আগের ধাপে করেছি)।
    (Ensure `darkMode: 'class'` is set in `tailwind.config.js` (we did this in a previous step).)
2.  নেভিগেশন বারের HTML কোডটি আপনার `index.html` ফাইলের `<body>` ট্যাগের শুরুতে যোগ করুন।
    (Add the navbar HTML code to the beginning of the `<body>` tag in your `index.html` file.)
3.  জাভাস্ক্রিপ্ট কোডটি `index.html` ফাইলের `<body>` ট্যাগের শেষে একটি `<script>` ট্যাগের মধ্যে যোগ করুন।
    (Add the JavaScript code inside a `<script>` tag at the end of the `<body>` tag in your `index.html` file.)
4.  `<body>` ট্যাগটিতে `class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"` যোগ করুন।
    (Add `class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"` to the `<body>` tag.)
5.  আপনার ডেভেলপমেন্ট সার্ভার রিস্টার্ট করুন এবং ব্রাউজারে `index.html` ফাইলটি দেখুন। টগল বাটনে ক্লিক করে থিম পরিবর্তন করে দেখুন।
    (Restart your development server and view the `index.html` file in your browser. Try changing the theme by clicking the toggle button.)

---

This completes the main sections for your Tailwind CSS live class. You can expand on any of these topics or add more advanced concepts as needed.
(এটি আপনার Tailwind CSS লাইভ ক্লাসের প্রধান অংশগুলো সম্পন্ন করে। প্রয়োজনে আপনি এই বিষয়গুলোর যেকোনো একটিতে আরও বিস্তারিত আলোচনা করতে পারেন বা আরও উন্নত ধারণা যোগ করতে পারেন।)
