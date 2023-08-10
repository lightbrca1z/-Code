<?php $__env->startSection('title', 'イベント登録'); ?>
    <?php if(session()->has('success')): ?>
        <p><?php echo e(session('success')); ?></p>
    <?php endif; ?>
<?php $__env->startSection('content'); ?>
<form action="<?php echo e(route('events.store')); ?>" method="POST">
    <?php echo csrf_field(); ?>
    <label>イベント名:<input type="text" name="title"></label>
    <button type="submit">登録</button>    
</form>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/events/index.blade.php ENDPATH**/ ?>