@extends('layouts.default')

@section('title','画像アップロード')
@section('content')
@if(session()->has('success'))
    <p>{{ session('success')}}</p>
@endif
<form action="{{route ('photos.store')}}" method="post" enctype="multipart/form-data">
    @csrf
    <label>画像：<input type="file" name="image" value="B"></label>
    <input type="hidden" name="a" value="A">
    <button type="submit">アップロード</button>
</form>
@endsection




