let mix = require('laravel-mix');

/********************************************************************************
 *  UI CSS, JS AND COMPONENTS REACT JS - TEMPLATE GXAPP-CRM
*********************************************************************************/

/*
 |--------------------------------------------------------------------------
 | Theme plugins
 |--------------------------------------------------------------------------
 |
 | CSS & JS Theme plugins for Pages Admin Template - Simply White
 | Includes bootstrap, jquery, jquery-ui, etc.
 |
 */

mix.copy([
    'resources/assets/crm/plugins/pace/pace-theme-flash.css',
    'resources/assets/crm/plugins/bootstrap/css/bootstrap.min.css',
    'resources/assets/crm/plugins/jquery-scrollbar/jquery.scrollbar.css',
    'resources/assets/crm/plugins/select2-4.0.5/css/select2.min.css',
    'resources/assets/crm/plugins/switchery/css/switchery.min.css',
    'resources/assets/crm/plugins/bootstrap-datepicker/css/datepicker3.css',
    'resources/assets/crm/plugins/bootstrap-timepicker/bootstrap-timepicker.min.css',

], 'public/crm/plugins/css/')
    .copy([
        'resources/assets/crm/plugins/pace/pace.min.js',
        'resources/assets/crm/plugins/jquery/jquery-1.11.1.min.js',
        'resources/assets/crm/plugins/bootstrap/js/bootstrap.min.js',
        'resources/assets/crm/plugins/modernizr.custom.js',
        'resources/assets/crm/plugins/jquery-ui/jquery-ui.min.js',
        'resources/assets/crm/plugins/tether/js/tether.min.js',
        'resources/assets/crm/plugins/jquery/jquery-easy.js',
        'resources/assets/crm/plugins/jquery-unveil/jquery.unveil.min.js',
        'resources/assets/crm/plugins/jquery-bez/jquery.bez.min.js',
        'resources/assets/crm/plugins/jquery-ios-list/jquery.ioslist.min.js',
        'resources/assets/crm/plugins/imagesloaded/imagesloaded.pkgd.min.js',
        'resources/assets/crm/plugins/jquery-actual/jquery.actual.min.js',
        'resources/assets/crm/plugins/jquery-scrollbar/jquery.scrollbar.min.js',
        'resources/assets/crm/plugins/select2-4.0.5/js/select2.full.min.js',
        'resources/assets/crm/plugins/classie/classie.js',
        'resources/assets/crm/plugins/switchery/js/switchery.min.js',
        'resources/assets/crm/plugins/jquery-autonumeric/autoNumeric.js',
        'resources/assets/crm/plugins/dropzone/dropzone.min.js',
        'resources/assets/crm/plugins/jquery-inputmask/jquery.inputmask.min.js',
        'resources/assets/crm/plugins/bootstrap-form-wizard/js/jquery.bootstrap.wizard.min.js',
        'resources/assets/crm/plugins/jquery-validation/js/jquery.validate.min.js',
        'resources/assets/crm/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
        'resources/assets/crm/plugins/summernote/js/summernote.min.js',
        'resources/assets/crm/plugins/moment/moment.min.js',
        'resources/assets/crm/plugins/bootstrap-daterangepicker/daterangepicker.js',
        'resources/assets/crm/plugins/bootstrap-timepicker/bootstrap-timepicker.min.js',
        'resources/assets/crm/plugins/jquery.sieve.min.js',
        'resources/assets/crm/plugins/google-palette/palette.js',
        'resources/assets/crm/plugins/accounting.min.js',
        'resources/assets/crm/plugins/sorttable.js',
    ], 'public/crm/plugins/js/');


/*
 |--------------------------------------------------------------------------
 | Socket Io
 |--------------------------------------------------------------------------
 */
// mix.copyDirectory('node_modules/socket.io-client', 'public/plugins/socketioclient');
// mix.copyDirectory('resources/assets/plugins/socketioclient', 'public/plugins/socketioclient');

/*
 |--------------------------------------------------------------------------
 | Font awesome
 |--------------------------------------------------------------------------
 | Font awesome
 */

mix.copyDirectory('resources/assets/crm/plugins/font-awesome', 'public/crm/plugins/font-awesome');

/*
 |--------------------------------------------------------------------------
 | Feather Icons
 |--------------------------------------------------------------------------
 | Feather Icons
 */

mix.copyDirectory('resources/assets/crm/plugins/feather-icons', 'public/crm/plugins/feather-icons');

/*
 |--------------------------------------------------------------------------
 | Dropzone
 |--------------------------------------------------------------------------
 | Drag n drop loader plugins
 */

mix.copyDirectory('resources/assets/crm/plugins/dropzone', 'public/crm/plugins/dropzone');

/*
 |--------------------------------------------------------------------------
 | Full Calendar
 |--------------------------------------------------------------------------
 | fullcalendar.io plugins
 */

// mix.copyDirectory('resources/assets/crm/plugins/fullcalendar', 'public/crm/plugins/fullcalendar');



