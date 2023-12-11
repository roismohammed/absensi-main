<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

/** @see \App\Models\Teacher */
class TeacherCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($teacher){
                return [
                    'id' => $teacher->id,
                    'name' => $teacher->name,
                    'nip' => $teacher->nip,
                    'phone' => $teacher->phone_number,
                    'email' => $teacher->email,
                    'address' => $teacher->address,
                    'join_at' => $teacher->join_at,
                    'status' => $teacher->status,
                    'position_id' => $teacher->position_id,
                    'position_name' => $teacher->position->name,
                    'user_id' => $teacher->user_id,
                    'created_at' => Carbon::parse($teacher->created_at)->format('d-m-Y H:i'),
                    'updated_at' => $teacher->updated_at,
                ];
            }),
        ];
    }
}
