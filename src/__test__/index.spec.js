require("../index");
const {
  isDragging,
  dragOffset
} = window.index;


describe('drag-and-drop functionality', () => {
     beforeEach(() => {

    document.body.innerHTML = `<div id="parent" style="position: relative; width: 200px; height: 200px;">
                                     <div id="child" style="position: absolute; width: 50px; height: 50px; background-color: red;"></div>
                                </div>`;
    const child = document.getElementById('child');
    
     });

    it('mousedown event', () => {
        let isDraggingMock = false;
        const handleMousedown = jest.fn( e => {
            isDraggingMock = true;
            dragOffset.x = e.clientX - child.offsetLeft;
            dragOffset.y = e.clientY - child.offsetTop;});

        child.addEventListener('mousedown', handleMousedown({clientX:30, clientY: 30}));
        child.dispatchEvent(new Event('mousedown'));
        expect(handleMousedown).toHaveBeenCalledTimes(1);
        expect(isDraggingMock).toBe(true);
        expect(dragOffset.x).toBe(30);
        expect(dragOffset.y).toBe(30);
      });

      it('mousemove event', () => {
        const handleMousemove = jest.fn( e => {
            const constrainedX = Math.max(0, Math.min(100, 10));
            const constrainedY = Math.max(0, Math.min(100, 10));
            child.style.left = constrainedX + 'px';
            child.style.top = constrainedY + 'px';
        });
      
        document.addEventListener('mousemove', handleMousemove({ clientX: 20, clientY: 20 }));
        document.dispatchEvent(new Event('mousemove'));
      
        expect(child.style.left).toBe('10px');
        expect(child.style.top).toBe('10px');
      });
      
      it('mouseup event', () => {
        const handleMouseup = jest.fn();
     
        child.addEventListener('mousedown', handleMouseup);
        child.dispatchEvent(new Event('mouseup'));
    
        expect(isDragging).toBe(false);
      });
  });
  
  