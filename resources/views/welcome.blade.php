<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
		<!-- 	안하면 post방법 사용해서 제출 못함	 -->
		<meta name="csrf-token" content="{{ csrf_token() }}">

        <title>MinaOdo</title>
		
		<!-- Script -->
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <!-- Fonts -->
		<link rel="dns-prefetch" href="//fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
		<link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">
		<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
		<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
		<link href="{{ asset('css/app.css') }}" rel="stylesheet">
		
		
		<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
		<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
		<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
		
		<style>
			.content{
				width: 1080px;
				margin: 0 auto;
			}
		</style>

		@yield('script')
		@yield('style')
    </head>
	@include('layouts.navigation')
    <body>
		<div class="content">
			<div id="app">
				<main class="py-4">
					<page-component></page-component>
					@yield('content')
				</main>
			</div>
		</div>
		<script src="{{ asset('js/app.js') }}"></script>
    </body>
	@include('layouts.footer')
</html>