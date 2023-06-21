<!-- resources/views/posts/edit.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>掲示板アプリ - 編集</title>
</head>
<body>
    <h1>掲示板アプリ - 編集</h1>

    <form method="post" action="/posts/{{ $post->id }}">
        @csrf
        @method('PUT')

        <label for="title">タイトル:</label>
        <input type="text" name="title" id="title" value="{{ $post->title }}" required>

        <label for="content">内容:</label>
        <textarea name="content" id="content" required>{{ $post->content }}</textarea>

        <button type="submit">更新</button>
    </form>
</body>
</html>
