<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Http\Resources\StudentCollection;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use App\Models\User;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $students = Student::orderBy('name')->searchByQueryString()->filter([
            'gender' => $request->get('filter')['gender'] ?? '',
            'created_at' => $request->get('filter')['created_at'] ?? '',
        ])->paginate(15);

        return Inertia::render('Admin/Student/Index', [
            'students' => new StudentCollection($students)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Student/Create');
    }

    public function store(StudentRequest $request)
    {

        try {

            $user = User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => \Hash::make($request->get('nis'))
            ]);

            $student = Student::create([
                'name' => $request->get('name'),
                'nis' => $request->get('nis'),
                'email' => $request->get('email'),
                'phone' => $request->get('phone'),
                'gender' => $request->get('gender'),
                'address' => $request->get('address'),
                'user_id' => $user->id,
            ]);

            return redirect()->back();

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors([
                'text' => 'Kesalahan saat menyimpan data',
            ]);
        }
    }

    public function show(Student $student)
    {
        return Inertia::render('Admin/Student/Show', [
            'student' => new StudentResource($student)
        ]);
    }

    public function update(StudentRequest $request, Student $student)
    {
        $student->update($request->validated());

        return new StudentResource($student);
    }

    public function destroy(Student $student)
    {
        try {
            $student->delete();
            return redirect()->back();
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors([
                'server' => 'Kesalahan dalam menghapus data'
            ]);
        }
    }
}
