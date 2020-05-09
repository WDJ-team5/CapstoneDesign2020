<?php

use Illuminate\Database\Seeder;

class RanksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Rank::create([
            'name' => 'C',
            'criterion' => 50,
        ]);

        App\Rank::create([
            'name' => 'B',
            'criterion' => 70,
        ]);

        App\Rank::create([
            'name' => 'A',
            'criterion' => 90,
        ]);
    }
}
