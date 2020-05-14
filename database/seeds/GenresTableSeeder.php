<?php

use Illuminate\Database\Seeder;

class GenresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Genre::create([
            'name' => 'idol',
        ]);

        App\Genre::create([
            'name' => 'poppin',
        ]);

        App\Genre::create([
            'name' => 'B-boying',
        ]);

        App\Genre::create([
            'name' => 'hiphop',
        ]);
    }
}
