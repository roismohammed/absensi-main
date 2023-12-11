<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->count(500)->create()->each(function ($user) {
            $teacher = Student::factory()->make();
            $user->teacher()->save($teacher);
        });
    }
}
