/// 封装一个函数，用于从浏览器的地址栏中获取指定的参数
function getUrlParams(name) {
	var paramsAry = location.search.substr(1).split('&');
	// 循环数据
	for (var i = 0; i < paramsAry.length; i++) {
		var tmp = paramsAry[i].split('=');
		if (tmp[0] == name) {
			return tmp[1];
		}
	}
    // 参数不存在，则返回-1
	return false;
}

// 最新评论
$.ajax({
	type: 'get',
	url: 'http://localhost:8080/api/v1/index/latest_comment',
	success: function (response) {
		var new_tpl =`
            {{each data}}
            {{if $value.state == '已通过'}}
            <li>
            <span>{{$value.author.substring(0,1)}}</span>
            <b><em>{{$value.author}}</em> {{$value.date}}说:</b>
            <strong>{{$value.intro}}</strong>
            </li>
            {{/if}}
            {{/each}}`
		var html=template.render(new_tpl,response);

		$('#newBox').html(html)
	}
})

// 热门排行
$.ajax({
	type: 'get',
	url: 'http://localhost:8080/api/v1/index/rank',
	success: function (response) {
		response.num=1
		var remen_tpl=`
            {{each data}}
            <li><span class="first">{{num++}}</span><a href="http://localhost:8080/article.html?id={{$value.id}}">{{$value.title}}</a></li>
            {{/each}}
            `
		var html=template.render(remen_tpl,response)
		$('#remenBox').html(html)
	}
})

// 焦点
$.ajax({
	type: 'get',
	url: 'http://localhost:8080/api/v1/index/attention',
	success: function (response) {
		response.num=1

		var jiaodian_tpl=`
          {{each data}}
          <li><a href="javascript:;">{{num++}} . {{$value.intro}}</a></li>
        
          {{/each}}
          `
		var html=template.render(jiaodian_tpl,response)
		$('#jiaodianBox').html(html)
	}
})

// 搜索栏
$('#search_btn_id').on('click',function(){
	var search=$('#search_id').val()
	// console.log(search);
	location.href = "http://localhost:8080/list.html?key=" + search

})
