
import { Swipe, SwipeItem, Popup } from 'vant';
let plugins = [
    Swipe,SwipeItem,Popup
]
export default function getVant(app:any)
{
    plugins.forEach((item)=>{
        return app.use(item)
    })
}

