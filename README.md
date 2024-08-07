<h1 align="center" style="font-weight: bold;">Javascript Notes React 📝</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react" alt="React Badge"/>
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white" alt="Bulma Badge"/>
  <img src="https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript" alt="Javascript Badge"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge"/>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge"/>
</p>

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#started">App Routes</a>
</p>

https://github.com/user-attachments/assets/4b55d451-1017-48e0-8139-6b03600bb89b

<h2 id="started">📌 About</h2>

This project is a React-based frontend web application designed for note-taking with a user-friendly interface. Developed using Bulma, RBX, and React, the application allows users to create their accounts, edit user information, and delete their accounts. Additionally, users can create, edit, and save notes to the database, providing a comprehensive tool for managing personal notes effectively.

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

To run this application, you’ll need to have the following setup:

<h4>Backend</h4>

Before running the frontend application, you must have the backend project running. You can find the backend project [here](https://github.com/jimmyhayashi/javascript-notes-backend.git). Please follow the instructions in the backend repository to get it up and running.


<h3>Cloning</h3>

How to clone your project

```bash
git gh repo clone jimmyhayashi/javascript-notes-react
```

<h3>Starting</h3>

How to start your project

```bash
cd javascript-notes-react
npm install
npm run dev
```

The application will be available in your browser at http://localhost:5173. Make sure the backend is running on http://localhost:3000 to ensure proper communication between the Frontend and Backend.

<h2 id="routes">📍 Application Routes</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>/</kbd>          | home page
| <kbd>/register</kbd>  | page to register
| <kbd>/login</kbd>     | page to login
| <kbd>/notes</kbd>     | page that contains all user notes
| <kbd>/user/edit</kbd> | page that contains user information


