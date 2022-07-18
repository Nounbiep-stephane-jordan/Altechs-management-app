<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use App\Models\VendorCategory;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vendor =  Vendor::all();
        return response()->json([
            'status' =>  200,
            'vendors' => $vendor
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
        $vendor = new Vendor;
        $vendor->name= $request->input('name');
        $vendor->address= $request->input('address');
        $vendor->tel= $request->input('tel');
        $vendor->email= $request->input('email');
        $vendor->website= $request->input('website');
        $vendor->category_name= $request->input('category_name');
        $vendor->category_id= $request->input('category_id'); 
 
        $vendor->save();

        // $vendor_category = new VendorCategory;
        // $vendor_category -> category_name = $vendor -> category_name;
        // $vendor_category -> activity_sector = 'null';
        // $vendor_category->save();

        return response()->json([
            'status' => 200,
            'message' => 'vendor added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function show(Vendor $vendor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function edit(Vendor $vendor,$id)
    {
        $vendor = Vendor::find($id);
        return response()->json([
            'status' => 200,
            'vendor' => $vendor,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vendor $vendor,$id)
    {
        $vendor = Vendor::find($id);
        $vendor->name= $request->input('name');
        $vendor->address= $request->input('address');
        $vendor->tel= $request->input('tel');
        $vendor->email= $request->input('email');
        $vendor->website= $request->input('website');
        $vendor->category_id= $request->input('category_id');
        $client->category_name= $request->input('category_name');
 
        $vendor->update();

        return response()->json([
            'status' => 200,
            'message' => 'vendor updated sucessfully',
            'vendor' => $vendor

        ]);
    }

    public function delete(Request $request,$id)
    {
        VendorCategory::destroy($id);
        Vendor::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "vendor deleted sucessfully"
        ]);

 
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vendor $vendor)
    {
        //
    }
}
