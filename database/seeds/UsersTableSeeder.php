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
            'name' => '김몸치',
            'image' => null,
            'birthday' => '1999-06-10',
            'gender' => 0,  //0: 남, 1: 여
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 김몸치야. 연습생이얌',
            'class' => 1,   //1: 일반, 2: 전문가, 3:기업
            'rank_id'=> 1,  //1: C, 2: B, 3: A
            'company_id' => null,
            'expert_id' => null,
        ]);

        App\User::create([
            'userid' => 'sample_02',
            'password' => bcrypt('1234'),
            'name' => '조금잘춤',
            'image' => null,
            'birthday' => '1942-07-10',
            'gender' => 0,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 조 금잘춤야. 춤 조금 출줄 알아',
            'class' => 1,
            'rank_id'=> 2,
            'company_id' => null,
            'expert_id' => null,
        ]);

        App\User::create([
            'userid' => 'sample_03',
            'password' => bcrypt('1234'),
            'name' => '춤선생',
            'image' => null,
            'birthday' => '1996-08-10',
            'gender' => 1,
            'address' => '대구광역시',
            'call_number' => '010-0000-0000',
            'introduction' => '안녕 나는 춤선생야. 전문가야',
            'class' => 2,
            'rank_id'=> 3,
            'company_id' => null,
            'expert_id' => 1,
        ]);

        App\User::create([
            'userid' => 'sample_04',
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
            'expert_id' => 2,
        ]);
    }
}
