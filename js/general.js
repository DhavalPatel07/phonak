var $=jQuery.noConflict();
$(document).ready(function(){
	// Click to Scroll To Section
    $('a[href*=\\#]:not([href=\\#])').click(function(e){
        //console.log('click');
        e.preventDefault();       
        var target_name = $(this).attr('href');                
        var tar_hash = target_name.substr(target_name.indexOf('#'),target_name.length);        
        if($('body').find(tar_hash).length > 0){                        
            if(target_name.length){
                $('html,body').animate({ scrollTop: $(tar_hash).offset().top  }, 1000);
            }
        }
        else {window.location.href = target_name; }
    });   
    $(".top-btn").on("click", function(){
    	$(".firstfield input").focus();
    })
});