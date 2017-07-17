$(document).ready(function(){
  
  function getQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response){
        $(".quote").html(response.quoteText);
        
        if(response.quoteAuthor == ""){
           $(".author").html("");
          $(".twitter").attr("href", "https://twitter.com/home/?status=" + response.quoteText);
           }
        else{
          $(".author").html("<em>- " + response.quoteAuthor + "</em>");
          $(".twitter").attr("href", "https://twitter.com/home/?status=" + response.quoteText + "\n" + response.quoteAuthor);
        }       
      }
    });
  }
  
    getQuote();
  
  $(".new-quote").click(function(){
    getQuote();
  });
  
});