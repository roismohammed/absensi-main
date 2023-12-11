<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'nis' => ['required'],
            'email' => ['required', 'email', 'max:254', 'unique:users,email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
            'gender' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
