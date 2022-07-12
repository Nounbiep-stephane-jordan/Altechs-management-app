<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\controllers\ClientController;
use App\http\controllers\ClientCategoryController;
use App\http\controllers\InternController;
use App\http\controllers\EmployeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//for clients
Route::get('/clients', [ClientController::class,'index']);  //get all
Route::post('/clients_store', [ClientController::class,'store']);  //store
Route::get('/clients_edit/{id}', [ClientController::class,'edit']); //get edit
Route::put('/clients_update/{id}', [ClientController::class,'update']); //update
Route::delete('/clients_delete/{id}',[ClientController::class,'delete']);  //delete

//for client categories
Route::post('/clients_category_add', [ClientCategoryController::class,'store']);  //add new category
Route::get('/clients_category_edit/{id}', [ClientCategoryController::class,'edit']); //get edit
Route::delete('/clients_category_delete/{id}',[ClientCategoryController::class,'delete']);  //delete

//for interns
Route::get('/intern', [InternController::class,'index']);  //get all
Route::post('/intern_store', [InternController::class,'store']);  //store
Route::get('/intern_edit/{id}', [InternController::class,'edit']); //get edit
Route::put('/intern_update/{id}', [InternController::class,'update']); //update
Route::delete('/intern_delete/{id}',[InternController::class,'delete']);  //delete

//for employee
Route::get('/employee', [EmployeeController::class,'index']);  //get all
Route::post('/employee_store', [EmployeeController::class,'store']);  //store
Route::get('/employee_edit/{id}', [EmployeeController::class,'edit']); //get edit
Route::put('/employee_update/{id}', [EmployeeController::class,'update']); //update
Route::delete('/employee_delete/{id}',[EmployeeController::class,'delete']);  //delete