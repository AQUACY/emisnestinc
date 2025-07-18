<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoanProduct extends Model
{
    protected $table = 'Static_LoanProduct';
    protected $primaryKey = 'Id';
    public $timestamps = false; // Disable timestamps

    protected $fillable = [
        'Id',
        'Product',
        'isActive'
    ];

     public function clients()
    {
        return $this->hasMany(Client::class, 'LoanProductId');
    }
  


}