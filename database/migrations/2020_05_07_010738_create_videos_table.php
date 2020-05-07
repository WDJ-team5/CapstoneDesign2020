<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();//영상번호
            $table->string('title');//영상제목
            $table->text('content');//영상내용
            $table->string('video');//동영상
            $table->string('image');//썸네일이미지
            $table->timestamps();//등록일
            $table->unsignedBigInteger('genre_id');//장르번호
            $table->unsignedBigInteger('level_id');//난이도번호

            $table->foreign('genre_id')->references('id')->on('genres');
            $table->foreign('level_id')->references('id')->on('levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}