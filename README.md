# Nintendo Switch - Game store demo

This project is a replica of actual nintendo switch game store, appling some angular skills or just for fun.

## Prerequisites

Make sure you have the following installed before running the project:

- nvm
- Angular CLI (v15.2.9)

## Project Setup

1. Use terminal to clone the repository

```shell
git clone https://github.com/deache/nintendo-switch.git
```

2. Access to the repository folder

```shell
cd nintendo-switch
```

3. Install node version (.nvmrc file included):

```shell
nvm install
```

or if you already have that version just run

```shell
nvm use
```

4. Install npm dependencies

```shell
npm install
```

## Inital Setup

For get games data I created a script to scrape real nintendo switch store page and get games data currently showing

```shell
npm run fetch-data
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deployment

Project was deployed using firebase, url site `https://nintendo-switch-d4158.web.app`

To deploy a new version just need to run next script `npm run deploy`
