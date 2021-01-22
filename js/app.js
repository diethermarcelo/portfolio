/*
window.onscroll = function(){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {        
        var welcome = document.querySelector("#welcome-header");
        var about = document.querySelector("#nav-about");
        var navbar = document.querySelector("#navbar");
        var dropdown = document.querySelector("#dropdown");
        var certificate = document.querySelector("#nav-certificate");
        var nav_items = ['home', 'about', 'accomplishment', 'contact'];
        var item_tags = [];
    } else {
        // document.getElementById("myP").className = "";
    }
}
*/
window.onload = function(){

    /* VIEW WORKS */
    $('#view-works').click(function(){
        $("#nav-accomplishment").trigger("click");
    })

    /* CAROUSEL */
    
    $('#recipeCarousel').carousel({
        interval: 5000
    })
    
      
    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            
            next.children(':first-child').clone().appendTo($(this));
            
        }
        
    });

    
    /* EXPLORE */
    $(".explore").click(function(e){
        e.preventDefault();
        // e.target.parentElement.children[0].id = "show";
        // console.log(e.target.parentElement.children[0]);
        var eventObject = e;
        $(this).parent().find(".project-description").slideToggle("fast", "swing");
             
        console.log(eventObject.target.innerHTML);
        // console.log(eventObject.target);
        if(eventObject.target.innerText == "Hide"){
            eventObject.target.innerHTML = "<span data-scroll='out'> Explore </span>"
        } else {
            eventObject.target.innerHTML = "<span data-scroll='out'> Hide </span>";
        }
        
        console.log(eventObject.target.innerHTML);
        // console.log(e);
        //e.target.parentElement.children[0].id = "";
    });

    /* CONTROLS */
    $('.controls').click(function(){
        $(".project-description").css("display","none");
        /*
        console.log($(".project-description"));
        $(".project-description").each(function(description){            
            console.log((this));
        })
        */
        /*
        if($(".project-description").is(":visible")){
            $(".project-description").slideUp("fast");
        }
        */

    })

      
    /* NAVIGATION */
    var welcome = document.querySelector("#welcome-header");
    var about = document.querySelector("#nav-about");
    var navbar = document.querySelector("#navbar");
    var dropdown = document.querySelector("#dropdown");
    var certificate = document.querySelector("#nav-certificate");
    var nav_items = ['home', 'about', 'accomplishment', 'contact'];
    var item_tags = [];

    dropdown.onclick = function(){    
        var element = document.getElementById("dropdown");
        element.classList.toggle("show");
    }
     
    certificate.onclick = function(e){
        e.stopPropagation();
        navbar.className = "navbar navbar-expand-lg text-light navbar-light bg-light"; 
        dropdown.className = "dropdown-menu bg-light";         
    } 


    nav_items.forEach(function(item){
        var item_tag = document.querySelector("#nav-" + item);
        item_tags.push({name: item, body: item_tag});
        if(item == 'home' | item == 'accomplishment'){ 
            item_tag.addEventListener("click", function(){
                navbar.className = "navbar navbar-expand-lg text-light navbar-dark bg-dark"; 
                // console.log(dropdown.className)
                dropdown.className = "dropdown-menu bg-dark";                    
                if(item == 'home'){ // HOME
                    item_tag.className = 'nav-item active active-light';                    
                    item_tags.forEach(function(tag){
                        if(tag.name != 'home') {
                            if(tag.name == 'accomplishment'){
                                var patt = new RegExp("show");
                                var res = patt.test(tag.body.className);
                                // console.log(tag.body.className);
                                // console.log(res);
                                if(res){
                                    tag.body.className = 'nav-item dropdown show';                                
                                } else {
                                    tag.body.className = 'nav-item dropdown';                                
                                }
                            } else {
                                tag.body.className = 'nav-item'
                            }
                        }
                    }) 
                    // console.log(item_tag);                    
                } else { // ACHIEVEMENT
                    //alert("ey");
                    dropdown.className = "dropdown-menu bg-light";         
                    item_tag.className = 'nav-item active dropdown active-light';                    
                    item_tags.forEach(function(tag){
                        if(tag.name != 'accomplishment') {
                            if(tag.name == 'accomplishment'){
                                var patt = new RegExp("show");
                                var res = patt.test(tag.body.className);
                                // console.log(tag.body.className);
                                // console.log(res);
                                if(res){
                                    tag.body.className = 'nav-item dropdown show';                                
                                } else {
                                    tag.body.className = 'nav-item dropdown';                                
                                }
                            } else {
                                tag.body.className = 'nav-item'
                            }
                        }
                    }) 
                // console.log(item_tag);  
                }             
            })   
        } else {
            item_tag.addEventListener("click", function(){
                navbar.className = "navbar navbar-expand-lg text-light navbar-light bg-light";      
                dropdown.className = "dropdown-menu bg-light text-dark";   
                if(item == 'about'){
                    item_tag.className = 'nav-item active active-dark';                    
                    item_tags.forEach(function(tag){
                        if(tag.name != 'about') {
                        // console.log(tag);
                        // ;
                            if(tag.name == 'accomplishment'){
                                var patt = new RegExp("show");
                                var res = patt.test(tag.body.className);
                                // console.log(tag.body.className);
                                // console.log(res);
                                if(res){
                                    tag.body.className = 'nav-item dropdown show';                                
                                } else {
                                    tag.body.className = 'nav-item dropdown';                                
                                }
                            } else {
                                tag.body.className = 'nav-item'
                            }
                            // console.log(tag.body);
                        }
                    })
                // console.log(item_tag);                    
                } else {
                    item_tag.className = 'nav-item active active-dark';                    
                    item_tags.forEach(function(tag){
                        if(tag.name != 'contact') {
                            if(tag.name == 'accomplishment'){
                                var patt = new RegExp("show");
                                var res = patt.test(tag.body.className);
                                // console.log(tag.body.className);
                                // console.log(res);
                                if(res){
                                    tag.body.className = 'nav-item dropdown show';                                
                                } else {
                                    tag.body.className = 'nav-item dropdown';                                
                                }
                            } else {
                                tag.body.className = 'nav-item'
                            }
                            // console.log(tag.body);
                        }
                    })
                    // console.log(item_tag);  
                }       
            })            
        }      
    })
}



