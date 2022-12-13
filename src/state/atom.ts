import { atom } from 'recoil'

export const nameList = atom<string[]>({
    key: 'namesList',
    default: []
})

export const erroState = atom<string>({
    key: '',
    default: ''
})