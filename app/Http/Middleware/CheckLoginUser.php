<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

class CheckLoginUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isAdmin = Gate::allows('isAdmin');
        $isSameUser = Gate::allows('isSameUser', $request);
        // ユーザー自身のみ実行が可能
        if ($isAdmin || $isSameUser) {
            return $next($request);
        }
        return response()->json(['message' => 'Unauthorized'], 403);
    }

}
