<?php

use Illuminate\Database\Seeder;

class AuditionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Audition::create([
            'title' => 'audition_title_1',
            'content' => 'audition_content_1',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/01.jpg',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 19,
        ]);
        App\Audition::create([
            'title' => 'audition_title_2',
            'content' => 'audition_content_2',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/02.jpg',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 19,
        ]);
        App\Audition::create([
            'title' => 'audition_title_3',
            'content' => 'audition_content_3',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/03.jpg',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 19,
        ]);
        App\Audition::create([
            'title' => 'audition_title_4',
            'content' => 'audition_content_4',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/04.jpg',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 20,
        ]);
        App\Audition::create([
            'title' => 'audition_title_5',
            'content' => 'audition_content_5',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/05.jpg',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 20,
        ]);

        App\Audition::create([
            'title' => 'audition_title_6',
            'content' => 'audition_content_6',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 20,
        ]);
    }
}
