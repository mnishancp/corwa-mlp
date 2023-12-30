(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


     //joinform

   
     var taluk= {
        "Eranad" : {
        "Anakkayam" : [] ,
       "Areecode" : [] ,
       "Chembrasseri" : [] ,
       "Edavanna" : [] ,
       "Elankur" : [] ,
       "Karakunnu" : [] ,
       "Kavanur" : [] ,
       "Kizhuparamba" : [] ,
       "Malappuram" : [] ,
       "Manjeri" : [] ,
       "Melmuri" : [] ,
       "Narukara" : [] ,
       "Panakkad" : [] ,
       "Pandallur" : [] ,
       "Pandikkad" : [] ,
       "Payyanad" : [] ,
       "Perakamanna" : [] ,
       "Pookkottur" : [] ,
       "Pulpatta" : [] ,
       "Trikkalangode" : [] ,
       "Urangattiri" : [] ,
       "Vettikattiri" : [] ,
       "Vettilappara" : [] 
        },
       "Kondotty" : {
       "Cheekode" : [] ,
       "Chelembra" : [] ,
       "Cherukavu" : [] ,
       "Kondotty" : [] ,
       "Kuzhimanna" : [] ,
       "Morayur" : [] ,
       "Muthuvallur" : [] ,
       "Nediyiruppu" : [] ,
       "Pallikkal" : [] ,
       "Pulikkal" : [] ,
       "Vazhakkad" : [] ,
       "Vazhayoor" : [] 
       
       },
       "Nilambur" : {
       "Akampadam" : [] ,
       "Amarambalam" : [] ,
       "Chokkad" : [] ,
       "Chungathara" : [] ,
       "Edakkara" : [] ,
       "Kalikavu" : [] ,
       "Karulai" : [] ,
       "Karuvarakundu" : [] ,
       "Kerala Estate" : [] ,
       "Kurumbalangode" : [] ,
       "Mampad" : [] ,
       "Moothedam" : [] ,
       "Nilambur" : [] ,
       "Porur" : [] ,
       "Pothukallu" : [] ,
       "Pullippadam" : [] ,
       "Thiruvali" : [] ,
       "Tuvvur" : [] ,
       "Vazhikkadavu" : [] ,
       "Vellayur" : [] ,
       "Wandur" : [] 
       },
       "Perinthalmanna" : {
       "Aliparamba" : [] ,
       "Anamangad" : [] ,
       "Angadippuram" : [] ,
       "Arakkuparamba" : [] ,
       "Edappatta" : [] ,
       "Elamkulam" : [] ,
       "Karyavattam" : [] ,
       "Keezhattur" : [] ,
       "Kodur" : [] ,
       "Koottilangadi" : [] ,
       "Kuruva" : [] ,
       "Kuruvambalam" : [] ,
       "Mankada" : [] ,
       "Melattur" : [] ,
       "Moorkkanad" : [] ,
       "Nenmini" : [] ,
       "Pathaikara" : [] ,
       "Perinthalmanna" : [] ,
       "Pulamanthole" : [] ,
       "Puzhakkattiri" : [] ,
       "Thazhekkode" : [] ,
       "Vadakkanagara" : [] ,
       "Valambur" : [] ,
       "Vettathur" : [] 
       
       },
       "Ponnani" : {
       "Alamkode" : [] ,
       "Edappal" : [] ,
       "Ezhuvathiruthy" : [] ,
       "Kalady" : [] ,
       "Maranchery" : [] ,
       "Nannamukku" : [] ,
       "Perumpadappa" : [] ,
       "Ponnani Nagaram" : [] ,
       "Tavanur" : [] ,
       "Vattamkulam" : [] ,
       "Veliyancode" : [] 
       },
       "Tirur" : {
       "Ananthavoor" : [] ,
       "Athavanad" : [] ,
       "Cheriyamundam" : [] ,
       "Edayur" : [] ,
       "Irimbiliyam" : [] ,
       "Kalpakancheri" : [] ,
       "Kattiparuthi" : [] ,
       "Kottakkal" : [] ,
       "Kurumbathur" : [] ,
       "Kuttippuram" : [] ,
       "Mangalam" : [] ,
       "Marakkara" : [] ,
       "Melmuri" : [] ,
       "Naduvattom" : [] ,
       "Niramaruthur" : [] ,
       "Ozhur" : [] ,
       "Pariyapuram" : [] ,
       "Perumanna" : [] ,
       "Ponmala" : [] ,
       "Ponmundam" : [] ,
       "Purathur" : [] ,
       "Tanalur" : [] ,
       "Tanur" : [] ,
       "Thalakkad" : [] ,
       "Thirunavaya" : [] ,
       "Tirur" : [] ,
       "Trikkandiyur" : [] ,
       "Triprangode" : [] ,
       "Valavannur" : [] ,
       "Vettom" : [] 
       },
       "Tirurangadi" : {
       "A.R.Nagar" : [] ,
       "Ariyallur" : [] ,
       "Edarikode" : [] ,
       "Kannamangalam" : [] ,
       "Moonniyur" : [] ,
       "Nannambra" : [] ,
       "Neduva" : [] ,
       "Oorakam" : [] ,
       "Othukkungal" : [] ,
       "Parappanangadi" : [] ,
       "Parappur" : [] ,
       "Peruvallur" : [] ,
       "Thenhippalam" : [] ,
       "Thennala" : [] ,
       "Tiruranagdi" : [] ,
       "Vallikunnu" : [] ,
       "Vengara" : [] 
       },
       
       
       }
       window.onload = function() {
         var talukSel = document.getElementById("taluk");
         var villageSel = document.getElementById("village");
        
         for (var x in taluk) {
           talukSel.options[talukSel.options.length] = new Option(x, x);
         }
         talukSel.onchange = function() {
           //empty Chapters- and Topics- dropdowns
           
           villageSel.length = 1;
           //display correct values
           for (var y in taluk[this.value]) {
             villageSel.options[villageSel.options.length] = new Option(y, y);
           }
         }
         
       }
        // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    const firebaseConfig = {
        apiKey: "AIzaSyBtOJ2XtSSleD8ys3I2oQKXUmDJexmM2L0",
        authDomain: "corwa-malappuram-19595.firebaseapp.com",
        databaseURL: "https://corwa-malappuram-19595-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "corwa-malappuram-19595",
        storageBucket: "corwa-malappuram-19595.appspot.com",
        messagingSenderId: "316184283129",
        appId: "1:316184283129:web:5372720012b3572a795f28"
      };
      
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
document.getElementById('joinForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
  
    // Collect form data
    const formData = {
      taluk: document.getElementById('taluk').value,
      village: document.getElementById('village').value,
      contactPerson: document.getElementById('contactPerson').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('number').value
    };
  
    // Add data to Firestore (replace 'forms' with your collection name)
    db.collection('forms').add(formData)
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error adding document:', error);
        alert('Error submitting form. Please try again.');
      });
  });
  

})(jQuery);

