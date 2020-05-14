<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MypageController extends Controller
{
    public function loadProfile()
    {
        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();

        if($user->class == 1) {
            $result = \App\User::join('ranks','rank_id','=','ranks.id')
            ->whereConfirmCode($confirmCode->confirm_code)->first();
        } else if($user->class == 2) {
            $result = \App\User::join('ranks','rank_id','=','ranks.id')
            ->join('experts','expert_id','=','experts.id')
            ->join('specialties','specialty_id','=','specialties.id')
            ->join('companies','expert_company_id','=','companies.id')
            ->whereConfirmCode($confirmCode->confirm_code)->first();
        } else {
            $result = \App\User::join('ranks','rank_id','=','ranks.id')
            ->join('companies','company_id','=','companies.id')
            ->whereConfirmCode($confirmCode->confirm_code)->first();           
        }

        return response()->json($result, 200);
        
    }

    public function loadMyLecture() {
        

        return response()->json('어서와', 200);
    }
}
