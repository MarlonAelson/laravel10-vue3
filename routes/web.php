<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/products', function () {
    return view('products');
});

Route::get('/maska', function () {
    return view('maska');
});

Route::get('/list', function () {
    return view('list');
});
