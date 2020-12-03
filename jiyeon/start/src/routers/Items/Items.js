import React, {useState, useEffect} from 'react';
import product from '../../jsons/items.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const nf = new Intl.NumberFormat();

const Items = ({history, match: {params: {type}}}) =>{
    const [list, setList] = useState(product);
    const location = useLocation(); //(== props를 사용하지 못하는 경우 사용할 수 있다)

    const transType = (val) =>{
        switch(val){
            case 'fish': return 1;
            case 'fruit': return 2;
            case 'vegetable': return 3;
            default: {
                history.push('/items/all');
            }
        }
    }

    useEffect(() =>{
        if(type === 'all'){
            setList(product);
            return;
        };

        const _type = transType(type);
        const newList = product.filter(item => item.type === _type);
        setList(newList);
    }, [type]); //타입이 바뀔 때만

    useEffect(() => {
        console.log(location);
        
    }, [location]);

    return (
        <div>
            <Nav>
                <Link to="/items/all">전체</Link>
                <Link to="/items/fish">수산물</Link>
                <Link to="/items/fruit">청과</Link>
                <Link to="/items/vegetable">야채</Link>
            </Nav>
            <List>
                {list.map(item => (
                    <Item key={`ITEM${item.id}`} color={item.type}>
                        <figure/>
                        <h1>{item.name}</h1>
                        <div>{nf.format(item.price)}원</div>
                    </Item>
                ))}
            </List>
        </div>
    );
}

export default Items;

const Nav = styled.nav`
    width: 1000px;
    margin: 0 auto;
    line-height: 50px;
    a{
        font-size: 25px;
        margin: 0 10px 0 0;
        text-decoration: none;
        color: #000;
        &:link, &:visited{
            color: #000;
        }
    }
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 1000px;
    margin: 50px auto;
`;

const Item = styled.li`
    border: 1px solid #ddd;

    &:hover {
        transform: scale(1.15);
    }
    figure{
            height: 120px;
            background: ${props => props.color === 1 ? '#0071B3' : props.color === 2 ? '#C9242B' : props.color === 3 ? '#198942' : '#ddd'};
        }
    h1, div {
        padding: 5px 10px;
    }   
`;