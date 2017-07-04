    /*Responsive Nav*/          
    $("#menu-close").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
    });

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
    });
    /*Responsive Nav*/   

    /*Venobox Jquery*/            
    $('.venobox_custom').venobox({
        framewidth: '400px',        // default: ''
        frameheight: '300px',       // default: ''
        border: '0px',             // default: '0'
        bgcolor: '#fff',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true,            // default: false
        spinner: "cube-grid"
    });
    /*Venobox Jquery*/

    /*slick carrusel*/
    $('.slider-responsive').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }); 

    $('.slick-prev').click(function() {
      $('.slider-responsive').slick('slickPrev');
    });

    $('.slick-next').click(function() {
      $('.slider-responsive').slick('slickNext');
    });
    /*slick carrusel*/

    /*google images*/
    (function( $ ) {
      $.imagePreview = function( element ) {
        this.$element = $( element );
        this.init();
      };
      
      $.imagePreview.prototype = {
        init: function() {
          this.$triggers = this.$element.find( ".image-link" );
          this.$closeLinks = this.$element.find( ".image-details-close" );
          
          this.open();
          this.close();
        },        
        _getContent: function( element ) {
          var $parent = element.parent(),
            title = $parent.data( "title" ),
            desc = $parent.data( "desc" ),
            html = element.html();
            
            return {
              title: title,
              desc: desc,
              html: html
            }
        },        
        open: function() {
          var self = this;
          self.$triggers.on( "click", function( e ) {
            e.preventDefault();
            var $a = $( this ),
              content = self._getContent( $a ),
              $li = $a.parents( "li" ),
              $details = $( ".image-details", $li ),
              $contentImage = $( ".image", $details ),
              $detailsTitle = $( ".image-details-title", $details ),
              $detailsText = $( ".image-details-text", $details );

              $contentImage.html( content.html );
              $detailsTitle.text( content.title );
              $detailsText.text( content.desc );
              
              self.$element.find(".image-details").slideUp("fast");
              $details.slideDown("fast");

              $(".image-link").removeClass("active");
              //$(".image-link > img").css({'filter':'grayscale(100%)'});
              $(this).addClass("active");
              //$(this).find("img").css({'filter':'grayscale(0)'});
              //filter: grayscale(0);

              /*if( content.title!=$( ".image-details-title").text() ) {
                $contentImage.html( content.html );
                $detailsTitle.text( content.title );
                $detailsText.text( content.desc );
                
                self.$element.find( ".image-details" ).slideUp( "fast" );
                $details.slideDown( "fast" );   
              }else{
                $( ".image-details-title").text("");
                $details.slideUp("fast");
              }*/
                   
          });
        },
        close: function() {
          this.$closeLinks.on( "click", function( e ) {
            e.preventDefault();
            $( this ).parent().slideUp( "fast" );
            $(".image-link").removeClass("active");
            /*setTimeout(function(){
              $( ".image-details-title").text("");
            },100);
            */
          });
        } 
      };
      
      $(function() {
        var preview = new $.imagePreview( ".image-wrapper" );        
      });
      
    })(jQuery);

    var images_visibles = 2;
    var num_destop = $("#proyectos-desktop li").length;
    $("#show-more-google").click(function() {
      images_visibles = images_visibles + 2;      
      $(".image-wrapper li:lt("+images_visibles+")").slideDown();
      if( num_destop==images_visibles ) {
         $("#show-more-google").hide();
         $("#show-less-google").show();
      }
    });
    $("#show-less-google").click(function() {
        $("#proyectos-desktop li").slideUp();
        $("#proyectos-desktop li:lt(2)").slideDown();
        images_visibles = 2;
        $("#show-less-google").hide();
        $("#show-more-google").show();
    });

    /*slick carrusel*/
    $('.slider-responsive-mobile').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      prevArrow: $('.slick-prev-mobile'),
      nextArrow: $('.slick-prev-mobile'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }); 

    $('.slick-prev-mobile').click(function() {
      $('.slider-responsive-mobile').slick('slickPrev');
    });

    $('.slick-next-mobile').click(function() {
      $('.slider-responsive-mobile').slick('slickNext');
    });
    /*slick carrusel*/

    /*google images*/
    /*menu*/
    $("body").click(function(e) {
      
        var target = e.target;

        if ( $(target).closest(".sidebar-nav").length || $(target).parent().is("#menu-toggle") ) {
          //Clicked inside #myDiv
        } else {
          if( $("#sidebar-wrapper").hasClass("active") ) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
          }          
        }

    });

    $(".sidebar-nav li a").click(function(e) {
        var ancla = $(this).attr("ancla");
        scrollToCustom(ancla);
        e.preventDefault();       
        $("#sidebar-wrapper").toggleClass("active");      
    });    

    function scrollToCustom(m,n) {
      var offset = jQuery(m).offset();
        jQuery("html,body").animate({
          scrollTop: offset.top
        },500,function(){
            // Animation complete.        
        });                
    }

    $(document).scroll(function(e) {
      if( $("#sidebar-wrapper").hasClass("active") ) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
      }  
    });
    /*menu*/

  $('.content-box-work').on('inview', function(event, isInView) {
    if (isInView) {
      // element is now visible in the viewport      
      //$(".caja-1,.caja-2").addClass("animated fadeInRight");
      $('.caja-1,.caja-2').show();
    } else {
      // element has gone out of viewport
    }
  });

      /*google map*/
    /*function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.4308684, lng: -70.6230458},
        scrollwheel: false,
        zoom: 18
      });
      var marker = new google.maps.Marker({
        position: {lat: -33.4308684, lng: -70.6230458},
        animation: google.maps.Animation.DROP,
        icon: 'img/logotipo-cron-mapav2.png',
        optimized: false,
        map: map
      }); 
    }
    */

  function CustomMarker(opts) {
      this.setValues(opts);
  }

  function initMap() {

      CustomMarker.prototype = new google.maps.OverlayView();

      CustomMarker.prototype.draw = function() {
          var self = this;
          var div = this.div;
          if (!div) {
              div = this.div = $('' +
                  '<div>' +
                  '<div class="shadow"></div>' +
                  '<div class="pulse"></div>' +
                  '<div class="pin-wrap">' +
                  '<div class="pin"></div>' +
                  '</div>' +
                  '</div>' +
                  '')[0];
              this.pinWrap = this.div.getElementsByClassName('pin-wrap');
              this.pin = this.div.getElementsByClassName('pin');
              this.pinShadow = this.div.getElementsByClassName('shadow');
              div.style.position = 'absolute';
              div.style.cursor = 'pointer';
              var panes = this.getPanes();
              panes.overlayImage.appendChild(div);
              google.maps.event.addDomListener(div, "click", function(event) {
                  google.maps.event.trigger(self, "click", event);
              });
          }
          var point = this.getProjection().fromLatLngToDivPixel(this.position);
          if (point) {
              div.style.left = point.x + 'px';
              div.style.top = point.y + 'px';
          }
      };

      CustomMarker.prototype.animateDrop = function() {
          dynamics.stop(this.pinWrap);
          dynamics.css(this.pinWrap, {
              'transform': 'scaleY(2) translateY(-'+$('#map').outerHeight()+'px)',
              'opacity': '1',
          });
          dynamics.animate(this.pinWrap, {
              translateY: 0,
              scaleY: 1.0,
          }, {
              type: dynamics.gravity,
              duration: 1800,
          });

          dynamics.stop(this.pin);
          dynamics.css(this.pin, {
              'transform': 'none',
          });
          dynamics.animate(this.pin, {
              scaleY: 0.8
          }, {
              type: dynamics.bounce,
              duration: 1800,
              bounciness: 600,
          })

          dynamics.stop(this.pinShadow);
          dynamics.css(this.pinShadow, {
              'transform': 'scale(0,0)',
          });
          dynamics.animate(this.pinShadow, {
              scale: 1,
          }, {
              type: dynamics.gravity,
              duration: 1800,
          });
      }

      CustomMarker.prototype.animateBounce = function() {
          dynamics.stop(this.pinWrap);
          dynamics.css(this.pinWrap, {
              'transform': 'none',
          });
          dynamics.animate(this.pinWrap, {
              translateY: -30
          }, {
              type: dynamics.forceWithGravity,
              bounciness: 0,
              duration: 500,
              delay: 150,
          });

          dynamics.stop(this.pin);
          dynamics.css(this.pin, {
              'transform': 'none',
          });
          dynamics.animate(this.pin, {
              scaleY: 0.8
          }, {
              type: dynamics.bounce,
              duration: 800,
              bounciness: 0,
          });
          dynamics.animate(this.pin, {
              scaleY: 0.8
          }, {
              type: dynamics.bounce,
              duration: 800,
              bounciness: 600,
              delay: 650,
          });

          dynamics.stop(this.pinShadow);
          dynamics.css(this.pinShadow, {
              'transform': 'none',
          });
          dynamics.animate(this.pinShadow, {
              scale: 0.6,
          }, {
              type: dynamics.forceWithGravity,
              bounciness: 0,
              duration: 500,
              delay: 150,
          });
      }

        CustomMarker.prototype.animateWobble = function() {
          dynamics.stop(this.pinWrap);
          dynamics.css(this.pinWrap, {
              'transform': 'none',
          });
          dynamics.animate(this.pinWrap, {
              rotateZ: -45,
          }, {
              type: dynamics.bounce,
              duration: 1800,
          });

          dynamics.stop(this.pin);
          dynamics.css(this.pin, {
              'transform': 'none',
          });
          dynamics.animate(this.pin, {
              scaleX: 0.8
          }, {
              type: dynamics.bounce,
              duration: 800,
              bounciness: 1800,
          });
        }

      var pos = new google.maps.LatLng(-33.4308684,-70.6230458);
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: pos,
          disableDefaultUI: true,
          scrollwheel: false,
          styles: [
                      {
                          "featureType": "all",
                          "elementType": "all",
                          "stylers": [
                              {
                                  "invert_lightness": true
                              },
                              {
                                  "saturation": "0"
                              },
                              {
                                  "lightness": "35"
                              },
                              {
                                  "gamma": 0.5
                              },
                              {
                                  "hue": "#ffcc00"
                              },
                              {
                                  "weight": "1.51"
                              }
                          ]
                      },
                      {
                          "featureType": "transit.station.rail",
                          "elementType": "labels.text",
                          "stylers": [
                              {
                                  "gamma": "1.00"
                              }
                          ]
                      },
                      {
                          "featureType": "transit.station.rail",
                          "elementType": "labels.text.fill",
                          "stylers": [
                              {
                                  "hue": "#ff0000"
                              },
                              {
                                  "lightness": "42"
                              }
                          ]
                      },
                      {
                          "featureType": "transit.station.rail",
                          "elementType": "labels.icon",
                          "stylers": [
                              {
                                  "hue": "#ff0000"
                              },
                              {
                                  "invert_lightness": true
                              },
                              {
                                  "lightness": "-15"
                              },
                              {
                                  "saturation": "31"
                              }
                          ]
                      }
                  ]
      });

      var marker = new CustomMarker({
          position: pos,
          map: map          
      });

      /*google.maps.event.addListener(marker, 'click', function(e) {
          marker.animateBounce();
      });

      $('#drop').on('click', function(e) {
          marker.animateDrop();
      });

      $('#wobble').on('click', function(e) {
          marker.animateWobble();
      });

      $('#bounce').on('click', function(e) {
          marker.animateBounce();
      });
      */

      setInterval(function() {
        marker.animateBounce();
      },3500);
  }
  /*google map*/

  $(document).ready(function() {
      var alto = $(".mynav").outerHeight()-1;
      //console.log(alto);
      $(".nuestro-equipo-ancla").height(alto+"px");
      $(".nuestro-equipo-ancla").css('margin-top',"-"+alto+"px");
      $(".nuestra-diferencia-ancla").height(alto+"px");
      $(".nuestra-diferencia-ancla").css('margin-top',"-"+alto+"px");
      $(".nuestra-diferencia-ancla-mobile").height(alto+"px");
      $(".nuestra-diferencia-ancla-mobile").css('margin-top',"-"+alto+"px");      
  });


