<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return User::all();
});
