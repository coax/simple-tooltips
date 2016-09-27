simple-tooltips
========================

Simple tooltips for jQuery.

What's different than millions of other tooltips? It's only 658 bytes minified, follows cursor move, adapts position to window borders. Feel free to use, modify, etc.

How to use
-----
1\. Include jQuery library in your page(s) (https://jquery.com/download/)

2\. Call tooltip function with any selector, add CSS for tooltip
```
<script type="text/javascript">
$(function(){
  $('.selector').tooltip();
});
</script>

<style type="text/css">
.tooltip {
  position:absolute;
  left:0;
  top:0;
  z-index:100;
  color:#fff;
  background:#212121;
  padding:10px;
  max-width:400px;}
</style>
```

3\. Insert tooltips in "title" tag of your html code
```
<a href="#" class=".selector" title="Hello world!">Hello world!</a>
```

4\. Demo

http://www.coax.hr/tooltips

Changelog
-----
Version 0.1 (27.09.2016)
- Initial release
