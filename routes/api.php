<?php

use Illuminate\Http\Request;

use App\Http\Controllers\Api\MeController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\UserFormDataProvideController;
use Illuminate\Support\Facades\Route;



Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class);
    Route::get('/users', [ UserController::class, 'index' ]);
    Route::get('/users/{user_id}', [ UserController::class, 'show' ]);

    // ユーザー自身 or 管理者のみ実行できる操作
    Route::group(['middleware' => ['loginUserCheck']], function() {
        Route::post('/users/{user_id}/edit', [ UserController::class, 'update' ]);
        Route::post('/users/{user_id}/delete', [ UserController::class, 'destroy' ]);
    });
});


Route::post('/users', [ UserController::class, 'store' ]);
Route::get('/user_form_data_provide', [ UserFormDataProvideController::class ,'index' ]);
