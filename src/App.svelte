<script>
    import ExampleTogglessParentless from './components/ExampleTogglessParentless';
    import ExampleToggle from './components/ExampleToggle';
    import ExampleToggleOffVisible from './components/ExampleToggleOffVisible';
    import ExampleTransitionsWithMainToggle from './components/ExampleTransitionsWithMainToggle';
    import ExampleChildTransitions from './components/ExampleChildTransitions';
</script>

<div class="
    my-36
    mx-auto
    max-w-4xl
    w-full
">
    <a href="https://github.com/gawlk/svelte-class-transition">
        <h1 class="
            mb-20
            text-center
            text-4xl
            leading-9
            font-bold
            text-gray-900
            hover:text-gray-700
            dark:text-gray-50
            dark:hover:text-gray-200
        ">
            svelte-class-transition
        </h1>
    </a>

    <div class="
        space-y-16
    ">
        <ExampleTogglessParentless />
        <ExampleToggle />
        <ExampleToggleOffVisible />
        <ExampleTransitionsWithMainToggle />
        <ExampleChildTransitions />
    </div>
</div>
