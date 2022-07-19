<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    use HasFactory;
    protected $table = 'receips';
    protected $fillable = [
    'receipt_number',
    'quantity',
    'final_price',
    'enterprie_name',
    'date_on_receipt',
'item_bought' ,
'category_id'
];
}
