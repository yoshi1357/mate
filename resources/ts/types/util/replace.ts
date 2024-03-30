export type Replace<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? any : T[P];
}
