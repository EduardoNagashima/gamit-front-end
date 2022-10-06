import { TbTrash } from 'react-icons/tb';
import { toast } from "react-toastify";
import api from "../../services/api.js";
import { useContext } from 'react';

import RefreshContext from '../../contexts/RefreshContext.jsx';

function deletePost(token, id, setCount, count) {
    if (window.confirm('Você tem certeza que quer apagar sua linda publicação?')) {
        const config = { headers: { "Authorization": `Bearer ${token}` } }
        api.delete(`/post/${id}`, config)
        .then(res => {
            toast.success('publicação excluida!');
            setCount(count + 1)
        })
        .catch(err => {
            toast.error(err);
            console.error(err);
        })
    }
}

export default function DeleteButton({token, id}){
    const {count, setCount} = useContext(RefreshContext);
    return(
        <TbTrash onClick={() => deletePost(token, id, setCount, count)} />
    )
}