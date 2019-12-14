var param = getUrlParams('key')
console.log(param)
if (param){
    $.ajax({
        url:'http://localhost:8080/api/v1/index/search',
        data:{key:param},
        success:function (result) {
            console.log(result)
            var html = template('articleTpl',result);
            $('#articleBox').html(html)
        }
    })
}else{
    $.ajax({
        url:'http://localhost:8080/api/v1/index/search',
        success:function (result) {
            console.log(result)
            var html = template('articleTpl',result);
            $('#articleBox').html(html)
        }
    })
}
