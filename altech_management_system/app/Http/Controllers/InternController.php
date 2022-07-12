<?php

namespace App\Http\Controllers;

use App\Models\Intern;
use Illuminate\Http\Request;

class InternController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $interns =  Intern::all();
        return response()->json([
            'status' =>  200,
            'intern' => $interns
        ]);
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
        $intern = new Intern;
        $intern->name= $request->input('name');
        $intern->theme= $request->input('theme');
        $intern->school= $request->input('school');
        $intern->town= $request->input('town');
        $intern->tel= $request->input('tel');
        $intern->age= $request->input('age');
        $intern->sex= $request->input('sex');
        $intern->address= $request->input('address');
        $intern->start_date= $request->input('start_date');
        $intern->end_date= $request->input('end_date');
        $intern->save();

        return response()->json([
            'status' => 200,
            'message' => ' intern added sucessfully'
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Intern  $intern
     * @return \Illuminate\Http\Response
     */
    public function show(Intern $intern)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Intern  $intern
     * @return \Illuminate\Http\Response
     */
    public function edit(Intern $intern,$id)
    {
        $intern = Intern::find($id);
        return response()->json([
            'status' => 200,
            'intern' => $intern,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Intern  $intern
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Intern $intern,$id)
    {
        $intern = Intern::find($id);
        $intern->name= $request->input('name');
        $intern->theme= $request->input('theme');
        $intern->school= $request->input('school');
        $intern->town= $request->input('town');
        $intern->tel= $request->input('tel');
        $intern->age= $request->input('age');
        $intern->sex= $request->input('sex');
        $intern->address= $request->input('address');
        $intern->start_date= $request->input('start_date');
        $intern->end_date= $request->input('end_date');
        $intern->update();

        return response()->json([
            'status' => 200,
            'message' => 'interns updated sucessfully',
            'interns' => $intern

        ]);

    }



  
    public function delete(Request $request,$id)
    {
       
        Intern::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => " intern deleted sucessfully"
        ]);

 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Intern  $intern
     * @return \Illuminate\Http\Response
     */
    public function destroy(Intern $intern)
    {
        //
    }
}
