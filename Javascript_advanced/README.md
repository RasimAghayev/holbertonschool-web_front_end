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

<details>
  <summary>

## 1. Closure Scope Chain

  </summary>

- Create a variable named `globalVariable` with value `Welcome`
- Create a function `outer` that:
  - alerts the content of the variable `globalVariable`
  - creates a variable named `course` with value `Holberton`
  - creates a function `inner` that:
    - alerts the content of the variable `globalVariable` and `course` (concatenated)
    - creates a variable named `exclamation` with value `!`
    - creates a function `inception` that alerts the content of the variable `globalVariable`, `course`, and exclamati`on (concatenated)
    - calls the function `inception`
  - calls the function `inner`
- Call the function `outer`

### Compose the code:

- Write the function `inception` within `inner`
- Write the function `inner` within `outer`
- Call the function `outer` in the main code (outside any function)
- Call the function `inner` within `outer`
- Call the function `inception` within `inner`

### Requirements:

Running the script should display three popups one by one with the text `Welcome`, `Welcome Holberton`, and `Welcome Holberton!`

### Repo:

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `Javascript_advanced`
- File: `1-nested_functions.js`

      <details>
      <summary>Please review your task manually with the following checklist</summary>

      - [ ] `1-nested_functions.js` is present
      - [ ] in `1-nested_functions.js`, there is a variable named `globalVariable` outside the functions
      - [ ] in `1-nested_functions.js`, the global variable named `globalVariable` is a string `Welcome`
      - [ ] in `1-nested_functions.js`, there is a function named `outer`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, there is an alert with the content of `globalVariable`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, there is a variable named `course`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, the variable named `course` is a string `Holberton`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, there is a function named `inner`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, in the function named `inner`, there is an alert with the contents of `globalVariable` and `course`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, in the function named `inner`, there is a variable named `exclamation`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, in the function named `inner`, the variable named `exclamation` is a string `!`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, in the function named `inner`, there is a function named `inception`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, in the function named `inner`, in the function named `inception`, there is an alert with the contents of `globalVariable`, `course`, and `exclamation`
      - [ ] in `1-nested_functions.js`, in the function named `outer`, in the function named `inner`, after the `inception` function, `inception` is called
      - [ ] in `1-nested_functions.js`, in the function named `outer`, after the function named `inner`, `inner` is called
      - [ ] in `1-nested_functions.js`, after the `outer` function, `outer` is called
      - [ ] In your browser, in the developer tools console, paste the contents of `1-nested_functions.js` and press Enter. A popup with the text `Welcome` appears
      - [ ] After the `Welcome` alert, there is a `Welcome Holberton` alert
      - [ ] after the `Welcome Holberton` alert, there is a `Welcome Holberton!` alert

      </details>

  </details>
