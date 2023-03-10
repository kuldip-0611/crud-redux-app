import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading:false,
    users:[],
    editUsers:[],
    individualData:[],
    error:''
}

export const fetchUser = createAsyncThunk('user/fetchuser',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.data)

})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
       removerPerticularUser:(state,action)=>{
        state.users.map((item,index)=>{
            if(item.id === action.payload){
                state.users.splice(index,1)
            }
            else{
                console.log('false')
            }
        })
       },
       editperticularForm : (state,action)=>{
        state.users.map((item)=>{
            if(item.id === action.payload.user.id){
                console.log('match');
                
                item.name = action.payload.user.name;
                item.email = action.payload.user.email;
                item.phone = action.payload.user.phone;
                item.website = action.payload.user.website;
               
            }
            else{
                return null
            }
        })
        
       }


    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading = true
        });
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users =action.payload;
            state.editUsers = action.payload;
            state.error = '';
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false;
            state.users = [];
            state.error = action.error.message
        })
    }
})
export default userSlice.reducer 
export const {removerPerticularUser,editperticularForm} = userSlice.actions