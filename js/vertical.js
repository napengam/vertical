
function rotateHeadCell(tableId) {
    'use strict';
    var table, p;
    //********************************************
    //  locate table
    //*******************************************
    if (typeof tableId === 'string') {
        table = document.getElementById(tableId);
    } else if (typeof tableId === 'object') {
        table = tableId;
    }
    if (table === null) {
        return;
    }
    //********************************************
    //  locate cells to rotate
    //*******************************************
    p = table.querySelectorAll('[data-rotate]');
    p.forEach((th) => {
        var div, w, h;
        //********************************************
        //  wrap content with a DIV, append to cell
        //*******************************************
        div = document.createElement('DIV');
        div.innerHTML = th.innerHTML;
        div.style.display = 'inline-block';
        th.innerHTML = '';
        th.appendChild(div);
        //********************************************
        //  get current height and width
        //*******************************************
        h = div.clientHeight;
        w = div.clientWidth;
        //********************************************
        //  rotate
        //*******************************************
        div.style.transformOrigin = 'top left';
        div.style.transform = 'rotate(-90deg)';
        div.style.whiteSpace = 'nowrap';
        //********************************************
        //  swap height and width then repostion content in cell
        //*******************************************
        div.style.width = h + 'px';
        div.style.height = w + 'px';
        div.style.position = 'relative';
        div.style.top = div.clientHeight + 'px';
        //********************************************
        //  don't know why but it works :-)
        //*******************************************
        div.querySelector('IMG') ? '' : div.style.display = 'flex'; // shaky ?
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