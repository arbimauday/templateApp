<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
        <link rel="apple-touch-icon" href="pages/ico/60.png">
        <link rel="apple-touch-icon" sizes="76x76" href="pages/ico/76.png">
        <link rel="apple-touch-icon" sizes="120x120" href="pages/ico/120.png">
        <link rel="apple-touch-icon" sizes="152x152" href="pages/contoh ico/152.png">
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <meta content="" name="description" />
        <meta content="" name="author" />

        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link href="plugins/css/pace-theme-flash.css" rel="stylesheet" type="text/css" />
        <link href="plugins/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
        <link href="plugins/css/jquery.scrollbar.css" rel="stylesheet" type="text/css" media="screen" />
        <link href="plugins/css/select2.min.css" rel="stylesheet" type="text/css" media="screen"/>
        <link href="plugins/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css" media="screen"/>

        <link href="core/css/theme-icons.css" rel="stylesheet" type="text/css">
        <link href="{{mix('core/css/theme-modern.css')}}" rel="stylesheet" type="text/css">
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body class="fixed-header horizontal-menu horizontal-app-menu">
        <div id="root"></div>
        <script src="{{ mix('js/app.js') }}"></script>

        <script src="{{asset(mix('plugins/js/pace.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery-1.11.1.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/modernizr.custom.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery-ui.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/tether.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/bootstrap.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery-easy.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery.unveil.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery.bez.min.js'))}}"></script>
        <script src="{{asset(mix('plugins/js/jquery.ioslist.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/imagesloaded.pkgd.min.js'))}}"></script>
        <script src="{{asset(mix('plugins/js/jquery.actual.min.js'))}}"></script>
        <script src="{{asset(mix('plugins/js/jquery.scrollbar.min.js'))}}"></script>

        <script src="{{asset(mix('plugins/js/classie.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery.sieve.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/select2.full.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/jquery.inputmask.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/moment.min.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/bootstrap-datepicker.js'))}}" type="text/javascript"></script>
        <script src="{{asset(mix('plugins/js/bootstrap-timepicker.min.js'))}}" type="text/javascript"></script>

        <script src="{{ mix('core/js/pages.js') }}"></script>
    </body>
</html>
