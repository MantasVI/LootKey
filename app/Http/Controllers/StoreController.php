<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StoreController extends Controller
{
    public function getStore(Request $request): Response
    {
        $type = $request->query('type');
        $platform = $request->query('platform');
        $sort = $request->query('sort', 'newest');

        return Inertia::render('store', [
            'products' => Product::storePageCards($type,$platform,$sort),
            'filters' => [
                'type' => $type,
                'platform' => $platform,
                'sort' => $sort,
            ],
        ]);
    } 
   
}
