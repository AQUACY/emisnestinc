<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerAccountType extends Model
{
    protected $table = 'Static_AccountType';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Id',
        'Type',
        'isActualType',
        'isActive'
    ];

    public function clients()
    {
        return $this->hasMany(Client::class, 'CustomerAccountTypeId');
    }
} 