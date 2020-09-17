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
            'title' => 'TWICE TTで学ぶ講義。',
            'content' => 'TWICE TTで学ぶアイドルダンスの基礎講義です。',
            'video' => 'lecture_sample02',
            'image' => 'LectureImg/21.jpg',
            'genre_id' => 6,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'ワクキング入門者のためのワクキングダンスステップ基礎',
            'content' => 'ワクキングダンスのステップ基礎講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/19.jpg',
            'genre_id' => 5,
            'level_id' => 1,
        ]);

        App\Lecture::create([
            'title' => 'ダンサーMENSYと一緒に学ぶガールズヒップホップ高級',
            'content' => 'ガールズヒップホップの高級講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/09.jpg',
            'genre_id' => 4,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'EXO LOVESHOT振り付け講義',
            'content' => 'EXO LOVE SHOTの振り付け講義です。',
            'video' => '나중에 넣어',
            'video' => 'lecture_sample02',
            'image' => 'LectureImg/13.jpg',
            'genre_id' => 1,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'TWICE FANCYを踊りながら学ぶ基本講義',
            'content' => 'アイドルダンスの基礎講義です。',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/11.jpg',
            'genre_id' => 6,
            'level_id' => 1,
        ]);


        App\Lecture::create([
            'title' => 'BTS IDOLダンス基礎講義',
            'content' => 'アイドルダンスの基礎講義です。',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/01.jpg',
            'genre_id' => 1,
            'level_id' => 1,
        ]);

        App\Lecture::create([
            'title' => 'ヒップホップステップ中級',
            'content' => 'ヒップホップステップ中級講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/02.jpg',
            'genre_id' => 4,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'ビーボーイング風車回し',
            'content' => 'ビーボーイング風車回し講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/03.jpg',
            'genre_id' => 3,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'ワクキングダンスステップ高級',
            'content' => 'ワクキングダンスのステップ高級講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/04.jpg',
            'genre_id' => 5,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'リズムトレーニング1番目のバウンスを見ながら真似。',
            'content' => 'バウンスの練習方法が分からなければ、ただ真似してください。リズムに乗る3つの方法！',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/23.jpg',
            'genre_id' => 1,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'ポッピンヒョンジュンと一緒に学ぶポッピンダンス基礎ステップ講義',
            'content' => 'ポッピンダンスの基礎講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/07.jpg',
            'genre_id' => 2,
            'level_id' => 1,
        ]);

        
        

        App\Lecture::create([
            'title' => '男子アイドルダンス高級ステップ講義',
            'content' => '男子アイドルダンス高級ステップ講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/22.jpg',
            'genre_id' => 1,
            'level_id' => 3,
        ]);

        

        App\Lecture::create([
            'title' => 'Red Velvetダンスで学ぶ中級講義',
            'content' => 'アイドルダンス中級講義です。',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/12.jpg',
            'genre_id' => 6,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'ポッピンダンス関節曲げ講義',
            'content' => 'ポッピンダンス関節曲げ中級講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/14.jpg',
            'genre_id' => 2,
            'level_id' => 2,
        ]);

       

        App\Lecture::create([
            'title' => 'ビーボーイング基本器',
            'content' => 'ビーボーイング基礎講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/15.jpg',
            'genre_id' => 3,
            'level_id' => 1,
        ]);


        

        

        App\Lecture::create([
            'title' => 'ポッピンダンス高級講義',
            'content' => 'ポッピンダンス高級講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/16.jpg',
            'genre_id' => 2,
            'level_id' => 3,
        ]);




        App\Lecture::create([
            'title' => 'ヒップホップステップ基礎',
            'content' => 'ヒップホップステップの基礎講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/17.jpg',
            'genre_id' => 4,
            'level_id' => 1,
        ]);


        App\Lecture::create([
            'title' => 'ビーボーイング腰回し',
            'content' => 'ビーボーイング腰回し講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/18.jpg',
            'genre_id' => 3,
            'level_id' => 3,
        ]);



        
        

        App\Lecture::create([
            'title' => 'ワクキングダンスステップ中級',
            'content' => 'ワクキングダンスステップ中級講義です。',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/20.jpg',
            'genre_id' => 5,
            'level_id' => 2,
        ]);

        

    }
}
