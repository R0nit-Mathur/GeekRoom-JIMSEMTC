## How to setup tailwindcss

step 1: Run the following commands
```
npm run -D tailwindcss
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

step 2: Update tailwind.config.js file to include this line
```
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    ],
```

step 3: Create src/input.css to include
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 5: Run this code
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
``` 

step 6: Include output.css to your index.html