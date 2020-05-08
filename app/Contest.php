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
        'genre_id',
    ];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function genre()
    {
        return $this->belongsTo('App\Genre');
    }
}
