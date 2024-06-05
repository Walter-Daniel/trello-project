'use server'

export const getList = async(id:string) => {
    try {
        await fetch(`http://localhost:3000/api/list/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
        
    } catch (error) {
        return {
            message: "Database Error"
        }
    }
}