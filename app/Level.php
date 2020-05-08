<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $fillable = [
        'name',
    ];

    public $timestamps = false;

    public function lectures()
    {
        return $this->hasMany('App\Lecture');
    }
}
