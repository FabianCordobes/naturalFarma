import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { hideErrorAlert, hideSuccessAlert } from '../../redux/actions/searchActions';

export default function Alerts({ typeSeverity, title, description }) {
	const dispatch = useDispatch();
	const showSuccessAlert = useSelector((state) => state.search.showSuccessAlert);
   const showErrorAlert = useSelector((state) => state.search.showErrorAlert);

	React.useEffect(() => {
		if (showSuccessAlert) {
			const timeout = setTimeout(() => {
				dispatch(hideSuccessAlert());
			}, 5000); // 5000 milisegundos (5 segundos)

			return () => {
				clearTimeout(timeout); // Limpia el temporizador si el componente se desmonta antes de que se cumplan los 5 segundos.
			};
		}
	}, [showSuccessAlert, dispatch]);

   React.useEffect(() => {
      if (showErrorAlert) {
        const timeout = setTimeout(() => {
          dispatch(hideErrorAlert());
        }, 5000); // 5000 milisegundos (5 segundos)
  
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [showErrorAlert, dispatch]);

	return (
		<div style={{position: 'absolute', zIndex: '99'}}>
			<Stack
				sx={{ width: '100%' }}
				spacing={2}>
				<Alert severity={typeSeverity}>
					<AlertTitle>{title}</AlertTitle>
					{description}
				</Alert>
				{/* <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert> */}
			</Stack>
		</div>
	);
}
