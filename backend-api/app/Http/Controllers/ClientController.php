<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Services\ClientNumberService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    protected $clientNumberService;

    public function __construct(ClientNumberService $clientNumberService)
    {
        $this->clientNumberService = $clientNumberService;
    }

    // getting all client
    public function index()
    {
        try {
            $clients = Client::with([
                'gender' => function($query) {
                    $query->select('Id', 'Gender', 'isActive');
                },
                'title' => function($query) {
                    $query->select('Id', 'Title', 'isActive');
                },
                'occupation' => function($query) {
                    $query->select('Id', 'Occupation', 'isActive');
                },
                'lineOfBusiness' => function($query) {
                    $query->select('Id', 'Sector', 'isActive');
                },
                'maritalStatus' => function($query) {
                    $query->select('Id', 'Status', 'isActive');
                },
                'customerAccountType' => function($query) {
                    $query->select('Id', 'Type', 'isActualType', 'isActive');
                }
            ])
            ->orderBy('RegistrationDate', 'desc')
            ->paginate(10);

            return response()->json([
                'status' => 'success',
                'data' => $clients
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch clients',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // creation of client
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'GenderId' => 'required|exists:Static_Gender,Id',
                'TitleId' => 'required|exists:Static_Title,Id',
                'FirstName' => 'required|string|max:255',
                'LastName' => 'required|string|max:255',
                'OtherName' => 'nullable|string|max:255',
                'Alias' => 'nullable|string|max:255',
                'GovernmentIdNumber' => 'required|string|max:255',
                'StaffId' => 'nullable|string|max:255',
                'PhoneNumber' => 'required|string|max:20',
                'IdType' => 'required|string|max:50',
                'HouseNumber' => 'required|string|max:50',
                'Location' => 'required|string|max:255',
                'LandMark' => 'nullable|string|max:255',
                'OccupationId' => 'required|exists:Static_Occupation,Id',
                'LineOfBusinessId' => 'required|exists:Static_LineOfBusiness,Id',
                'BusinessLocation' => 'nullable|string|max:255',
                'DateOfBirth' => 'required|date',
                'PlaceOfBirth' => 'required|string|max:255',
                'MaritalStatusId' => 'required|exists:Static_MaritalStatus,Id',
                'Spouse_FullName' => 'nullable|string|max:255',
                'Spouse_OccupationId' => 'nullable|exists:Static_Occupation,Id',
                'Spouse_LineOfBusinessId' => 'nullable|exists:Static_LineOfBusiness,Id',
                'Spouse_Location' => 'nullable|string|max:255',
                'Spouse_PhoneNumber' => 'nullable|string|max:20',
                'NextOfKin_FullName' => 'required|string|max:255',
                'NextOfKin_OccupationId' => 'required|exists:Static_Occupation,Id',
                'NextOfKin_LineOfBusinessId' => 'required|exists:Static_LineOfBusiness,Id',
                'NextOfKin_Location' => 'required|string|max:255',
                'NextOfKin_PhoneNumber' => 'required|string|max:20',
                'NextOfKin_LandMark' => 'nullable|string|max:255',
                'Dependants' => 'required|integer|min:0',
                'IsOfficer' => 'boolean',
                'IsActive' => 'boolean',
                'IsAccountOpening' => 'boolean',
                'CustomerAccountTypeId' => 'required|exists:Static_AccountType,Id'
            ]);

            // Generate client number
            $clientNumber = $this->clientNumberService->generateClientNumber();

            // Enable IDENTITY_INSERT
            DB::statement('SET IDENTITY_INSERT Client ON');

            // Create client
            $client = Client::create([
                'SysClientNumber' => $clientNumber,
                'RegistrationDate' => now(),
                ...$validated
            ]);

            // Disable IDENTITY_INSERT
            DB::statement('SET IDENTITY_INSERT Client OFF');

            return response()->json([
                'status' => 'success',
                'message' => 'Client created successfully',
                'data' => $client
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
                'message' => 'Failed to create client',
                'error' => $e->getMessage()
            ], 500);
        }
    }

 public function show($sysClientNumber)
{
    try {
        $client = Client::with([
                'gender',
                'title',
                'occupation',
                'lineOfBusiness',
                'maritalStatus',
                'customerAccountType'
            ])
            ->where('SysClientNumber', $sysClientNumber)
            ->firstOrFail();

        return response()->json([
            'status' => 'success',
            'data' => $client
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Client not found'
        ], 404);
    }
}


public function update(Request $request, $sysClientNumber)
{
    try {
        $client = Client::where('SysClientNumber', $sysClientNumber)->firstOrFail();

        $validated = $request->validate([
            'GenderId' => 'sometimes|exists:Static_Gender,Id',
                'TitleId' => 'sometimes|exists:Static_Title,Id',
                'FirstName' => 'sometimes|string|max:255',
                'LastName' => 'sometimes|string|max:255',
                'OtherName' => 'nullable|string|max:255',
                'Alias' => 'nullable|string|max:255',
                'GovernmentIdNumber' => 'sometimes|string|max:255',
                'StaffId' => 'nullable|string|max:255',
                'PhoneNumber' => 'sometimes|string|max:20',
                'IdType' => 'sometimes|string|max:50',
                'HouseNumber' => 'sometimes|string|max:50',
                'Location' => 'sometimes|string|max:255',
                'LandMark' => 'nullable|string|max:255',
                'OccupationId' => 'sometimes|exists:Static_Occupation,Id',
                'LineOfBusinessId' => 'sometimes|exists:Static_LineOfBusiness,Id',
                'BusinessLocation' => 'nullable|string|max:255',
                'DateOfBirth' => 'sometimes|date',
                'PlaceOfBirth' => 'sometimes|string|max:255',
                'MaritalStatusId' => 'sometimes|exists:Static_MaritalStatus,Id',
                'Spouse_FullName' => 'nullable|string|max:255',
                'Spouse_OccupationId' => 'nullable|exists:Static_Occupation,Id',
                'Spouse_LineOfBusinessId' => 'nullable|exists:Static_LineOfBusiness,Id',
                'Spouse_Location' => 'nullable|string|max:255',
                'Spouse_PhoneNumber' => 'nullable|string|max:20',
                'NextOfKin_FullName' => 'sometimes|string|max:255',
                'NextOfKin_OccupationId' => 'sometimes|exists:Static_Occupation,Id',
                'NextOfKin_LineOfBusinessId' => 'sometimes|exists:Static_LineOfBusiness,Id',
                'NextOfKin_Location' => 'sometimes|string|max:255',
                'NextOfKin_PhoneNumber' => 'sometimes|string|max:20',
                'NextOfKin_LandMark' => 'nullable|string|max:255',
                'Dependants' => 'sometimes|integer|min:0',
                'IsOfficer' => 'boolean',
                'IsActive' => 'boolean',
                'IsAccountOpening' => 'boolean',
                'CustomerAccountTypeId' => 'sometimes|exists:Static_AccountType,Id'
        ]);

        $client->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Client updated successfully',
            'data' => $client
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
            'message' => 'Failed to update client',
            'error' => $e->getMessage()
        ], 500);
    }
}


    public function destroy($id)
    {
        try {
            $client = Client::findOrFail($id);
            $client->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Client deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete client',
                'error' => $e->getMessage()
            ], 500);
        }
    }
} 