<?php $__env->startSection('title','画像アップロード'); ?>
<?php $__env->startSection('content'); ?>
<?php if(session()->has('success')): ?>
    <p><?php echo e(session('success')); ?></p>
<?php endif; ?>
<form action="<?php echo e(route ('photos.store')); ?>" method="post" enctype="multipart/form-data">
    <?php echo csrf_field(); ?>
    <label>画像：<input type="file" name="image" value="B"></label>
    <input type="hidden" name="a" value="A">
    <button type="submit">アップロード</button>
</form>
<?php $__env->stopSection(); ?>





<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/photos/create.blade.php ENDPATH**/ ?>