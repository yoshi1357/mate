<?php declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

final class LogoutController extends Controller
{
    /**
     * @param AuthManager $auth
     */
    public function __construct(
        private readonly AuthManager $auth,
    ) {
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request): Response
    {
        if ($this->auth->guard()->guest()) {
            return response()->json([
                'success' => false,
                'message' => 'Already Unauthenticated.',
            ], Response::HTTP_OK); // HTTPステータスコード200
        }

        $this->auth->guard()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // ログアウト成功時は、204 No Content を返して、特に表示するメッセージがないことを示す
        return response()->noContent(); // HTTPステータスコード204
    }
}
