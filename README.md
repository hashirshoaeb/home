<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. 
    <br/>
    <strong>Site URL / Demo » </strong> 
    <a href="https://hashirshoaeb.github.io/home">hashirshoaeb.github.io/home</a>
    <br />
    <br />
    <a href="https://hashirshoaeb.github.io">About Me</a>
  </p>
</p>

![GitHub contributors](https://img.shields.io/github/contributors/hashirshoaeb/home?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/hashirshoaeb/home?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/hashirshoaeb/home?style=for-the-badge)](https://github.com/hashirshoaeb/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/hashirshoaeb/home?color=ffcc66&style=for-the-badge)](https://github.com/hashirshoaeb/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/hashirshoaeb/home?style=for-the-badge)](https://github.com/hashirshoaeb/home/blob/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/hashirshoaeb?color=ffcc66&logo=twitter&logoColor=ffffff&style=for-the-badge)](https://twitter.com/hashirshoaeb)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=^22.12.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=^10.9.0&color=cb0000&style=for-the-badge)](https://nodejs.org)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li>
          <a href="#technology-stack-">Technology Stack 🛠️</a>
        </li>
        <li>
          <a href="#structure-">Structure ⚓</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting started 💗</a>
      <ul>
        <li>
          <a href="#prerequisites-">Prerequisites 🍪</a>
        </li>
        <li>
          <a href="#setup-and-deployment-">Setup And Deployment 🔧</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#support-my-work">Support my work</a>
    </li>
    <li>
      <a href="#showcase-">Showcase 🚀</a>
    </li>
    <li>
      <a href="#versão-em-português-brazil">Versão em Português :brazil:</a>
    </li>
    <li>
      <a href="#notice">Notice</a>
    </li>
    <li>
      <a href="#stargazers-over-time">Stargazers over time</a>
    </li>
  </ol>
</details>

# About the project

[![Site preview](/public/social-image.png)](https://hashirshoaeb.github.io/home)


## Technology stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure ⚓

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements

# Getting started 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at hashirshoaeb@gmail.com.

# Support my work

If you found this project valuable, please consider giving it a ⭐️ on GitHub. Your support keeps me motivated! If you'd like to further support my work, you can buy me a book. Thank you for your generosity!

<div>
  <a href="https://www.buymeacoffee.com/hashirshoaeb"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a book&emoji=📖&slug=hashirshoaeb&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
 </div>

# Showcase 🚀

Have you changed something in the code to create your own version? Feel free to share with me, I will list them in this space.

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/justiceserv/justiceserv.github.io">
        <img src="READMEdocs/justiceserv-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Guhyun Chung</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/hamzasohail0/home/">
        <img src="READMEdocs/hamzasohail0-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Hamza Sohail</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/AymunTariq/home/">
        <img src="READMEdocs/aymuntariq-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Aymun Tariq</b></sub>
      </a>
      <br />
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/anaashrafi/home/">
        <img src="READMEdocs/anaashrafi-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Ana Ashrafi</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/jefferyjohn/home/">
        <img src="READMEdocs/jefferyjohn-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Jeffery John</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/remimestdagh/home/">
        <img src="READMEdocs/remimestdagh-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Remi Mestdagh</b></sub>
      </a>
      <br />
    </td>
  </tr>
</table>

# Versão em Português :brazil:

Esse projeto foi traduzido para português! Se você gostou dele e quer criar a sua própria versão, confira o repositório do [@tashima42](https://github.com/tashima42) em [https://github.com/Tashima42/home](https://github.com/Tashima42/home).
Novas contribuições e revisões na tradução são muito bem vindas!

# Notice:

This project has been **archived**. Means that it is no longer actively maintained by developer. Free free to fork, use and maintain your own version. You can check my new portfolio template [here](https://github.com/hashirshoaeb/portfolio)

# Stargazers over time

[![Stargazers over time](https://starchart.cc/hashirshoaeb/home.svg)](https://starchart.cc/hashirshoaeb/home)
