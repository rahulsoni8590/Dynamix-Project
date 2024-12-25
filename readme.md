# Documentation

## Project Description
- `Dynamix/` contains the main project code.
  - `index.js` is the entry-point for the application. It also fetches data from an external API, processes it, and renders it on the dashboard
  - `source/` contains the main source code
    - `controller/` contains all the rules/function that are required to run the evaluation on the fetched data.
    - `views/` contain the html, css code for display the data on the dashboard. The application uses EJS (Embedded JavaScript) as the view engine to render dynamic HTML content.
 - `util/` contains utilities function which return results after evaluating the application data.


## How to run
- `Dynamix/` go to this directory 
    - run `npm install` to install all the dependencies of the project.
    - run `node index.js` to start the application

-  Now on the browser open `http://localhost:5173`
