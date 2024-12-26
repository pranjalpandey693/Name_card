# User Card Application

This project is a simple React application that displays user information in a styled card format. It fetches random user data from the [Random User API](https://randomuser.me/) and displays details such as the user's name, gender, and phone number along with their picture. The application also includes responsive design using `styled-components` to adapt the layout for mobile devices.

## Features

- Fetch user data from an external API.
- Display user information in a styled card layout.
- Responsive design for mobile devices.
- Random background colors for the card.

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-card-app.git
   cd user-card-app
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```


3. **Start the development server:**

   Using npm:
   ```bash
   npm start
   ```

4. **Open the application:**

   Visit `http://localhost:5173` in your web browser.

---

## File Structure

```plaintext
user-card-app/
├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # React components
│   │   └── UserCard.tsx # User card component
│   ├── types/         # TypeScript types
│   │   └── types.ts   # User interface definitions
│   ├── App.tsx        # Main application file
│   ├── index.tsx      # Application entry point
├── package.json       # Project dependencies and scripts
├── README.md          # Project description and setup instructions
└── tsconfig.json      # TypeScript configuration
```

---

## Notes

- The application fetches data from the Random User API upon loading.
- The `styled-components` library is used for styling components with support for responsive design.

Enjoy using the User Card Application!
