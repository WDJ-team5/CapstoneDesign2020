<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuditionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auditions', function (Blueprint $table) {
            $table->id();//오디션번호
            $table->string('title');//오디션 제목
            $table->string('content');//오디션 내용
            $table->date('start_date');//오디션 시작일
            $table->date('end_date');//오디션 마감일
            $table->string('image');//이미지
            $table->tinyInteger('max_recruitment');//모집인원
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auditions');
    }
}
