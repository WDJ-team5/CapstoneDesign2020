<?php

namespace App\Http\Controllers;
use App\Audition;

use Illuminate\Http\Request;

class AuditionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $audition= Audition::orderBy('created_at','desc')->paginate();
        return response()->json($audition,200);
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
        // 유효성검사
        $request->validate([
            // 'title'=>'required|min:6',
            // 'context'=>'required|min:10',
            'image' => 'required|image|mimes:jpeg,png,jpg'

        ]);
        
        $audition=new \App\Audition();

        // 제목 저장
        $audition->title=$request->title;

        // 이미지 파일 경로설정
        $path=$request->file('image')->store('auditon_image');

        // 파일 경로 저장
        $audition->image=$path;

        if($audition->save()){
            // return response()->json($audition,200);
            return response()->json('장성현 보고있나?',200);
        }else{
            return response()->json($audition,500);
        }


        // dd($request->all());

        // return response()->json($request->all(),200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result=Audition::find($id);
        return response()->json($result);
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
