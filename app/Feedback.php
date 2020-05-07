<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable = [
        'title',
        'content',
        'video',
        'answer',
        'answer_date,
        max_recruitment',
        'user_id'
    ];
}
