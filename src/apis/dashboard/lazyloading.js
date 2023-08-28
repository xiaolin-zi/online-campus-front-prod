import { parttimeRequest } from '../../utils/request'

export const getLazyloading = (num) =>{
        return parttimeRequest({
            url:'/parttime/lazyLoading',
            method:'Get',
            params:{
                num:num,
            },
        })
    }
