<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\LoanApplicationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::post('/auth/register', [AuthenticationController::class, 'register']);
Route::post('/auth/login', [AuthenticationController::class, 'login']);

// Protected routes
Route::middleware('auth:api')->group(function () {
    // Auth routes
    Route::post('/auth/logout', [AuthenticationController::class, 'logout']);
    Route::post('/auth/refresh', [AuthenticationController::class, 'refresh']);
    Route::get('/auth/me', [AuthenticationController::class, 'me']);
    Route::put('/auth/update', [AuthenticationController::class, 'update']);

    // Client routes
    // Route::apiResource('clients', ClientController::class);
    
    Route::get('/clients/{sysClientNumber}', [ClientController::class, 'show'])
    ->where('sysClientNumber', '.*');

    Route::put('/clients/{sysClientNumber}', [ClientController::class, 'update'])
    ->where('sysClientNumber', '.*');

    Route::post('/clients', [ClientController::class, 'store']);

    
    // Loan Apllication
    Route::prefix('loans')->group(function () {
    Route::post('/', [LoanApplicationController::class, 'store']);
    Route::post('/authorize/{id}', [LoanApplicationController::class, 'authorizeLoan']);
    });


  
});

// Route::get('/user', function (Request $request) {
//     return $request->user();

// })->middleware('auth:sanctum');
