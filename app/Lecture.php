<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    protected $fillable = [
        'title',
        'content',
        'video',
        'image',
        'genre_id',
        'level_id',
    ];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function genre()
    {
        return $this->belongsTo('App\Genre');
    }

    public function level()
    {
        return $this->belongsTo('App\Level');
    }
}
