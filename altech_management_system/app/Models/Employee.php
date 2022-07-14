<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employees';
    protected $fillable = [
        'name',
        'address',
        'email',
        'age',
        'sex',
        'tel',
        'join_date'
    ];

    public function intern(){
        return $this->hasMany(Intern::class,'supervisor_name','id');
    }

    public function roles(){
        return $this-> belongsToMany(Role::class,'role_employee');
    }
}
