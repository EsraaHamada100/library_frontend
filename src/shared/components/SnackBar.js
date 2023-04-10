import { useState, useEffect } from 'react';

function Snackbar(props) {
    const [openSnackbar, setOpenSnackbar] = useState(props.open);

    useEffect(() => {
        setOpenSnackbar(props.open);
    }, [props.open]);

    return openSnackbar ? (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: openSnackbar ? 'translate(-50%, -50%)' : 'translate(-50%, -120%)',
                padding: '20px',
                backgroundColor: '#4caf50',
                color: '#fff',
                borderRadius: '5px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.5s ease-in-out',
                zIndex: 9999,
            }}
        >
            <div>{props.message}</div>
            <button
                style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#fff"
                }}
                onClick={() => {
                    setOpenSnackbar(false) ;
                    props.onClose();
                }}
            >
                &times;
            </button>
        </div>
    ) : (<></>);
}

export default Snackbar;