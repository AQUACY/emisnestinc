<?php

namespace App\Models;

class CallReport extends Model
{
    protected $table = 'CallReport';

    protected $fillable = [
        'SysClientNumber',
        'SysLoanNumber',
        'LoanType',
        'Dependants',
        'AmountReq',
        'PreviousSalary',
        'PrevDaySales',
        'MaxSales',
        'MinSales',
        'SalesAtVendor',
        'Debit',
        'Credit',
        'CashAtHand',
        'WorkingCapital',
        'KindStock',
        'ProductType',
        'BusLocation',
        'ExactUnit',
        'BusSectorId',
        'WorkingExp',
        'RestockingPeriod',
        'LoanProductId',
        'IsAuthorized',
        'AmountRecommended',
        'OfficerRecommendation',
        'AuthPersonId',
        'OfficerId',
        'AppDate',
        'Status',
        'RejectedReason',
        'DisbursedAt'
    ];
}

