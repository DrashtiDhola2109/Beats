
// jQuery
$(document).ready(function() {

    $('button').click(function(){
    
    let planType = $(this).attr('id');
    sessionStorage.setItem('Plan',planType);
    res = sessionStorage.getItem('Plan');
    alert(res);
    if(sessionStorage.getItem('Plan') == "Base")
    {
        sessionStorage.removeItem('Price');
        sessionStorage.setItem('Price',"₹49");
    }
    else if(sessionStorage.getItem('Plan') == "Standard")
    {
        sessionStorage.removeItem('Price');
        sessionStorage.setItem('Price',"₹649");
    }
    else if(sessionStorage.getItem('Plan') == "Ultimate")
    {
        sessionStorage.removeItem('Price');
        sessionStorage.setItem('Price',"₹1299");
    }
    setTimeout(function(){window.open('/Introduction Page/HTML/Payment.html','_self')},500);
    })
})
  

