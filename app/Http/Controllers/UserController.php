<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // $request->validate([
        //     'name' => 'required|min:3',
        //     'image' => 'required|image|mimes:jpeg,png,jpg'
        // ]);

        $user = \App\User::create([
            'userid' => $request->userid,
            'password' => bcrypt($request->password),
            'name' => $request->name,
        //    'image' =>,
           'address' => $request->address,
           'call_number' => $request->call_number,
        //    'introduction' => $request->introduction,
        //    'class',
        ]);

        // return response()>json([$user, 200]);
        return response()->json($user, 200);

        // $category = new Category();
        // $category->name = $request->name;

        // $path = $request->file('image')->store('categories_images');

        // $category->image = $path;

        // if($category->save()){
        //     return response()->json($category, 200);
        // } else{
        //     return response()->json($category, 500);
        // }
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
