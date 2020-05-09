<?php

use Illuminate\Database\Seeder;

class ExpertsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '페이스북',
            // 'company_id' => null,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '페이스북',
            'company_id' => 1,
        ]);
    }
}
