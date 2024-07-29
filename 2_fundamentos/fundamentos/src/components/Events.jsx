const Events = () => {

    const handleMyEvents = () => {
        console.log("ativou")
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique Aqui!</button>
            </div>
        </div>
    );
}

export default Events;