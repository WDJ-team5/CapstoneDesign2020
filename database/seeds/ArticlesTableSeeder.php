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
            'title' => '조언 부탁드립니다.',
            'content' => '제가 BTS 작은 것들을 위한 시 연습중인데요 하이라이트 부분에서 포인트를 못잡고 있습니다. 혹시 팁 같은거 알려주실수 있나요?',
            'answer' => '스탭에 집중하기보단 상체 동작에 포커싱하면 자연스러운 동작이 나오게 된답니다. 도움이 되셨으면 좋겠네요.',
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
