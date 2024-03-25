interface ImportMetaEnv {
    readonly VITE_GENERAL: string
    readonly VITE_AUTHORITY: string
    readonly VITE_GENERAL: string
    readonly VITE_LOGIN: string
    readonly VITE_ADMIN: string
    readonly VITE_USER_LOGIN: string
    readonly VITE_USER_ADMIN: string
    readonly VITE_WEB_BASE_URI: string
    readonly VITE_API_BASE_URI: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
