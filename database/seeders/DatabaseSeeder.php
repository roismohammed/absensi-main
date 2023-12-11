<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
         User::factory()->create([
             'name' => 'Abd. Asis',
             'email' => 'id.abdasis@gmail.com',
         ]);

         $this->call([
             PositionSeeder::class,
             TeacherSeeder::class,
             StudentSeeder::class,
             LessonSeeder::class,
             ClassroomSeeder::class
         ]);
    }
}
