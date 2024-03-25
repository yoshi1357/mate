<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register()
    {
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable $exception)
    {
        // APIリクエストの場合のみカスタムレスポンスを返す
        if ($request->is('api/*')) {
            // バリデーションエラーの場合
            if ($exception instanceof ValidationException) {
                return response()->json([
                    'message' => 'Validation errors',
                    'errors' => $exception->validator->getMessageBag()
                ], 422);
            }

            // リソースが見つからない場合
            if ($exception instanceof NotFoundHttpException) {
                return response()->json([
                    'message' => $exception->getMessage(),
                    'errors' => $exception->getMessage()
                ], 404);
            }

            if ($exception instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'resource not found',
                    'errors' => $exception->getMessage()
                ], 404);
            }

            if (method_exists($exception, 'getStatusCode')) {
                return response()->json([
                    'message' => 'an error occured',
                    'errors' => $exception->getMessage()
                ], $exception->getStatusCode());
            }

            // その他の例外
            return response()->json([
                'message' => 'an error occured',
                'errors' => $exception->getMessage()
            ], 500);
        }

        return parent::render($request, $exception);
    }
}
