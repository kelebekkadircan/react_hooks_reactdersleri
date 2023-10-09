import React from 'react'
import { useMemo } from 'react'

const users = [
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
    { id: 'c', name: 'BARAN' },
    { id: 'd', name: 'HZ ALI' },
    { id: 'e', name: 'AHMOZ' },
    { id: 'f', name: 'MERTO' },
];

const UseMemo = () => {
    const [text, setText] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text);
    };

    const filteredUsers = useMemo(() =>
        users.filter((user) => {
            console.log("Filtered User Work");
            return user.name.toLowerCase().includes(search.toLowerCase());
        })
        , [search])


    return (
        <>
            <div>
                <input type="text" value={text} onChange={handleText} />
                <button type="button" onClick={handleSearch}>
                    Search
                </button>

                <List list={filteredUsers} />
            </div>

        </>

    )
}

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
};

export default UseMemo