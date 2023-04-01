# Launching this app locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Follow these steps to start the app locally:

## Clone this repo

```
git clone https://github.com/pdwarkanath/srms
```

## Install dependencies

Once in the cloned directory run the following:

```
npm install
npm i -g json-server
```

## Start Server
JSON server is a mock API that holds data in `db.json` file and exposes basic HTTP methods such as GET, POST on the data. Use the following command to start the server:

```
npm run server
```

## Start App

Once the server is running, all that remains is to start the React application. In a different terminal window, run the following command:

```
npm start
```

This should start the application in the  default browser window at `localhost:3000`

## Troubleshooting tips

Please ensure that you have at least Node version >=12 for this to work.