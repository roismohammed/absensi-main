<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Lesson */
class LessonResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'created_at' => Carbon::parse($this->created_at)->format('d-m-Y H:i'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d-m-Y H:i'),
        ];
    }
}
