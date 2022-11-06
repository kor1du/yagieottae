import { useState } from 'react';
import NoImage from '../../common/images/No_image_available.svg';
import DrugDetailModal from './DrugDetailModal';

export interface DrugInterface {
	id?: string;
	entpName: string;
	itemName: string;
	itemSeq: string;
	efcyQesitm: string;
	useMethodQesitm: string;
	atpnWarnQesitm: string;
	atpnQesitm: string;
	intrcQesitm: string;
	seQesitm: string;
	depositMethodQesitm: string;
	itemImage: string;
}

interface DrugProps {
	drug: DrugInterface;
}

const Drug: React.FC<DrugProps> = ({ drug }) => {
	const [drugDetailModalShow, setDrugDetailModalShow] = useState<boolean>(false);
	return (
		<>
			<div
				className="drug"
				onClick={(e) => {
					e.preventDefault();
					setDrugDetailModalShow(true);
				}}
			>
				<img className="thumbnail" src={drug.itemImage === '' ? NoImage : drug.itemImage} alt="drug-img" />
				<h4 className="title">{drug.itemName}</h4>
			</div>
			<DrugDetailModal key={drug.itemSeq} drug={drug} showProp={drugDetailModalShow} setShowProp={setDrugDetailModalShow}></DrugDetailModal>
		</>
	);
};

export default Drug;
