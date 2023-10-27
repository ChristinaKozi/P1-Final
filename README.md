### Introduction
This repository contains a website that tells a joke and prompts the user to guess what the punchline is. The user has unlimited attempts to guess the punchline, if the guess is correct then the DOM will populate congratulatory text. After the first incorrect guess, a button labeled "I give up!" appears, prompting the user to click it if they wish to see the punchline. Once clicked, the punchline appears as well as a counter keeping track of how many times they revealed the punchline. The user can cycle through the jokes using the right arrow key ```➡️``` and keep guessing.

### Initializing
Since this prject utilizes a JSON file, you must run this command in your terminal 
```json-server --watch db.json```
for the website to have access to the data in the JSON file. Once the page is loaded, the data from the JSON file is accessed and assigned to a variable. The data in the JSON file has been copied from the Official Joke API linked in the credits below which provided ten random jokes.

#### db.json Data Structure
```json
{
    "jokes":[
        {
            "type":"general",
            "setup":"What is a tornado's favorite game to play?",
            "punchline":"Twister!",
            "id":245
        },
    ]
}
```
### Functions
The function keyPressed() initally loads the first joke setup and the keydown event listener listens for the right arrow key to be pressed to move on to the next joke. It moves on to the next joke setup by incrementing the current index of the data. The function then calls removeMessage(), removeButton() and clearAnswer() to clear any messages or buttons appended to the DOM when the joke is changed.

The handleSubmit function defines the current index's punchline which corresponds to the current joke setup on the page. It also invokes the checkInput function which checks if the user's input matches the current index's punchline that has been parsed from the JSON data. If it does match, a <p> tag containing a congratulatory message is appended to the DOM. If it doesn't match, the message asks the user if they give up and a button labeled "I give up!" appears. 

The revealPunchline function includes an event listener that is trigged by clicking the "I give up!" button. The event listener function then appends the correct corresponding punchline to inform the user of the answer. It also pushes each unique punchline to an array assigned to the userGiveUps variable. It then invokes the logGiveUps function taking in userGiveUps as an argument.

The logGiveUps function calls the reduce method on the userGiveUps array and returns the number of items in the array, representing how many times the user has asked for the punchline, and appends it to the DOM.



Credits:
Official Joke API: https://official-joke-api.appspot.com/random_ten