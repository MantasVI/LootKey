<?php

use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Route;


/*
Route::get('store/games', [StoreController::class, 'getGames'])->name('games');
Route::get('store/giftcards', [StoreController::class, 'getGiftcards'])->name('giftcards');
Route::get('store/steam', [StoreController::class, 'getSteamCards'])->name('steam');
Route::get('store/psn', [StoreController::class, 'getPsnCards'])->name('psn');
Route::get('store/xbox', [StoreController::class, 'getXboxCards'])->name('xbox');
Route::get('store/nintendo', [StoreController::class, 'getNintendoCards'])->name('nintendo');
*/


Route::get('store', [StoreController::class, 'getStore'])->name('store');




Route::inertia('/', 'home')->name('home');
Route::inertia('/checkout', 'checkout')->name('checkout');

Route::inertia('/wishlist', 'wishlist')->name('wishlist');
Route::inertia('/account', 'account')->name('account');

Route::inertia('/login-history', 'login-log')->name('login-log');

Route::inertia('/login', 'login')->name('login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
