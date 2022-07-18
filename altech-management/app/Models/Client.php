<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $table = 'clients';
    protected $fillable = [
        'name',
        'address',
        'tel',
        'email',
        'website',
        'category_name' ,
        'category_id'
    ];

    // protected $with = ['clientcategories'];
    // public function clientcategories() {
    //     return $this->belongsTo(ClientCategory::class);
    // }
}
