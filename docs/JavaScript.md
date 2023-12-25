# JavaScript

<details>
    <summary>Bundling</summary>
    <p>
    To boost website preformance when it comes to Javascript and Css files, it is preference especially for this website to bundle all JS and CSS files as they will not create one gigantice file when they are minified and combined, so to reduce nubmer of requests bundling CSS and JS in only one file a wise decision! 
    </p>
    <p>
    webpack configuration file is tailored for this website and it is configured to provide comfortable development experience by only running <code>npm run watch</code> command.
    </p>
    <p>
    <code>dist</code> directory that is configured to be created by webpack is the source that deployment websites should consume website from (production website files), and don't forget to run <code>npm run build</code> to generate production files!
    </p>
</details>

<details>
    <summary>Features</summary>
    <pre>
    project/
    |-- js/
    |   |-- app.js
    |   |-- utlis/
    |       |-- cookies.js
    |   |-- modules/
    |       |-- home.js
    |-- dist/
    </pre>
    <ol>
        <li>
            Modules directory to Js logic that is related to specific pages
        </li>
        <li>
            Utils directory to store common functionalities that can be used in all pages or multiple specific pages
        </li>
    </ol>
</details>

<details>
    <summary>Features</summary>
    <ol>
        <li>Dark Theme switch</li>
        <li>Form Validation</li>
        <li>Cookies</li>
    </ol>
</details>
