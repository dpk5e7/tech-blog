# e-Commerce Back End

[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.

This project is a CMS-style blog site following the MVC paradigm, where developers can publish their blog posts and comment on other developers’ posts as well.

The technologies used in this application are:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/) to run the web server
- [MySQL](https://www.mysql.com/) to store the data
- [Sequelize](https://sequelize.org) as the object relational model to connect to the MySQL database from Node.js
- [dotenv](https://www.npmjs.com/package/dotenv) to store environmental variables
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) as the templating engine
- [express-session](https://www.npmjs.com/package/express-session) for authentication
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) for using sequelize for the session store
- [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords

### User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

After downloading the score code, run the following commands from the home directory.

```bash
npm i
```

## Usage

To seed the database, run the following command:

```bash
npm run seed
```

The application will be invoked by using the following command:

```bash
node server.js
```

### Dependencies

The use of a modern web browser.

### URL

- [https://dpk5e7-tech-blog.herokuapp.com/](https://dpk5e7-tech-blog.herokuapp.com/)

### Screenshots

![Screenshot1](./assets/screenshot1.png)

![Screenshot2](./assets/screenshot2.png)

![Screenshot3](./assets/screenshot3.png)

![Screenshot4](./assets/screenshot4.png)

## License

[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application is covered under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

As this project is part of an individual assignment for the University of Denver's Coding Bootcamp, it would be inappropriate for anyone else to contribute to this project.

## Questions

GitHub Link: [https://github.com/dpk5e7](https://github.com/dpk5e7)

Please contact me at Daniel.Kelly@du.edu with any additional questions you may have.
