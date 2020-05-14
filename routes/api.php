<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// 오디션 컨트롤러
Route::resource('audition','AuditionController');

// 강좌 컨트롤러
Route::resource('lecture','LectureController');

// 테스트용 컨트롤러
Route::resource('categories','CategoryController');

Route::resource('/', 'HomeController');

Route::resource('users', 'UserController');

Route::resource('sessions', 'SessionController');

Route::resource('lectureUsers', 'lectureUserController');

Route::get('/loadProfile', 'MypageController@loadProfile');

Route::get('/loadMyLecture', 'MypageController@loadMyLecture');
