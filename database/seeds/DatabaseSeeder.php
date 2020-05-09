<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if(config('database.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        }

        App\Rank::truncate();
        $this->call(RanksTableSeeder::class);

        App\Specialty::truncate();
        $this->call(SpecialtiesTableSeeder::class);

        App\Company::truncate();
        $this->call(CompaniesTableSeeder::class);

        App\Expert::truncate();
        $this->call(ExpertsTableSeeder::class);

        App\User::truncate();
        $this->call(UsersTableSeeder::class);

        if(config('database.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        }
    }
}
