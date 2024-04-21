![alt text](public/design/desktop-preview.jpg)
# Article Preview Card

This project is part of the Frontend Mentor challenges. The goal is to build an article preview component that closely resembles the design provided by Frontend Mentor.

## Challenge Description

Your challenge is to build out this article preview component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

The only JavaScript you'll need for this challenge is to initiate the share options when someone clicks the share icon.

Your users should be able to:

- See the social media share links when they click the share icon
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- [Challenge Link](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT)

## Implementation Details

### React Components

#### Card Component

The `Card` component represents the main article preview card. It displays the article image, title, description, author profile, and share button. When the share button is clicked, it opens a modal to display social media share options.

#### Modal Component

The `Modal` component is a popup modal that displays social media share options (Facebook, Twitter, Pinterest) when the share button is clicked. It allows users to share the article on their preferred social media platforms.By clicking on the popup you effectively close it

#### Footer Component

The `Footer` component displays the footer information, including the author's name, copyright symbol, and current date.

### Styling

The project's styling is implemented using CSS. It includes styling for the article preview card, modal, and footer. The layout is responsive and adjusts based on the user's device screen size.

## Project Structure

- `Card.js`: Contains the `Card` component logic.
- `Modal.js`: Contains the `Modal` component logic.
- `Footer.js`: Contains the `Footer` component logic.
- `modal.css`: Contains the CSS styles for the modal component.

## Usage

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/VictorKevz/article-preview-card.git`
2. Navigate to the project directory: `cd article-preview-card`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Credits

- Icons sourced from Material-UI icons library.
- Images provided by Frontend Mentor.

## Author

- [Victor.Kevz](https://github.com/VictorKevz)

