<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusSector extends Model
{
    protected $table = 'Static_BusinessSector';
    protected $primaryKey = 'Id';
    public $timestamps = false; // Disable timestamps

    protected $fillable = [
        'Id',
        'Sector',
        'isActive'
    ];

     public function clients()
    {
        return $this->hasMany(Client::class, 'BusSectorId');
    }
  


}