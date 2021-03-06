@extends('crm.layouts.main_login')

@section('content')
    <div class="container">
        <div class="row" style="margin-top: 80px">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card widget-loader-bar m-b-10 bg-white">
                    <div style="padding: 50px;margin: 30px;">
                        <div class="col-md-12">
                            <a href="/" class="pull-right">Login</a>
                            <img src="{{asset('crm/crm/core/img/logo.png')}}" alt="logo" data-src="{{asset('crm/crm/core/img/logo.png')}}"
                                 data-src-retina="{{asset('crm/crm/core/img/logo_2x.png')}}" width="78" height="22">
                            <p class="bold p-t-20" >Reset Password</p>
                        </div>
                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif

                        <form method="POST" action="{{ route('password.email') }}">
                            {{ csrf_field() }}

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email" class="col-md-12 control-label">E-Mail Address</label>

                                <div class="col-md-12">
                                    <input id="email"
                                           placeholder="Enter your e-mail address"
                                           type="email" class="form-control" name="email"
                                           value="{{ old('email') }}" required>

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">

                                <div class="col-md-6">
                                    <button type="submit" class="btn btn-primary">
                                        Send Password Reset Link
                                    </button>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-3">

        </div>
    </div>
@endsection
