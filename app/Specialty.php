<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    protected $fillable = [
        'area',
    ];

    public $timestamps = false;

    public function expert()
    {
        return $this->hasOne('App\Expert');
    }
}
