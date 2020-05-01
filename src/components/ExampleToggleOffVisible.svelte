<script>
    import Transition from 'svelte-class-transition';

    let toggle = false;
</script>

<div class="
    space-y-6
">
    <a href="https://github.com/gawlk/svelte-class-transition-examples/blob/master/src/components/ExampleToggleOffVisible.svelte">
        <h2 class="
            ml-4
            text-2xl
            text-gray-900
            hover:text-gray-700
            dark:text-gray-50
            dark:hover:text-gray-200
        ">
            Transtion visible when off
        </h2>
    </a>
    <label class="
        ml-4
        inline-flex
        items-center
    ">
        <input
            bind:checked={toggle}
            type="checkbox"
            class="
            form-checkbox
            h-6
            w-6
            text-pink-600
            focus:shadow-outline-pink
            dark:focus:border-gray-600
            dark:bg-black
            dark:border-gray-800
        ">
        <span class="
            ml-3
            text-lg
        ">
            {toggle}
        </span>
    </label>
    <Transition
        {toggle}
        transitions="transition transform"
        inTransition="ease-out duration-1000"
        inState="opacity-0 -translate-x-16"
        onState="opacity-100 translate-x-0"
        outState="opacity-0 translate-x-16"
        outTransition="ease-in duration-1000"
        offVisible
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
