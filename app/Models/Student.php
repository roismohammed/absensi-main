<?php

namespace App\Models;

use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Lacodix\LaravelModelFilter\Traits\IsSearchable;

class Student extends Model
{
    use SoftDeletes, HasFactory, IsSearchable;

    protected array $searchable = [
        'name',
        'nis',
        'phone',
        'email',
    ];

    protected array $filters = [
        'gender'
    ];

    protected $fillable = [
        'name',
        'nis',
        'email',
        'phone',
        'address',
        'gender',
        'user_id',
    ];
}
