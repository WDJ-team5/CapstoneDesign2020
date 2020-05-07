<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    protected $fillable = [
        'agency',
        'feedback_status',
        'sns'
    ];

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function specialty()
    {
        return $this->belongsTo('App\Specialty');
    }

    public function careers()
    {
        return $this->hasMany('App\Career');
    }
}
