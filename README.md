<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dongtandung2001/SQL4U">
    <img src="frontend\src\component\login\loginPage\database-login.png" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">SQL4U</h3>

  <p align="center">
     Dynamic online and learning website providing tutorials on Database
    <br />
    <a href="https://github.com/dongtandung2001/SQL4U"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dongtandung2001/SQL4U">View Demo</a>
    ·
    <a href="https://github.com/dongtandung2001/SQL4U/issues">Report Bug</a>
    ·
    <a href="https://github.com/dongtandung2001/SQL4U/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start-the-website">Start The Website</a></li>
      </ul>
    </li>
<!--     <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
<!--     <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
<!--     <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is group 4's final project about building a dynamic online and learning website providing tutorials, projects on Database. 
This website was originally hosted on AWS. However, due to too much money charged by AWS for hosting services, we had to shut down the server after the project was graded. See the report for more informatino about hosting ( Page 28-35).
<a href="https://github.com/dongtandung2001/SQL4U/blob/main/FinalProjectReportGroup4.docx.pdf"><strong>Project Report</strong></a>

### Built With

* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
* MongoDB
  ```
  https://www.mongodb.com/docs/manual/installation/
  ```
* Node.JS
  ```
  https://nodejs.org/en/download/
  ```

### Installation

1. Generate key on https://generate-random.org/api-key-generator?count=1&length=128&type=mixed-numbers&prefix=
2. Clone the repo
   ```sh
   git clone https://github.com/dongtandung2001/SQL4U.git
   ```
3. Install NPM packages
    * backend server
    ```sh
    cd backend
    npm i
    ```
    * frontend server
    ```sh
    cd frontend
    npm i
    ```
4. Enter your key in `process.env`
   ```sh
   export sql4u_jwtPrivateKey='Your generated key (constant)'
   ```
5. Import database
   ```sh
   mongorestore -d sql4u path_to_project/sql4u
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Start the website

1. Database
    ```sh
    mongod
    ```
2. Backend server
* Start server
  ```sh
  cd backend
  npm start
  ```
3. Frontend server
* Add proxy to `package.json` to resolve CORS ( don't need to do this when hosting)
    ```js
    "proxy": "http://localhost:3900"
    ```
* Setting environment variables in `env.development` 
    ```js
    REACT_APP_API_URL=/api
    ```
* Start server
  ```sh
  cd frontend
  npm start
  ```



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 -->

<!-- ROADMAP -->
## Roadmap

- [ ] Learning Hub
- [ ] Interview Question
- [ ] Q & A
- [ ] Recommended Project

All features are recapped in the report. ( Page 50 - 64)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 -->

<!-- CONTACT -->
## Contact

Dung (Daniel) Dong - dongtandung2001@gmail.com

Project Link: [https://github.com/dongtandung2001/SQL4U](https://github.com/dongtandung2001/SQL4U)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dongtandung2001/SQL4U.svg?style=for-the-badge
[contributors-url]: https://github.com/dongtandung2001/SQL4U/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dongtandung2001/SQL4U.svg?style=for-the-badge
[forks-url]: https://github.com/dongtandung2001/SQL4U/network/members
[stars-shield]: https://img.shields.io/github/stars/dongtandung2001/SQL4U.svg?style=for-the-badge
[stars-url]: https://github.com/dongtandung2001/SQL4U/stargazers
[issues-shield]: https://img.shields.io/github/issues/dongtandung2001/SQL4U.svg?style=for-the-badge
[issues-url]: https://github.com/dongtandung2001/SQL4U/issues
[license-shield]: https://img.shields.io/github/license/dongtandung2001/SQL4U.svg?style=for-the-badge
[license-url]: https://github.com/dongtandung2001/SQL4U/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/danieldong2001
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Express.js]: https://img.shields.io/badge/Express-0769AD?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDb-589636?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: http://mongodb.com/
