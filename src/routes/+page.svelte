<script>
    import AsciiLogo from "$lib/components/AsciiLogo.svelte";

    import { Button } from "$lib/components/ui/button";
</script>

<AsciiLogo />

<h1 class="text-xl font-bold">Welcome to BasedKit</h1>

<ul class="flex flex-col md:flex-row items-center md:items-start gap-2">
    <li>Supabase(d)*</li>
    <li>✧</li>
    <li>SvelteKit</li>
    <li>✧</li>
    <li>ShadCN</li>
    <li>✧</li>
    <li>Typescript</li>
</ul>

<p>
    BasedKit is a free and open source boilerplate for building with Supabase
    and SvelteKit.
</p>

<Button href="https://github.com/coppinger/basedkit" target="_blank">
    Get started 🚀
</Button>

<h3 class="text-lg font-bold">Setup steps</h3>

<p>
    0. Create an `.env.local` file in the root and add your Supabase project URL
    & anon key
</p>
<p>
    1. Setup the Supabase CLI locally and login by following <a
        href="https://supabase.com/docs/guides/cli/getting-started"
        target="_blank"
        class="border-2 underline underline-offset-4">this guide</a
    >
</p>
<p>
    2. Update the `npm run gentypes` command in `packages.json` with the project
    id
</p>
<p>
    3. Follow the steps <a
        href="https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr?framework=sveltekit"
        target="_blank"
        class="border-2 underline underline-offset-4">here</a
    > to update the email templates for the SSR auth flow
</p>
<p>
    4. Uncomment the index.ts, +layouts.server.ts, +layout.ts & +page.server.ts
    files
</p>

<Button
    variant="primary"
    href="https://github.com/coppinger/basedkit"
    target="_blank">Contribute 💚</Button
>
<Button
    variant="outline"
    href="https://github.com/coppinger/basedkit/issues"
    target="_blank">Issues? Please report!</Button
>

<p class="italic">*based on what?</p>
