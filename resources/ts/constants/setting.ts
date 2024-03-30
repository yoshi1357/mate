// フロント認証・認可用のcookieに関する定数
// ==================================
export const AUTHORITY: string = 'AUTHORITY'
export const GENERAL: string = 'GENERAL'
export const LOGIN: string = 'LOGIN'
export const ADMIN: string = 'ADMIN'

// 認証用のcookieのmaxAge(秒)。サーバー側のセッションの有効期間と合わせる
export const MAX_AGE: number = 60 * 60 * 2;
// ==================================

// Userに関する定数
export const LOGIN_USER_NUMBER: number = 0
export const ADMIN_USER_NUMBER: number = 1

// 画像に関する定数
export const DISPLAY_IMAGE_URL: string = `${import.meta.env.VITE_WEB_BASE_URI}/storage/images`;
