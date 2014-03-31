vertical
========

rotate table header cell 90 degree 

How to instrument your table:
<ul>
<li>Give your tabel an ID like &amp;table id=tab1>
<li>Add 'data-rotate' as an attribute to cells you want to rotate<br>
like &amp;th data-rotate>rotate this&amp;/th>
<li>include the given CSS class .hgs_rotate
<li> Add an event handler for the load event. Inside this handler<br>
call  <code> rotateHeadCell('tab1');  <code>S
</ul>