import axios from 'axios';
import { useEffect, Dispatch } from 'react';
import { Spinner } from 'react-bootstrap';
interface LoadingModalProps {
	showProp: boolean;
}

export function setAxiosLoadingInterceptor(setLoadingModal: Dispatch<boolean>) {
	axios.interceptors.request.use(function (config) {
		setLoadingModal(true);
		return config;
	});

	axios.interceptors.response.use(function (config) {
		setLoadingModal(false);
		return config;
	});
}

const LoadingModal: React.FC<LoadingModalProps> = ({ showProp }) => {
	useEffect(() => {}, [showProp]);
	if (showProp)
		return (
			<>
				<Spinner animation="border" role="status" style={{ position: 'absolute' }}>
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</>
		);
	return <></>;
};

export default LoadingModal;
