<?php

namespace App\Listeners;

use App\Events\UserCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UsersEventListener
{
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

    public function subscribe(\Illuminate\Events\Dispatcher $events)
    {
        $events->listen(
            \App\Events\PasswordRemindCreated::class,
            __CLASS__.'@onPasswordRemindCreated'
        );
    }

    public function onPasswordRemindCreated(\App\Events\PasswordRemindCreated $event) {
        \Mail::send(
            'emails.passwords.reset',
            ['token' => $event->token],
            function ($message) use ($event) {
                $message->to($event->email);
                $message->subject(
                    sprintf('[%s] 비밀번호를 초기화하세요.', config('app.name'))
                );
            }
        );
    }
}
