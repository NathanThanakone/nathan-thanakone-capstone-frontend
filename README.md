
# DevDash

DevDash is designed to provide developers with an overview of their coding activities and progress while also providing a section for focus and productivity. The app displays various statistics and metrics such as time spent programming, recently worked on projects, and languages used. These metrics are tied to the specific code editor used, for example, VS Code. Overall the dashboard is a useful tool for keeping track of progress and helps stay focused on important tasks.



## Features

- Dashboard with stats on how much time is spent in your choice of code editor that is compatible with the WakaTime extension https://wakatime.com/plugins
- Pomodoro Timer
- Task List
## Tech Stack

**Client:** React, HTML5, SCSS, JavaScript

**Server:** Node, Express

**API:** WakaTime - https://wakatime.com/

**Libraries:** Chart.js/react-chartjs-2, React-Icons, React-Circular-Progressbar, Axios, UUID

https://www.chartjs.org/  
https://react-chartjs-2.js.org/  
https://react-icons.github.io/react-icons/  
https://www.npmjs.com/package/react-circular-progressbar  
https://www.npmjs.com/package/axios  
https://www.npmjs.com/package/uuid

 
## Demo

![DevDash Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBjYWExYWNmZTQ2MDRiZDQ0Mzk1NzRiMTg0YmE1ZmM1NjdhNGYxNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/ArvdSlm4y2GUyuDIMH/giphy.gif)


## Run Locally

Please note that DevDash requires the backend Express server in order to run. The server can be found at https://github.com/NathanThanakone/nathan-thanakone-DevDash-backend

If you wish to connect the app with your code editor to track your own stats, you will need to signup for a WakaTime account at:  

https://wakatime.com/signup  

and install the extension for your code editor. Instructions for installing the extension can be found here:

https://wakatime.com/plugins

Once an account has been set up, a personal API key will be generated for you and you will need to create a .env file with your API Key on your backend server.


Clone the project

```bash
  git clone https://github.com/NathanThanakone/nathan-thanakone-DevDash-frontend.git
```

Go to the project directory

```bash
  cd nathan-thanakone-DevDash-frontend
```

Install dependencies

```bash
  npm install
```

Start the frontend app

```bash
  npm run start
```


## Next Steps

