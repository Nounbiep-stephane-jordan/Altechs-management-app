<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Hash;
use App\Models\User;
use Auth;

 

class AuthController extends Controller
{
    /**
     *  @param Request
     * @return User
     */
    

    public function createUser(Request $request){


   try {
    $validateUser = Validator::make($request->all(),
    [
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required'
    ]);

    if($validateUser->fails()){
        return response()->json([
            'status' => false,
            'message' =>'validation error',
            'error' => $validateUser->errors()],401);
    }
    
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password)
    ]);

    return response()->json([
        'status' => true,
        'message' =>'user created sucessfully',
        'token' => $user->createToken('API TOKEN')->plainTextToken],200);

   } catch (\Throwable $th) {
    return response()->json([
        'status' => false,
        'message' =>$th->getMessage()],500);
   }

 
    }



 /**
  * login user
     *  @param Request
     * @return User
     */

     
    public function  verifyUser(Request $request){


        try {
         $validateUser = Validator::make($request->all(),
         [
             'email' => 'required|email',
             'password' => 'required'
         ]);
     
         if($validateUser->fails()){
             return response()->json([
                 'status' => false,
                 'message' =>'validation error',
                 'error' => $validateUser->errors()],401);
         }
         
         if(!Auth::attempt($request->only(['email','password']))){
            return response()->json([
                'status' => false,
                'message' =>'Email and password do not match'],
                401);
         }

         $user  = User::where('email',$request->email)->first();

         return response()->json([
            'status' => true,
            'message' =>'user logged in  sucessfully',
            'token' => $user->createToken('API TOKEN')->plainTextToken],200);

        } catch (\Throwable $th) {
         return response()->json([
             'status' => false,
             'message' =>$th->getMessage()],500);
        }
     
      
         }


}
