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

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '인스타그램',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '카카오스토리',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '인스타그램',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '페이스북',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '페이스북',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '인스타그램',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '페이스북',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '인스타그램',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '인스타그램',
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가1호
            'sns' => '페이스북',
            'company_id' => 1,
        ]);
    }
}
