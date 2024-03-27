interface ImportMetaEnv {
    readonly VITE_WEB_BASE_URI: string
    readonly VITE_API_BASE_URI: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
