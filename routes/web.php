<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/checkout', 'checkout')->name('checkout');
Route::inertia('/store', 'store')->name('store');
Route::inertia('/wishlist', 'wishlist')->name('wishlist');
Route::inertia('/account', 'account')->name('account');

Route::inertia('/login-history', 'login-log')->name('login-log');

Route::inertia('/login', 'login')->name('login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';