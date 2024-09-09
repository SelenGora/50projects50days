const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  //So we're going to have this function checkboxes and we need to
  // figure out where is the trigger point, where do we want when we're
  // scrolling down, where do we want them to start to come in?
  //So we're going to be using window dot inner height.

  const triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // Let's get the top of the box.

    //So this method returns what's called the dom rect object and Dom rect is
    // just basically a rectangle,describes the size and position of a rectangle.
    //So it returns that providing information about the size of an element and its position relative to the viewport. So we want to see where the top of that particular box is.
    const boxTop = box.getBoundingClientRect().top;

    //And then all we need to do after that is see if the top of the box is less than the trigger bottom.
    if (boxTop < triggerPoint) {
      //If it is, we want to add the class of show.
      box.classList.add("show");
    } else {
      //If it's not, if it's more, then we want to remove the class of show.
      box.classList.remove("show");
    }
  });
}
