<?php declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

final class LoginController extends Controller
{
    /**
     * @param AuthManager $auth
     */
    public function __construct(
        private readonly AuthManager $auth,
    ) {
    }

    /**
     * @param LoginRequest $request
     * @return JsonResponse
     * @throws AuthenticationException
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only(['email', 'password']);
        
        if ($this->auth->guard()->attempt($credentials)) {
            $request->session()->regenerate();

            // ログイン成功時に、ユーザー情報を取得
            $user = $this->auth->guard()->user();

            // ユーザー情報を含むレスポンスを返す
            return new JsonResponse([
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'admin' => $user->admin,
                ],
            ]);
        }

        throw new AuthenticationException();
    }
}
