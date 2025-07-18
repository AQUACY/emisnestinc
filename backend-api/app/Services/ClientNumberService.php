<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class ClientNumberService
{
    public function generateClientNumber()
    {
        // Get the current year
        $currentYear = date('y');

        // Get the next account ID from the AccountIdNumber table
        $nextId = DB::table('AccountIdNumber')
            ->where('Year', $currentYear)
            ->value('AccountId');

        if (!$nextId) {
            // If no record exists for current year, create one
            $nextId = 1;
            DB::table('AccountIdNumber')->insert([
                'Year' => $currentYear,
                'AccountId' => 2, // Next ID will be 2
                'TypeId' => 1 // Assuming 1 is for client accounts
            ]);
        } else {
            // Update the next ID
            DB::table('AccountIdNumber')
                ->where('Year', $currentYear)
                ->update(['AccountId' => $nextId + 1]);
        }

        // Format the client number: CI000001/25
        return sprintf('CI%06d/%s', $nextId, $currentYear);
    }
} 