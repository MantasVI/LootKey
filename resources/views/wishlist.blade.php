<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Lootkey — Acquire new games!</title>
  <link rel="icon" type="image/svg+xml" href="{{ asset('images/lootkey-icon.svg') }}">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=favorite,menu,person,search,shopping_cart,stadia_controller" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen flex flex-col bg-[#3d0fba] text-white">

  <!-- HEADER -->


  <!-- NAV -->
  

  <main class="max-w-7xl w-full mx-auto px-6 pb-16">

    <h1 class="text-3xl font-bold my-8">Games, Gift Cards, Top-Ups &amp; More | Best Deals</h1>

    <!-- STORE: sidebar (240px) + products (rest) -->
    <div class="grid grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">

      <!-- SIDEBAR -->
      <aside class="bg-[#5a2be0]">
        <!-- PRODUCT TYPE -->
        <details open class="group border-b border-white/10 p-4">
          <summary class="flex justify-between items-center font-bold text-sm cursor-pointer list-none">
            Product type <i class="ti ti-chevron-up group-open:rotate-0 rotate-180 transition"></i>
          </summary>
          <div class="mt-3">
            <div class="flex items-center gap-2 border border-white/30 bg-[#2a0a85] px-2 py-1.5 mb-3">
              <input type="text" class="w-full bg-transparent text-sm outline-none">
              <i class="ti ti-search text-white/60"></i>
            </div>
            <!--will appear when a type of the favorite is favorited
            <div class="flex flex-col gap-2">
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">Game</span>
              <span class="text-xs text-white/50">103728</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">DLC</span>
              <span class="text-xs text-white/50">30597</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">eGift Cards</span>
              <span class="text-xs text-white/50">21532</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">Gaming eCards</span>
              <span class="text-xs text-white/50">5323</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">E-money Prepaid</span>
              <span class="text-xs text-white/50">3388</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">Game points</span>
              <span class="text-xs text-white/50">3352</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">Software</span>
              <span class="text-xs text-white/50">2649</span>
            </label>
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
              <input type="checkbox" class="size-4 accent-[#00FA9A]">
              <span class="grow">Subscription</span>
              <span class="text-xs text-white/50">2075</span>
            </label>
          </div>
          <button class="mt-3 text-xs font-bold text-[#00FA9A] flex items-center gap-1">3 more <i class="ti ti-chevron-down"></i></button>
          </div>-->
        </details>

        

      </aside>

      <!-- PRODUCTS -->
      <section>
        <div class="flex justify-between items-center mb-4 text-sm">
            <div class="flex flex-col gap-y-2"> 
                <button class="border-1 p-1 hover:text-yellow-500 hover:border-yellow-500 transition duration-300">Pranesimu nustatymai</button>
                <p>Results found: <span class="font-bold">(results amount)</span></p>
            </div>
           
          
          <label class="flex items-center gap-2 font-bold">
            <i class="ti ti-sort-descending"></i> Popularity:
            <select class="bg-transparent text-[#00FA9A] font-bold outline-none cursor-pointer">
              <option class="text-black">Most popular</option>
              <option class="text-black">Price: low to high</option>
              <option class="text-black">Price: high to low</option>
              <option class="text-black">Newest</option>
            </select>
          </label>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <a href="#" class="group flex flex-col bg-[#1f0a5c] border border-transparent hover:border-[#00FA9A] transition">
          <div class="relative aspect-[3/4] overflow-hidden bg-black">
            <img src="/images/game.jpg" alt="PUBG Mobile UC" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
            <span class="absolute bottom-7 left-1 flex items-center gap-1 bg-[#00FA9A] text-[#12062e] text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
              <i class="ti ti-coin"></i> CASHBACK
            </span>
            <span class="absolute bottom-0 left-0 right-0 bg-black/80 text-[11px] text-center py-1">PUBG Mobile</span>
          </div>
          <div class="flex flex-col gap-1 p-3 grow">
            <p class="text-xs font-bold leading-snug line-clamp-2">PUBG Mobile UC</p>
            <p class="text-[11px] font-bold text-[#00FA9A]">GLOBAL</p>
            <div class="mt-auto pt-3">
            <p class="text-xs text-white/50">From</p>
            <p class="text-lg font-bold">€7.47</p>
            <p class="text-xs font-bold text-[#7fff00]">11% Cashback</p>
            </div>
          </div>
        </a>

        </div>

        <!-- PAGINATION appears when 5x5 filled
        <nav class="flex justify-center items-center gap-1 mt-10 text-sm font-bold">
          <a href="#" class="size-8 grid place-items-center border border-white/30 text-white/40"><i class="ti ti-chevron-left"></i></a>
          <a href="#" class="size-8 grid place-items-center border border-[#00FA9A] text-[#00FA9A]">1</a>
          <a href="#" class="size-8 grid place-items-center hover:text-[#00FA9A]">2</a>
          <a href="#" class="size-8 grid place-items-center hover:text-[#00FA9A]">3</a>
          <a href="#" class="size-8 grid place-items-center hover:text-[#00FA9A]">4</a>
          <a href="#" class="size-8 grid place-items-center hover:text-[#00FA9A]">5</a>
          <span class="size-8 grid place-items-center">…</span>
          <a href="#" class="size-8 grid place-items-center hover:text-[#00FA9A]">50</a>
          <a href="#" class="size-8 grid place-items-center border border-white hover:border-[#00FA9A] hover:text-[#00FA9A]"><i class="ti ti-chevron-right"></i></a>
        </nav>-->
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-[#12062e] mt-auto">
    <div class="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between items-end gap-6">
      <div class="flex flex-col gap-3">
        <p class="font-semibold">Get personalized game deals</p>
        <form action="#" class="flex">
          <input type="email" name="email" placeholder="Enter your email address" class="w-72 border border-white bg-transparent px-4 py-2 placeholder-white/60 outline-none">
          <button class="border border-l-0 border-white px-4 py-2 font-semibold hover:bg-white hover:text-[#12062e]">Subscribe</button>
        </form>
      </div>
      <button class="flex items-center gap-2 border border-white px-4 py-2 font-semibold">
        🇬🇧 English <span class="text-white/40">|</span> EUR
      </button>
    </div>
  </footer>

</body>
</html>