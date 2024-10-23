# React Shopping Cart App

This is a simple React-based shopping cart application. Users can browse products, add them to a shopping cart, and remove items from the cart. The app fetches product data from a local JSON file and displays the items in a responsive layout.

## Features

- **Fetch Product Data**: The app fetches product information from a local `products.json` file.
- **Add to Cart**: Users can add products to their cart. If an item is already in the cart, the app will alert the user.
- **Remove from Cart**: Users can remove items from their cart.
- **Responsive Design**: The app uses Tailwind CSS for a responsive layout that adapts to different screen sizes (mobile, tablet, desktop).

## Tech Stack

- **React**: Used to build the UI components and manage state.
- **Tailwind CSS**: For responsive styling and layout.
- **JavaScript**: Handles logic for adding/removing products and fetching data.
- **Vite**: The app is built using Vite for fast development and bundling.

## Live Demo

You can see the live demo of this project here:  
[**Live Demo Link**](https://mellow-brigadeiros-e91335.netlify.app/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ahmadtnvir/Shopping-Cart.git
   ```
````

2. **Navigate to the project directory:**

   ```bash
   cd react-shopping-cart
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will run locally on `http://localhost:3000/` or another available port specified in the terminal.

## Project Structure

```bash
├── public
│   └── products.json      # Contains product data used in the app
├── src
│   ├── components
│   │   ├── Cards          # Displays the list of products
│   │   ├── Carts          # Displays the cart items
│   │   └── Header         # Displays the app header
│   ├── App.css            # CSS styling for the app
│   ├── App.jsx            # Main app logic and layout
│   └── main.jsx           # Renders the app into the DOM
└── README.md              # Project documentation
```

## How It Works

1. **Fetches Products**: The app fetches product data from `products.json` when it loads, and stores it in the `products` state.
2. **Display Products**: The `Cards` component displays all available products in a grid layout.
3. **Add to Cart**: Users can click "Add to Cart" for any product. If the product is already in the cart, an alert will notify the user.
4. **Remove from Cart**: Users can remove items from the cart by clicking the delete button next to the item in the `Carts` component.

## Local JSON File (`products.json`)

The `products.json` file contains the product data that the app displays. Example structure:

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "price": 100,
    "image": "product1.jpg"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 200,
    "image": "product2.jpg"
  }
]
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.

## License

This project is open-source and available under the [MIT License](LICENSE).

```

### Explanation:
- **Features**: Lists what the app can do.
- **Tech Stack**: Specifies the technologies used.
- **Installation**: Step-by-step instructions on how to set up the app locally.
- **Project Structure**: A brief overview of the folder and file organization.
- **How It Works**: A breakdown of how the app functions.
- **Local JSON File**: Explains the structure of the `products.json` file.
- **Contributing and License**: Information about contributing to the project and the license under which the code is distributed.
```
