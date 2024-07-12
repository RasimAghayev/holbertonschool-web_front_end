# Tasks

<details>
  <summary> 

  ## 0. Reboot styling
  </summary>
  

## 0. Reboot styling

From this HTML:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <style>
            .my-container {
                background-color: #FF0000;
            }
        </style>
    </head>
    <body>

        <div class="my-container">
            <h1>Hello</h1>
            <h2>Holberton</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat eleifend nulla, quis imperdiet lacus. Donec tempor lorem enim, sit amet tempus purus euismod sit amet. Nam laoreet quis purus a consequat. Quisque interdum bibendum varius. Praesent lobortis eros sit amet tortor varius elementum. Fusce eget varius ex. Cras id lectus consectetur, bibendum dolor in, hendrerit lacus. Praesent rutrum, odio id tincidunt fringilla, dolor eros condimentum lacus, blandit molestie massa velit hendrerit risus. Nam ex nunc, ultrices id nisi consectetur, mattis imperdiet purus. Sed tempus ullamcorper nisi, vitae pulvinar nunc varius eu. Maecenas ut volutpat lectus.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Phasellus quis dolor sed ligula porttitor fringilla.</li>
                <li>
                    <ul>
                        <li>Integer vulputate arcu quis luctus condimentum.</li>
                        <li>Integer commodo turpis non ligula viverra, ut sagittis elit ornare.</li>
                    </ul>
                </li>
                <li>Etiam porttitor justo in diam elementum, nec mollis tellus viverra.</li>
                <li>Vivamus non ligula quis dui auctor sagittis.</li>
            </ul>
        </div>

    </body>
</html>
```


Add Bootstrap to reset the CSS styling.

Your final page must look like this:

![Alt text](/Bootstrap/image/readme.md.0.jpg?raw=true "Optional Title")

### Repo:

- GitHub repository: ``` holbertonschool-web_front_end ```
- Directory: ``` Bootstrap ```
- File: ``` 0-index.html ```
<details>
  <summary>Please review your task manually with the following checklist</summary>
  
- [ ] README.md exists and is not empty
- [ ] File exists
- [ ] Bootstrap CSS stylesheet is added in the head
- [ ] Final result is the same as screenshots and GIF

</details>




</details>

## 1. Blocks

From this HTML:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr/>

        <div>
            <div>Primary</div>
            <div>Success</div>
        </div>

        <hr/>

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
        </div>
    </body>
</html>
```


Build this responsive web page:

![Alt text](/Bootstrap/image/1-index.gif?raw=true "Optional Title")

### Requirements:

- You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
- You can not change the HTML structure - only adding classes is allowed

### Behaviors/styles:

For all cells of all rows:

- Padding at .5rem
- Background color of the name of the cell
- Text centered and white

### First line:

- Each cell has the same width
- Screen >= 992px: display like 4 columns in one line
- Screen < 992px: display like 4 lines in one column

### Second line:

- Each cell has the same width
- Screen >= 576px: display like 4 columns in one line
- Screen < 576px: display like 4 lines in one column

### Third line:

- The last cell is taking 50% of the width screen
- The middle cell has 2 times the size of the first cell
- Screen >= 992px: display like 3 columns in one line
- Screen < 992px: display like 3 lines in one column

### Fourth line:

- Different order (from left to right) based on the size
- Screen >= 1200px: Primary -> Success -> Danger -> Warning
- Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger
- Screen between 768px and 992px: Danger -> Warning -> Primary -> Success
- Screen <= 768px: Success -> Danger -> Warning -> Primary

### Fifth line:

- Each cell has the same width (~16% of the screen)
- Screen >= 768px: display like 2 columns on each side of the screen in one line
- Screen < 768px: display like 2 lines in one column

### Last line:

- Each cell has the same width (~16% of the screen)
- Screen >= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell
- Screen < 768px: display like 3 lines in one column

<details>
  <summary>Please review your task manually with the following checklist</summary>
  
  File exists

HTML structure is the same as the one provided

No extra styling (in-line, in the head and/or a CSS file)

Cells have class p-2

Cells “Primary” have class bg-primary

Cells “Success” have class bg-success

Cells “Danger” have class bg-danger

Cells “Warning” have class bg-warning

All cells (or top container) have class text-white

All cells (or top container) have class text-center

First line: all cells have class col-lg

Second line: all cells have class col-sm

Third line: first cell has class col-lg or col-lg-2

Third line: second cell has class col-lg-4

Third line: last cell has class col-lg-6

Fourth line: all cells have class col

Fourth line: Screen >= 1200px: Primary -> Success -> Danger -> Warning

Fourth line: Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger

Fourth line: Screen between 768px and 992px: Danger -> Warning -> Primary -> Success

Fourth line: Screen <= 768px: Success -> Danger -> Warning -> Primary

Fifth line: all cells have class col-md-2 or col-md with the second cell with offset-md-8 or justify-content-between in the div.row

Fifth line: Screen >= 768px: display like 2 columns on each side of the screen

Fifth line: Screen < 768px: display like 2 lines

Last line: all cells have class col-md-2 or col-md

Last line: space between the first cell and the middle cell is 2 times bigger than the space between the last cell and middle cell -> class offset-md-4 in the middle cell and offset-md-2 in the last cell

Final result is the same as screenshots and GIF
</details>


### Repo:

- GitHub repository: ``` holbertonschool-web_front_end ```
- Directory: ``` Bootstrap ```
- File: ``` 1-index.html ```

- [ ] README.md exists and is not empty
- [ ] File exists
- [ ] Bootstrap CSS stylesheet is added in the head
- [ ] Final result is the same as screenshots and GIF

