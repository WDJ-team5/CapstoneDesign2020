<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    protected $fillable = [
        'agency',
        'feedback_status',
        'sns',
        'specialties_id',
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

    public function articles()
    {
        return $this->hasMany('App\Article');
    }
}
