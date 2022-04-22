# SpoRe - Spotify React

Spore is a React application built using Spotify API. This application is made using tailwind css, typescript, framer motion, redux, and primereact. This application also uses husky as pre-commit hooks and pretty-staged and eslint for linting and formatter for already created coding. for eslint, there is an additional package that aims to set the correct import order according to the configuration that the user wants to use, for commits,  there is a package called commitizen which can help developers to write commits that follow the correct conventions. For testing, several components in this application have been tested using react-testing-library (RTL). tested things such as fireevent, mocking API using MSW, rendering, and also testing whether the state in a component is running well

## Installation
To install this application, users simply run the command
```bash
yarn
```
or
```bash
npm install
```

To create a .husky folder, you can use the following command
```bash
yarn husky-install
```
and to add pre-commit hooks to husky, you can use the following command
```bash
npx husky add .husky/pre-commit "your scripts here"
```


## Usage
To run the application on the development server, keep in mind that this application can use 2 commands, namely 
```yarn start``` and ```yarn dev```. but for better results and formatting needs, it is highly recommended to use ```yarn dev```. if you feel uncomfortable, feel free to change the script in package.json
```bash
    "start": "craco start",
    "build": "cross-env GENERATE_SOURCEMAP=false craco build",
    "test:watch": "craco test",
    "test": "craco test --coverage --watchAll=false",
    "eject": "craco eject ",
    "fix": "eslint  ./ --ext js,jsx,ts,tsx",
    "format": "yarn prettier --write src/",
    "husky-install": "husky install",
    "commit": "cz",
    "dev": "yarn fix && yarn format && yarn start"
 ```

## Added Features (For User)
Here are some additional features that I added in this app :
- Sidebar to provide links from the navigation bar which is closed due to the use of mobile devices. Also added a navigation bar to show the profile image of the user and if the user wants to logout from the application. The footer is below and also provided the same link as the navigation bar with the addition of several icons such as github, linkedin and email


https://user-images.githubusercontent.com/70279376/164506144-f292c3e8-0880-40ab-a9b6-c41a73a21b7c.mp4


- Improved SEO by using react helmet async. on each page will have a title and description that can be different from other pages. the html file is also added with favicon and manifest file which has various sizes for PWA needs
example: <br>
![image](https://user-images.githubusercontent.com/70279376/164506450-cacc067b-cae5-484e-8a39-27a089710a95.png) <br>
![image](https://user-images.githubusercontent.com/70279376/164506519-bc09a889-04e5-4710-afba-1cd451f904b7.png) <br>
favicon image: <br>
![image](https://user-images.githubusercontent.com/70279376/164520614-56cd4a7e-1156-410c-9978-ef6051d2c3f3.png)<br>
![favicon-96x96](https://user-images.githubusercontent.com/70279376/164502561-908d430d-a5d4-489d-9995-8059d2654de4.png)
- Added lazy image feature to improve performance on cards used to show albums/tracks. which is where the image will not be loaded until the user reaches the image. 

https://user-images.githubusercontent.com/70279376/164706906-aaf9af08-d7da-4577-910a-8bd2e9abd892.mp4


- The use of framer motion for animation such as stagger children or changing the opacity and position of objects. This is most visible on the cards displayed on the page and sidebar
- Unit testing uses msw (mock service worker). you can see the implementation of ```CustomCard.test.tsx``` or in ```PlaylistList.test.tsx```
![image](https://user-images.githubusercontent.com/70279376/164706517-74e0afbd-9d1f-4218-8d8c-bf5f60c63888.png)
- There is pagination which can provide the ability to limit the number of responses from the spotify api. This pagination follows the number of songs provided by spotify or provided by the developer
- In the playlist creation section, users can select and delete the songs they have selected again. there is a small button on the lower right side that serves to show what songs the user has selected and if the user wants to delete all of them or one by one
![image](https://user-images.githubusercontent.com/70279376/164505369-50655b53-c6ee-45d4-add9-d2af020b42cd.png)
- To improve the user interface user experience, every time the user opens another page, the page will immediately return to the top (original) position. Due to some problems in some browsers for example firefox, a small button is provided on the left side to allow the user to return to the top positio. The addition of animation using framer motion is also included in this case. Uses staggerchildren and some animations such as components that are zoomed in when the mouse is hovered and css that changes the color of the text on the sidebar


https://user-images.githubusercontent.com/70279376/164516137-95c4c5c4-8e45-49f7-9de1-0ecb3d9a059f.mp4






https://user-images.githubusercontent.com/70279376/164517132-e442672d-9e80-49dc-9782-c1a764acbc3f.mp4


- There is a use of custom hooks named useDebounce. Implementation of the debounce can be seen on the album page. the default time provided by useDebounce is 300ms

https://user-images.githubusercontent.com/70279376/164517709-54181ade-5992-44ca-8ca4-365e84801085.mp4

- Added a component called toast to warn the user about any actions that have been performed when creating a playlist or adding a song



https://user-images.githubusercontent.com/70279376/164518448-c6650653-7d7c-43d3-88bd-64afb0894f20.mp4

- This website covers all mobile devices up to a size of 320px
![image](https://user-images.githubusercontent.com/70279376/164707215-92243147-c2fb-4400-84b5-23857f217ecd.png)

- Some new pages to see albums that have just been released and if you want to find albums with details
![image](https://user-images.githubusercontent.com/70279376/164707796-1c43edda-7d0a-4bfe-b4c5-59cc604a6914.png)
![image](https://user-images.githubusercontent.com/70279376/164707868-c0724234-e852-4cb8-aa57-97d8e7cf05b7.png)
![image](https://user-images.githubusercontent.com/70279376/164707905-21820bee-a859-4bb7-a7fb-d9f0ace6b088.png)


## Added Features (For Developers)
There are several features added to this React application that can make it easier for developers to develop in the future
- Husky : There is a husky that has been configured in this application so that when the user commits, before the commit occurs, certain scripts will be executed. in this application, prettier and eslint fix are installed as formatters and testing is run that shows coverage and what tests pass
- eslint-plugin-import : Used to sort the existing imports in React. for documentation of this plugin can be seen [here](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
- commitizen : Used to help developers write commit messages according to conventions. Documentation can be accessed [here](https://github.com/commitizen/cz-cli)
- craco : Used to convert React production build into preact using ```preact/compat``` without ejecting the react itself. with the help of craco, i also customise the webpack a little bit by adding ```terser-webpack-plugin```. Documentation can be accessed [here](https://github.com/gsoft-inc/craco)
- redux-persist: specifically to store data from users and tokens from users in localstorage. suitable for storing crucial data. Documentation can be accessed [here](https://github.com/rt2zz/redux-persist)
