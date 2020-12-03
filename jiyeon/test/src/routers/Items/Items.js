import React, {useState, useEffect} from 'react';
import items from '../../jsons/items.json';

const Items = ({history, match : {params : {type}}}) => {
    const [list, setList] = useState(items);

    const switchType = (type) => {
        switch(type){
            case 'fish': return 1;
            case 'fruit': return 2;
            case 'vegetable': return 3;
            default: {
                history.push('/items/all');
            }
        }
    }

    useEffect(() => {
        if(type === 'all'){
            setList(list);
            return;
        }
        const _type = switchType(type);

        const newList = list.filter((item) => (item.type === _type));
        setList(newList);
    }, [type]);

    return (
        <div>
            <ul>
                {list.map(item => (
                    <li>
                        <h3>{item.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Items;