/*
 |--------------------------------------------------------------------------
 | Jquery Datatable & Datatable Responsive
 |--------------------------------------------------------------------------
 | Jquery Datatable & Datatable Responsive plugins
 */

mix.copyDirectory('resources/assets/crm/plugins/jquery-datatable', 'public/crm/plugins/jquery-datatable')
    .copyDirectory('resources/assets/crm/plugins/datatables-responsive', 'public/crm/plugins/datatables-responsive');

/*
 |--------------------------------------------------------------------------
 | Core theme
 |--------------------------------------------------------------------------
 |
 | CSS & JS Core scripts and style for Pages Admin Template
 |
 */

mix.js('resources/assets/crm/core/js/pages.js', 'public/crm/core/js/core-theme.js');
mix.styles('resources/assets/crm/core/css/light.css', 'public/crm/core/css/core-theme.css');

/*
 |--------------------------------------------------------------------------
 | Theme icons
 |--------------------------------------------------------------------------
 |
 | Theme icons
 |
 */

mix.copy('resources/assets/crm/core/css/pages-icons.css', 'public/crm/core/css/theme-icons.css');


/*
 |--------------------------------------------------------------------------
 | Theme images and fonts
 |--------------------------------------------------------------------------
 |
 | Theme images and fonts
 |
 */

mix.copyDirectory('resources/assets/crm/core/img', 'public/crm/core/img');
mix.copyDirectory('resources/assets/crm/images/company', 'public/crm/images/company');
mix.copyDirectory('resources/assets/crm/images/network', 'public/crm/images/network');
mix.copyDirectory('resources/assets/crm/core/fonts', 'public/crm/core/fonts');



/*
 |--------------------------------------------------------------------------
 | Sounds
 |--------------------------------------------------------------------------
 */
// mix.copyDirectory('resources/assets/sounds', 'public/sounds');

/*
 |--------------------------------------------------------------------------
 | Scripts
 |--------------------------------------------------------------------------
 */
// mix.copyDirectory('resources/assets/script', 'public/script');



/*
 |--------------------------------------------------------------------------
 | Client Compiled JS
 |--------------------------------------------------------------------------
 */

mix.react('resources/assets/crm/js/ui/element/color.js', 'public/crm/js/pages/element');
mix.react('resources/assets/crm/js/ui/element/table.js', 'public/crm/js/pages/element');
mix.react('resources/assets/crm/js/ui/attribute/searchmenu.js', 'public/crm/js/attribute');
/*
 |--------------------------------------------------------------------------
 | Application JS
 |--------------------------------------------------------------------------
 */
mix.js('resources/assets/crm/js/app.js', 'public/crm/js');
mix.sass('resources/assets/crm/sass/app.scss', 'public/crm/css');

mix.version();






/********************************************************************************
 *  UI CSS, JS AND COMPONENTS REACT JS - TEMPLATE GXAPP-PORTAL
 *********************************************************************************/

/*
|--------------------------------------------------------------------------
| Theme plugins
|--------------------------------------------------------------------------
|
| CSS & JS Theme plugins for Pages Admin Template - Simply White
| Includes bootstrap, jquery, jquery-ui, etc.
|
*/

mix.copy([
    'resources/assets/portal/plugins/pace/pace-theme-flash.css',
    'resources/assets/portal/plugins/bootstrap/css/bootstrap.min.css',
    'resources/assets/portal/plugins/jquery-scrollbar/jquery.scrollbar.css',
    'resources/assets/portal/plugins/select2/css/select2.min.css',
    'resources/assets/portal/plugins/switchery/css/switchery.min.css',
    'resources/assets/portal/plugins/bootstrap-datepicker/css/datepicker3.css',
    'resources/assets/portal/plugins/bootstrap-timepicker/bootstrap-timepicker.min.css'
], 'public/portal/plugins/css/')
    .copy([
        'resources/assets/portal/plugins/pace/pace.min.js',
        'resources/assets/portal/plugins/jquery/jquery-1.11.1.min.js',
        'resources/assets/portal/plugins/bootstrap/js/bootstrap.min.js',
        'resources/assets/portal/plugins/modernizr.custom.js',
        'resources/assets/portal/plugins/jquery-ui/jquery-ui.min.js',
        'resources/assets/portal/plugins/tether/js/tether.min.js',
        'resources/assets/portal/plugins/jquery/jquery-easy.js',
        'resources/assets/portal/plugins/jquery-unveil/jquery.unveil.min.js',
        'resources/assets/portal/plugins/jquery-bez/jquery.bez.min.js',
        'resources/assets/portal/plugins/jquery-ios-list/jquery.ioslist.min.js',
        'resources/assets/portal/plugins/imagesloaded/imagesloaded.pkgd.min.js',
        'resources/assets/portal/plugins/jquery-actual/jquery.actual.min.js',
        'resources/assets/portal/plugins/jquery-scrollbar/jquery.scrollbar.min.js',
        'resources/assets/portal/plugins/select2/js/select2.full.min.js',
        'resources/assets/portal/plugins/classie/classie.js',
        'resources/assets/portal/plugins/switchery/js/switchery.min.js',
        'resources/assets/portal/plugins/jquery-autonumeric/autoNumeric.js',
        'resources/assets/portal/plugins/dropzone/dropzone.min.js',
        'resources/assets/portal/plugins/jquery-inputmask/jquery.inputmask.min.js',
        'resources/assets/portal/plugins/bootstrap-form-wizard/js/jquery.bootstrap.wizard.min.js',
        'resources/assets/portal/plugins/jquery-validation/js/jquery.validate.min.js',
        'resources/assets/portal/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
        'resources/assets/portal/plugins/summernote/js/summernote.min.js',
        'resources/assets/portal/plugins/moment/moment.min.js',
        'resources/assets/portal/plugins/bootstrap-daterangepicker/daterangepicker.js',
        'resources/assets/portal/plugins/bootstrap-timepicker/bootstrap-timepicker.min.js',
        'resources/assets/portal/plugins/jquery.sieve.min.js'
    ], 'public/portal/plugins/js/');


