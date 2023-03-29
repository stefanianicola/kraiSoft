import './index.css';

const child = document.getElementById('child');
const parent = document.getElementById('parent');
 let isDragging = false;
let dragOffset = { x: 0, y: 0 };

child !== null && child.addEventListener('mousedown', function(event) {

  isDragging = true;
  dragOffset.x = event.clientX - child.offsetLeft;
  dragOffset.y = event.clientY - child.offsetTop;

});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const x = event.clientX - dragOffset.x;
    const y = event.clientY - dragOffset.y;
    const maxX = parent.clientWidth - child.offsetWidth;
    const maxY = parent.clientHeight - child.offsetHeight;
    const constrainedX = Math.max(0, Math.min(maxX, x));
    const constrainedY = Math.max(0, Math.min(maxY, y));
    child.style.left = constrainedX + 'px';
    child.style.top = constrainedY + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});


window.index = {
  isDragging,
  dragOffset
};
/* This code adds event listeners to the child element and the document that allow for dragging the child element within 
its parent. When the mouse is pressed down on the child element, isDragging is set to true and dragOffset is set to the 
difference between the mouse coordinates and the child element's offsetLeft and offsetTop. When the mouse moves, if 
isDragging is true, then constrainedX and constrainedY are calculated based on maxX and maxY (the maximum x and y 
    coordinates of the parent element). The left and top style properties of the child element are then set to 
    these constrained coordinates. When the mouse is released, isDragging is set to false. */
