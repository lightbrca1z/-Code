<!-- resources/views/posts/show.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>掲示板アプリ - 詳細</title>
</head>
<body>
    <h1>掲示板アプリ - 詳細</h1>

    <h2>{{ $post->title }}</h2>
    <p>{{ $post->content }}</p>
    <p>{{ $post->created_at }}</p>

    <form method="post" action="/posts/{{ $post->id }}">
        @csrf
        @method('DELETE')
        <button type="submit">削除</button>
    </form>
</body>
</html>
