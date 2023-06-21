<!-- resources/views/posts/index.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>掲示板アプリ</title>
</head>
<body>
    <h1>掲示板アプリ</h1>

    <a href="/posts/create">新規投稿</a>
    <a href="/posts/show">掲示板アプリ - 詳細</a>
    <a href="/posts/edit">掲示板アプリ - 編集</a>

    <ul>
        @foreach ($posts as $post)
            <li>
                <h2>{{ $post->title }}</h2>
                <p>{{ $post->content }}</p>
                <p>{{ $post->created_at }}</p>
            </li>
        @endforeach
    </ul>
</body>
</html>
