(function($){
     jQuery.extend(
         jQuery.fn,
         {
             edata: function (action){
                 var $self = $(this);
                 var $dataHolder = $self.find("script.metadata");
                 var data = eval("(" + $dataHolder.html() + ")");
                 if (action == "get") {
                     return data;
                 }
                 if (action == "total") {
                     var count = 0;
                     $.each(
                         data,
                         function(){
                             count ++;
                         }
                     );
                     return count;
                 }
             }
         }
     );
 })(jQuery);
