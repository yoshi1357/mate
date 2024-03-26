<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    // ユーザー一覧を取得
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    // 新しいユーザーを作成
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, Response::HTTP_CREATED);
    }

    // 特定のユーザーを表示
    public function show($id)
    {
        $user = User::findOrFail($id);

        $userData = $user->toArray();
        $userData['sex'] = $user->display_sex;
        $userData['blood_type'] = $user->display_blood_type;
        $userData['body_shape'] = $user->display_body_shape;
        $userData['residence'] = $user->display_residence;
        $userData['birth_place'] = $user->display_birth_place;
        $userData['holiday'] = $user->display_holiday;
        $userData['work'] = $user->display_work;

        return response()->json($userData);
    }

    // ユーザー情報を更新
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    // ユーザーを削除
    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
