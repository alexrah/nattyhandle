function beautify(){
setTimeout(function(){
        $('tr').each(function(index){
          console.log(index);
          $(this).delay(100 * index).show(100);
        });
        $('#title').animate({
          color: "#cc0066",
          "font-size" : "16px",
        }, 3000);
        $('span').animate({
          color : "#00cc66",
        }, 3000);
}, 500);
}
