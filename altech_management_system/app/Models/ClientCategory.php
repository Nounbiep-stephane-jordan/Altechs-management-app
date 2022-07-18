<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientCategory extends Model
{
    use HasFactory;
    protected $table = 'client_categories';
    protected $fillable = [
        'category_name',
        'activity_sector'
    ];
    protected $with = ['client'];

    public function client() {
        return $this->hasMany(Client::class,'category_id','id');
    }

}
