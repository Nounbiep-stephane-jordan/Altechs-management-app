<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientCategory;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::all();
        return response()->json([
            'status' =>  200,
            'clients' => $clients
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
        
        $client = new Client;
        $client->name= $request->input('name');
        $client->address= $request->input('address');
        $client->tel= $request->input('tel');
        $client->email= $request->input('email');
        $client->website= $request->input('website');
        $client->category_name= $request->input('category_name');
        $client->save();

        $client_category = new  ClientCategory;
        $client_category->client_id=$client->id;
        $client_category->category_name=$client->category_name;
        $client_category->activity_sector='null';
       
        $client_category->save();

        return response()->json([
            'status' => 200,
            'message' => 'clients added sucessfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    { 

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client,$id)
    {
        $client = Client::find($id);
        return response()->json([
            'status' => 200,
            'client' => $client,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client,$id)
    {
        $client = Client::find($id);
        $client->name= $request->input('name');
        $client->address= $request->input('address');
        $client->tel= $request->input('tel');
        $client->email= $request->input('email');
        $client->website= $request->input('website');
        // $client->category_name= $request->input('category_name');
        $client->update();

        return response()->json([
            'status' => 200,
            'message' => 'clients updated sucessfully',
            'clients' => $client

        ]);
    }



    public function delete(Request $request,$id)
    {
       
        Client::destroy($id);
        return response()->json([
            'status' =>  200,
            'message' => "client deleted sucessfully"
        ]);

 
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        //
    }
}
