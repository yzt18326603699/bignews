// 获取类别，渲染页面
$.ajax ({
    type:'get',
    url:'http://localhost:8080/api/v1/admin/category/list',
    success:function(response){

        // console.log(response);
        var html= template('category_search_tpl',response)
        // console.log(html);
        $('#category_search_id').html(html);
        
    }    
})


//编辑渲染
$('.category_table').unbind('click').on('click','#bj',function(){
    var id=parseInt($(this).attr('data-id'))
    $('#xzfl').html('修改分类')
    $('#model_add').html('修改')
    $.ajax({
          type:'get',
          url:'http://localhost:8080/api/v1/admin/category/search',
          data:{id},
          success:function(response){
            // alert(222)
            console.log(response);
           $('#addModal').modal('show');
          //  console.log($('#xzfl'));

          // console.log(response.data[0].name);
          $('#recipient-name').val(response.data[0].name)
          $('#recipient-slug').val(response.data[0].slug)

          }
      })

//修改
$('#article_category-addCategory').unbind('submit').on('submit',function(){
   if($('#xzfl').html()=='修改分类'){
    // alert(999)
    var nameval  =  $('#recipient-name').val()
    var slugval=  $('#recipient-slug').val()
    $.ajax({
        type:'post',
          url:'http://localhost:8080/api/v1/admin/category/edit',
          data:{id:id,
          name:nameval,
          slug:slugval},
          success:function(response){
            console.log(response);
            alert('修改成功')
              location.reload()
          },
      })
      return false
   } 
    })
 })    


 //新增按钮
    $('#xinzengfenlei').on('click',function(){
        
        $('#xzfl').html('新增分类')
        $('#model_add').html('添加')
        $('#recipient-name').val('')
        $('#recipient-slug').val('')

        $('#article_category-addCategory').on('submit',function(){
            if($('#recipient-name').val()=='' || $('#recipient-slug').val()==''){
                alert('名称或别名不能为空')
            }else {
                if($('#xzfl').html()=='新增分类'){
                    // alert(999)
                    var nameval  =  $('#recipient-name').val()
                    var slugval=  $('#recipient-slug').val()
                
                    $.ajax({
                        type:'post',
                        url:'http://localhost:8080/api/v1/admin/category/add',
                        data:{
                        name:nameval,
                        slug:slugval},
                        success:function(response){
                            console.log(response);
                            location.reload()
                        },
                    })
                    return false
                }
            }
        })
     })    


//删除
$('#category_search_id').unbind('click').on('click','.delete',function(){
    var id=$(this).attr('data-id');
    if (confirm('是否删除')){
        $.ajax({
            type:'post',
            url:'http://localhost:8080/api/v1/admin/category/delete',
            data:{id},
            success:function(){
                location.reload()
            }
        })
    }


})