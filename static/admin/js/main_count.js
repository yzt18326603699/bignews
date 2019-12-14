$.ajax({
    url:'http://localhost:8080/api/v1/admin/data/info',
    success:function (result) {
        $('#allNum').text(result.totalArticle);
        $('#dayNum').text(result.dayArticle);
        $('#allComment').text(result.totalComment);
        $('#dayComment').text(result.dayComment);
    }
})