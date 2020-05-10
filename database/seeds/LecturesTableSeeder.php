<?php

use Illuminate\Database\Seeder;

class LecturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Lecture::create([
            'title' => 'lecture_title_1',
            'content' => 'lecture_content_1',
            'video' => 'lecture_video_1',
            'image' => 'lecture_image_1',
        ]);
        App\Lecture::create([
            'title' => 'lecture_title_2',
            'content' => 'lecture_content_2',
            'video' => 'lecture_video_2',
            'image' => 'lecture_image_2',
        ]);
        App\Lecture::create([
            'title' => 'lecture_title_3',
            'content' => 'lecture_content_3',
            'video' => 'lecture_video_3',
            'image' => 'lecture_image_3',
        ]);
        App\Lecture::create([
            'title' => 'lecture_title_4',
            'content' => 'lecture_content_4',
            'video' => 'lecture_video_4',
            'image' => 'lecture_image_4',
        ]);
        App\Lecture::create([
            'title' => 'lecture_title_5',
            'content' => 'lecture_content_5',
            'video' => 'lecture_video_5',
            'image' => 'lecture_image_5',
        ]);
    }
}
