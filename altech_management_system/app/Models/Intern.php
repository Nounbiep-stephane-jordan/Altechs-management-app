<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Intern extends Model
{
    use HasFactory;
    protected $table = 'interns';
    protected $fillable = [
        'name',
        'theme',
        'school',
        'town',
        'tel',
        'age',
        'sex',
        'address',
        'start_date',
        'end_date',
        'supervisor_name'
    ];

    public function employee(){
        return $this->belongsTo(Employee::class);
    }
}
