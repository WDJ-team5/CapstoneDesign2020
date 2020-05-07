<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'content',
        'video',
        'answer',
        'answer_date',
        'max_recruitment',
        'user_id',
        'answer_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function expert()
    {
        return $this->belongsTo('App\Expert');
    }
}
