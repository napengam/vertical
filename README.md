# Vertical

How to instrument your table

- Give your table an ID like ```<table id='tab1'>```   
- Add data-rotate as an attribute to cells you want to rotate ```<t[h|d] data-rotate>rotate </t[h|d]>``` 
- Add an event handler for the load event. Inside this handler call  ```rotateHeadCell('tab1');```    

### Demo http://hgsweb.de/vertical/index.html 


### Logic

The table is located using the given id.
then all cells with date attribute data-rotate are selected.
The content of these cells is wrapped within a DIV , then styled to rotate.

When rotating the content, the current  width of the above DIV will become the new cell height.
The cell height for all cells will be set to the highest value found during iteration.
Using whitespace:nowrap allows to set the width of the enclosing div to the
original height of the content. This way the table cell will shrink down to this new width
if possible.
