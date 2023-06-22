<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/hello_world', function () {
    return view('hello_world');
});

Route::get('/hello', function () {
    return view('hello',['name' => '山田', 'course' => 'Laravel9']);
});

Route::get('/hello', function () {
    return view('hello',['name' => '山田', 'course' => 'Laravel9']);
});

Route::get('/', function () {
    return view('index');
});

Route::get('/curriculum', function () {
    return view('curriculum');
});

