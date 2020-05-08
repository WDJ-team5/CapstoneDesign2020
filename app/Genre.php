<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = [
        'name',
    ];

    public $timestamps = false;

    public function lectures()
    {
        return $this->hasMany('App\Lecture');
    }

    public function contests()
    {
        return $this->hasMany('App\Contest');
    }
}
