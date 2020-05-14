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
            'specialty_id' => 1,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가2호
            'sns' => '페이스북',
            'specialty_id' => 1,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가3호
            'sns' => '인스타그램',
            'specialty_id' => 1,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//idol 전문가4호
            'sns' => '카카오스토리',
            'specialty_id' => 1,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//poppin 전문가1호
            'sns' => '인스타그램',
            'specialty_id' => 2,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//poppin 전문가2호
            'sns' => '페이스북',
            'specialty_id' => 2,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//poppin 전문가3호
            'sns' => '페이스북',
            'specialty_id' => 2,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//poppin 전문가4호
            'sns' => '인스타그램',
            'specialty_id' => 2,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//B-boying 전문가1호
            'sns' => '페이스북',
            'specialty_id' => 3,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//B-boying 전문가2호
            'sns' => '인스타그램',
            'specialty_id' => 3,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//B-boying 전문가3호
            'sns' => '인스타그램',
            'specialty_id' => 3,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//B-boying 전문가4호
            'sns' => '페이스북',
            'specialty_id' => 3,
            'company_id' => 1,
        ]);

        App\Specialty::find(1)->experts()->create([//hiphop 전문가1호
            'sns' => '페이스북',
            'specialty_id' => 4,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//hiphop 전문가2호
            'sns' => '인스타그램',
            'specialty_id' => 4,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//hiphop 전문가3호
            'sns' => '인스타그램',
            'specialty_id' => 4,
            'company_id' => 2,
        ]);

        App\Specialty::find(1)->experts()->create([//hiphop 전문가4호
            'sns' => '페이스북',
            'specialty_id' => 4,
            'company_id' => 2,
        ]);
    }
}
