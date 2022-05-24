import Clock from 'react-live-clock';

function LiveClock(){
    return(
        <div>
            <Clock format={'HH:mm:ss'} ticking={true}/>
        </div>
    )
}