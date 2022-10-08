import { useEffect, Dispatch } from 'react';
import { Modal } from 'react-bootstrap';
import { DrugInterface } from './Drug';

interface DrugDetailModalProps {
	drug: DrugInterface;
	showProp: boolean;
	setShowProp: Dispatch<boolean>;
}

const DrugDetailModal: React.FC<DrugDetailModalProps> = ({ drug, showProp, setShowProp }) => {
	const handleClose = () => setShowProp(false);

	useEffect(() => {}, [showProp]);
	console.log({ drug });
	return (
		<>
			<Modal show={showProp} onHide={handleClose} centered dialogClassName="search-modal-dialog" contentClassName="search-modal-content">
				<Modal.Header closeButton>
					<Modal.Title>상세보기</Modal.Title>
				</Modal.Header>
				<Modal.Body className="drug-detail-modal-body">
					<div className="name">
						<p className="left">약품</p>
						<div className="right">
							<img src={drug.itemImage} alt="drug-img" className="thumbnail" />
							<span>{drug.itemName}</span>
						</div>
					</div>
					<div className="warning">
						<p className="left">주의사항</p>
						<div className="right">{drug.atpnQesitm}</div>
					</div>
					<div className="effect">
						<p className="left">효능 . 복약안내</p>
						<div className="right">
							<h6>{drug.efcyQesitm}</h6>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default DrugDetailModal;
