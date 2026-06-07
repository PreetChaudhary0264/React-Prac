import {configureStore} from '@redux/toolkit'

const store = configureStore({
    reducer:{
        todo:todoReducer
    }
})