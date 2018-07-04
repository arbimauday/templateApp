@extends('crm.layouts.main')

@push('child-styles')
<!-- push needed plugins for this page-->

@endpush

@push('child-scripts-plugins')
<!-- push needed plugins for this page -->
@endpush

@push('child-page-controller')

{{--<script>--}}
{{--$('#notify').click(function(e){--}}
{{--e.preventDefault()--}}
{{--$.get('/testing/broadcast')--}}
{{--})--}}
{{--</script>--}}

@include('crm.layouts.partials.snippets._notification_to_zoom_out80')
<script src="{{asset(mix('crm/js/pages/element/table.js'))}}"></script>
@endpush

@section('content')

    <!-- START PAGE CONTENT -->
    <div class="content">
        <!-- START JUMBOTRON -->
        <div class="jumbotron" data-pages="parallax">
            <div class=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                <div class="inner">
                    <!-- START BREADCRUMB -->
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Element UI</a></li>
                        <li class="breadcrumb-item active">Tables</li>
                    </ol>
                    <!-- END BREADCRUMB -->
                </div>
            </div>
        </div>
        <!-- END JUMBOTRON -->
        <!-- START CONTAINER FLUID -->
        <div class="filter-container">
            <div class="container-fluid container-fixed-lg" id="vc-table"></div>
        </div>
        <!-- END CONTAINER FLUID -->
    </div>
    <!-- END PAGE CONTENT -->

@endsection