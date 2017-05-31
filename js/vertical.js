function rotateHeadCell(tableId) {
    'use strict';
    var aRows = document.getElementById(tableId).rows, padding = 4;
    [].every.call(aRows, function (row) {
        if (row.cells[0].tagName !== 'TH') {
            return false;
        }
        rotateCell(row);
        return true;
    });
    function rotateCell(row) {
        var rotate = [], maxw = -1;
        [].forEach.call(row.cells, function (cell) {
            var w;
            if (!cell.hasAttribute("data-rotate")) {
                cell.vAlign = 'bottom';
                return;
            }
            rotate.push(cell);
            cell.vAlign = 'middle';
            cell.innerHTML = '<div class=hgs_rotate>' + cell.innerHTML + '</div>';
            w = cell.clientWidth;
            if (w > maxw) {
                maxw = w;
                cell.style.height = maxw + padding + 'px';
            }
            cell.firstChild.style.width = cell.firstChild.clientHeight + 'px';
            
        });
        if (maxw === -1) {
            return;
        }
        rotate.forEach(function (cell) {
            var dd;
            dd = cell.firstChild;
            dd.style.position = 'relative';
            dd.style.top = (cell.clientHeight - dd.clientHeight - padding) / 2 + 'px';
            dd.style.left = '0px';

        });
    }
}