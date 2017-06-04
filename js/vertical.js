function rotateHeadCell(tableId) {
    'use strict';
    var aRows = document.getElementById(tableId).rows, padding = 10;
    [].every.call(aRows, function (row) {
        if (row.cells[0].tagName !== 'TH') {
            return false;
        }
        rotateCell(row);
        return true;
    });
    function rotateCell(row) {
        var maxHeight = -1, div = {};
        [].forEach.call(row.cells, function (cell) {
            cell.vAlign = 'bottom';
            if (cell.hasAttribute("data-rotate")) {
                // all cell content will be aligned to the bottom
                cell.vAlign = 'bottom';
                // we create a div with the current cell content rotated by 90 degree.
                // This way the content  height before rotation,  becomes the new cell width ,div.w, 
                // and  the content width before rotation, becomes  the new cell height , div.h.
                // The DIV , div.div ,itself  has a dimension of   zero X zero
                div = rotatedDiv(cell.innerHTML);
                // we force the table cell to be at least div.w pixels wide to fit the rotated content
                // for this we create an unvisible horizontal ruler of witdh div.w
                cell.innerHTML = '<hr style="visibility:hidden;width:' + div.w + '">';
                // we add the div.div no as a child to the cell, as the div has dimensions of zero it will
                // be rendered at the bottom-left of teh table cell.
                cell.appendChild(div.div);
                // we set the cell height know to the highest found
                if (div.h > maxHeight) {
                    maxHeight = div.h;
                    cell.style.height = maxHeight + padding + 'px';
                }
            }
        });
    }
    function rotatedDiv(html) {
        var w, h, div;
        div = document.createElement('DIV');
        document.body.appendChild(div);
        div.innerHTML = html;
        div.style.float = 'left';// shrinks the width of the div down to the size of the content
        div.style.transform = 'rotate(-90deg)';// rotate
        div.style.whiteSpace = ' nowrap';// keep 'formating'
        w = div.clientHeight;// save current height
        h = div.clientWidth;// save current width
        div.style.height = '0px';//make div size null
        div.style.width = '0px';
        div.style.overflow = 'visible';
        return {'div': div, 'h': h, 'w': w}; // return div and original dimensions
    }
}


