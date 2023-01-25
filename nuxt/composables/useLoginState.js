export const useLoginState = () => useState('loginstate', () => {
    return { 
        name: null, 
        email: null,
        isAuth: false
    }
})