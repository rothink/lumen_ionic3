<?php
/**
 * Created by PhpStorm.
 * User: rothink
 * Date: 13/10/17
 * Time: 22:15
 */

namespace App\Http\Controllers\Api\V1;

use App\Restaurant;
use App\User;
use Laravel\Lumen\Routing\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function me(Request $request)
    {
        $user = User::where('id', $request->user()->id)
            ->with(['restaurant'])
            ->first();
        return response()->json($user);
    }

    public function changePassword(Request $request)
    {
        $rules = [
            'password' => 'required|min:6',
            'password_confirmation' => 'same:password'
        ];

        $this->validate($request, $rules);

        $user = User::where('id', $request->user()->id)
            ->first();

        $data = [
            'password' => $request->input('passoword')
        ];

        $user->update($data);

        return response()->json($user);
    }

    public function editProfile(Request $request)
    {
        $rules = [
            'name' => 'required|min:3',
            'email' => 'required|email'
        ];

        $this->validate($request, $rules);

        $user = User::where('id', $request->user()->id)
            ->first();

        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email')
        ];

        $user->update($data);

        return response()->json($user);
    }
}