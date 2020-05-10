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
            'name' => 'genre_name_1',
        ]);
        App\Genre::create([
            'name' => 'genre_name_2',
        ]);
        App\Genre::create([
            'name' => 'genre_name_3',
        ]);
        App\Genre::create([
            'name' => 'genre_name_4',
        ]);
        App\Genre::create([
            'name' => 'genre_name_5',
        ]);
    }
}
