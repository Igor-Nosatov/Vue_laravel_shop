const mix = require('laravel-mix');

mix.styles([
    'resources/adds/styles/bootstrap4/bootstrap.min.css',
    'resources/adds/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css',
    'resources/adds/plugins/OwlCarousel2-2.2.1/owl.carousel.css',
    'resources/adds/plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
    'resources/adds/plugins/OwlCarousel2-2.2.1/animate.css',
    'resources/adds/plugins/slick-1.8.0/slick.css',
    'resources/adds/styles/main_styles.css',
    'resources/adds/styles/responsive.css'
], 'public/css/all.css');

mix.scripts([
       'resources/adds/js/jquery-3.3.1.min.js',
       'resources/adds/styles/bootstrap4/popper.js',
       'resources/adds/styles/bootstrap4/bootstrap.min.js',
       'resources/adds/plugins/greensock/TweenMax.min.js',
       'resources/adds/plugins/greensock/TimelineMax.min.js',
       'resources/adds/plugins/scrollmagic/ScrollMagic.min.js',
       'resources/adds/plugins/greensock/animation.gsap.min.js',
       'resources/adds/plugins/greensock/ScrollToPlugin.min.js',
       'resources/adds/plugins/OwlCarousel2-2.2.1/owl.carousel.js',
       'resources/adds/plugins/slick-1.8.0/slick.js',
       'resources/adds/plugins/easing/easing.js',
       'resources/adds/js/custom.js'
   ], 'public/js/all.js');
