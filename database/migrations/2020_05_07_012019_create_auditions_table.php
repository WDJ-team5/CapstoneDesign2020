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
            $table->date('end_date');//오디션 마감일
            $table->string('image');//이미지
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
