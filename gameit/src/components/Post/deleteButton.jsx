import RefreshContext from '../../contexts/RefreshContext.jsx';
import { TbTrash } from 'react-icons/tb';
import api from "../../services/api.js";
import { toast } from "react-toastify";
import { useContext } from 'react';


function deletePost(token, id, setCount, count, setIsExcluded) {
    if (window.confirm('Você tem certeza que quer apagar sua linda publicação?')) {
        const config = { headers: { "Authorization": `Bearer ${token}` } }
        api.delete(`/post/${id}`, config)
        .then(async res => {
            toast.success('Publicação excluida!');
            if (setIsExcluded) setIsExcluded(true);
            setCount(count + 1);
        })
        .catch(err => {
            toast.error(err);
            console.error(err);
        })
    }
}

export default function DeleteButton({token, id, setIsExcluded}){
    const {count, setCount} = useContext(RefreshContext);
    return(
        <TbTrash onClick={() => deletePost(token, id, setCount, count, setIsExcluded)} />
    )
}