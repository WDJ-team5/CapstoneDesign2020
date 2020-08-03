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
            'title' => 'YGエンターテインメント アイドルダンサー募集中',
            'content' => 'YGエンターテインメントでヒップホップダンサー募集中です。',
            'end_date' => '2020-10-05',
            'aud_image' => 'auditon_image/05.jpg',
            'rank' => 'B',
            'object' => 'アイドルダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 19,
        ]);


        App\Audition::create([
            'title' => 'チャン·ソンヒョンクルー専属アイドルダンサー募集中',
            'content' => '世界的なアイドル、チャン·ソンヒョンと共にする アイドルダンサーを探しています。',
            'end_date' => '2020-11-23',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'B',
            'object' => 'アイドルダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 33,
        ]);
        
        App\Audition::create([
            'title' => 'JYPエンターテインメントバックダンサー募集中',
            'content' => 'JYPエンターテインメントと共にするバックダンサーを募集しています。',
            'end_date' => '2020-12-25',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'B',
            'object' => 'アイドルダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 28,
        ]);

        

        App\Audition::create([
            'title' => 'Busan釜山サルサ協会補助サルサダンサー 募集中',
            'content' => 'Busan釜山サルサ協会で補助サルサダンサーを募集しています。',
            'end_date' => '2020-10-22',
            'aud_image' => 'auditon_image/11.jpg',
            'rank' => 'A',
            'object' => 'サルサダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 30,
        ]);

        App\Audition::create([
            'title' => '「Mr.トロット」トロットダンサー 募集中',
            'content' => 'Mnet「Mr.トロット」でトロットダンサーを募集中です.',
            'end_date' => '2020-9-29',
            'aud_image' => 'auditon_image/10.jpg',
            'rank' => 'B',
            'object' => 'トロットダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 31,
        ]);

        App\Audition::create([
            'title' => '第2回ストリートダンスFESTIVALアシスタントストリートダンサー募集',
            'content' => '第2回ストリートダンスFESTIVALアシスタントストリートダンサーで参加される方を募集しています。',
            'end_date' => '2020-11-23',
            'aud_image' => 'auditon_image/10.jpg',
            'rank' => 'B',
            'object' => 'ストリートダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 32,
        ]);


        App\Audition::create([
            'title' => '「風車回し！」のクルービーボーイングダンサー募集中',
            'content' => '風車回し！」のクルービーボーイングダンサー募集中です。',
            'end_date' => '2020-10-11',
            'aud_image' => 'auditon_image/09.jpg',
            'rank' => 'B',
            'object' => 'ビーボーイングダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 24,
        ]);



        App\Audition::create([
            'title' => 'ワクキング協会専属のワクキングダンサー募集中',
            'content' => 'ワクキングダンス協会から参加する専属のワクキングダンサーを募集中です。',
            'end_date' => '2020-09-13',
            'aud_image' => 'auditon_image/08.jpg',
            'rank' => 'B',
            'object' => 'ワクキングダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 27,
        ]);


        App\Audition::create([
            'title' => 'YoungWaveクルー·メインヒップホップダンサー募集中',
            'content' => 'YoungWaveクルー·メインヒップホップダンサー募集中です。',
            'end_date' => '2020-09-10',
            'aud_image' => 'auditon_image/07.jpg',
            'rank' => 'B',
            'object' => 'ヒップホップダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 29,
        ]);
        
        App\Audition::create([
            'title' => 'MDSLチームアシスタント·ビーボーイング·ダンサー募集中',
            'content' => 'MDSLチームと共にする B-Boyチームの補助B-Boyダンサー募集中！',
            'end_date' => '2020-10-15',
            'aud_image' => 'auditon_image/06.jpg',
            'rank' => 'A',
            'object' => 'ビーボーイングダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 21,
        ]);

        App\Audition::create([
            'title' => 'WEASGワクキングクルー専属ワクキングダンサー募集中',
            'content' => 'audition_content_6',
            'end_date' => '2020-09-05',
            'aud_image' => 'auditon_image/05.jpg',
            'rank' => 'B',
            'object' => 'ワクキングダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 25,
        ]);

        App\Audition::create([
            'title' => 'SHOWHIPクルー専属ヒップホップダンサー募集中',
            'content' => 'SHOWHIPクルーと共にする専属ヒップホップダンサー募集中です。',
            'end_date' => '2020-11-25',
            'aud_image' => 'auditon_image/53.jpg',
            'rank' => 'B',
            'object' => 'ヒップホップダンサー',
            'video' => 'audition_sample01',
            'user_id' => 20,
        ]);

        App\Audition::create([
            'title' => 'KBS Musicbankのバックダンサー募集中',
            'content' => 'KBS Musicbankに参加するバックダンサーを募集中です。',
            'end_date' => '2020-09-02',
            'aud_image' => 'auditon_image/03.jpg',
            'rank' => 'A',
            'object' => 'アイドルダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 26,
        ]);

        App\Audition::create([
            'title' => 'DGBBOYクルービー·ボーイング·ダンサー募集中',
            'content' => 'DGBBOYクルーで専属のビーボーイングダンサーを募集中です。',
            'end_date' => '2020-12-10',
            'aud_image' => 'auditon_image/02.jpg',
            'rank' => 'B',
            'object' => 'ビーボーイングダンサー',
            'video' => '나중에 집어넣어',
            'user_id' => 23,
        ]);

        App\Audition::create([
            'title' => 'BTSバックダンサー募集中',
            'content' => '世界的なアイドル、BTSと共にするバックダンサーを募集中探しています。',
            'end_date' => '2020-11-28',
            'aud_image' => 'auditon_image/01.jpg',
            'rank' => 'B',
            'object' => 'アイドルダンサー',
            'video' => 'audition_sample01',
            'user_id' => 20,
        ]);

    }
}