/*
 |--------------------------------------------------------------------------
 | Font awesome
 |--------------------------------------------------------------------------
 | Font awesome
 */

mix.copyDirectory('resources/assets/portal/plugins/font-awesome', 'public/portal/plugins/font-awesome');

/*
 |--------------------------------------------------------------------------
 | Feather Icons
 |--------------------------------------------------------------------------
 | Feather Icons
 */

mix.copyDirectory('resources/assets/portal/plugins/feather-icons', 'public/portal/plugins/feather-icons');

/*
 |--------------------------------------------------------------------------
 | Dropzone
 |--------------------------------------------------------------------------
 | Drag n drop loader plugins
 */

mix.copyDirectory('resources/assets/portal/plugins/dropzone', 'public/portal/plugins/dropzone');

/*
 |--------------------------------------------------------------------------
 | Full Calendar
 |--------------------------------------------------------------------------
 | fullcalendar.io plugins
 */

// mix.copyDirectory('resources/assets/crm/plugins/fullcalendar', 'public/crm/plugins/fullcalendar');



/*
 |--------------------------------------------------------------------------
 | Jquery Datatable & Datatable Responsive
 |--------------------------------------------------------------------------
 | Jquery Datatable & Datatable Responsive plugins
 */

mix.copyDirectory('resources/assets/portal/plugins/jquery-datatable', 'public/portal/plugins/jquery-datatable')
    .copyDirectory('resources/assets/portal/plugins/datatables-responsive', 'public/portal/plugins/datatables-responsive');

/*
 |--------------------------------------------------------------------------
 | Core theme
 |--------------------------------------------------------------------------
 |
 | CSS & JS Core scripts and style for Pages Admin Template
 |
 */

mix.js('resources/assets/portal/core/js/pages.js', 'public/portal/core/js/core-theme.js');
mix.sass('resources/assets/portal/core/sass/modern.scss', 'public/portal/core/css/core-theme.css');

/*
 |--------------------------------------------------------------------------
 | Theme icons
 |--------------------------------------------------------------------------
 |
 | Theme icons
 |
 */

mix.copy('resources/assets/portal/core/css/pages-icons.css', 'public/portal/core/css/theme-icons.css');


/*
 |--------------------------------------------------------------------------
 | Theme images and fonts
 |--------------------------------------------------------------------------
 |
 | Theme images and fonts
 |
 */

mix.copyDirectory('resources/assets/portal/core/img', 'public/portal/core/img');
mix.copyDirectory('resources/assets/portal/images/company', 'public/portal/images/company');
mix.copyDirectory('resources/assets/portal/images/network', 'public/portal/images/network');
mix.copyDirectory('resources/assets/portal/core/fonts', 'public/portal/core/fonts');



/*
 |--------------------------------------------------------------------------
 | Sounds
 |--------------------------------------------------------------------------
 */
// mix.copyDirectory('resources/assets/sounds', 'public/sounds');

/*
 |--------------------------------------------------------------------------
 | Scripts
 |--------------------------------------------------------------------------
 */
// mix.copyDirectory('resources/assets/script', 'public/script');



/*
 |--------------------------------------------------------------------------
 | Client Compiled JS
 |--------------------------------------------------------------------------
 */

mix.react('resources/assets/portal/js/ui/element/color.js', 'public/portal/js/pages/element');
mix.react('resources/assets/portal/js/ui/element/table.js', 'public/portal/js/pages/element');
mix.react('resources/assets/portal/js/ui/attribute/searchmenu.js', 'public/portal/js/attribute');
/*
 |--------------------------------------------------------------------------
 | Application JS
 |--------------------------------------------------------------------------
 */
mix.js('resources/assets/portal/js/app.js', 'public/portal/js');
mix.sass('resources/assets/portal/sass/app.scss', 'public/portal/css');