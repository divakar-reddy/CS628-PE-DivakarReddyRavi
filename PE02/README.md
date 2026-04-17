## Getting Started
cd PE02
cd movie-app
npm start

## INPUTS
The input consists of user interactions and predefined data. The predefined input is an array of movie objects containing titles, genres, and release years. Additionally, the user provides input by selecting a genre from the dropdown menu or clicking on a movie card.

## PROCESS
The process involves filtering and rendering logic handled within the MovieList component. When a user selects a genre, the application updates the state using the useState hook. Based on the selected genre, the program filters the movie array dynamically. Similarly, when a movie card is clicked, an event handler processes the click and retrieves the movie title.

## OUTPUT
The output is the visual display of filtered movie cards and alert messages. The UI updates automatically to show relevant movies, and an alert box displays the selected movie title, providing immediate feedback to the user.