<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeacherCollection;
use App\Models\Position;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mockery\Exception;

class TeacherController extends Controller
{
    public function index()
    {
        Teacher::$data[] = \Str::random(10);

        $teachers = Teacher::query()->with(['position'])->orderBy('name', 'asc')->paginate(10)->onEachSide(1);

        return Inertia::render('Admin/Teacher/Index', [
            'teachers' => new TeacherCollection($teachers)
        ]);
    }

    public function create()
    {
        $positions = Position::orderBy('name')->get();
        return Inertia::render('Admin/Teacher/Create',[
            'positions' => $positions
        ]);
    }

    public function store(Request $request)
    {
    }

    public function show(Teacher $teacher)
    {
    }

    public function edit(Teacher $teacher)
    {
    }

    public function update(Request $request, Teacher $teacher)
    {
    }

    public function destroy(Teacher $teacher)
    {
        try {
            if ($teacher){
                $teacher->delete();
                return redirect()->back();
            }else{
                return redirect()->back()->withErrors([
                    'not_found' => 'Data tidak ditemukan'
                ]);
            }
        }catch (Exception $exception){
            return redirect()->back()->withErrors([
                'server' => 'Kesalahan server'
            ]);
        }
    }
}
