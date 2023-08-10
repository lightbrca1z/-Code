<?php $__env->startSection('title', 'ハイアンドロー(結果)'); ?>
<?php $__env->startSection('content'); ?>
    <p>ディーラのカードは...『<?php echo e($dealersNumber); ?>』</p>
    <p>あなたのカードは...『<?php echo e($playersNumber); ?>』</p>
    <?php if($isCorrect): ?>
        <p>おめでとうございます！ <br>あたりです！！</p>
    <?php else: ?>
        <p>ざんねん。。 <br>はずれです</p>
    <?php endif; ?>
    <a href="<?php echo e(route('hi-low')); ?>">もう一度挑戦する</a>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/hi-low/result.blade.php ENDPATH**/ ?>