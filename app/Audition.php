<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Audition extends Model
{
    protected $fillable = [
        'title',
        'content',
        'start_date',
        'end_date',
        'image',
        'max_recruitment',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function resumes()
    {
        return $this->hasMany('App\Resume');
    }

}
