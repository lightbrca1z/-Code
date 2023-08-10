<?php

use App\Http\Controllers\GameController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UtilityController;
use App\Http\Controllers\RequestSampleController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HiLowController;
use App\Http\Controllers\PhotoController;

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

// 世界の時間
Route::get('/world-time', [UtilityController::class,'worldTime']);

// おみくじ
Route::get('/omikuji', [GameController::class,'omikuji']);

// モンティ・ホール問題
Route::get('/monty-hall', [GameController::class,'montyHall']);

// form
Route::get('/form', [RequestSampleController::class,'form']);

// String
Route::get('/query-strings', [RequestSampleController::class,'queryStrings']);

// profile
Route::get('/users/{id}', [RequestSampleController::class,'profile'])->name('profile');

// profile
Route::get('/products/{category}/{year}', [RequestSampleController::class,'productsArchive']);

// profile
Route::get('/route-link', [RequestSampleController::class,'routeLink']);

// loginform
Route::get('/login', [RequestSampleController::class,'loginform'])->name('login');


// login
Route::post('/login', [RequestSampleController::class,'login'])->name('login');

// login
Route::resource('/events', EventController::class)->only('index','create','store');

// login
// Route::resource('/events', EventController::class)->only('index','create','store');

// ハイローゲーム
Route::get('/hi-low', [HiLowController::class, 'index'])->name('hi-low');
Route::post('/hi-low', [HiLowController::class, 'result']);

Route::resource('/photos', PhotoController::class)->only('create','store');

?>
