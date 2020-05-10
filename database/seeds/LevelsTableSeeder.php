<?php

use Illuminate\Database\Seeder;

class LevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Level::create([
            'name' => 'C',
        ]);

        App\Level::create([
            'name' => 'B',
        ]);

        App\Level::create([
            'name' => 'A',
        ]);
    }
}
