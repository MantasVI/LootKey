<?php

namespace App\Models;

use Database\Factories\ProductFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class Product extends Model
{
    /** @use HasFactory<ProductFactory> */
    use HasFactory;

    public static function storePageCards(?string $type, ?string $platform, ?string $sort): LengthAwarePaginator
    {
      
            
        return self::query()->when($type, fn($query) => $query->where('type', $type))->when($platform,fn($query) => $query->where('platform',$platform) )->paginate(24)->withQueryString();
           
            
           
     
           
    }

    

}
