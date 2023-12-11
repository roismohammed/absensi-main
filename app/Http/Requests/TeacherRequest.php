<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'nip' => ['required'],
            'phone_number' => ['required'],
            'email' => ['required', 'email', 'max:254'],
            'address' => ['required'],
            'join_at' => ['required'],
            'status' => ['required'],
            'position_id' => ['required', 'integer'],
            'user_id' => ['required', 'integer'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
