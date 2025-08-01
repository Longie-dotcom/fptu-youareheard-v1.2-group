import { useEffect, useState } from "react";
import axios from "axios";

function useLoadAppointments({ user, setError, setLoading, reload }) {
    const [appointments, setAppointments] = useState(null);
    
    const serverApi = process.env.REACT_APP_SERVER_API;
    const appointmentControllerApi = process.env.REACT_APP_APPOINTMENT_CONTROLLER_API;

    const getAllAppointments = async () => {
        if (!user){
            return;
        }

        setLoading(true);
        await axios.get(
            `${serverApi}${appointmentControllerApi}/patient/${user?.UserId}`
        )
            .then((response) => {
                setAppointments(response.data);
            }).catch((error) => {
                setError(error.response?.data?.message);
            }).finally(() => {
                setLoading(false);
            })
    };

    useEffect(() => {
        getAllAppointments();
    }, [user, reload])

    return ({
        appointments
    })
}

export default useLoadAppointments;