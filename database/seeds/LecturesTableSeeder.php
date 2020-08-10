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
            'title' => 'リズムトレーニング1番目のバウンスを見ながら真似。',
            'content' => 'バウンスの練習方法が分からなければ、ただ真似してください。リズムに乗る3つの方法！',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/23.jpg',
            'genre_id' => 6,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'TWICE TTで学ぶ講義。',
            'content' => '트와이스 TT로 배우는 아이돌 댄스 기초강의입니다.',
            'video' => 'lecture_sample02',
            'image' => 'LectureImg/21.jpg',
            'genre_id' => 6,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'ワクキング入門者のためのワクキングダンスステップ基礎',
            'content' => '왁킹댄스 스텝기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/19.jpg',
            'genre_id' => 5,
            'level_id' => 1,
        ]);

        App\Lecture::create([
            'title' => 'ダンサーMENSYと一緒に学ぶガールズヒップホップ高級',
            'content' => '걸스힙합 고급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/09.jpg',
            'genre_id' => 4,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'EXO LOVESHOT振り付け講義',
            'content' => 'EXO LOVESHOT 안무강의입니다.',
            'video' => '나중에 넣어',
            'video' => 'lecture_sample02',
            'image' => 'LectureImg/13.jpg',
            'genre_id' => 1,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'TWICE FANCYを踊りながら学ぶ基本講義',
            'content' => '아이돌 댄스 기초강의입니다.',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/11.jpg',
            'genre_id' => 6,
            'level_id' => 1,
        ]);


        App\Lecture::create([
            'title' => 'BTS IDOLダンス基礎講義',
            'content' => '아이돌 댄스 기초강의입니다.',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/01.jpg',
            'genre_id' => 1,
            'level_id' => 1,
        ]);

        App\Lecture::create([
            'title' => 'ヒップホップステップ中級',
            'content' => '힙합스텝 중급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/02.jpg',
            'genre_id' => 4,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'ビーボーイング風車回し',
            'content' => '비보잉 풍차돌리기 강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/03.jpg',
            'genre_id' => 3,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'ワクキングダンスステップ高級',
            'content' => '왁킹댄스 스텝고급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/04.jpg',
            'genre_id' => 5,
            'level_id' => 3,
        ]);



        App\Lecture::create([
            'title' => 'ポッピンヒョンジュンと一緒に学ぶポッピンダンス基礎ステップ講義',
            'content' => '팝핀 댄스 기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/07.jpg',
            'genre_id' => 2,
            'level_id' => 1,
        ]);

        
        

        App\Lecture::create([
            'title' => '男子アイドルダンス高級ステップ講義',
            'content' => '남자아이돌 댄스 고급스텝강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/22.jpg',
            'genre_id' => 1,
            'level_id' => 3,
        ]);

        

        App\Lecture::create([
            'title' => 'Red Velvetダンスで学ぶ中級講義',
            'content' => '아이돌 댄스 중급강의입니다.',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/12.jpg',
            'genre_id' => 6,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => 'ポッピンダンス関節曲げ講義',
            'content' => '팝핀 댄스 관절꺾기 중급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/14.jpg',
            'genre_id' => 2,
            'level_id' => 2,
        ]);

       

        App\Lecture::create([
            'title' => 'ビーボーイング基本器',
            'content' => '비보잉 기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/15.jpg',
            'genre_id' => 3,
            'level_id' => 1,
        ]);


        

        

        App\Lecture::create([
            'title' => 'ポッピンダンス高級講義',
            'content' => '팝핀 댄스 고급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/16.jpg',
            'genre_id' => 2,
            'level_id' => 3,
        ]);




        App\Lecture::create([
            'title' => 'ヒップホップステップ基礎',
            'content' => '힙합스텝 기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/17.jpg',
            'genre_id' => 4,
            'level_id' => 1,
        ]);


        App\Lecture::create([
            'title' => 'ビーボーイング腰回し',
            'content' => '비보잉 허리돌리기강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/18.jpg',
            'genre_id' => 3,
            'level_id' => 3,
        ]);



        
        

        App\Lecture::create([
            'title' => 'ワクキングダンスステップ中級',
            'content' => '왁킹댄스 스텝중급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/20.jpg',
            'genre_id' => 5,
            'level_id' => 2,
        ]);

        

    }
}
