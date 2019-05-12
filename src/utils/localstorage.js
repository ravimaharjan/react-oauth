
export const getAuthState = () => {
    try {
        const serializedAuthState = localStorage.getItem('authState')
        // console.log(serializedAuthState)
        if (serializedAuthState === null) {
            return undefined
        }
        const deserializedAuthState =  JSON.parse(serializedAuthState)
        console.log(deserializedAuthState)
        // console.log('token is', deserializedAuthState.token)
        
        return deserializedAuthState
    }
    catch(err) {
        console.log(err)
        return undefined;
    }
}

export const saveAuthState = (state) => {
    try {
        // console.log("setting the local storage", state.authReducer)
        if (state === null || state === undefined) {
            return;
        }
        localStorage.setItem('authState', JSON.stringify(state));

    }
    catch(err) {
        console.log(err)
    }
}