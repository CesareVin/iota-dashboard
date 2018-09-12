# IoTDashBoard

This project represent the "iota-dashboard" that established a communication channel trought iota with a "iota-board" provided by the "iota-backend".

## Requirments

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

It require `node` and `ng`.

Install `node` from your official repository (see instruction on [NodeJS](https://nodejs.org/en/download/package-manager/) Website).

Install `ng` globally, the tested version as reported above is 1.6.5, so `npm install -g @angular/cli@1.6.5`

IOTA mam that's a requirment for the project doesn't have an npm package, so the dependency need to be downloaded manually.

After `npm install` move to `node_modules` folder and type `git clone https://github.com/iotaledger/mam.client.js.git` to download the mam client from official source.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you need to serve the dashboard from another address (not localhost) you can run the command  `ng serve --host 192.168.1.1`, and you can find the page on `http://192.168.1.1:4200/`.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To launch a builded version use something like http-server from npm packages.
