
//   删除事件
  $('#commentBox').on('click','#delete',function(){
  var id=parseInt($(this).attr('data-id'))
  $.ajax({
      type: 'post',
      url: 'http://localhost:8080/api/v1/admin/comment/delete',
      data:{id},
      success: function (response) {
        page(num);
      }
  })
  })
  
  // 审核事件
  $('#commentBox').on('click','#pass',function(){
  // if(confirm("ARE YOU SURE")){
    var id=parseInt($(this).attr('data-id')) 
    var status=$(this).attr('data-status')
    if(status=="待审核"){
      // alert(22)
      $.ajax({
      type: 'post',
      url: 'http://localhost:8080/api/v1/admin/comment/pass',
      data:{id},
      success: function (response) {
        page(num); 
        
      }
    })  
    return;
    }
  
  if(status=="已通过"){
    // alert(33)
    $.ajax({
      type: 'post',
      url: 'http://localhost:8080/api/v1/admin/comment/reject',
      data:{id},
      success: function (response) {
        page(num);  
      }
    }) 
    return;
  }

  })
  