<?php

namespace App\Http\Controllers;

use App\Models\VendorCategory;
use Illuminate\Http\Request;

class VendorCategoryController extends Controller
{
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
        $vendor_category = new VendorCategory;
        $vendor_category->vendor_id= $request->input('vendor_id');
        $vendor_category->category_name= $request->input('category_name');
        $vendor_category->activity_sector= $request->input('activity_sector');
        $vendor_category->save();

        return response()->json([
            'status' => 200,
            'message' => 'vendor added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VendorCategory  $vendorCategory
     * @return \Illuminate\Http\Response
     */
    public function show(VendorCategory $vendorCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VendorCategory  $vendorCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(VendorCategory $vendorCategory,$id)
    {
        $vendor_category = VendorCategory::find($id);
        return response()->json([
            'status' => 200,
            'vendor_category' => $vendor_category,
        ]);
    }

    public function delete(Request $request,$id)
    {
        VendorCategory::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "vendor_category deleted sucessfully"
        ]);

 
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VendorCategory  $vendorCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VendorCategory $vendorCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VendorCategory  $vendorCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(VendorCategory $vendorCategory)
    {
        //
    }
}
