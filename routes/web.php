<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::resources([
	'class' => 'ClassesController',		// 댄스 강좌 라우터
	'contest' => 'ContestsController',		// 댄스 경연 라우터
	'advice' => 'AdvicesController',	// 피드백 라우터
	'enterprise' => 'EnterprisesController',	// 기업연계 라우터
	'myPage' => 'MyPagesController',	// 마이페이지 라우터
]);
Auth::routes();
