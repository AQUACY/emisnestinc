<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Occupation extends Model
{
    protected $table = 'Static_Occupation';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Id',
        'Occupation',
        'isActive'
    ];

    public function clients()
    {
        return $this->hasMany(Client::class, 'OccupationId');
    }
} 