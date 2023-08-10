<?php $__env->startSection('title', 'カリキュラムについて'); ?>
<?php $__env->startSection('content'); ?>
    <section>
        <h3>準備</h3>
        <ul>
            <li>環境構築(sail)</li>
            <li>データベース(phpMyAdmin)</li>
        </ul>
    </section>

    <section>
        <h3>ページ表示</h3>
        <ul>
            <li>ルーティング</li>
            <li>ビューファイル</li>
            <li>コントローラ</li>
        </ul>
    </section>

    <section>
        <h3>フォームとリクエスト</h3>
        <ul>
            <li>フォームとリクエスト</li>
            <li>CSRF</li>
            <li>REST</li>
            <li>バリデーション</li>
            <li>フォームリクエスト</li>
        </ul>
    </section>

    <section>
        <h3>データベース</h3>
        <ul>
            <li>モデル</li>
            <li>クエリビルダー</li>
            <li>スコープ</li>
            <li>正規化とリレーション</li>
        </ul>
    </section>

    <section>
        <h3>認証</h3>
        <ul>
            <li>ログイン</li>
            <li>リダイレクト</li>
        </ul>
    </section>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/curriculum.blade.php ENDPATH**/ ?>