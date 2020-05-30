<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    protected $fillable = [
        'sns',
        'career_01',
        'career_02',
        'career_03',
        'field_id',
        'company_id',
    ];

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function specialty()
    {
        return $this->belongsTo('App\Specialty');
    }

    public function company()
    {
        return $this->belongsTo('App\Company');
    }

    public function articles()
    {
        return $this->hasMany('App\Article');
    }
}
