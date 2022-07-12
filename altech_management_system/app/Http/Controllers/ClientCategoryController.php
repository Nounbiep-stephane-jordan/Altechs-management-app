<?php

namespace App\Http\Controllers;

use App\Models\ClientCategory;
use Illuminate\Http\Request;

class ClientCategoryController extends Controller
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
        $client_category = new ClientCategory ;
        $client_category->client_id=$request->input('client_id');
        $client_category->category_name=$request->input('category_name');
        $client_category->activity_sector=$request->input('activity_sector');
        $client_category->save();

        return response()->json([
            'status' => 200,
            'message' => 'clients category added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClientCategory  $clientCategory
     * @return \Illuminate\Http\Response
     */
    public function show(ClientCategory $clientCategory )
    {
 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClientCategory  $clientCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientCategory $clientCategory,$id)
    {
        $client_cat = ClientCategory::find($id);
        return response()->json([
            'status' => 200,
            'client' => $client_cat,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClientCategory  $clientCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientCategory $clientCategory)
    {
        //
    }


    
    public function delete(Request $request,$id)
    { 
        Client_category::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "client category deleted sucessfully"
        ]);

 
    }

    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClientCategory  $clientCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientCategory $clientCategory)
    {
        //
    }
}
