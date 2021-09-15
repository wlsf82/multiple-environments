# multiple-environments

Sample project to demonstrate how to run Cypress tests on multiple environments based on config files per environment.

## Pre-requirements

It is required to have Nodejs and NPM installed to run this project.

> I used versions `v14.17.3` and `6.14.13` of Nodejs and NPM, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

In this project, you can run tests against two different environments (development and production).

### Development

Run `npm run test:dev` to run the tests in headless mode against the development environment.

Or run `npm run cy:open:dev` to open Cypress in interactive mode and run the tests against the development environment.

### Production

Run `npm run test:prod` to run the tests in headless mode against the production environment.

Or run `npm run cy:open:prod` to open Cypress in interactive mode and run the tests against the production environment.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💜 by [Walmyr](https://walmyr.dev).
