Deck of Cards - Angularjs responsive one page application 

### Demo URL: http://ktalvis.com/deck/source

### Specs: 
- A user can shuffle the deck as many times as he/she wants to. Shuffling becomes disabled when there is one or no cards left on the deck. Shuffling functionality is based on an implementation of the Fisher-Yates shuffle algorithm. 
- Cards can be drawn from the deck by clicking on them. The drawn card will be removed from the original deck and it will be placed into a new one below. The 'Sort' button becomes enabled when there is more than one card on the new deck. Cards can be removed by the new deck by clicking on them. The removed card will be added on the last position of the original deck. For sorting purposes, the bubble sort algorithm has been implemented. It sorts the given deck by suit: Clubs > Spades > Hearts > Diamonds and then by value (Ace is high). 

### How to install on localhost:
- Clone the repository.
- This application runs on Node.js. Install dependencies by typing:

    $ npm install

## How to run on localhost:
- Run locally by typing:  

    $ node app.js

The app is set to be listening to port: 8888 (http://localhost:8888)

## Tecnhologies used:
- AngularJS 1.4.7
- HTML5
- CSS3
- Bootstrap CSS 3.3.7
- Jasmine 2.1.4 

### Comments:  
- The application is based on the MVC (Model-View-Controller) design pattern. The application can be easily expanded  as it could load data from a REST API (by injecting $http as a dependency) instead of generating them in the service/factory. With minor changes it can work with more than one deck of cards.  
- The application is written in AngularJs and Vanilla Javascript. Apart from Bootstrap CSS, no Jquery, Bootstrap JS or any other frameworks/libraries have been used. 
- Jasmine framework is used for BDD Testing. 
- Card enumeration for suits and values has been manually added for sorting purposes.

## Karolos Talvis - 31/5/18  
