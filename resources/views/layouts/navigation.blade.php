<!--Navigation-->
<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
        <a class="navbar-brand" href="/">
            {{ config('app.name', 'Laravel') }}
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav mr-auto">
                <!-- menu -->
				<li class="nav-item">
                    <a class="nav-link" href="{{ route('class.index') }}">댄스 강좌</a>
                </li>
				<li class="nav-item">
                    <a class="nav-link" href="{{ route('contest.index') }}">댄스 경연</a>
                </li>
				<li class="nav-item">
                    <a class="nav-link" href="{{ route('advice.index') }}">피드백</a>
                </li>
				<li class="nav-item">
                    <a class="nav-link" href="{{ route('enterprise.index') }}">기업연계</a>
                </li>
				<li class="nav-item">
                    <a class="nav-link" href="{{ route('myPage.index') }}">마이페이지</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
