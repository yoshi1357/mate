<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
{
    // ユーザー一覧を取得
    public function index()
    {
        $users = User::with('images:path,user_id')->get();
        return response()->json($users);
    }

    // 新しいユーザーを作成
    public function store(Request $request)
    {
        $data = $request->except('images');
        Log::debug($data);
        $user = User::create($data);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $file_name = $image->getClientOriginalName();
                $path = $image->store('public/images');
                $url = Storage::url($path);

                Image::create([
                    'file_name' => $file_name,
                    'path' => $url,
                    'user_id' => $user->id
                ]);
            }
        } else {
            $file_name = Image::DEFAULT_FILE_NAME;
            $url = Image::DEFAULT_FILE_PATH . Image::DEFAULT_FILE_NAME;
            
            Image::create([
                'file_name' => $file_name,
                'path' => $url,
                'user_id' => $user->id
            ]);
        }
        return response()->json($user, Response::HTTP_CREATED);
    }

    // 特定のユーザーを表示
    public function show($id)
    {
        $user = User::with(['images' => function ($query) {
            $query->select('user_id', 'path');
        }])->findOrFail($id);

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
