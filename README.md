### Introduction

Here I've created a website that tells a joke and prompts the user to guess what the punchline is. Once the user punchline is submitted, if they punchline matches the punchline in the data, the DOM prints a congratulatory messeage. If not, a button labeled "I give up!" appears prompting the user to click it if they do not know the punchline. Once clicked, the punchline appears as well as a counter keeping track of how many times they revealed the punchline.

### Functionality
Since this prject utilizes a JSON file, you must run this command in your terminal 
```json-server --watch db.json```
for the website to have access to the data in the JSON file. Once the page is loaded, the data from the JSON file is accessed and assigned to a variable. 

The function keyPressed(jokesData) initally loads the first joke setup and the keydown event listener listens for the right arrow key to be pressed to move on to the next joke.



Credits:
Joke API: https://official-joke-api.appspot.com/random_ten