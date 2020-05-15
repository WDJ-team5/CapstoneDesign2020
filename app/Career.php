<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = [
        'career_name',
        'content',
        'expert_id',
    ];

    public $timestamps = false;

    public function expert()
    {
        return $this->belongsTo('App\Expert');
    }
}
