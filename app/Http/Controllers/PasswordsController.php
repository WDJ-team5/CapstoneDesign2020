<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasswordsController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function getRemind()
    {
        return view('passwords.remind');
    }

    public function postRemind(Request $request)
    {
        $this->validate($request, [//수정할 것
            'email' => 'required|email|exists:users',
        ]);

        $email = $request->get('email');
        $token = \Str::random(60);

        \DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);

        event(new \App\Events\PasswordRemindCreated($email, $token));

        return $this->respondSuccess('비밀번호 바꾸는 방법을 담은 이메일을 발송했습니다. 메일 박스를 확인해 주세요.');
    }

    public function getReset($token = null)
    {
        return view('passwords.reset', compact('token'));
    }

    public function postReset(Request $request)
    {
        $this->validate($request, [//수정할 것
            'email' => 'required|email|exists:users',
            'password' => 'required|confirmed',
            'token' => 'required'
        ]);

        $token = $request->input('token');

        if (! \DB::table('password_resets')->whereToken($token)->first()) {
            return $this->respondError('URL이 정확하지 않습니다.');
        }

        \App\User::whereEmail($request->input('email'))->first()->update([
            'password' => bcrypt($request->input('password')),
        ]);

        \DB::table('password_resets')->whereToken($token)->delete();

        return $this->respondSuccess('비밀번호를 바꾸었습니다. 새로운 비밀번호로 로그인하세요.');
    }

    protected function respondError($message)
    {
        dd($message);
        var_dump($message);//임시

        return back()->withInput(\Request::only('email'));
    }

    protected function respondSuccess($message)
    {
        var_dump($message);//임시

        return redirect('/');
    }
}
