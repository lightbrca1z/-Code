<?php $__env->startSection('title','さぁ、はじめよう'); ?>
<?php $__env->startSection('content'); ?>
<!-- 
<p>
        Laravelの学習をはじめての方をサポートする学習サイトです<br>
        このサイトでは、Laravelの基礎だけでなく開発環境構築やデータベースに関しても解説します<br>
        これから学習を始めるににあたり、まずは下記の内容をご確認下さい<br>
        ~~~~ 以下省略 ~~~~
</p> -->

<form action="/query-strings" method="GET">
        <label>キーワード：<input type="text" name="keyword"></label>
        <button type="submit">送信</button>
</form>       

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/form.blade.php ENDPATH**/ ?>