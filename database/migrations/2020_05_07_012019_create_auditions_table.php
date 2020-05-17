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
            $table->string('content')->nullable();//오디션 내용
            $table->date('end_date')->nullable();//오디션 마감일
            $table->string('aud_image')->nullable();//이미지
            $table->string('rank')->nullable();//제한랭크
            $table->string('video')->nullable();//영상과제
            $table->timestamps();
            $table->unsignedBigInteger('user_id');//회원번호(기업)

            $table->foreign('user_id')->references('id')->on('users');
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
