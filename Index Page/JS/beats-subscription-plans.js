
// jQuery
$(document).ready(function() {

    $('button').click(function(){
    
    let planType = $(this).attr('id');
    sessionStorage.setItem('Plan',planType);
    setTimeout(function(){window.open('../HTML/Payment.html','_self')},500);
    })
})
  

