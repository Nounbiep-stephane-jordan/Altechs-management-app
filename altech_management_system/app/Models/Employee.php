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
        'join_date' ,
    ];

    protected $with = ['intern','roles'];

    public function intern(){
        return $this->hasMany(Intern::class,'supervisor_id','id');
    }

    public function roles(){
        return $this-> belongsToMany(Role::class,'employee__role');
    }
}
