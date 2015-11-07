# react-form-steps-example
Form steps example with React.js

## Setup
Either [fork](https://help.github.com/articles/fork-a-repo/) and [clone](https://help.github.com/articles/cloning-a-repository/) this repository or download it as a `.zip` from the button on the right side of the repo's GitHub page.

Make sure you have [Node.js](https://nodejs.org/en/) installed on your computer. You can grab a manual download of it from the website, or if you prefer Homebrew:
* Get Homebrew:
  ```
  $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

* Get Node:
  ```
  $ brew install node
  ```

Once you have node installed (you can double check with `$ node -v`), we'll use NPM (Node Package Manager), which ships with Node, to install our project dependencies (such as React.js):
```bash
$ npm install
```

Once everything is installed, simply run
```bash
$ npm run build:before
```
to make sure everything is running okay. We are going to be using this command to package up our modular JavaScript code so that our HTML can make use of it.
