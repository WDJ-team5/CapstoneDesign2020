<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = [
        'name',
    ];

    public function videos()
    {
        return $this->hasMany('App\Video');
    }

    public function contests()
    {
        return $this->hasMany('App\Contest');
    }
}
