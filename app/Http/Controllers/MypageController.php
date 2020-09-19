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
            ->whereConfirmCode($confirmCode->confirm_code)->first();
        } else {
            $result = \App\User::join('ranks','rank_id','=','ranks.id')
            ->join('companies','company_id','=','companies.id')
            ->whereConfirmCode($confirmCode->confirm_code)->first();           
        }

        return response()->json($result, 200);
        
    }

    public function loadUserProfile()
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
            ->whereConfirmCode($confirmCode->confirm_code)->first();
        } else {
            $result = \App\User::join('ranks','rank_id','=','ranks.id')
            ->join('companies','company_id','=','companies.id')
            ->whereConfirmCode($confirmCode->confirm_code)->first();           
        }
        
        $result2 = \App\LectureUser::join('lectures','lecture_id','=','lectures.id')
        ->whereUserId($user->id)->get();

        $result3 = \App\Resume::orderBy('id','desc')->whereUserId($user->id)
        ->with(array('audition'=>function($query){$query->get();}))->get();

        return response()->json([$result, $result2, $result3, 200]);
        
    }

    public function loadMyLecture() {

        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();

        $result = \App\LectureUser::join('lectures','lecture_id','=','lectures.id')
        ->whereUserId($user->id)->get();

        return response()->json($result, 200);
    }

    public function loadMyResume() {
        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();

        // $result = \App\User::orderBy('id', 'desc')->find($user->id)->resumes()
        // ->get();
        $result = \App\Resume::orderBy('id','desc')->whereUserId($user->id)->with(array('audition'=>function($query){$query->get();}))->get();

        return response()->json($result, 200);
    }

    public function loadMyAudition() {
        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();

        $result = \App\User::find($user->id)->auditions()->get();

        return response()->json($result, 200);
    }

    public function updateProfile() {
        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();

        $result = \App\User::find($user->id)->update([
            //내용내용
        ]);

        return response()->json($result, 200);
    }

    public function loadApplicant($id) {
        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();

        $result = \App\Resume::where('audition_id', $id)->get();

        return response()->json($result, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateApplicant(Request $request) {
        // $resume = \App\Resume::where('id', $request->applicant{'id'})->first();
        // $resume->result = $request->value;
        // $resume->save();
        // return response()->json($resume, 200);
    }

    public function searchApplicant($id, $value) {
        $result = \App\Resume::where('audition_id', $id)->where('result', $value)->get();
        return response()->json($result, 200);
    }
}
