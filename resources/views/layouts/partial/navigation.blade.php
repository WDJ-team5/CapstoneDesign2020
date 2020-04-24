<nav>
  <div>

    <div>
      <!-- Branding Logo -->
      <a href="#">{{ config('app.name', 'Laravel') }}</a>
    </div>
    
    <div>
      <!-- Authentication Links -->
      @guest
        <a href="#">Login</a>
        <a href="#">Register</a>
      @else
        <a href="#">{{ Auth::user()->name }} <span class="caret"></span></a>
        <a href="#">Logout</a>

        <!-- <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
          {{ csrf_field() }}
        </form> -->
      @endguest
    </div>

  </div>
</nav>