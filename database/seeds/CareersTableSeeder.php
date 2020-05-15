<?php

use Illuminate\Database\Seeder;

class CareersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Expert::find(1)->careers()->create([
            'career_name' => 'KBO 우수상',
            'content' => 'KBO는 !@$!#$',
        ]);
        
        App\Expert::find(2)->careers()->create([
            'career_name' => 'KBO 신인상',
            'content' => 'KBO는 !@$!#$',
        ]);

        App\Expert::find(3)->careers()->create([
            'career_name' => 'KBO 스탭상',
            'content' => 'KBO는 !@$!#$',
        ]);

        App\Expert::find(4)->careers()->create([
            'career_name' => 'KBO 스윙상',
            'content' => 'KBO는 !@$!#$',
        ]);
    }
}
