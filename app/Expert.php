<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    protected $fillable = [
        'sns',
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

    public function careers()
    {
        return $this->hasMany('App\Career');
    }

    public function company()
    {
        return $this->belongTo('App\Company');
    }

    public function articles()
    {
        return $this->hasMany('App\Article');
    }
}
