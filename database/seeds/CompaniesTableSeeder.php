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
        App\Company::create([
            'company_name' => 'YJP',
            'business_number' => '28199210'
        ]);

        App\Company::create([
            'company_name' => '대성그룹',
            'business_number' => '39019281'
        ]);
    }
}
