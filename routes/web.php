<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/welcome', function () {
    return view('welcome');
});



Route::prefix('crm')->group(function (){
    Route::get('/login', function(){
        return view('crm.pages.auth.login');
    });
    Route::get('/logout', function(){
        return view('crm.pages.auth.login');
    });
    Route::get('/dashboard', function(){
        return view('crm.pages/dashboard.home');
    });
    Route::get('/elementui/color', function(){
        return view('crm.pages.elementUi.color');
    });
    Route::get('/elementui/table', function(){
        return view('crm.pages.elementUi.table');
    });
});


Route::prefix('portal')->group(function (){
    Route::get('/login', function(){
        return view('portal.pages.auth.login');
    });
    Route::get('/logout', function(){
        return view('portal.pages.auth.login');
    });
    Route::get('/dashboard', function(){
        return view('portal.pages/dashboard.home');
    });
    Route::get('/elementui/color', function(){
        return view('portal.pages.elementUi.color');
    });
    Route::get('/elementui/table', function(){
        return view('portal.pages.elementUi.table');
    });
});