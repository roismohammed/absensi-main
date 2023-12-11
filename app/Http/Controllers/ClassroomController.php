<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClassroomRequest;
use App\Http\Resources\ClassroomCollection;
use App\Http\Resources\ClassroomResource;
use App\Models\Classroom;
use Inertia\Inertia;
use Mockery\Exception;

class ClassroomController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::orderBy('name')->paginate(15);

        return Inertia::render('Admin/Classroom/Index', [
            'classrooms' => new ClassroomCollection($classrooms)
        ]);
    }

    public function store(ClassroomRequest $request)
    {
        return new ClassroomResource(Classroom::create($request->validated()));
    }

    public function show(Classroom $classroom)
    {
        return new ClassroomResource($classroom);
    }

    public function update(ClassroomRequest $request, Classroom $classroom)
    {
        $classroom->update($request->validated());

        return new ClassroomResource($classroom);
    }

    public function destroy(Classroom $classroom)
    {
        try {
            $classroom->delete();
            return redirect()->back();
        }catch (Exception $exception){
            return redirect()->back()->withErrors([
                'server' => 'Kesalahan dalam menghapus data'
            ]);
        }
    }
}
