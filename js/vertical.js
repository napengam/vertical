
function rotateHeadCell(tableId) {
    'use strict';
    var t, p;
    t = document.getElementById(tableId);
    p = t.querySelectorAll('[data-rotate]');
    p.forEach((th) => {
        var div, w, h;
        div = document.createElement('DIV');
        div.innerHTML = th.innerHTML;
        div.style.display = 'inline-block';
        th.innerHTML = '';
        th.appendChild(div);
        div.style.transformOrigin = 'top left';
        div.style.transform = 'rotate(-90deg)';
        div.style.whiteSpace = 'nowrap';
        w = div.clientHeight;
        h = div.clientWidth;
        div.style.width = w + 'px';
        div.style.height = h + 'px';
        div.style.position = 'relative';
        div.style.top = div.clientHeight + 'px';
    });
}
function rotateHeadCellOld(tableId) {
    'use strict';
    var aRows = document.getElementById(tableId).rows, padding = 0;
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
            if (cell.hasAttribute("data-rotate")) {
                rotate.push(cell);
                cell.vAlign = 'middle';
                cell.innerHTML = '<div style="transform: rotate(-90deg);white-space: nowrap; float:left; width:auto;">' + cell.innerHTML + '</div>';
                w = cell.clientWidth;
                if (w > maxw) {
                    maxw = w;
                    cell.style.height = maxw + padding + 'px';
                }
                cell.firstChild.style.width = cell.firstChild.clientHeight + 'px';
            }
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