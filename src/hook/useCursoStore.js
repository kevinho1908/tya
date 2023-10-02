import SafePageApi from "../api/SafePageApi"


export const useAuthStore = () => { 

    const startSavingEvent = async( {course_id, descripción, fecha_de_creación, imagen , título} ) => {
        try {
            const {data} = await SafePageApi.post('/auth', { course_id, descripción, fecha_de_creación, imagen , título });
        } catch (error) {
            
        }
    }

}


    const onLogin = async(event) => {
        event.preventDefault();
        const {data} = await SafePageApi.post('/auth', { username , password });
        axios.post(baseURL, {
            username: username,
            password: password,
        })
        .then((response) => {
            const { data }= response;
            const { ok } = data;
            const { grupo } = data
            const { VAD } = data;
            if(ok === true){
                setPost(response.data); 
                console.log( VAD );
                console.log(ok) 
                console.log( 'valor de grupo = '+ grupo )                                                                               
                return (grupo === true) ? navigate(`/homePage/${username}` ,{
                    replace: true,                
                    value: grupo,
                    
                }) :navigate(`/principalPage/${username}` ,{
                    replace: true,                  
                })     
            }else{
                console.log(ok) 
                setPost(response.data);             
                alert('valores incorrectos')
            }            
            });                        
}
        