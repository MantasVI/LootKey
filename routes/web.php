<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::get('/lt', function () {
    return view('mainLithuania');
});
Route::get('/', function () {
    return view('mainEnglish');
});
Route::get('/store', function () {
    return view('store');
});
Route::get('/wishlist', function () {
    return view('wishlist');
});
Route::get('/store/cheap-games', function () {
    return view('cheap-games');
});
Route::get('/checkout', function () {
    return view('checkout');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
