<?php

namespace App\Policies;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeacherPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {

    }

    public function view(User $user, Teacher $teacher): bool
    {
    }

    public function create(User $user): bool
    {
    }

    public function update(User $user, Teacher $teacher): bool
    {
    }

    public function delete(User $user, Teacher $teacher): bool
    {
    }

    public function restore(User $user, Teacher $teacher): bool
    {
    }

    public function forceDelete(User $user, Teacher $teacher): bool
    {
    }
}
