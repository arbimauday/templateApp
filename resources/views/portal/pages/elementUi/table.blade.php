@extends('portal.layouts.main')

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

@include('portal.layouts.partials.snippets._notification_to_zoom_out80')
<script src="{{asset(mix('portal/js/pages/element/table.js'))}}"></script>
@endpush

@section('content')

    <!-- START PAGE CONTENT -->
    <div class="content">
        <!-- START JUMBOTRON -->
        <div class="bg-white">
            <div class="container">
                <ol class="breadcrumb breadcrumb-alt">
                    <li class="breadcrumb-item"><a href="#">Element UI</a></li>
                    <li class="breadcrumb-item active">Color</li>
                </ol>
            </div>
        </div>
        <!-- END JUMBOTRON -->
        <!-- START CONTAINER FLUID -->
        <div class="container sm-padding-10 p-t-20 p-l-0 p-r-0" id="vc-table"></div>
        <!-- END CONTAINER FLUID -->
    </div>
    <!-- END PAGE CONTENT -->

@endsection