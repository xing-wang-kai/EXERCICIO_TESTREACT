import { atom } from 'recoil'

export const nameList = atom<string[]>({
    key: 'namesList',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

export const resultNames = atom<Map<string, string>>({
    key: 'resultNames',
    default: new Map()
})