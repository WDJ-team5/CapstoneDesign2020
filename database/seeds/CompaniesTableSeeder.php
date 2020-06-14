<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //1
        App\Company::create([
            'company_name' => 'YG 엔터테인먼트',
            'business_number' => '28199210'
        ]);
        
        //2
        App\Company::create([
            'company_name' => 'SHOWHIP크루',
            'business_number' => '39019281'
        ]);

        //3
        App\Company::create([
            'company_name' => 'Kboy팀',
            'business_number' => '39012281'
        ]);

        //4
        App\Company::create([
            'company_name' => '빅히트엔터먼트',
            'business_number' => '39022281'
        ]);

        //5
        App\Company::create([
            'company_name' => 'DGBBOY크루',
            'business_number' => '39022282'
        ]);

        //6
        App\Company::create([
            'company_name' => '풍차돌리기 팀',
            'business_number' => '39022282'
        ]);

        //7
        App\Company::create([
            'company_name' => 'WEASG왁킹크루',
            'business_number' => '39022283'
        ]);

        //8
        App\Company::create([
            'company_name' => 'KBS',
            'business_number' => '39022284'
        ]);

        //9
        App\Company::create([
            'company_name' => '왁킹협회',
            'business_number' => '39022285'
        ]);

        //10
        App\Company::create([
            'company_name' => 'JYP',
            'business_number' => '39022286'
        ]);

        //11
        App\Company::create([
            'company_name' => 'YoungWave크루',
            'business_number' => '39022286'
        ]);

        //12
        App\Company::create([
            'company_name' => '부산광역시 살사협회',
            'business_number' => '39022287'
        ]);

        //13
        App\Company::create([
            'company_name' => 'Mnet',
            'business_number' => '39022288'
        ]);

        //14
        App\Company::create([
            'company_name' => '스트릿댄스협회',
            'business_number' => '39022289'
        ]);

        //15
        App\Company::create([
            'company_name' => '장엔터테인먼트',
            'business_number' => '39022290'
        ]);
        
    }
}
