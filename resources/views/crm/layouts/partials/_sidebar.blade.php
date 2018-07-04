<!-- BEGIN SIDEBAR -->
<!-- BEGIN SIDEBPANEL-->
<nav class="page-sidebar" data-pages="sidebar">
    <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->
    <div class="sidebar-overlay-slide from-top" id="appMenu">

    </div>
    <!-- END SIDEBAR MENU TOP TRAY CONTENT-->
    <!-- BEGIN SIDEBAR MENU HEADER-->
    <div class="sidebar-header">
        <img src="{{asset('crm/core/img/logo_blue.png')}}" alt="logo" class="brand"
             data-src="{{asset('crm/core/img/logo_blue.png')}}" data-src-retina="{{asset('crm/core/img/logo_blue_2x.png')}}"
             width="78" height="22">
    </div>
    <!-- END SIDEBAR MENU HEADER-->
    <!-- START SIDEBAR MENU -->
    <div class="sidebar-menu">
        <!-- BEGIN SIDEBAR MENU ITEMS-->
        <ul class="menu-items">

            <li class="m-t-30">
                <a href="{{asset('crm/dashboard')}}" class="detailed">
                    <span class="title">Dashboard</span>
                    <span class="details">234 notifications</span>
                </a>
                <span class="icon-thumbnail "><i data-feather="airplay"></i></span>
            </li>

            <li class="">
                <a  href="javascript:;"class="">
                    <span class="title">Element UI</span>
                    <span class="arrow"></span>
                </a>
                <span class="icon-thumbnail"><i data-feather="cpu"></i></span>
                <ul class="sub-menu">
                    <li class="">
                        <a href="{{asset('crm/elementui/color')}}">Color</a>
                        <span class="icon-thumbnail">cl</span>
                    </li>
                    <li class="">
                        <a href="{{asset('crm/elementui/table')}}">Table</a>
                        <span class="icon-thumbnail">tb</span>
                    </li>
                </ul>
            </li>

        </ul>
        <div class="clearfix"></div>
    </div>
    <!-- END SIDEBAR MENU -->
</nav>
<!-- END SIDEBAR -->
<!-- END SIDEBAR -->