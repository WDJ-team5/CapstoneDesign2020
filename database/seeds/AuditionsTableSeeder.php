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
            'image' => 'audition_image_1',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 15,
        ]);
        App\Audition::create([
            'title' => 'audition_title_2',
            'content' => 'audition_content_2',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_2',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 15,
        ]);
        App\Audition::create([
            'title' => 'audition_title_3',
            'content' => 'audition_content_3',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_3',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 15,
        ]);
        App\Audition::create([
            'title' => 'audition_title_4',
            'content' => 'audition_content_4',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_4',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 15,
        ]);
        App\Audition::create([
            'title' => 'audition_title_5',
            'content' => 'audition_content_5',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_5',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 16,
        ]);

        App\Audition::create([
            'title' => 'audition_title_1',
            'content' => 'audition_content_1',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_1',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 16,
        ]);
        App\Audition::create([
            'title' => 'audition_title_2',
            'content' => 'audition_content_2',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_2',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 16,
        ]);
        App\Audition::create([
            'title' => 'audition_title_3',
            'content' => 'audition_content_3',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_3',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 16,
        ]);
        App\Audition::create([
            'title' => 'audition_title_4',
            'content' => 'audition_content_4',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_4',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 16,
        ]);
        App\Audition::create([
            'title' => 'audition_title_5',
            'content' => 'audition_content_5',
            'end_date' => '2020-05-10',
            'image' => 'audition_image_5',
            'rank' => 'A',
            'video' => '나중에 집어넣어',
            'user_id' => 16,
        ]);
    }
}
