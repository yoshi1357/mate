<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'image' => 'path/to/image.jpg',
                'password' => Hash::make('password'),
                'password_digest' => Hash::make('password'),
                'content' => 'Some random text here',
                'age' => 30,
                'sex' => 1, // Assuming 1 for male, 2 for female, etc.
                'blood_type' => 1, // Assuming 1 for A, 2 for B, etc.
                'height' => 170,
                'body_shape' => 1, // Assuming 1 for slim, 2 for average, etc.
                'residence' => 13, // Assuming 13 for Tokyo, etc.
                'birth_place' => 27, // Assuming 27 for Osaka, etc.
                'holiday' => 2, // Assuming 2 for Saturday/Sunday, etc.
                'work' => 1, // Assuming 1 for full-time, etc.
                'admin' => false,
                'activated' => true,
                'activation_digest' => Str::random(10),
                'activated_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add 9 more entries with unique data
            // ...
        ]);
    }
}
