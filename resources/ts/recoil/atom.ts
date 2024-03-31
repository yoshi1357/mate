import { atom } from 'recoil';

export const userIdState = atom<number | null>({
	key: 'userIdState',
	default: null,
});
