<script>
    import "../app.pcss";
</script>

<svelte:head>
    <title>BasedKit</title>
    <meta
        name="description"
        content="BasedKit is a free and open source boilerplate for building with Supabase (inc. Supabase CLI) and SvelteKit."
    />
    <link rel="icon" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div
    class="min-w-screen dark flex min-h-screen flex-col items-center justify-center gap-4 bg-black text-[#00ff00] p-2"
>
    <slot />
</div>
