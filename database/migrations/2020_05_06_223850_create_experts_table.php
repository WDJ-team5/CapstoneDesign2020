<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpertsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experts', function (Blueprint $table) {
            $table->id();//전문가번호
            $table->string('sns');//sns
            $table->timestamps();
            $table->unsignedBigInteger('specialty_id');//전문분야번호
            $table->unsignedBigInteger('company_id');//소속기업번호

            $table->foreign('specialty_id')->references('id')->on('specialties');
            $table->foreign('company_id')->references('id')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('experts');
    }
}
