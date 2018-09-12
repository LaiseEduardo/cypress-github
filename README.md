# cypress github

This repository is an example on how to automate github UI and API repository operations and login using cypress.io

## How to run
- Clone this repository
- Run `npm install`
- [Create an access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) you need to select: repo, user and delete_repo scopes
- Edit the file `cypress.json` adding the access token, github username and password (it doesn't work if you have 2FA enabled)

## Commands available
- `npm run cypress:run` it will run all tests on headless mode
- `npm run cypress:open` it will open cypress GUI
- `npm run cypress:api` it will only run tests on api folder
- `npm run cypress:e2e` it will only run test on e2e folder
- `npm run cypress:chrome` it will run all tests on chrome browser
