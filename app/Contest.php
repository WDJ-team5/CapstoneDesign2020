<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contest extends Model
{
    protected $fillable = [
        'title',
        'content',
        'video',
        'image',
    ];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function level()
    {
        return $this->belongsTo('App\Level');
    }
}
