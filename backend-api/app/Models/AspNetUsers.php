<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AspNetUsers extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'AspNetUsers';

    protected $primaryKey = 'Id';

    public $incrementing = false; // set to true if Id is auto-increment integer

    protected $keyType = 'int'; // or 'string' if Id is string

    public $timestamps = false; // set true if table has created_at, updated_at
    
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    

    // Fillable fields for mass assignment
    protected $fillable = [
        'FullName',
        'UserName',
        'NormalizedUserName',
        'Email',
        'NormalizedEmail',
        'EmailConfirmed',
        'PasswordHash',
        'SecurityStamp',
        'ConcurrencyStamp',
        'PhoneNumber',
        'PhoneNumberConfirmed',
        'TwoFactorEnabled',
        'LockoutEnd',
        'LockoutEnabled',
        'AccessFailedCount',
        'IsActive',
        'NID',
        'ProfilePicture',
        'SignaturePicture',
        'SysLoanNumber',
    ];

    // Cast attributes to appropriate data types
    protected $casts = [
        'EmailConfirmed' => 'boolean',
        'PhoneNumberConfirmed' => 'boolean',
        'TwoFactorEnabled' => 'boolean',
        'LockoutEnd' => 'datetime',
        'LockoutEnabled' => 'boolean',
        'AccessFailedCount' => 'integer',
        'IsActive' => 'boolean',
    ];

    // If password is stored hashed, tell Laravel this is the password attribute
    protected $hidden = [
        'PasswordHash',
        'SecurityStamp',
        'ConcurrencyStamp',
    ];
}
