import { useNavigate } from 'react-router-dom';

export default function Nopage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <>
            <h1>Error Page</h1>
            <button onClick={handleClick}>Press</button>
        </>
    );
}
