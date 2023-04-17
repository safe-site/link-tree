<script type="text/javascript" src="jquery.js"></script> <!-- Include the jQuery library -->

<script type="text/javascript"> 
   $(document).ready(function () { 
       $("#myLink").click(function () { 
           // Handler function for click event 
           alert("Link clicked!"); 
       }); 
   }); 

   window.addEventListener("scroll", function() { 
      var header = document.getElementById("myHeader"); 
      if (window.pageYOffset > 200) { 
        header.classList.add("show"); 
      } else { 
        header.classList.remove("show"); 
      } 
   });
</script>