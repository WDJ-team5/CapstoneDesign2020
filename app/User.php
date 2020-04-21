<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'confirm_code',
        'activated',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'confirm_code',
    ];

    protected $casts = [
        'activated' => 'boolean',
    ];
}
