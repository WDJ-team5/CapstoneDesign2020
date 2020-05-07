<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'company_name',
        'business_number',
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->hasMany('App\User');
    }
}
