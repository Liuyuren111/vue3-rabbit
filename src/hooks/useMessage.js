import MyMessage from "@/components/message/index";

export function useMessage() {
    const error = (text) =>{
        MyMessage({
            text: text ,
            type: "error"
        })
    }
    const success  = (text) =>{
        MyMessage({
            text: text ,
            type: "success"
        })
    }

    return {
        error,
        success
    }
}