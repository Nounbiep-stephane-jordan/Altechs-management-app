<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee = Employee::all();
        return response()->json([
            'status' =>  200,
            'employee' => $employee
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
        $employee = new Employee;
        $employee->name= $request->input('name');
        $employee->address= $request->input('address');
        $employee->tel= $request->input('tel');
        $employee->email= $request->input('email');
        $employee->age= $request->input('age');
        $employee->sex= $request->input('sex');
        $employee->join_date= $request->input('join_date');

        $employee->save();

        return response()->json([
            'status' => 200,
            'message' => 'employee added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee,$id)
    {
        $employee =  Employee::find($id);
        return response()->json([
            'status' => 200,
            'employee' => $employee,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee,$id)
    {
        $employee =  Employee::find($id);
        $employee->name= $request->input('name');
        $employee->address= $request->input('address');
        $employee->tel= $request->input('tel');
        $employee->email= $request->input('email');
        $employee->age= $request->input('age');
        $employee->sex= $request->input('sex');
        $employee->join_date= $request->input('join_date');


        $employee->update();

        return response()->json([
            'status' => 200,
            'message' => 'employee updated sucessfully',
            'employee' => $employee

        ]);
    }

    public function delete(Request $request,$id)
    {
       
         Employee::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => " Employee deleted sucessfully"
        ]);

 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
