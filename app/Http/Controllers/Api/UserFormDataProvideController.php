<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserFormDataProvideController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        return new JsonResponse([
            'blood_type_radios' => array_values(config('user.blood_type_radios')),
            'sex_radios' => array_values(config('user.sex_radios')),
            'holiday_selects' => array_values(config('user.holiday_selects')),
            'body_shape_selects' => array_values(config('user.body_shape_selects')),
            'work_selects' => array_values(config('user.work_selects')),
            'residence_selects' => array_values(config('user.residence_selects')),
        ]);
    }
}
