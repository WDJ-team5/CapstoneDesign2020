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
            'company_name' => 'YG Entertainment',
            'business_number' => '28199210'
        ]);
        
        //2
        App\Company::create([
            'company_name' => 'SHOWHIP Crew',
            'business_number' => '39019281'
        ]);

        //3
        App\Company::create([
            'company_name' => 'Kboy Team',
            'business_number' => '39012281'
        ]);

        //4
        App\Company::create([
            'company_name' => 'Big Hit Entertainment',
            'business_number' => '39022281'
        ]);

        //5
        App\Company::create([
            'company_name' => 'DGBBOY Crew',
            'business_number' => '39022282'
        ]);

        //6
        App\Company::create([
            'company_name' => '風車回しTeam',
            'business_number' => '39022282'
        ]);

        //7
        App\Company::create([
            'company_name' => 'WEASG Waxing Crew',
            'business_number' => '39022283'
        ]);

        //8
        App\Company::create([
            'company_name' => 'KBS',
            'business_number' => '39022284'
        ]);

        //9
        App\Company::create([
            'company_name' => 'Waxing Association',
            'business_number' => '39022285'
        ]);

        //10
        App\Company::create([
            'company_name' => 'JYP',
            'business_number' => '39022286'
        ]);

        //11
        App\Company::create([
            'company_name' => 'YoungWaveCrew',
            'business_number' => '39022286'
        ]);

        //12
        App\Company::create([
            'company_name' => 'Busan Salsa Association',
            'business_number' => '39022287'
        ]);

        //13
        App\Company::create([
            'company_name' => 'Mnet',
            'business_number' => '39022288'
        ]);

        //14
        App\Company::create([
            'company_name' => 'Streetdance Association',
            'business_number' => '39022289'
        ]);

        //15
        App\Company::create([
            'company_name' => 'Jang Entertainment',
            'business_number' => '39022290'
        ]);
        
    }
}
