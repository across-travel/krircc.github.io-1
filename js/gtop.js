

window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }

      var gtop = document.getElementById('myBtn');

      gtop.addEventListener('click', function() {
          document.body.scrollTop = 0; // For Chrome, Safari and Opera 
          document.documentElement.scrollTop = 0; // For IE and Firefox
      }, false);
};

