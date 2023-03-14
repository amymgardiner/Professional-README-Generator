# Professional README Generator

## About

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. If a user was able to quickly and easily generate a README file for their project, then it would allow them to devote more time working on the project.

With that in mind, I created a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

## What it does

It is a command-line application that accepts user input. When the user is prompted for information about their application repository and after answering the questions, then a high-quality, professional README.md is generated with the title of their project and sections entitled License, Table of Contents, Description, Installation, Usage, Contributing, Tests, and Questions.

If you click on the links in the Table of Contents, then you are taken to the corresponding section of the README.

When the user is asked for their project title, then it is displayed as the title of the README.

When they enter description, installation instructions, usage information, contribution guidelines, and test instructions, then his information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

Similarly, when they choose a license for their application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

Finally, when they enter their username and email, then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

## How to use it

To use this program, you would first need to clone my GitHub repository:
(https://github.com/amymgardiner/Professional-README-Generator)

If you don't already, you would also need to download and install Node.js. You can read how to do that here:
(https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

Once cloned, open up your command line terminal and go to the file containing the repository on your computer. Then type in the following command:

npm install

which installs the dependencies to the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json.

Finally, the application will be invoked by using the following command:

node index.js

## Example

An example of the finished README project can be seen in the "dist" folder in my github repository, under the name "Sample-README.md"

Here is a video I made of myself using the program and the finished result shown in VS Code and on my GitHub repository.

https://user-images.githubusercontent.com/99151426/178640607-984d4a4a-de62-4519-9518-9949e2ff4140.mp4
