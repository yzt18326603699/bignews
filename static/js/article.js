
var articleId=getUrlSearch("id")
var id=articleId.toString();
console.log(id);

// 评论列表
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/get_comment',
    data:{articleId},
    success: function (response) {
      // console.log(response);
      var html=template('pllb_tpl',response)
      // console.log(html);
      $('#pllbBox').html(html)
    }
})
// 文章内容
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/article',
    data:{id:id},
    success: function (response) {
      console.log(response);
        var html=template('wenzhang_tpl',response)
        console.log(html);
        $('#wenzhangBox').html(html)
    },
    error:function(res){
      console.log(res);
      
    }
})


// 评论发布
$('#comment_form_id').on('submit',function(){
    var author=$('#author').val();
    console.log(author);
    var content=$('#content').val();
    console.log(content);
    
    $.ajax({
    type: 'post',
    url: 'http://localhost:8080/api/v1/index/post_comment',
    data:{
    author:author,
    content:content,
    articleId:articleId
    },
    success: function (response) {
      location.reload()

        },

    })
    return false;
})




// 地址栏id获取
function getUrlSearch(name) {
if (!name) return null;
var after = window.location.search;
after = after.substr(1) || window.location.hash.split('?')[1];
if (!after) return null;
if (after.indexOf(name) === -1) return null;
var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
var r = decodeURI(after).match(reg);
if (!r) return null;
return r[2];
}
// 调用
console.log(getUrlSearch("id"));