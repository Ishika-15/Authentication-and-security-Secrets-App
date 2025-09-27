This is the Secrets Web Project created as part of TuteDude's assignment. The project is a simple web application that allows users to log in, register, and securely store secrets using encryption.

Live Demo
You can view the project live here: Secrets Web Project

Features
User Authentication: Users can sign up, log in, and log out.
Secrets Storage: Store and view your secrets securely.
Encryption: Secrets are encrypted before being stored.
Table of Contents
Installation
Usage
Clone the Repository
Install Dependencies
Viewing the Output
Installation
To get started with this project, follow these steps:

Clone the Repository
First, clone the repository to your local machine using Git:

git clone https://github.com/shiva0909122/TuteDude-Assignment9-Secrets-web-Project.git
Install Dependencies
Once you've cloned the repository, navigate to the project folder in your terminal and install the required packages:

Navigate to the project directory:

cd TuteDude-Assignment9-Secrets-web-Project
Install required packages: This project requires npm for managing dependencies. Run the following command to install the required packages:

npm install
View the Output
Once all dependencies are installed, you can view the project in your browser.

Start the project: Run the following command to start the project on your local server:

npm start
View in browser: Open your browser and go to http://localhost:5002 to view the project.
Technologies Used
HTML5
CSS
JavaScript
Node.js (for backend, if applicable)
Express.js (if applicable)
Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow the coding standards and provide relevant test coverage.

The project file on the "Secrets" web application demonstrates several core features for secure user authentication. Here’s a summary of the components based on the code structure provided:

User Registration and Login: The application allows users to register by creating accounts with an email and password. Registered users can then log in to access the app's functionalities.

Data Encryption: The app leverages the mongoose-encryption library to securely encrypt sensitive fields (like passwords) in the MongoDB database. A secret key, "thisislittlesecret", is defined for encryption to maintain confidentiality.

Routing and Templates:

The app has dedicated routes (/register, /login) for handling user registration and login, respectively.
The views include several .ejs templates (e.g., home.ejs, register.ejs, login.ejs, secrets.ejs, submit.ejs) that render the pages users interact with.
Secure Session Management: The application uses session management through routes for login and logout, along with encrypted cookies.

Secrets Sharing Feature: Registered and logged-in users can anonymously share secrets on the platform through a "Submit a Secret" feature.

Server and Port Configuration: The Express.js server is set to listen on port 5002.

This app illustrates a fundamental approach to web security best practices, particularly through encryption, secure session handling, and user authentication.

License
This project is open-source and available under the MIT License.
