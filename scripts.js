


function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

  function myFunction() {
        document.getElementById("MessageSend").innerHTML = 
        '<div class=container> <div class="alert alert-dark"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a><strong>If all fields were filled out then message was sent!</strong></div></div>';
  
  // }
  // function startAgain() { setTimeout(function () {
  //        document.getElementById('MessageSend').style.display='none';
  //    }, 7000);
  
        
    
    };

  
    
    // inspired by https://css-tricks.com/snippets/jquery/smooth-scrolling/

var TopOffset = 85;    

$('a[data-smooth]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - TopOffset
          }, 1000);
          return false;
        }
      }
    });
    

    