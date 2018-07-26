# Stars Of The North - Matt, Yoosef, Noor & Suha

Our link: http://stars-of-the-north.herokuapp.com/

---

## Our Aim

Our project allows users get a list of suggestions of star names. They are given a list of suggestions when typing a letter or a string about the star name they're looking for. This enables the user to quickly pick the name of their favourite star. The user is then able to search Google directly for further information about the selected star.

## Our Journey

**Day 1 AM:** We brainstormed as a team and then decided the topic of our website. We first looked at
**Day 1 PM:** We went through the user's stories, and agreed on the back-end and the front-end files structure. We broke into 2 teams, one team worked on back-end files, and the other on front-end files, by devising a simulated files for the server and the HTML at the beginning
**Day 2 AM:** We met in the morning and the backend team continued working on the search functionality whilst the frontend team worked on CSS and writing the XHR request
**Day 3 PM:** We connected the frontend and backend and appended the search results to a div on a front end. We also added functionality for the user to click the star name to go to Google.

## Site Structure

The website contains a header, an userInput box to search for the stars' names, and displays the search results in a pre-populated list (an autocompleter to update list of suggestions as we type).

![](https://i.imgur.com/yDo5P5h.png)

---

## Statement process

1.  The user types a letter/string.
2.  A request is sent with the letter typed, to the server by the client(index.js).
3.  The server takes this request and searches through a large data file(data.json).
4.  The server responds with a list of possible words with the letter the user inserts, which will be displayed on the page.
5.  The user can easily and quickly pick up the name of the star he is looking for.

## Architecture and Data Flow

![](https://i.imgur.com/1ZxFPaD.png)

---

## Reference - User's stories:

We met the following user's stories with our website:

- [x] Show a list of suggestion according to the letters/string being typed.
- [x] Update and filter the list of suggestion each time we add more letter.
- [x] Creating a large data file (JSON).
- [x] A quick and easy search through the data file and loading.

---

## Stretch Goals:

- [x] Testing using tape on pure function (not pure).
- [x] Deploy to heroku.
- [x] Export files and require them using.
- [x] Well structured server files. (server.js, handler.js, router.js, search.js )
