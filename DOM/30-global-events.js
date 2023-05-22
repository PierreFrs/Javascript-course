/* 
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', function () {
    // Your code goes here
});

document.addEventListener...

*/

// window.addEventListener("DOMContentLoaded", function () {
//   const heading = document.querySelector("h1");
//   console.log(heading);
//   heading.style.color = "red";
// });

/* 
The load event fires when the whole page has loaded, including all dependant ressources such as stylesheets and images. This is in contrast with DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish.

window.addEventListener('load', function () {
    // Your code goes here
});

document.addEventListener...

*/

// window.addEventListener("load", function () {
//   const img = document.querySelector("img");
//   console.log(img);
//   console.log(img.width);
// });

/* 
Scroll Event - on element or document

    window.addEventListener('scroll', function () {
        console.log(window.scrollY + 'px');
        console.log(window.scrollX + 'px');
    });

document

scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)

scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset)
*/

/* 
innerWidth - The read-only Window property the interior width of the window in pixels

innerHeight - the read-only property of the Window interface returns the interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative in the viewport.
*/

// console.log("height : " + window.innerHeight);
// console.log("width : " + window.innerWidth);

// const btn = document.querySelector(".btn");
// const box = document.querySelector(".box");

// btn.addEventListener("click", function () {
//   const values = box.getBoundingClientRect();
//   console.log(values);
// });

/* 
The resize event fires when the document view (window) has been resized.
*/

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
