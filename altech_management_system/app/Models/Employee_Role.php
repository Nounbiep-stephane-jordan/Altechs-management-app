<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee_Role extends Model
{
    use HasFactory;
    protected $table = 'employee__role';
    protected $fillable = [
     'role_id'.
    'employee_id'];

}
