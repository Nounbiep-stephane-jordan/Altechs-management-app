<?php

namespace App\Http\Controllers;

use App\Models\Employee_Role;
use Illuminate\Http\Request;

class EmployeeRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee_role =  Employee_Role::all();
        return response()->json([
            'status' =>  200,
            'employee_role' => $employee_role
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee_Role  $employee_Role
     * @return \Illuminate\Http\Response
     */
    public function show(Employee_Role $employee_Role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee_Role  $employee_Role
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee_Role $employee_Role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee_Role  $employee_Role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee_Role $employee_Role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee_Role  $employee_Role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee_Role $employee_Role)
    {
        //
    }
}
