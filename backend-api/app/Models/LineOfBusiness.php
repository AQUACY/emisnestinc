<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LineOfBusiness extends Model
{
    protected $table = 'Static_LineOfBusiness';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Id',
        'Sector',
        'isActive'
    ];

    public function clients()
    {
        return $this->hasMany(Client::class, 'LineOfBusinessId');
    }
} 