<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();//회원번호
            $table->string('email')->unique();//이메일
            $table->string('name');//회원이름
            $table->string('password');//비밀번호
            $table->rememberToken();//로그인유지여부
            $table->string('confirm_code', 60)->nullable();//확인 코드
            $table->boolean('activated')->default(0);//인증여부
            $table->string('profile_image')->nullable();//프로필사진
            $table->date('birthday');//생년월일
            $table->boolean('gender')->default(0);//성별
            $table->string('address');//주소
            $table->string('call_number');//연락처
            $table->text('introduction');//자기소개
            $table->unsignedBigInteger('rank_id')->default(1);//랭크번호
            $table->unsignedBigInteger('company_id')->nullable();//기업번호
            $table->unsignedBigInteger('expert_id')->nullable()->default(null);//전문가번호
            $table->timestamps();

            $table->foreign('rank_id')->references('id')->on('ranks');
            $table->foreign('company_id')->references('id')->on('companies');
            $table->foreign('expert_id')->references('id')->on('experts');
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
