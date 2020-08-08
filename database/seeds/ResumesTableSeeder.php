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
            'message' => '必ず合格したいです。',
            'video' => null,
            'audition_id' => 5,
        ]);

        App\User::find(3)->resumes()->create([
            'score' => 82.1,
            'message' => '僕を選んでください。',
            'result' => 2,
            'video' => null,
            'audition_id' => 12,
        ]);

        App\User::find(4)->resumes()->create([
            'score' => 97.7,
            'message' => 'いつも最善を尽くします。',
            'result' => 2,
            'video' => null,
            'audition_id' => 15,
        ]);

        App\User::find(5)->resumes()->create([
            'score' => 95.2,
            'message' => '最高になります。',
            'result' => 1,
            'video' => null,
            'audition_id' => 15,
        ]);

        App\User::find(6)->resumes()->create([
            'score' => 88.8,
            'message' => '私を選択することは後悔のない選択です。',
            'video' => null,
            'audition_id' => 15,
        ]);
    }
}
