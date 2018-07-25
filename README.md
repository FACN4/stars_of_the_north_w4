# Stars Of The North - Matt, Yoosef, Noor & Suha

---

Our link:

---

### Section 1. Why?

---

Our project is aimed to let the users get a list of suggestions of stars names, when typing a letter or a string about the star name they're looking for, so the user can pick up the name of his favorite style easily and quickly, then the user will git some informations about the selected star.
---

### Section 2. What?

---

The website contains a header, an userInput box to search for the stars' names, and desplays the search results in a pre-populated list (an autocompleter to update list of suggestions as we type).

---

### Section 3. How?

---

Firstly, we decided about the topic of our website, then we went throught the user's stories, and agreed on the back-end and the front-end files structure.
Next we broke into 2 teams, one team worked on back-end files, and the other on front-end files, by devising a simulated files for the server and the HTML at the beginning.

---

Statement process
---
1. The user types a lettter/string.
2. A request is sent with the letter typed, to the server by the client(index.js).
3. The server takes this request and search through a large data file(data.json).
4. The server responses with a list of possible words with the letter the user inserts, which will be displayed on the page.
5. If the user types another characters besides a letters, the server wont turn anything.
6. The user can easily and quickly pick up the name of the star he is looking for.
---
Reference - User's stories:
---
We met the following user's stories with our website:

[] Show a list of suggestion according to the letters/string being typed.
[] Update and filter the list of suggestion each time we add more letter.
[] Creating a large data file (JSON).
[] A quick and easy search through the data file and loading.
---

Strech Goals:
---

[] Back-end testing using tape on pure function (not pure).
[] Front-end testing.
[] Deploy to heroku.
[] Export files and require them using.
[] Well structured server files. (server.js, handler.js, router.js, search.js )
