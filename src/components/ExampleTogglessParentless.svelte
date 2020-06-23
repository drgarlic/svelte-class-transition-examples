<script>
    import Transition from 'svelte-class-transition';
</script>

<div class="
    space-y-6
">
    <a href="https://github.com/gawlk/svelte-class-transition-examples/blob/master/src/components/ExampleTogglessParentless.svelte">
        <h2 class="
            ml-4
            text-2xl
            text-gray-900
            flex
            items-center
            hover:text-gray-700
            dark:text-gray-50
            dark:hover:text-gray-200
        ">
            <svg class="h-6 w-6 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            Toggleless and parentless transition
        </h2>
    </a>
    <Transition
        transitions="transition transform"
        inTransition="ease-out duration-1000"
        inState="opacity-0 -translate-x-16"
        onState="opacity-100 translate-x-0"
    >
        <div class="
            mx-2
        ">
            <div class="
                w-full
                p-3
                rounded-lg
                bg-pink-600
            ">
                <div class="
                    flex
                    items-center
                    text-white
                ">
                    <span class="
                        p-2
                        rounded-lg
                        bg-pink-800
                    ">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10">
                        </svg>
                    </span>
                    <p class="
                        flex-1
                        mx-3
                        font-medium
                        truncate
                    ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    </p>
                    <div class="
                        p-2
                        rounded-md
                    ">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10">
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</div>
