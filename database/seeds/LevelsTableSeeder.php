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
            'name' => 'level_name_1',
        ]);
        App\Level::create([
            'name' => 'level_name_2',
        ]);
        App\Level::create([
            'name' => 'level_name_3',
        ]);
        App\Level::create([
            'name' => 'level_name_4',
        ]);
        App\Level::create([
            'name' => 'level_name_5',
        ]);
    }
}
