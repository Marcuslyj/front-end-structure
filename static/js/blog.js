$(function(){
	// parse location.search
	$.parseUrlQuery = function (url) {
	    var query = {}, i, params, param;
	    if (url && url.indexOf('?') >= 0) url = url.split('?')[1];
	    else return query;
	    params = url.split('&');
	    for (i = 0; i < params.length; i++) {
	        param = params[i].split('=');
	        query[param[0]] = param[1];
	    }
	    return query;
	};

	// url 参数
	var query = $.parseUrlQuery(location.search);

	// 无参数 显示总菜单
	if (!query.title) {
		$.get('/docs/README.md', function(res) {
			$('body').html(marked(res));
		})
		return;
	}

	// 菜单 url
	var sideBar = '/docs/' + query.title + '/README.md';
	
	// 左菜单
	$.get(sideBar, function(res) {
		$('#sidebar').html(marked(res));
	})

	// 中间内容
	$(document).on('click', '#sidebar a', function(e){
		var href = $(this).attr('href');
		if (/\.md$/.test(href)) e.preventDefault();
		else return;

		var content = '/docs/' + query.title + '/' + href;
		$.get(content, function(res) {
			$('#content').html(marked(res));
		})
	})
})