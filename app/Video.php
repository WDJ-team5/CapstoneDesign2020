<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'highest_score',
        'recent_score',
        'user_id',
        'video_id',
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
        return $this->belongsTo('App\level');
    }
}
