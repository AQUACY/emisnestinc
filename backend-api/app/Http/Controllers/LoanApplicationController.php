<?php

namespace App\Http\Controllers;

use App\Models\CallReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class LoanApplicationController extends Controller
{
    // Submit a loan application
    public function store(Request $request)
    {
        $validated = $request->validate([
            'SysClientNumber' => 'required|string|exists:Client,SysClientNumber',
            'LoanType' => 'required|in:individual,group,staff',
            'AmountReq' => 'required|numeric|min:100',
            'LoanProductId' => 'required|exists:Static_LoanProduct,Id',
            'AppDate' => 'required|date',
            'OfficerId' => 'required|exists:Users,Id',
            // Optional fields
            'PreviousSalary' => 'nullable|numeric',
            'PrevDaySales' => 'nullable|numeric',
            'MaxSales' => 'nullable|numeric',
            'Debit' => 'nullable|numeric',
            'CashAtHand' => 'nullable|numeric',
            'WorkingExp' => 'nullable|integer',
            'RestockingPeriod' => 'nullable|string|max:50',
            'BusLocation' => 'nullable|string|max:255',
            'ExactUnit' => 'nullable|string|max:255',
            'BusSectorId' => 'nullable|exists:Static_BusinessSector,Id',
            'SalesAtVendor' => 'nullable|numeric',
            'KindStock' => 'nullable|string|max:255',
            'MinSales' => 'nullable|numeric',
            'Credit' => 'nullable|numeric',
            'WorkingCapital' => 'nullable|numeric',
            'ProductType' => 'nullable|string|max:100'
        ]);

        $loanNumber = 'LN' . str_pad(rand(1, 999999), 6, '0', STR_PAD_LEFT) . '/' . now()->format('y');

        $application = CallReport::create(array_merge($validated, [
            'SysLoanNumber' => $loanNumber,
            'IsAuthorized' => 0
        ]));

        return response()->json([
            'status' => 'success',
            'message' => 'Loan application submitted successfully',
            'data' => $application
        ]);
    }

    // Authorize a loan application
    public function authorizeLoan($loanId, Request $request)
    {
        $loan = CallReport::findOrFail($loanId);

        if ($loan->IsAuthorized) {
            return response()->json([
                'status' => 'error',
                'message' => 'Loan is already authorized'
            ], 400);
        }

        $loan->update([
            'IsAuthorized' => true,
            'AuthPersonId' => Auth::id(),
            'AmountRecommended' => $request->input('AmountRecommended', $loan->AmountReq),
            'OfficerRecommendation' => $request->input('OfficerRecommendation', null),
            'Status' => 'authorized'
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Loan authorized successfully',
            'data' => $loan
        ]);
    }

    // Optional: Reject loan
    public function rejectLoan($loanId, Request $request)
    {
        $request->validate([
            'RejectedReason' => 'required|string|max:255'
        ]);

        $loan = CallReport::findOrFail($loanId);
        $loan->update([
            'Status' => 'rejected',
            'RejectedReason' => $request->RejectedReason
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Loan rejected',
            'data' => $loan
        ]);
    }
}
