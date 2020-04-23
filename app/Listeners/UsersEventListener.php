<?php

namespace App\Listeners;

use App\Events\UserCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UsersEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function handle(UserCreated $event)
    {
        $user = $event->user;

        \Mail::send(
            'emails.auth.confirm',
            compact('user'),
            function ($message) use ($user) {
                $message->to($user->email);
                $message->subject(sprintf('[%s] 회원 가입을 확인해주세요.', config('app.name')));
            }
        );
    }
}
