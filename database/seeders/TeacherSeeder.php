<?php

namespace Database\Seeders;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->count(65)->create()->each(function ($user){
            $teacher = Teacher::factory()->make();
            $user->teacher()->save($teacher);
        });
    }
}
