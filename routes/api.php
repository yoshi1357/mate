<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ApiTestProductController;
use App\Http\Controllers\UserController;

use App\Http\Controllers\Api\MeController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class);
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('test_products', ApiTestProductController::class);
});

Route::post("login",[UserController::class,'index']);