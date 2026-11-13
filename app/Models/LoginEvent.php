<?php

namespace App\Models;

use Database\Factories\LoginEventFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginEvent extends Model
{
    /** @use HasFactory<LoginEventFactory> */
    use HasFactory;
}
