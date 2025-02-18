export const LS = {
    get(key:string) {
        try {
            const data: string | null = localStorage.getItem(key)
            if(typeof data === 'string') return JSON.parse(data)
        } catch (e){
            console.error(e)
        }
        return null
    },
    set(key:string, value: any) {
        try {
            const data = JSON.stringify(value)
            localStorage.setItem(key, data)
        } catch (e){
            console.error(e)
        }
    },
    rm(key:string) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    },
}