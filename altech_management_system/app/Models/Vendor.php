<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;
    protected $table = 'vendors';
    protected $fillable = [
        'category_name',
        'name',
        'address',
        'tel',
        'email',
        'website'
    ];

    public function vendorcategories() {
        return $this->belongsTo(VendorCategory::class,'vendor_id');
    }
}
