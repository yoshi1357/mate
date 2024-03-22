<?php

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;

use App\Http\Controllers\Api\MeController;
use App\Http\Controllers\Api\UserFormDataProvideController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class);
});

Route::get('/user_form_data_provide', [ UserFormDataProvideController::class ,'index' ]);
