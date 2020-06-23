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
            flex
            items-center
            justify-center
            dark:text-gray-50
            dark:hover:text-gray-200
        ">
            <svg class="h-6 w-6 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
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
