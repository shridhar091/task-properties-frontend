import axios from 'axios'

export const SET_PROPERTIES = "SET_PROPERTIES"
export const SET_SEARCH_PROPERTIES = "SET_SEARCH_PROPERTIES"
export const SET_SEARCH = "SET_SEARCH"

const setProperties = (properties)=>{
    return {
        type:SET_PROPERTIES,
        payload:properties
    }
}


export const startGetProperties = ()=>{
    return (dispatch)=>{
        (   
            async()=>{
                try {
                    const properties = await axios.get("http://localhost:3090/api/properties/all")
                    dispatch(setProperties(properties.data))
                } catch (error) {
                    alert(error.message)
                }
            }
        )()
    }

}

export const startGetSearchedProperties = (value)=>{
  
    return (dispatch)=>{
        (   
            async()=>{
                try {
                    const {data} = await axios.get(`http://localhost:3090/api/properties/search?search=${value}`)
                    dispatch(setProperties(data.items))
                } catch (error) {
                    alert(error.message)          
                }
            }
        )()
    }
}

export const setGetFilterPurchase = (value) =>{
    
    return (dispatch)=>{
        (   
            async()=>{
                try {
                    const {data} = await axios.get(`http://localhost:3090/api/properties/filterPurchase?filter=${value}`)
                    dispatch(setProperties(data)) 
                } catch (error) {
                    alert(error.message)          
                }
            }
        )()
    }
}


export const setGetFilterProperty= (value,value1) =>{
    
    return (dispatch)=>{
        (   
            async()=>{
                try {
                    const {data} = await axios.get(`http://localhost:3090/api/properties/filterCategory?filter1=${value1}&filter2=${value}`)
                    dispatch(setProperties(data))        
                } catch (error) {
                    alert(error.message)          
                }
            }
        )()
    }
}


export const startSortProperty = (method) => {

    return async (dispatch) => {
        try {
            const property = await axios.get(`http://localhost:3090/api/properties/sort?type=${method}`)
            dispatch(setProperties(property.data))
        } catch (error) {
           alert(error) 
        }
    }
}
