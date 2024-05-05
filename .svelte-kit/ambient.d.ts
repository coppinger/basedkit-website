
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const forgit_cherry_pick: string;
	export const forgit_rebase: string;
	export const USER: string;
	export const FZF_PREVIEW: string;
	export const npm_config_user_agent: string;
	export const forgit_revert_commit: string;
	export const SSH_AGENT_PID: string;
	export const FZF_DEFAULT_OPTS: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const WT_PROFILE_ID: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const BROWSER: string;
	export const forgit_blame: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const forgit_clean: string;
	export const NVM_BIN: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const npm_package_json: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const SUPABASE_ACCESS_TOKEN: string;
	export const PAGER: string;
	export const forgit_log: string;
	export const forgit_fixup: string;
	export const HOMEBREW_PREFIX: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const forgit_checkout_branch: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const WSL_DISTRO_NAME: string;
	export const FORGIT_FZF_DEFAULT_OPTS: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const INFOPATH: string;
	export const LOGNAME: string;
	export const WSL_INTEROP: string;
	export const NAME: string;
	export const _: string;
	export const forgit_checkout_tag: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const forgit_branch_delete: string;
	export const USER_ZDOTDIR: string;
	export const TERM: string;
	export const forgit_diff: string;
	export const npm_config_cache: string;
	export const forgit_ignore: string;
	export const FZF_ALT_C_COMMAND: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const HOMEBREW_CELLAR: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const WT_SESSION: string;
	export const forgit_add: string;
	export const LANG: string;
	export const VSCODE_INJECTION: string;
	export const LS_COLORS: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const forgit_reset_head: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const ZDOTDIR: string;
	export const npm_config_global_prefix: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_command: string;
	export const forgit_stash_push: string;
	export const HOSTTYPE: string;
	export const forgit_checkout_commit: string;
	export const forgit_stash_show: string;
	export const MANPATH: string;
	export const WSLENV: string;
	export const forgit_checkout_file: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		forgit_cherry_pick: string;
		forgit_rebase: string;
		USER: string;
		FZF_PREVIEW: string;
		npm_config_user_agent: string;
		forgit_revert_commit: string;
		SSH_AGENT_PID: string;
		FZF_DEFAULT_OPTS: string;
		FZF_CTRL_T_COMMAND: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		WT_PROFILE_ID: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		BROWSER: string;
		forgit_blame: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		LESS: string;
		forgit_clean: string;
		NVM_BIN: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_IPC_HOOK_CLI: string;
		npm_package_json: string;
		ZSH: string;
		LSCOLORS: string;
		NVM_INC: string;
		SUPABASE_ACCESS_TOKEN: string;
		PAGER: string;
		forgit_log: string;
		forgit_fixup: string;
		HOMEBREW_PREFIX: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		forgit_checkout_branch: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		WSL_DISTRO_NAME: string;
		FORGIT_FZF_DEFAULT_OPTS: string;
		COLORTERM: string;
		COLOR: string;
		NVM_DIR: string;
		INFOPATH: string;
		LOGNAME: string;
		WSL_INTEROP: string;
		NAME: string;
		_: string;
		forgit_checkout_tag: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		forgit_branch_delete: string;
		USER_ZDOTDIR: string;
		TERM: string;
		forgit_diff: string;
		npm_config_cache: string;
		forgit_ignore: string;
		FZF_ALT_C_COMMAND: string;
		npm_config_node_gyp: string;
		PATH: string;
		HOMEBREW_CELLAR: string;
		NODE: string;
		npm_package_name: string;
		WT_SESSION: string;
		forgit_add: string;
		LANG: string;
		VSCODE_INJECTION: string;
		LS_COLORS: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		forgit_reset_head: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		FZF_DEFAULT_COMMAND: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		ZDOTDIR: string;
		npm_config_global_prefix: string;
		HOMEBREW_REPOSITORY: string;
		npm_command: string;
		forgit_stash_push: string;
		HOSTTYPE: string;
		forgit_checkout_commit: string;
		forgit_stash_show: string;
		MANPATH: string;
		WSLENV: string;
		forgit_checkout_file: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
