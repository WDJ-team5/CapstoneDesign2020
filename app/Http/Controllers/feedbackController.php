<?php

namespace App\Http\Controllers;
use App\User;
use App\Career;
use App\Expert;
use App\Article;
use Illuminate\Http\Request;

class feedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $experts = \App\User::whereClass(2)->join('experts','expert_id','=','experts.id')
        ->join('specialties','specialty_id','=','specialties.id')
        ->join('companies','expert_company_id','=','companies.id')->get();

        return response()->json($experts, 200);
    }


    public function loadFeedbackList()
    {
        $confirmCode = \App\Session::first();
        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();
        $result = \App\User::find($user->id)->articles()->get();

        return response()->json($result, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $confirmCode = \App\Session::first();

        $user = \App\User::whereConfirmCode($confirmCode->confirm_code)->first();
        
        $article= new \App\Article();

        $article->user_id=$user->id;
        $article->title=$request->title;
        $article->content=$request->content;
        $article->video=$request->video;

        $article->expert_id=$request->expert_id;
  

        if($article->save()){
            return response()->json($article,200);
        }else{
            return response()->json([
                'message'=>'문제가 발생했습니다',
                'status_code'=>500
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
