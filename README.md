
# GA Project Stock Tracker App

  Keep an eye on your investments! Add stocks to a watchlist
  Try it out! [Stock Tracker](https://salty-depths-52780.herokuapp.com/)

  The app uses AlphaVantages API to search and display stocks, which is limited to 5  queries a minutes, so please be aware!
  
  Curretly, the app is between 'releases' and the new search functionality requires a rework of
  models and controllers involved with keeping track of stock/account relationship. I am pretty happy about getting the API to work, so have gone ahead and published the progress. I'll be circling around quickly to rework the model and controller.

  The existing users Slade and Sam both have accounts and stocks assigned to them, but feel free to create your own users and accounts.

## Technologies used:
  MERN stack (MongoDb, Express, React, Node), styled-components/css, git, git-hub Projects, Heroku, 3rd party API
  
## Process:
-  White-boarding to establish overview of project, workflows, processes, and data strucuture.  
     <details>
     <summary>Wireframe</summary>
     
     ![wireframe](/Images/wireframe.jpg)
     </details>
     
     <details>
     <summary>Models</summary>
  
     ![models](/Images/models.jpg)
     </details>
     
     <details>
     
     <summary>Components</summary>
  
     ![components](/Images/components_detailed.jpg)
     </details>
  
-  Create and continue to use Project board for scheduling, time management, and milestone/goal tracking.   [Github Project Page](https://github.com/SladeInSeat/GA-Project3-StockTracker/projects/3) 

-  Reasses project goals as progress unfolds. Change goals and deadlines as needed in order to reach MVP at deadline.  

-  Minimum Viable Prodect reached. Work on strech goals as time permits.  
[Stock Tracker](https://salty-depths-52780.herokuapp.com/)  

## Lessons Learned
  React is pretty awesome. Next project, I will be more mindfull of component structure
so that passing information will be more streamlined regarding paths and reusable functions.
  Although I did not take full advantage, I can see how Styled-Components are very handy for creating reusable styles and themes.  Useing React requires much more organization than my 
  previous projects (Hanglebars), but the upfront cost of organzation pays dividends.

## Stretch Goals Remaining:
* ~Implement search function~
* create many-to-many relationships between stock/account and account/user
* ~implement a 3rd party api to populate search returns~
* (much) Better styling
