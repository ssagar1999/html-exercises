#  Project 1: HTML and CSS  

---

##  What You Need to Do  

You will build **one HTML file** (`index.html`) that can look **two different ways**, depending on which CSS file is connected.  

- **HTML file name:** `index.html`  
- **Title of the page:** `CS142 Project 1`  
- **Two CSS files:**  
  - `styleA.css` → "Version A"  
  - `styleB.css` → "Version B`  

 When you switch the stylesheet in your HTML file, the same page should change its look!  

**Version A Screenshot:**  
![Version A](https://web.stanford.edu/class/cs142/images/project1versionA.png)  

**Version B Screenshot:**  
![Version B](https://web.stanford.edu/class/cs142/images/project1versionB.png)  

---

##  Version A (styleA.css)  

- **6 boxes stacked vertically** (one on top of another).  
- Boxes are:  
  - **100x100 px** in size  
  - Centered horizontally  
  - Equally spaced vertically (spacing adjusts when window resizes)  
- Styling:  
  - Each box has a **1px line on top** (`#687291`)  
  - Background colors alternate: `#dfe1e7`, `#eeeff2`  
  - Last box is **special**:  
    - Background: `#687291`  
    - Border: **4px solid black**  
    - Text centered vertically  
- **Font:** Tahoma, 40px  

---

## 🎨 Version B (styleB.css)  

- **5 boxes side by side** in the **top-left corner**.  
- They **stay on the same line** (no wrapping when resizing).  
- The **last box** is **stuck to the bottom-right corner** of the screen (always stays there).  
- Boxes are:  
  - **100x150 px** in size  
  - Background: `#eeeff2`  
  - Left border: **10px dotted `#D0D0FF`**  
  - Space between boxes: **10px**  
- Hover effect:  
  - Cursor → hand (pointer)  
  - Background → yellow  
  - Text color → goldenrod  
- **Font:** Tahoma, 40px  
- Text should have **10px padding** inside the box  

---

## ✨ Style Points (5 points)  

- Your HTML must be **valid XHTML 1.0** (check at [W3C Validator](http://validator.w3.org)).  
- Code should be:  
  - Clean  
  - Indented properly  
  - Easy to read  

---

## 🌟 Extra Credit (2 points)  (optional)

Add a third stylesheet **`styleC.css`**.  
Use **any 2** of these cool CSS features:  

- Gradients  
- Transitions  
- Animations  
- Web fonts  
- Shadows  

---

## 🛠 Hints & Tips  

- Some useful CSS properties:  
  - `display: inline-block;`  
  - `height: 100%;`  
  - `white-space: nowrap;`  
- You **must use Flexbox** for at least one part.  
- Test your code in **Chrome** to avoid browser issues.  
- Don’t use **JavaScript** or external CSS libraries — write your own!  

---

## 📦 What to Submit  

Upload these files:  

- `index.html`  
- `styleA.css`  
- `styleB.css`  
- *(optional)* `styleC.css`  

Using the **class submission system**.  

---

