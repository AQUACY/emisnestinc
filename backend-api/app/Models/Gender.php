<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    protected $table = 'Static_Gender';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Id',
        'Gender',
        'isActive'
    ];

    public function clients()
    {
        return $this->hasMany(Client::class, 'GenderId');
    }
} 