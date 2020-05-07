<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'email',
        'name',
        'password',
        'confirm_code',
        'activated',
        'profile_image',
        'birthday',
        'gender',
        'address',
        'call_number',
        'introduction',
        'rank_id',
        'company_id',
        'expert_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'confirm_code',
    ];

    protected $casts = [
        'activated' => 'boolean',
        'gender' => 'boolean',
    ];

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

    public function articles()
    {
        return $this->hasMany('App\Article');
    }
    
    public function resumes()
    {
        return $this->hasMany('App\Resume');
    }

    public function auditions()
    {
        return $this->hasMany('App\Audition');
    }

    public function videos()
    {
        return $this->belongsToMany('App\Video');
    }

    public function contests()
    {
        return $this->belongsToMany('App\Contest');
    }
}
