<?php

namespace App\Http\Controllers;

use App\Models\AspNetUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class AuthenticationController extends Controller
{
    // Register user
    public function register(Request $request)
    {
        try {
            $validated = $request->validate([
                'FullName' => 'required|string|max:255',
                'UserName' => 'required|string|max:255|unique:AspNetUsers,UserName',
                'Email' => 'required|email|unique:AspNetUsers,Email',
                'Password' => 'required|string|min:6|confirmed',
            ]);

            $user = AspNetUsers::create([
                'FullName' => $validated['FullName'],
                'UserName' => $validated['UserName'],
                'NormalizedUserName' => strtoupper($validated['UserName']),
                'Email' => $validated['Email'],
                'NormalizedEmail' => strtoupper($validated['Email']),
                'PasswordHash' => Hash::make($validated['Password']),
                'EmailConfirmed' => true,
                'IsActive' => true,
                'SecurityStamp' => Str::random(32),
                'ConcurrencyStamp' => Str::uuid(),
                'PhoneNumber' => null,
                'PhoneNumberConfirmed' => false,
                'TwoFactorEnabled' => false,
                'LockoutEnd' => null,
                'LockoutEnabled' => false,
                'AccessFailedCount' => 0
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json([
                'status' => 'success',
                'message' => 'User registered successfully',
                'data' => [
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'user' => $user
                ]
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Registration failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Login user
    public function login(Request $request)
    {
        try {
            $credentials = $request->validate([
                'UserName' => 'required|string',
                'Password' => 'required|string',
            ]);

            // Get user by UserName
            $user = AspNetUsers::where('UserName', $credentials['UserName'])->first();

            if (!$user || !Hash::check($credentials['Password'], $user->PasswordHash)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid credentials'
                ], 401);
            }

            if (!$token = JWTAuth::fromUser($user)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Could not create token'
                ], 500);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'data' => [
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'user' => $user
                ]
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during login',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Update user info (authenticated)
    public function update(Request $request)
    {
        $user = auth()->user();

        $validated = $request->validate([
            'FullName' => 'sometimes|string|max:255',
            'Email' => 'sometimes|email|unique:AspNetUsers,Email,' . $user->Id . ',Id',
            'PhoneNumber' => 'sometimes|string|nullable',
            'IsActive' => 'sometimes|boolean',
        ]);

        $user->update($validated);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
        ]);
    }

    // Logout user (invalidate token)
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Logged out successfully']);
    }

    // Refresh token
    public function refresh()
    {
        return response()->json([
            'access_token' => auth()->refresh(),
            'token_type' => 'Bearer',
        ]);
    }

    // Get authenticated user
    public function me()
    {
        return response()->json(auth()->user());
    }
}
