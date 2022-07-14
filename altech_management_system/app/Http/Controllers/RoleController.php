<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = Role::all();
        return response()->json([
            'status' =>  200,
            'role' => $role
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
        $role = new Role;
        $role->name= $request->input('name');
        $role->function= $request->input('function');
        $role->save();

        return response()->json([
            'status' => 200,
            'message' => 'role added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role,$id)
    {
        $role = Role::find($id);
        return response()->json([
            'status' => 200,
            'role' => $role,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role,$id)
    {
        $role = Role::find($id);
        $role->name= $request->input('name');
        $role->function= $request->input('function');
        $role->update();

        return response()->json([
            'status' => 200,
            'message' => 'role updated sucessfully',
            'role' => $role
        ]);
    }

    public function delete(Request $request,$id)
    {
        Role::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "role deleted sucessfully"
        ]);

 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }
}
