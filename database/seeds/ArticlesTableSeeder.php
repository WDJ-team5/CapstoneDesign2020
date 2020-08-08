<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Article::create([
            'title' => 'アドバイスをお願いします。',
            'content' => '僕が「BTS、小さなことのための詩」の練習中なんですが、 ハイライト部分でポイントが決められませんでした。 もしチップのようなものを教えていただけますか。',
            'answer' => 'スタッフに集中するよりも、上半身の動作にフォーカシングすると自然な動作になります。 お役に立てばいいですね。',
            'user_id' => 2,
            'expert_id' => 1,
        ]);
        // App\Article::create([
        //     'title' => 'article_title_2',
        //     'content' => 'article_content_2',
        // ]);
        // App\Article::create([
        //     'title' => 'article_title_3',
        //     'content' => 'article_content_3',
        // ]);
        // App\Article::create([
        //     'title' => 'article_title_4',
        //     'content' => 'article_content_4',
        // ]);
        // App\Article::create([
        //     'title' => 'article_title_5',
        //     'content' => 'article_content_5',
        // ]);
    }
}
