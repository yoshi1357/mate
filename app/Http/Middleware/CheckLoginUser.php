<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;

class CheckLoginUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $request_user_id = $request->route('user_id');
        // ユーザー自身または、管理者ユーザーのみ実行が可能
        if ($user->id == $request_user_id || $user->admin == User::ADMIN) {
            return $next($request);
        }
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
