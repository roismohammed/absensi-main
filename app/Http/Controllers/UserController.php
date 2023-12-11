<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use phpDocumentor\Reflection\Types\True_;

class UserController extends Controller
{
    public function index()
    {
        $user = User::orderBy('name', 'asc')->paginate(10)->onEachSide(1);

        return Inertia::render('Admin/User/Index',[
            'users' => new UserCollection($user),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }

    public function store(UserRequest $request)
    {
        try {
            User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password')),
                'roles' => 'superuser'
            ]);
            return redirect()->back();
        } catch (\Exception $exception) {
            report($exception);
            return redirect()->back()->withErrors([
                'create' => 'Kesalahan saat menyimpan data'
            ]);
        }
    }

    public function show(User $user)
    {
    }

    public function edit(User $user)
    {
    }

    public function update(Request $request, User $user)
    {
    }

    public function destroy(User $user)
    {
    }
}
