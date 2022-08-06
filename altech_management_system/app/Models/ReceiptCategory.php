<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReceiptCategory extends Model
{
    use HasFactory;
    protected $table = 'receipt_categories';
    protected $fillable = [
     'services'.
    'materials'];

    protected $with = ['receipts'];
    public function receipts() {
        return $this->hasMany(Receipt::class,'category_id','id');
    }
}
