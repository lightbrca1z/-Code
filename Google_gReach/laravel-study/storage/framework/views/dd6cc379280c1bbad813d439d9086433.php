<?php $__env->startSection('title', 'モンティ・ホール問題'); ?>
<?php $__env->startSection('content'); ?>
    <p>的中回数は...『<?php echo e($wonCount); ?> / <?php echo e(count($results)); ?>』(<?php echo e($wonCount / count($results) * 100); ?>%)です</p>
    <table>
        <tr>
            <th>#</th>
            <th>結果</th>
        </tr>
        <?php $__currentLoopData = $results; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td><?php echo e($loop->iteration); ?></td>
                <td><?php echo e($result ? '的中' : 'ハズレ'); ?></td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.default', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/monty-hall.blade.php ENDPATH**/ ?>