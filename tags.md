---
layout: page
description: "标签"  
---
<title>标签 - 猫球社长</title>
<br>

<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>

$(function () {
        $("#searchBox").keyup(function () {
            var value = $(this).val();
            $("#dataSet a").each(function () {
                $(this).hide();
                if ($(this).text().indexOf($.trim(value)) >= 0) {
                    $(this).show();
                }
            });
        });
    });
</script>

<div id='tag_cloud'>
搜索标签 <input type="text" id="searchBox"/>
<ul id="dataSet">
{% for tag in site.tags %}
<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a>&nbsp; &nbsp; 
{% endfor %}
</ul>
</div>

<br>

{% for tag in site.tags %}
<hr><a class="heise" name="{{ tag[0] }}"><b>{{ tag[0] }}</b></a>
{% for post in tag[1] %}<br>
  <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
{% endfor %}
{% endfor %}
<script src="/media/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
size: {start: 1, end: 1, unit: 'em'},
color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
$('#tag_cloud a').tagcloud();
});
</script>