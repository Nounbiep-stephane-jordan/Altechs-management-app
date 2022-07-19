<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReceiptCategory extends Model
{
    use HasFactory;
    protected $table = 'receips';
    protected $fillable = [
     'services'.
    'materials'];

    public function receipts() {
        return $this->hasMany(Receipt::class,'category_id','id')
    }
}
