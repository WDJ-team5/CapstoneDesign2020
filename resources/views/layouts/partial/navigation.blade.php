<nav>
  <div>

    <div>
      <!-- Branding Logo -->
      <a href="{{ url('/') }}">{{ config('app.name', 'Laravel') }}</a>
    </div>
    
    <div>
      <!-- Authentication Links -->
      @if (Auth::guest())
        <a href="{{ url('/login') }}">Login</a>
        <a href="{{ url('/register') }}">Register</a>
      @else
        <a href="#">{{ Auth::user()->name }} <span class="caret"></span></a>
        <a href="{{ url('/logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>

        <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
          {{ csrf_field() }}
        </form>
      @endif
    </div>

  </div>
</nav>