<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = [
        'company_name',
        'business_number',
    ];

    public $timestamps = false;

    public function expert()
    {
        return $this->belongsTo('App\Expert');
    }
}
