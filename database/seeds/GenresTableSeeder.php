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
        //1
        App\Genre::create([
            'genre_name' => 'man_idol',
        ]);

        //2
        App\Genre::create([
            'genre_name' => 'poppin',
        ]);

        //3
        App\Genre::create([
            'genre_name' => 'b-boying',
        ]);

        //4
        App\Genre::create([
            'genre_name' => 'hiphop',
        ]);

        //5
        App\Genre::create([
            'genre_name' => 'waaking',
        ]);

        //6
        App\Genre::create([
            'genre_name' => 'girl_idol',
        ]);
    }
}
