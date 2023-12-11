<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentCollection;
use App\Models\Student;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $students = Student::latest()->paginate(15);
        return Inertia::render('Common/Dashboard', [
            'students' => new StudentCollection($students),
        ]);
    }
}
