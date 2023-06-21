<!-- resources/views/posts/create.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>新規投稿</title>
</head>
<body>
    <h1>新規投稿</h1>

    <form method="post" action="/posts">
        @csrf

        <label for="title">タイトル:</label>
        <input type="text" name="title" id="title" required>

        <label for="content">内容:</label>
        <textarea name="content" id="content" required></textarea>

        <button type="submit">投稿する</button>
    </form>
</body>
</html>
