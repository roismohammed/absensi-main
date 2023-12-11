<?php

namespace App\Http\Controllers;

use App\Http\Requests\LessonRequest;
use App\Http\Resources\LessonCollection;
use App\Http\Resources\LessonResource;
use App\Models\Lesson;
use Inertia\Inertia;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::orderBy('code')->paginate(15);
        return Inertia::render('Admin/Lesson/Index',[
            'lessons' => new LessonCollection($lessons)
        ]);
    }

    public function store(LessonRequest $request)
    {
        return new LessonResource(Lesson::create($request->validated()));
    }

    public function show(Lesson $lesson)
    {
        return new LessonResource($lesson);
    }

    public function update(LessonRequest $request, Lesson $lesson)
    {
        $lesson->update($request->validated());

        return new LessonResource($lesson);
    }

    public function destroy(Lesson $lesson)
    {
        $lesson->delete();

        return response()->json();
    }
}
