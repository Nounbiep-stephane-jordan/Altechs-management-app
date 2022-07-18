<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VendorCategory extends Model
{
    use HasFactory;
    protected $table = 'vendor_categories';
    protected $fillable = [
        'category_name',
        'activity_sector'
    ];

    protected $with = ['vendor'];

    public function vendor() {
        return $this->hasMany(Vendor::class,'category_id','id');
    }
}
