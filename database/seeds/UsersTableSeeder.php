<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'userid' => 'sample_01@naver.com',
            'password' => bcrypt('1234'),
            'name' => '김상헌',
            'image' => null,
            'birthday' => '1999-06-10',
            'gender' => 0,  //0: 남, 1: 여
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕하세요. 삼성 라이온즈 응원단장 김상헌입니다.',
            'class' => 1,   //1: 일반, 2: 전문가, 3:기업
            'rank_id'=> 1,  //1: C, 2: B, 3: A
            'company_id' => null,
            'expert_id' => 1,
        ]);

        App\User::create([
            'userid' => 'sample_02',
            'password' => bcrypt('1234'),
            'name' => '구자욱',
            'image' => null,
            'birthday' => '1942-07-10',
            'gender' => 0,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '좌익수는 올 해 처음이지만, 열심히 하겠습니다.',
            'class' => 1,
            'rank_id'=> 2,
            'company_id' => null,
            'expert_id' => 2,
        ]);

        App\User::create([
            'userid' => 'sample_03',
            'password' => bcrypt('1234'),
            'name' => '김상수',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '대한민국 최고의 유격수입니당',
            'class' => 1,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 3,
        ]);

        App\User::create([
            'userid' => 'sample_04',
            'password' => bcrypt('1234'),
            'name' => '김헌곤',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '홈런 많이 치겠습니다',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 4,
        ]);

        App\User::create([
            'userid' => 'sample_05',
            'password' => bcrypt('1234'),
            'name' => '이준호',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '하나 둘 안녕하세요- 2PM입니다. 우리집으로 오세요 ',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 5,
        ]);

        App\User::create([
            'userid' => 'sample_06',
            'password' => bcrypt('1234'),
            'name' => '유강남',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '무적엘지 유강남 오오오오',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 6,
        ]);

        App\User::create([
            'userid' => 'sample_07',
            'password' => bcrypt('1234'),
            'name' => '김아이돌',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김아이돌야. 전문가고 대성그룹 소속이지!',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 7,
        ]);

        App\User::create([
            'userid' => 'sample_08',
            'password' => bcrypt('1234'),
            'name' => '김아이돌',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김아이돌야. 전문가고 대성그룹 소속이지!',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 8,
        ]);

        App\User::create([
            'userid' => 'sample_09',
            'password' => bcrypt('1234'),
            'name' => '김아이돌',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김아이돌야. 전문가고 대성그룹 소속이지!',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 9,
        ]);

        App\User::create([
            'userid' => 'sample_10',
            'password' => bcrypt('1234'),
            'name' => '김아이돌',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김아이돌야. 전문가고 대성그룹 소속이지!',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 10,
        ]);

        App\User::create([
            'userid' => 'sample_11',
            'password' => bcrypt('1234'),
            'name' => '김아이돌',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김아이돌야. 전문가고 대성그룹 소속이지!',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 11,
        ]);

        App\User::create([
            'userid' => 'sample_12',
            'password' => bcrypt('1234'),
            'name' => '김아이돌',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김아이돌야. 전문가고 대성그룹 소속이지!',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 12,
        ]);

    }
}
