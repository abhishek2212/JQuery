$(function() {
    var current_li;

    function setImg(src,id){
        $("#main").attr("src",src);
        //ajax
        var path = "text/"+id+".txt";
        $.get(path,function(data) {
            console.log(data);
            
        });


    }
   $("#portfolio img").click(function(){
       var src = $(this).attr("src");
       var id = $(this).attr("id");
       current_li = $(this).parent();//<li><img></li>
       //$("#main").attr("src",src);
       setImg(src,id);
       $("#frame").fadeIn();
       $("#overlay").fadeIn();
   });


   $("#overlay").click(function() {
       $(this).fadeOut();
       $("#frame").fadeOut();  
   });


   $("#right").click(function(){
       if (current_li.is(":last-child")){
           var next_li = $("#portfolio li").first();
       }else{
           var next_li = current_li.next();
       }
       var next_src = next_li.children("img").attr("src");
       var id = next_li.children("img").attr("id");
       $("#main").attr("src", next_src);
       setImg(next_src,id);
       current_li = next_li;
   });


   $("#left").click(function(){
       if (current_li.is(":first-child")){
        var prev_li = $("#portfolio li").last();
       }else{
           var prev_li = current_li.prev();
       }
       var prev_src = prev_li.children("img").attr("src");
       var id = prev_li.children("img").attr("id");
       $("#main").attr("src", prev_src);
       setImg(prev_src,id);
       current_li = prev_li;
   });
   $("#right,#left").mouseover(function() {
       $(this).css("opacity","0.75");
       
   });
   $("#right,#left").mouseleave(function() {
    $(this).css("opacity","0.5");
   });
});