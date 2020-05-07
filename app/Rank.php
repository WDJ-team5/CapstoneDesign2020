<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{
    protected $fillable = [
        'name',
        'criterion_score',
    ];

    public $timestamps = false;

    public function users()
    {
        return $this->hasMany('App\User');
    }
}