<div class="flex flex-row justify-between m-4 py-4 px-10 border-4 border-white/40 rounded-2xl backdrop-blur-xl bg-white/20 shadow-2xl">
    <div class="flex flex-row items-center space-x-2">
        <h1 class="text-2xl font-bold">Navbar</h1>
    </div>
    <div class="space-x-4 my-auto">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
    </div>
</div>

<style>
    * {
        color: white;
    }

    a {
        @apply relative;
    }

    a::after {
        position: absolute;
        content: '';
        right: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background: white;
        border-radius: 8px;
        transition: all ease 0.45s;
    }

    a:hover::after {
        width: 100%;
    }
</style>