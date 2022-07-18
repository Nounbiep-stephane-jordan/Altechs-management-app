<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role_Employee extends Model
{
    use HasFactory;
    protected $table = 'role__employees';
    protected $fillable = [
     'role_id'.
    'employee_id'];
}
