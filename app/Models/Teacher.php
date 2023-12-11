<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teacher extends Model
{
    use SoftDeletes, HasFactory;

    public static $data = [];

    protected $fillable = [
        'name',
        'nip',
        'phone_number',
        'email',
        'address',
        'join_at',
        'status',
        'position_id',
        'user_id',
    ];

    public function position()
    {
        return $this->belongsTo(Position::class, 'position_id', 'id');
    }
}
