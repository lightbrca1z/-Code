<?php $__env->startSection('title', 'おみくじ'); ?>
<?php $__env->startSection('content'); ?>
    <p>今日のあなたの運勢は...『<?php echo e($result); ?>』です</p>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/omikuji.blade.php ENDPATH**/ ?>