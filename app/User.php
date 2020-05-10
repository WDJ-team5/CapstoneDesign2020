<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'userid',
        'password',
        'name',
        'image',
        'birthday',
        'gender',
        'address',
        'call_number',
        'introduction',
        'class',
        'rank_id',
        'company_id',
        'expert_id',
    ];

    protected $hidden = [
        'password',
        'last_login',
        'confirm_code',
    ];

    protected $casts = [
        'gender' => 'boolean',
    ];

    protected $dates = ['last_login'];

    public function rank()
    {
        return $this->belongsTo('App\Rank');
    }

    public function company()
    {
        return $this->belongsTo('App\Company');
    }

    public function expert()
    {
        return $this->belongsTo('App\Expert');
    }

    public function auditions()
    {
        return $this->hasMany('App\Audition');
    }

    public function resumes()
    {
        return $this->hasMany('App\Resume');
    }

    public function lectures()
    {
        return $this->belongsToMany('App\lectures');
    }

    public function contests()
    {
        return $this->belongsToMany('App\Contest');
    }

    // public function articles()
    // {
    //     return $this->hasMany('App\Article');
    // }

}
