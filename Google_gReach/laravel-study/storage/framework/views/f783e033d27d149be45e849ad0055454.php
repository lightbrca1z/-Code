<?php $__env->startSection('title', '世界の時間'); ?>
<?php $__env->startSection('content'); ?>
    <dl>
        <?php $__currentLoopData = $times; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $city => $time): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <dt><?php echo e($city); ?></dt>
            <dd><?php echo e($time); ?></dd>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </dl>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/world-time.blade.php ENDPATH**/ ?>