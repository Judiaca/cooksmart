# Recipe App - Cooksmart

A user-friendly application for exploring ingredients, creating ingredient pairings, and contributing new ingredients. The app allows users to interact with ingredient data, learn about flavor combinations, and view recommendations on ingredient pairings.

## Features

- View a list of ingredients with descriptions, images, and associated flavors.
- Add new ingredients, complete with name, description, image, and flavors.
- Explore ingredient pairings, with insights on why certain ingredients work well together.
- Create and save new ingredient pairings.
- Responsive design for mobile, tablet, and desktop users.
- Error handling for missing resources and loading indicators during data retrieval.

## User Stories

### 1. Viewing Ingredients

#### User Story:

As a user, I want to view a list of ingredients, so that I can explore different ingredients and their associated flavors.

#### Acceptance Criteria:

- Display a list of ingredients, each with a name, description, and associated flavors.
- Each ingredient is displayed in a card format with visuals and key details.
- The ingredients are dynamically fetched from the backend.
- If no ingredients are available, a message is displayed.

#

### 2. Adding a New Ingredient

#### User Story:

As a user, I want to add a new ingredient with a name, description, image, and associated flavors, so that I can contribute to the list of ingredients.

#### Acceptance Criteria:

- A form allows users to enter details for a new ingredient: name, description, image URL, and flavors.
- The ingredient is added to the list upon form submission and displayed immediately.
- The new ingredient is saved to the backend database.
- Form includes validation for all fields and displays errors if required fields are missing.

#

### 3. Viewing Ingredient Pairings

#### User Story:

As a user, I want to view a list of ingredient pairings, so that I can learn which ingredients pair well together and why.

#### Acceptance Criteria:

- Display a list of ingredient pairings with names of paired ingredients and an explanation of why they work well together.
- Pairings are dynamically fetched from the backend.

#

### 4. Adding a New Pairing

#### User Story:

As a user, I want to create a new ingredient pairing by selecting ingredients and providing a reason for the pairing, so that I can document useful combinations.

#### Acceptance Criteria:

- A form is provided to select ingredients and enter a reason for the pairing.
- The new pairing is saved and added to the list of pairings upon form submission.
- The pairing is stored in the database and visible immediately.
  Form includes validation for selecting ingredients and entering a reason.

#

### 5. Error Handling for Missing Resources

#### User Story:

As a user, I want to see clear error messages if the app fails to load ingredients or pairings, so that I know something went wrong and can retry or report the issue.

#### Acceptance Criteria:

- Display a clear error message when ingredients or pairings fail to load (e.g., “Failed to load ingredients. Please try again later.”).
- The error message explains the issue and suggests actions like retrying or checking the connection.

#

### 6. Responsive Design

#### User Story:

As a user, I want the app to be responsive, so that I can use it on different devices, including mobile phones and tablets.

#### Acceptance Criteria:

- The app layout adapts to mobile, tablet, and desktop screen sizes.
- Ingredient and pairing lists adjust to different screen resolutions without breaking the layout.
- Navigation and interactions are optimized for touchscreens and smaller displays.

#

### 7. Error Notification for Missing Key Information (Developer Story)

#### Developer Story:

As a developer, I want to ensure that each ingredient and pairing has a unique key when rendering lists, so that React efficiently renders updates and I avoid issues with missing keys.

#### Acceptance Criteria:

- Each item in a list of ingredients or pairings has a unique key to pass React’s key prop validation.
- There are no warnings or errors in the console for missing or duplicate keys.

#

### 8. Loading States

#### User Story:

As a user, I want to see a loading indicator when data is being fetched, so that I know the app is retrieving information.

#### Acceptance Criteria:

- A loading spinner or message is displayed when data (ingredients or pairings) is being fetched.
- Once the data is loaded, the loading indicator disappears.
- If fetching fails or takes too long, an error message is shown (linked to the error handling story).

## Setup

To run the app locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Judiaca/cooksmart.git
```

2. Navigate to the project directory:

```
cd recipe-app
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and visit:

```
   http://localhost:3000
```

## Technologies Used

- Frontend: React, CSS
- Backend: Node.js, Express
- Database: MongoDB
- Deployment: Vercel/Netlify (or specify)
