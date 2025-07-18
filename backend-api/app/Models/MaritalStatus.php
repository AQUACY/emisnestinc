<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MaritalStatus extends Model
{
    protected $table = 'Static_MaritalStatus';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Id',
        'Status',
        'isActive'
    ];

    public function clients()
    {
        return $this->hasMany(Client::class, 'MaritalStatusId');
    }
} 