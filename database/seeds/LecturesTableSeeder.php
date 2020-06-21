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
            'title' => '리듬트레이닝 1탄 바운스 보면서 따라하기',
            'content' => '바운스 어떻게 연습해야 할지 모르겠으면 그냥 따라하세요 !!리듬을 타는 3가지 방법!!',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/23.jpg',
            'genre_id' => 6,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => '트와이스 TT로 배우는 강의',
            'content' => '트와이스 TT로 배우는 아이돌 댄스 기초강의입니다.',
            'video' => 'lecture_sample02',
            'image' => 'LectureImg/21.jpg',
            'genre_id' => 6,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => '왁킹 입문자를 위한 왁킹댄스 스텝기초',
            'content' => '왁킹댄스 스텝기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/19.jpg',
            'genre_id' => 5,
            'level_id' => 1,
        ]);

        App\Lecture::create([
            'title' => '댄서MENSY와 함께 배우는 걸스힙합 고급',
            'content' => '걸스힙합 고급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/09.jpg',
            'genre_id' => 4,
            'level_id' => 3,
        ]);

        App\Lecture::create([
            'title' => 'EXO LOVESHOT 안무강의',
            'content' => 'EXO LOVESHOT 안무강의입니다.',
            'video' => '나중에 넣어',
            'video' => 'lecture_sample02',
            'image' => 'LectureImg/13.jpg',
            'genre_id' => 1,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => '트와이스 FANCY를 따라추며 배우는 기본강의',
            'content' => '아이돌 댄스 기초강의입니다.',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/11.jpg',
            'genre_id' => 6,
            'level_id' => 1,
        ]);


        App\Lecture::create([
            'title' => '방탄소년단 IDOL 댄스 기초강의',
            'content' => '아이돌 댄스 기초강의입니다.',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/01.jpg',
            'genre_id' => 1,
            'level_id' => 1,
        ]);

        App\Lecture::create([
            'title' => '힙합스텝 중급',
            'content' => '힙합스텝 중급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/02.jpg',
            'genre_id' => 4,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => '비보잉 풍차돌리기',
            'content' => '비보잉 풍차돌리기 강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/03.jpg',
            'genre_id' => 3,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => '왁킹댄스 스텝고급',
            'content' => '왁킹댄스 스텝고급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/04.jpg',
            'genre_id' => 5,
            'level_id' => 3,
        ]);



        App\Lecture::create([
            'title' => '팝핀현준과 함께배우는 팝핀댄스 기초스텝강의',
            'content' => '팝핀 댄스 기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/07.jpg',
            'genre_id' => 2,
            'level_id' => 1,
        ]);

        
        

        App\Lecture::create([
            'title' => '남자아이돌 댄스 고급스텝강의',
            'content' => '남자아이돌 댄스 고급스텝강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/22.jpg',
            'genre_id' => 1,
            'level_id' => 3,
        ]);

        

        App\Lecture::create([
            'title' => '레드벨벳댄스로 배우는 중급강의',
            'content' => '아이돌 댄스 중급강의입니다.',
            'video' => 'lecture_sample01',
            'image' => 'LectureImg/12.jpg',
            'genre_id' => 6,
            'level_id' => 2,
        ]);

        App\Lecture::create([
            'title' => '팝핀 댄스 관절꺾기강의',
            'content' => '팝핀 댄스 관절꺾기 중급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/14.jpg',
            'genre_id' => 2,
            'level_id' => 2,
        ]);

       

        App\Lecture::create([
            'title' => '비보잉 기본기',
            'content' => '비보잉 기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/15.jpg',
            'genre_id' => 3,
            'level_id' => 1,
        ]);


        

        

        App\Lecture::create([
            'title' => '팝핀 댄스 고급강의',
            'content' => '팝핀 댄스 고급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/16.jpg',
            'genre_id' => 2,
            'level_id' => 3,
        ]);




        App\Lecture::create([
            'title' => '힙합스텝 기초',
            'content' => '힙합스텝 기초강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/17.jpg',
            'genre_id' => 4,
            'level_id' => 1,
        ]);


        App\Lecture::create([
            'title' => '비보잉 허리돌리기',
            'content' => '비보잉 허리돌리기강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/18.jpg',
            'genre_id' => 3,
            'level_id' => 3,
        ]);



        
        

        App\Lecture::create([
            'title' => '왁킹댄스 스텝중급',
            'content' => '왁킹댄스 스텝중급강의입니다.',
            'video' => '나중에 넣어',
            'image' => 'LectureImg/20.jpg',
            'genre_id' => 5,
            'level_id' => 2,
        ]);

        

    }
}
