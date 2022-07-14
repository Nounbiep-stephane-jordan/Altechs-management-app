<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VendorCategory extends Model
{
    use HasFactory;
    protected $table = 'vendorcategories';
    protected $fillable = [
        'vendor_id',
        'category_name',
        'activity_sector'
    ];

    public function vendor() {
        return $this->hasMany(Vendor::class,'category_name','category_name');
    }
}
