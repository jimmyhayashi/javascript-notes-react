[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
[VITE_BADGE]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[BULMA_BADGE]: https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white
[CSS_BADGE]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML_BADGE]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[PROJECT__BADGE]: https://img.shields.io/badge/📱Visit_this_project-000?style=for-the-badge&logo=project
[PROJECT__URL]: https://github.com/Fernanda-Kipper/Readme-Templates

<h1 align="center" style="font-weight: bold;">Javascript Notes React 📝</h1>

![react][REACT__BADGE]
![vite][VITE_BADGE]
![bulma][BULMA_BADGE]
![javascript][JAVASCRIPT__BADGE]
![html][HTML_BADGE]
![css][CSS_BADGE]


<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#started">App Routes</a> • 
  <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>


<p align="center">
    <video src="[../.github/example.mp4](https://github.com/user-attachments/assets/4b55d451-1017-48e0-8139-6b03600bb89b)" alt="Video Example" width="400px" controls>
        Your browser does not support video tags.
    </video>
</p>

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
cd project-name
npm install
npm run dev
```

The application will be available in your browser at http://localhost:5173. Make sure the backend is running on http://localhost:3000 to ensure proper communication between the frontend and backend.

<h2 id="routes">📍 Application Routes</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>/</kbd>          | home page
| <kbd>/login</kbd>     | page to login
| <kbd>/notes</kbd>     | page that contains all user notes
| <kbd>/user/edit</kbd> | page that contains user information
