# Tasks

<details>
  <summary> 

  ## 0. Reboot styling
  </summary>

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


<details>
  <summary>
  
  ## 1. Blocks

  </summary>


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


### Repo:

- GitHub repository: ``` holbertonschool-web_front_end ```
- Directory: ``` Bootstrap ```
- File: ``` 1-index.html ```

<details>
  <summary>Please review your task manually with the following checklist</summary>
  
- [ ] File exists

- [ ] HTML structure is the same as the one provided

- [ ] No extra styling (in-line, in the head and/or a CSS file)

- [ ] Cells have class p-2

- [ ] Cells “Primary” have class bg-primary

- [ ] Cells “Success” have class bg-success

- [ ] Cells “Danger” have class bg-danger

- [ ] Cells “Warning” have class bg-warning

- [ ] All cells (or top container) have class text-white

- [ ] All cells (or top container) have class text-center

- [ ] First line: all cells have class col-lg

- [ ] Second line: all cells have class col-sm

- [ ] Third line: first cell has class col-lg or col-lg-2

- [ ] Third line: second cell has class col-lg-4

- [ ] Third line: last cell has class col-lg-6

- [ ] Fourth line: all cells have class col

- [ ] Fourth line: Screen >= 1200px: Primary -> Success -> Danger -> Warning

- [ ] Fourth line: Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger

- [ ] Fourth line: Screen between 768px and 992px: Danger -> Warning -> Primary -> Success

- [ ] Fourth line: Screen <= 768px: Success -> Danger -> Warning -> Primary

- [ ] Fifth line: all cells have class col-md-2 or col-md with the second cell with offset-md-8 or justify-content-between in the div.row

- [ ] Fifth line: Screen >= 768px: display like 2 columns on each side of the screen

- [ ] Fifth line: Screen < 768px: display like 2 lines

- [ ] Last line: all cells have class col-md-2 or col-md

- [ ] Last line: space between the first cell and the middle cell is 2 times bigger than the space between the last cell and middle cell -> class offset-md-4 in the middle cell and offset-md-2 in the last cell

- [ ] Final result is the same as screenshots and GIF
</details>


</details>


<details>
  <summary> 

  ## 2. Table of chemical elements
  </summary>

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
        <header>
            <ul>
                <li>
                    <a href="/">
                        <img src="https://via.placeholder.com/150x50" />
                    </a>
                </li>
                <li>
                    <a href="#">Chemical elements</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
            </ul>
        </header>

        <main>
            <section>
                <div role="alert">
                    <h4>List of chemical elements</h4>
                    <p>This is a list of the 5 first chemical elements which have been identified as of 2019.</p>
                    <hr>
                    <p>A popular visualization of all 118 elements is <a href="https://en.wikipedia.org/wiki/Periodic_table">the periodic table of the elements</a>.</p>
                </div>
            </section>

            <section>
                <h1>Chemical elements <span>only 5</span></h1>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Atomic number</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Element</th>
                                <th scope="col">Origin of name</th>
                                <th scope="col">Group</th>
                                <th scope="col">Period</th>
                                <th scope="col">Atomic weight</th>
                                <th scope="col">Density</th>
                                <th scope="col">Melting point</th>
                                <th scope="col">Boiling point</th>
                                <th scope="col">Specific heat capacity</th>
                                <th scope="col">Electro­negativity</th>
                                <th scope="col">Abundance in Earth's crust</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>H</td>
                                <td>Hydrogen</td>
                                <td>Greek elements <i>hydro-</i> and <i>-gen</i>, meaning 'water-forming'</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1.008</td>
                                <td>0.00008988</td>
                                <td>14.01</td>
                                <td>20.28</td>
                                <td>14.304</td>
                                <td>2.20</td>
                                <td>1400</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>He</td>
                                <td>Helium</td>
                                <td>Greek <i>hḗlios</i>, 'sun'</td>
                                <td>18</td>
                                <td>1</td>
                                <td>4.002602</td>
                                <td>0.0001785</td>
                                <td>—</td>
                                <td>4.22</td>
                                <td>5.193</td>
                                <td>–</td>
                                <td>0.008</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Li</td>
                                <td>Lithium</td>
                                <td>Greek <i>líthos</i>, 'stone'</td>
                                <td>1</td>
                                <td>2</td>
                                <td>6.94</td>
                                <td>0.534</td>
                                <td>453.69</td>
                                <td>1560</td>
                                <td>3.582</td>
                                <td>0.98</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Be</td>
                                <td>Beryllium</td>
                                <td>Beryl, a mineral (ultimately from the name of Belur in southern India)</td>
                                <td>2</td>
                                <td>2</td>
                                <td>9.0121831</td>
                                <td>1.85</td>
                                <td>1560</td>
                                <td>2742</td>
                                <td>1.825</td>
                                <td>1.57</td>
                                <td>2.8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>B</td>
                                <td>Boron</td>
                                <td>Borax, a mineral (from Arabic <i>bawraq</i>)</td>
                                <td>13</td>
                                <td>2</td>
                                <td>10.81</td>
                                <td>2.34</td>
                                <td>2349</span></td>
                                <td>4200</td>
                                <td>1.026</td>
                                <td>2.04</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    </body>
