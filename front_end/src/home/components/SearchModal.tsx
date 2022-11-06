import { Modal } from 'react-bootstrap';
import { useEffect, Dispatch } from 'react';
import Drug, { DrugInterface } from './Drug';

interface SearchModalProps {
	showProp: boolean;
	setShowProp: Dispatch<boolean>;
	drugsData: DrugInterface[];
}

const SearchModal: React.FC<SearchModalProps> = ({ showProp, setShowProp, drugsData }) => {
	const handleClose = () => setShowProp(false);

	useEffect(() => {}, [showProp]);

	return (
		<>
			<Modal show={showProp} onHide={handleClose} centered dialogClassName="search-modal-dialog" contentClassName="search-modal-content">
				<Modal.Header closeButton>
					<Modal.Title>검색 결과</Modal.Title>
				</Modal.Header>
				<Modal.Body className="drug-modal-body">
					{drugsData.map((drug) => {
						return <Drug drug={drug}></Drug>;
					})}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default SearchModal;
