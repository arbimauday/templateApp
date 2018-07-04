<!-- START PAGE HEADER WRAPPER -->
<!-- START HEADER -->
<div class="header bg-primary-dark"></div>
<div class="header p-r-0 bg-primary">
    <div class="header-inner header-md-height">
        <a href="#" class="btn-link toggle-sidebar hidden-lg-up pg pg-menu text-white" data-toggle="horizontal-menu"></a>

        <div class="">
            <div class="brand no-border p-l-0" style="width: 230px;">
                <img src="{{asset('portal/core/img/logo_white.png')}}" alt="logo" data-src="{{asset('portal/core/img/logo_white.png')}}"
                     data-src-retina="{{asset('portal/core/img/logo_white_2x.png')}}" width="78" height="22">
                <span class="text-white fs-14 ">v.</span>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="input-group"><input type="text" id="search-box" placeholder="Click here to search" class="form-control"></div>
        </div>


        <div class="d-flex align-items-center">
            <ul class="hidden-md-down no-margin hidden-sm-down b-grey b-r no-style p-l-30 p-r-20">
                <li class="p-r-10 inline">
                    <div class="dropdown">
                        <a href="javascript:;" id="notification-center" class="header-icon pg pg-world" data-toggle="dropdown">
                            <span class="bubble"></span>
                        </a>
                    </div>
                </li>
                <li class="p-r-10 inline">
                    <a href="#" class="header-icon fa fa-comment white cursor m-b-5"
                       style="font-size: 18px"></a>
                </li>
                <li class="p-r-10 inline">
                    <a href="#" class="header-icon pg pg-thumbs white"></a>
                </li>
            </ul>
            <!-- START User Info-->
            <div class="pull-left p-r-10 fs-14 font-heading hidden-md-down text-white m-l-20">
                <span class="semi-bold">User Name</span>
            </div>
            <div class="dropdown pull-right">
                <button class="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="thumbnail-wrapper d32 circular inline sm-m-r-5">
                <img src="{{asset('portal/core/img/profiles/avatar_small2x.jpg')}}" alt="" width="32" height="32">
                </span>
                </button>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                    <a href="#" class="dropdown-item"><i class="pg-settings_small"></i> Settings</a>
                    <a href="#" class="dropdown-item"><i class="pg-outdent"></i> Feedback</a>
                    <a href="#" class="dropdown-item"><i class="pg-signals"></i> Help</a>
                    <a href="#" class="clearfix bg-master-lighter dropdown-item">
                        <span class="pull-left">Logout</span>
                        <span class="pull-right"><i class="pg-power"></i></span>
                    </a>
                </div>
            </div>
            <!-- END User Info-->
        </div>
    </div>

    <div class="bg-white">
        <div class="container">
            <div class="menu-bar header-sm-height" data-pages-init='horizontal-menu' data-hide-extra-li="4">
                <a href="#" class="btn-link toggle-sidebar hidden-lg-up pg pg-close" data-toggle="horizontal-menu">
                </a>
                <ul>
                    <li class=" active">
                        <a href="{{asset('portal/dashboard')}}">Dashboard</a>
                    </li>
                    <li>
                        <a href="javascript:;"><span class="title">UI Elements</span>
                            <span class=" arrow"></span></a>
                        <ul class="">
                            <li class="">
                                <a href="{{asset('portal/elementui/color')}}">Color</a>
                            </li>
                            <li class="">
                                <a href="{{asset('portal/elementui/table')}}">Table</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a href="#" class="search-link d-flex justify-content-between align-items-center hidden-lg-up" data-toggle="search">Tap here to search <i class="pg-search float-right"></i></a>
            </div>
        </div>
    </div>
</div>
<!-- END HEADER -->
<!-- END PAGE HEADER WRAPPER -->

@push('child-page-controller')
<script>
    $(document).ready(function () {
        $('#logout-btn').on('click', function (e) {
            e.preventDefault();
            $('#logout-form').submit();
        });

        $('#search-box').on('click', function () {
            $('#overlay-search').removeClass('hide');
            $('#overlay-search-input-box').focus();
        });

        $('#search-box').keypress(function (e) {
            return false
        })

        $('#close-search').click(function () {
            $('#overlay-search').addClass('hide');
        });
    })
</script>
@endpush
