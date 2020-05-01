<script>
    import Transition from 'svelte-class-transition';

    let toggle = false;
</script>

<div class="
    space-y-6
">
    <a href="https://github.com/gawlk/svelte-class-transition-examples/blob/master/src/components/ExampleTransitionsWithMainToggle.svelte">
        <h2 class="
            ml-4
            text-2xl
            text-gray-900
            hover:text-gray-700
            dark:text-gray-50
            dark:hover:text-gray-200
        ">
            Main toggle with child transitions
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
                    <Transition
                        inTransition="transition ease-in-out duration-1000"
                        inState="opacity-0"
                        onState="opacity-100"
                    >
                        <span class="
                            p-2
                            rounded-lg
                            bg-pink-800
                        ">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10">
                            </svg>
                        </span>
                    </Transition>
                    <Transition
                        inTransition="transition ease-in-out duration-1000"
                        inState="opacity-0"
                        onState="opacity-100"
                    >
                        <p class="
                            flex-1
                            mx-3
                            font-medium
                            truncate
                        ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </p>
                    </Transition>
                    <Transition
                        inTransition="transition ease-in-out duration-1000"
                        inState="opacity-0"
                        onState="opacity-100"
                    >
                        <div class="
                            p-2
                            rounded-md
                        ">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10">
                            </svg>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </Transition>
</div>
