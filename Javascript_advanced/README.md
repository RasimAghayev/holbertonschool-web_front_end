# Tasks

<details>
  <summary>

## 0. Lexical scoping and welcome message

  </summary>

Create a function named `welcome`:

- It takes two arguments: `firstName` (string) and `lastName` (string)
- It contains a variable named `fullName`, that will contains the `firstName` followed by a space and then the `lastName`
- Within the `welcome` function, write a function named `displayFullName`:
  - It should display an alert with the message `Welcome` + the variable `fullName` + and exclamation mark.
- Call the function `displayFullName` at the end of the function `welcome`

### How to test

- Open your web inspector in the tab “Console”
- Copy paste your code
- Run `welcome('Holberton', 'School');` should prompt an alert with this content: `Welcome Holberton School!`
- `alert(fullName)`, should return a reference error fullName is not defined

### Repo:

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `Javascript_advanced`
- File: `0-welcome.js`

  <details>
      <summary>Please review your task manually with the following checklist</summary>

  - [ ] there is a `README.md` and it is not empty
  - [ ] `0-welcome.js` is present
  - [ ] in `0-welcome.js`, there is a function named `welcome`
  - [ ] in `0-welcome.js`, the function named `welcome` takes two arguments: `firstName` and `lastName`
  - [ ] in `0-welcome.js`, the function named `welcome` contains a variable `fullName`, which is a string of `firstName` followed by a space and then `lastName`
  - [ ] in `0-welcome.js`, in the function named `welcome`, there is a function named `displayFullName`
  - [ ] in `0-welcome.js`, in the function named `welcome`, in the function named `displayFullName`, there is an alert containing the variable fullName => format Welcome fullName!
  - [ ] open a new tab in your browser, open developer tools, in the console, paste the contents of `0-welcome.js` and press Enter
  - [ ] A `welcome` alert like Welcome `firstName` `lastName`! is displayed where `firstName` is the first name you entered and `lastName` is the last name you entered
  - [ ] executing the steps from the previous checks did not trigger any errors in the developer tools console
  - [ ] in the developer tools console, running `welcome('eggceptional', 'individual')` displays an alert with message like Welcome eggceptional individual!
  - [ ] Execute in the console alert(fullName); -> an reference error should be raised

  </details>

</details>
