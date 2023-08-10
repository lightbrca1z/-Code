<?php $__env->startSection('title', 'ログイン'); ?>
<?php $__env->startSection('content'); ?>
    <form action="<?php echo e(route('login')); ?>" method="POST">
        <?php echo csrf_field(); ?>
        <div><label>メールアドレス: <input type="email" name="email"></label></div>
        <div><label>パスワード: <input type="password" name="password"></label></div>
        <button type="submit">ログイン</button>
    </form>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/login.blade.php ENDPATH**/ ?>