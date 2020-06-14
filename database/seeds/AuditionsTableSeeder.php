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
            'title' => 'YG엔터테인먼트 아이돌댄서 모집중',
            'content' => 'YG엔터테인먼트에서 전속 힙합댄서 모집중입니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/05.jpg',
            'rank' => 'B',
            'object' => '아이돌댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 19,
        ]);


        App\Audition::create([
            'title' => '장성현 크루 전속 아이돌댄서 모집중',
            'content' => '세계적인 아이돌 장성현과 함께하실 아이돌 댄서를 모집중입니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'B',
            'object' => '아이돌댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 33,
        ]);
        
        App\Audition::create([
            'title' => 'JYP엔터테인먼트 전속 백댄서 모집중',
            'content' => 'JYP엔터테인먼트와 함께하실 전속 백댄서를 모집하고 있습니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'B',
            'object' => '아이돌댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 28,
        ]);

        

        App\Audition::create([
            'title' => '부산광역시 살사협회 보조 살사댄서 모집중',
            'content' => '부산광역시 살사협회에서 보조 살사댄서 모집하고 있습니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/11.jpg',
            'rank' => 'A',
            'object' => '살사댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 30,
        ]);

        App\Audition::create([
            'title' => '미스터트롯 트로트댄서 모집중',
            'content' => 'Mnet 미스터트롯에서 트로트댄서를 모집중입니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/10.jpg',
            'rank' => 'B',
            'object' => '트로트댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 31,
        ]);

        App\Audition::create([
            'title' => '제2회 스트릿댄스FESTIVAL 보조 스트릿댄서 모집 ',
            'content' => '제2회 스트릿댄스FESTIVAL 보조 스트릿댄서로 참여하실 분을 모집하고 있습니다.',
            'end_date' => '2020-05-23',
            'aud_image' => 'auditon_image/10.jpg',
            'rank' => 'B',
            'object' => '스트릿댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 32,
        ]);


        App\Audition::create([
            'title' => '풍차돌리기 크루 비보잉 댄서 모집중',
            'content' => 'audition_content_6',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/09.jpg',
            'rank' => 'B',
            'object' => '비보잉댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 24,
        ]);



        App\Audition::create([
            'title' => '대한 왁킹협회 전속왁킹댄서 모집중',
            'content' => '대한 왁킹댄스 협회에서 함께하실 전속 왁킹댄서를 모집중입니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/08.jpg',
            'rank' => 'B',
            'object' => '왁킹댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 27,
        ]);


        App\Audition::create([
            'title' => 'YoungWave크루 메인 힙합댄서 모집중',
            'content' => 'audition_content_6',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/07.jpg',
            'rank' => 'B',
            'object' => '힙합댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 29,
        ]);
        
        App\Audition::create([
            'title' => 'MDSL 팀 보조 비보잉 댄서 모집중',
            'content' => 'MDSL 팀과 함께하실 비보잉 팀 보조 비보잉 댄서 모집중',
            'end_date' => '2020-05-15',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'A',
            'object' => '비보잉댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 21,
        ]);

        App\Audition::create([
            'title' => 'WEASG왁킹크루 전속 왁킹댄서 모집중',
            'content' => 'audition_content_6',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/05.jpg',
            'rank' => 'B',
            'object' => '왁킹댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 25,
        ]);

        App\Audition::create([
            'title' => 'SHOWHIP크루 전속 힙합댄서 모집중',
            'content' => 'SHOWHIP크루와 함께하실 전속 힙합댄서 모집중입니다.',
            'end_date' => '2020-05-25',
            'aud_image' => 'auditon_image/53.jpg',
            'rank' => 'A',
            'object' => '힙합댄서',
            'video' => 'audition_sample01',
            'user_id' => 20,
        ]);

        App\Audition::create([
            'title' => 'KBS뮤직뱅크 백댄서 모집중',
            'content' => 'KBS뮤직뱅크에 참여하실 백댄서를 모집중입니다.',
            'end_date' => '2020-05-20',
            'aud_image' => 'auditon_image/03.jpg',
            'rank' => 'A',
            'object' => '아이돌댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 26,
        ]);

        App\Audition::create([
            'title' => 'DGBBOY크루 비보잉 댄서 모집중',
            'content' => 'DGBBOY크루에서 전속 비보잉 댄서를 모집중입니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/02.jpg',
            'rank' => 'B',
            'object' => '비보잉댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 23,
        ]);

        App\Audition::create([
            'title' => '방탄소년단 전속 백댄서 모집중',
            'content' => '세계적인 아이돌 방탄소년단과 함께하실 백댄서를 모집중입니다.',
            'end_date' => '2020-05-10',
            'aud_image' => 'auditon_image/01.jpg',
            'rank' => 'B',
            'object' => '아이돌댄서',
            'video' => '나중에 집어넣어',
            'user_id' => 22,
        ]);

    }
}
