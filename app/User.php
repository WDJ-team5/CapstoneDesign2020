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
}
