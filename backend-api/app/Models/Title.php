<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    protected $table = 'Static_Title';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'Id',
        'Title',
        'isActive'
    ];

    public function clients()
    {
        return $this->hasMany(Client::class, 'TitleId');
    }
} 