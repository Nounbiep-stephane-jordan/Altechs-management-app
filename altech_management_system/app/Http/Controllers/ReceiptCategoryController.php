<?php

namespace App\Http\Controllers;

use App\Models\ReceiptCategory;
use Illuminate\Http\Request;

class ReceiptCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $receipt_cat =  ReceiptCategory::all();
        return response()->json([
            'status' =>  200,
            'receipt_cat' => $receipt_cat
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
        $receipt_cat = new  ReceiptCategory;
        $receipt_cat->services= $request->input('services');
        $receipt_cat->materials= $request->input('materials');
        $receipt_cat->save();

        return response()->json([
            'status' => 200,
            'message' => 'receipt category added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReceiptCategory  $receiptCategory
     * @return \Illuminate\Http\Response
     */
    public function show(ReceiptCategory $receiptCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ReceiptCategory  $receiptCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ReceiptCategory $receiptCategory,$id)
    {
        $receipt_cat =   ReceiptCategory::find($id);
        return response()->json([
            'status' => 200,
            'role' => $receipcat,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReceiptCategory  $receiptCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReceiptCategory $receiptCategory,$id)
    {
        $receipt_cat =   ReceiptCategory::find($id);
        $receipt_cat->services= $request->input('services');
        $receipt_cat->materials= $request->input('materials');
        $receipt_cat->save();

        return response()->json([
            'status' => 200,
            'message' => 'receipt category added sucessfully'
        ]);
    }

    public function delete(Request $request,$id)
    {
        ReceiptCategory::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "receipt deleted sucessfully"
        ]);

 
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReceiptCategory  $receiptCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReceiptCategory $receiptCategory)
    {
        //
    }
}
