import {writable} from 'svelte/store'
import {browser} from "$app/environment";

let _data = browser ? localStorage.getItem('data') : null
export const dataStore = writable(_data ? JSON.parse(_data) : {})

if (browser) {
    dataStore.subscribe(value => {
        if (value) localStorage.setItem('data', JSON.stringify(value))
        else localStorage.removeItem('data')
    })
}
