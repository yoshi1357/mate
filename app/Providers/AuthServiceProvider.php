<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // 管理者かどうか
        Gate::define('isAdmin',function($user){
            return $user->admin == User::ADMIN;
        });

        // 処理対象のユーザー自身かどうか
        Gate::define('isSameUser',function($user, Request $request){
            $request_user_id = $request->route('user_id');
            return $user->id == $request_user_id;
        });
    }
}
