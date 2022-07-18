<?php

namespace App\Http\Controllers;

use App\Models\Receipt;
use Illuminate\Http\Request;

class ReceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $receipt =  Receipt::all();
        return response()->json([
            'status' =>  200,
            'intern' => $receipt
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
        $receipt = new  Receipt;
        $receipt->receipt_number= $request->input('receipt_number');
        $receipt->quantity= $request->input('quantity');
        $receipt->final_price= $request->input('final_price');
        $receipt->enterprise_name= $request->input('enterprise_name');
        $receipt->date_on_receipt= $request->input('date_on_receipt');
        $receipt->item_bought= $request->input('item_bought');
        $receipt->save();

        return response()->json([
            'status' => 200,
            'message' => 'receipt added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function show(Receipt $receipt)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function edit(Receipt $receipt,$id)
    {
        $receipt =  Receipt::find($id);
        return response()->json([
            'status' => 200,
            'role' => $receipt,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Receipt $receipt,$id)
    {
        $receipt =  Receipt::find($id);
        $receipt->receipt_number= $request->input('receipt_number');
        $receipt->quantity= $request->input('quantity');
        $receipt->final_price= $request->input('final_price');
        $receipt->enterprise_name= $request->input('enterprise_name');
        $receipt->date_on_receipt= $request->input('date_on_receipt');
        $receipt->item_bought= $request->input('item_bought');
        $receipt->save();

        return response()->json([
            'status' => 200,
            'message' => 'receipt updated sucessfully'
        ]);
    }

    public function delete(Request $request,$id)
    {
        Receipt::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "receipt deleted sucessfully"
        ]);

 
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receipt $receipt)
    {
        //
    }
}