</html>
```


Build this responsive web page:

![png](/Bootstrap/image/readme.md.2.png?raw=true "png img")

![gif](/Bootstrap/image/2-index.gif?raw=true "Gif anime")


### Requirements:

You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
You can not change the HTML structure - only adding classes is allowed
Behaviors/styles:

+ Header:
    + With border bottom
    + Padding .5rem and margin bottom 1rem
    + Background color “light”
    + Horizontal listing, no margin bottom:
        + First item aligned on the left with a border rounded image
        + 2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style “secondary”
        + The link “Chemical elements” is active
+ The main block has full width, spanning the entire width of the viewport (container-fluid)
+ The first section:
    + The div inside is an alert style of “info”:
        + h4 has an alert heading style
        + The last paragraph (containing the link) should not have any margin bottom
+ The second section:
    + h1 has a margin bottom at 1.5rem and margin top at 3rem
    + Inside the h1, “only 5” has a badge layout of type “info”
    + The div is able to make the table responsive with a break at 992px
    + The table has “dark” style and hover on rows

### Repo:

- GitHub repository: ``` holbertonschool-web_front_end ```
- Directory: ``` Bootstrap ```
- File: ``` 2-index.html ```

    <details>
    <summary>Please review your task manually with the following checklist</summary>
    
    - [ ] File exists
    - [ ] HTML structure is the same as the one provided
    - [ ] No extra styling (in-line, in the head and/or a CSS file)
    - [ ] header has class border-bottom
    - [ ] header has class mb-3 (or m-3)
    - [ ] header has class p-2
    - [ ] header has class bg-light
    - [ ] header ul has class list-inline or d-flex or list-group-horizontal
    - [ ] header ul has class mb-0
    - [ ] header ul li have class list-inline-item (except if header ul has class d-flex or list-group-horizontal)
    - [ ] First header ul li is aligned on the left (has class mr-auto)
    - [ ] header ul li img has class rounded
    - [ ] Second and last header ul li a have class btn and btn-secondary
    - [ ] Second header ul li a has class active
    - [ ] Second and last header ul li have class align-self-center (except if header ul has class d-flex or list-group-horizontal)
    - [ ] main has class container-fluid
    - [ ] First section has the container div with classes alert and alert-info
    - [ ] h4 inside the alert has class alert-heading
    - [ ] Last p of the alert has class mb-0
    - [ ] In the second section, h1 has classes mt-5 and mb-4
    - [ ] In the second section, h1 span has classes badge, badge-pill and badge-info
    - [ ] div containing table has class table-responsive-lg
    - [ ] table has classes table, table-hover and table-dark
    - [ ] Final result is the same as screenshots and GIF
    </details>
</details>
