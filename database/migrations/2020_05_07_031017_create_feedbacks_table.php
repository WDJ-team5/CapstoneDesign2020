<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feedbacks', function (Blueprint $table) {
            $table->id();//피드백 번호
            $table->string('title');//질문 제목
            $table->text('content');//질문 내용
            $table->string('video')->nullable();//첨부영상
            $table->text('answer')->nullable();//답변
            $table->date('answer_date');//답변일자
            $table->tinyInteger('max_recruitment');//평점
            $table->timestamps();//신청일자
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feedbacks');
    }
}
