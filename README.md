vertical
========

rotate table header cell 90 degree 

How to instrument your table:
<ul>
<li>Give your tabel an ID like &lt;table id=tab1>
<li>Add 'data-rotate' as an attribute to cells you want to rotate<br>
like &lt;th data-rotate>rotate &lt;/th>
<li>include the given CSS class .hgs_rotate
<li> Add an event handler for the load event. Inside this handler<br>
call  <code> rotateHeadCell('tab1');  <code>
</ul>