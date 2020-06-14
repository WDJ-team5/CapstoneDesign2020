<?php

use Illuminate\Database\Seeder;

class ResumesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::find(1)->resumes()->create([
            'score' => 80.5,
            'message' => '꼭 합격하고싶습니다.',
            'video' => null,
            'audition_id' => 5,
        ]);

        App\User::find(3)->resumes()->create([
            'score' => 82.1,
            'message' => '저를 뽑아주세요.',
            'result' => 2,
            'video' => null,
            'audition_id' => 12,
        ]);

        App\User::find(4)->resumes()->create([
            'score' => 97.7,
            'message' => '언제나 최선을 다하겠습니다.',
            'result' => 1,
            'video' => null,
            'audition_id' => 12,
        ]);

        App\User::find(5)->resumes()->create([
            'score' => 95.2,
            'message' => '최고가 되겠습니다.',
            'result' => 1,
            'video' => null,
            'audition_id' => 12,
        ]);

        App\User::find(6)->resumes()->create([
            'score' => 88.8,
            'message' => '저를 선택하는 것은 후회없는 선택 이십니다.',
            'video' => null,
            'audition_id' => 12,
        ]);
    }
}
