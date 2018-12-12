<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/bootstrap4/bootstrap.min.css')}}">
    <link href="{{ asset('plugins/fontawesome-free-5.0.1/css/fontawesome-all.css')}}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/OwlCarousel2-2.2.1/owl.carousel.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/OwlCarousel2-2.2.1/owl.theme.default.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/OwlCarousel2-2.2.1/animate.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/slick-1.8.0/slick.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/main_styles.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('styles/responsive.css')}}">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
</head>

<body>
    <div id="app">
    </div>
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{ asset('styles/bootstrap4/popper.js')}}"></script>
    <script src="{{ asset('styles/bootstrap4/bootstrap.min.js')}}"></script>
    <script src="{{ asset('plugins/greensock/TweenMax.min.js')}}"></script>
    <script src="{{ asset('plugins/greensock/TimelineMax.min.js')}}"></script>
    <script src="{{ asset('plugins/scrollmagic/ScrollMagic.min.js')}}"></script>
    <script src="{{ asset('plugins/greensock/animation.gsap.min.js')}}"></script>
    <script src="{{ asset('plugins/greensock/ScrollToPlugin.min.js')}}"></script>
    <script src="{{ asset('plugins/OwlCarousel2-2.2.1/owl.carousel.js')}}"></script>
    <script src="{{ asset('plugins/slick-1.8.0/slick.js')}}"></script>
    <script src="{{ asset('plugins/easing/easing.js')}}"></script>
    <script src="{{ asset('js/custom.js')}}"></script>
</body>

</html>
