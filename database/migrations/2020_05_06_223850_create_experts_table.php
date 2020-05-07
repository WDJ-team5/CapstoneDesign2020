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
            $table->string('agency');//소속사
            $table->boolean('feedback_status');//피드백on/off
            $table->string('sns');//sns
            $table->timestamps();
            $table->unsignedBigInteger('specialties_id');//분야번호

            $table->foreign('specialties_id')->references('id')->on('specialties');
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
