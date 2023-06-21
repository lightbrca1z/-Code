<?php
// データベース接続情報
$host = 'localhost';
$dbname = 'todo_app';
$username = 'root';
$password = 'root';

// データベースに接続
$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    die('データベースに接続できませんでした。' . $e->getMessage());
}

// タスクの追加
if (isset($_POST['task'])) {
    $task = $_POST['task'];
    $stmt = $pdo->prepare("INSERT INTO tasks (task_name) VALUES (?)");
    $stmt->execute([$task]);
    header("Location: todo.php");
    exit();
}

// タスクの削除
if (isset($_GET['delete'])) {
    $taskId = $_GET['delete'];
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE task_id = ?");
    $stmt->execute([$taskId]);
    header("Location: todo.php");
    exit();
}

// タスクの取得
$stmt = $pdo->prepare("SELECT * FROM tasks");
$stmt->execute();
$tasks = $stmt->fetchAll();

// HTMLの表示
?>
<!DOCTYPE html>
<html>
<head>
    <title>Todoアプリ</title>
</head>
<body>
    <h1>Todoリスト</h1>

    <form action="todo.php" method="POST">
        <input type="text" name="task" placeholder="新しいタスクを入力してください" required>
        <button type="submit">追加</button>
    </form>

    <ul>
        <?php foreach ($tasks as $task): ?>
            <li>
                <?php echo htmlspecialchars($task['task_name']); ?>
                <a href="todo.php?delete=<?php echo $task['task_id']; ?>">削除</a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>