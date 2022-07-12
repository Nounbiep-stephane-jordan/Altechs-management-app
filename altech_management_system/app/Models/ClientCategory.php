<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientCategory extends Model
{
    use HasFactory;
    protected $table = 'client_categories';
    protected $fillable = [
        'client_id',
        'category_name',
        'activity_sector'
    ];

    public function client() {
        return $this->hasMany(Client::class,'category_name','category_name');
    }

}
