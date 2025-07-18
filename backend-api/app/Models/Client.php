<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'Client';
    protected $primaryKey = 'Id';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false; // Disable timestamps

    protected $fillable = [
        'Id',
        'SysClientNumber',
        'GenderId',
        'TitleId',
        'FirstName',
        'LastName',
        'OtherName',
        'Alias',
        'GovernmentIdNumber',
        'StaffId',
        'PhoneNumber',
        'IdType',
        'HouseNumber',
        'Location',
        'LandMark',
        'OccupationId',
        'LineOfBusinessId',
        'BusinessLocation',
        'DateOfBirth',
        'PlaceOfBirth',
        'MaritalStatusId',
        'Spouse_FullName',
        'Spouse_OccupationId',
        'Spouse_LineOfBusinessId',
        'Spouse_Location',
        'Spouse_PhoneNumber',
        'NextOfKin_FullName',
        'NextOfKin_OccupationId',
        'NextOfKin_LineOfBusinessId',
        'NextOfKin_Location',
        'NextOfKin_PhoneNumber',
        'NextOfKin_LandMark',
        'Dependants',
        'IsOfficer',
        'IsActive',
        'IsAccountOpening',
        'RegistrationDate',
        'CustomerAccountTypeId'
    ];

    protected $casts = [
        'DateOfBirth' => 'date',
        'RegistrationDate' => 'datetime',
        'IsOfficer' => 'boolean',
        'IsActive' => 'boolean',
        'IsAccountOpening' => 'boolean',
        'Dependants' => 'integer'
    ];

    // Relationships
    public function gender()
    {
        return $this->belongsTo(Gender::class, 'GenderId');
    }

    public function title()
    {
        return $this->belongsTo(Title::class, 'TitleId');
    }

    public function occupation()
    {
        return $this->belongsTo(Occupation::class, 'OccupationId');
    }

    public function lineOfBusiness()
    {
        return $this->belongsTo(LineOfBusiness::class, 'LineOfBusinessId');
    }

    public function maritalStatus()
    {
        return $this->belongsTo(MaritalStatus::class, 'MaritalStatusId');
    }

    public function customerAccountType()
    {
        return $this->belongsTo(CustomerAccountType::class, 'CustomerAccountTypeId');
    }
}