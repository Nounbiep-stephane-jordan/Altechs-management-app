<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    use HasFactory;
    protected $table = 'receipts';
    protected $fillable = [
    'receipt_number',
    'quantity',
    'final_price',
    'enterprie_name',
    'date_on_receipt',
'item_bought' ,
'category_id'
];

protected $with = ['receipt_cat'];
public function receipt_cat(){
    return $this->belongsTo(ReceiptCategory::class,'id','id');
}

}
